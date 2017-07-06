/*
 *  @license
 *    Copyright 2017 Brigham Young University
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 */
"use strict";

import fs from "fs-extra-p";
import path from "path";
import log from "winston";

const BUILD_INFERRED = 'inferred';

/**
 * 
 * @param {Library} lib 
 * @param {Version} version 
 * @param {string} contentPath 
 * @param {string} workPath 
 */
export default function buildLibrary(lib, version, contentPath, workPath) {

    let buildConfig = (function (cfg) {
        if (!cfg) return {
            dependencies: BUILD_INFERRED,
            build: BUILD_INFERRED
        };

        return {
            dependencies: cfg.dependencies || BUILD_INFERRED,
            build: cfg.build || BUILD_INFERRED
        }
    })(version.repoConfig.build);

    return analyze()
        .then((commands) => {
            let deps = commands.depsCommand ? runCommand(commands.depsCommand) : Promise.resolve();

            return deps.catch(err => {
                log.error(`Error installing dependencies for ${lib.id}@${ref.name}`, err);
            }).then(() => {
                return commands.buildCommand ? runCommand(commands.buildCommand) : Promise.resolve();
            }).catch(err => {
                log.error(`Error building ${lib.id}@${ref.name}`, err);
            });
    });

    function analyze() {
        return detectFiles()
            .then(files => {
                return Promise.all(
                    decideOnDependencyStrategy(files, buildConfig),
                    decideOnBuildStrategy(files, buildConfig)
                ).then(([depsCommand, buildCommand]) => {
                    return {
                        depsCommand, buildCommand
                    }
                })
            })

        function detectFiles() {
            return Promise.all(
                hasFile('package.json'),
                hasFile('gulpfile.js'),
                hasFile('bower.json'),
                hasFile('yarn.lock')
            ).then(
                ([hasPackageJson, hasGulpfile, hasBowerJson, hasYarnLock]) => {
                    return {
                        hasPackageJson, hasGulpfile, hasBowerJson, hasYarnLock
                    }
                }
                )
        }

        function decideOnDependencyStrategy(files, buildConfig) {
            if (buildConfig.dependencies !== BUILD_INFERRED) {
                return buildConfig.dependencies;
            }
            if (files.hasYarnLock) {
                return 'yarn';
            }
            if (files.hasPackageJson) {
                return 'npm install';
            }
            if (files.hasBowerJson) {
                return 'bower install';
            }
            return null;
        }

        function decideOnBuildStrategy(files, buildConfig) {
            if (buildConfig.build !== BUILD_INFERRED) {
                return buildConfig.build;
            }
            if (files.hasPackageJson) {
                return fs.readJson(path.join(workPath, 'package.json'))
                    .then(file => pack.scripts && pack.scripts.build)
                    .then(hasBuildScript => {
                        if (files.hasYarnLock) {
                            return 'yarn build';
                        } else {
                            return 'npm run build';
                        }
                    });
            }
            if (files.hasGulpfile) {
                return 'gulp';
            }
            return null;
        }
    }

    function hasFile(file) {
        return fs.pathExists(path.join(workpath, file));
    }

    function runCommand(command) {
        
    }


}

