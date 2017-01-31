/**
 * Created by ThatJoeMoore on 1/25/17.
 */
"use strict";

const log = require('winston');

const sources = [
    require('./github-source')
].reduce((map, src) => {
    map[src.id] = src;
    return map
}, {});

/**
 * @typedef {object} SourceFunctionsBase
 * @property {getSourceFunctions} getSourceFunctions
 * @property {parseSourceInfo} parseSourceInfo
 * @property {listRefs} listRefs
 * @property {downloadTarball} downloadTarball
 * @property {fetchRepoConfig} fetchRepoConfig
 */

/**
 * @typedef {object} SourceFunctions
 * @augments SourceFunctionsBase
 * @property {string} id
 */

/**
 * @type {SourceFunctionsBase}
 */
module.exports = {
    getSourceFunctions: getSourceFunctions,
    parseSourceInfo: parseSourceInfo,
    listRefs: listRefs,
    downloadTarball: downloadTarball,
    fetchRepoConfig: fetchRepoConfig
};

/**
 * @typedef {{type: string}} SourceInfo
 */

/**
 *
 * @param sourceType
 * @returns {SourceFunctions}
 */
function getSourceFunctions(sourceType) {
    return sources[sourceType];
}

/**
 * @private
 * @param {SourceInfo} sourceInfo
 * @returns {SourceFunctions}
 * @throws
 */
function _impl(sourceInfo) {
    let fns = getSourceFunctions(sourceInfo.type);
    if (!fns) throw new Error(`invalid source type: ${sourceInfo.type}`);
    return fns;
}

/**
 *
 * @param {string} sourceString
 * @returns {SourceInfo}
 */
function parseSourceInfo(sourceString) {
    let [source, value] = sourceString.split(':', 2);
    return getSourceFunctions(source).parseSourceInfo(value);
}

/**
 *
 * @param {SourceInfo} sourceInfo
 * @returns {Promise.<{tags: refInfo, branches: refInfo}>}
 */
function listRefs(sourceInfo) {
    return _impl(sourceInfo).listRefs(sourceInfo);
}

/**
 *
 * @param {SourceInfo} sourceInfo
 * @param {string} ref
 * @param {string} dest
 * @returns {Promise}
 */
function downloadTarball(sourceInfo, ref, dest) {
    return _impl(sourceInfo).downloadTarball(sourceInfo, ref, dest);
}

/**
 *
 * @param {SourceInfo} sourceInfo
 * @param {string} ref
 * @returns {Promise.<?RepoConfig>}
 */
function fetchRepoConfig(sourceInfo, ref) {
    return _impl(sourceInfo).fetchRepoConfig(sourceInfo, ref)
        .catch(err => {
            log.warn(`Error getting repo config for ${ref}`, err);
            return null;
        });
}
