;

(function () {
    'use strict';

    var _typeof = typeof Symbol === "function" && _typeof(Symbol.iterator) === "symbol" ? function (obj) {
        return typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
    };

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    /******/(function (modules) {
        // webpackBootstrap
        /******/ // The module cache
        /******/var installedModules = {};
        /******/
        /******/ // The require function
        /******/function __webpack_require__(moduleId) {
            /******/
            /******/ // Check if module is in cache
            /******/if (installedModules[moduleId])
                /******/return installedModules[moduleId].exports;
            /******/
            /******/ // Create a new module (and put it into the cache)
            /******/var module = installedModules[moduleId] = {
                /******/i: moduleId,
                /******/l: false,
                /******/exports: {}
                /******/ };
            /******/
            /******/ // Execute the module function
            /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            /******/
            /******/ // Flag the module as loaded
            /******/module.l = true;
            /******/
            /******/ // Return the exports of the module
            /******/return module.exports;
            /******/
        }
        /******/
        /******/
        /******/ // expose the modules object (__webpack_modules__)
        /******/__webpack_require__.m = modules;
        /******/
        /******/ // expose the module cache
        /******/__webpack_require__.c = installedModules;
        /******/
        /******/ // identity function for calling harmony imports with the correct context
        /******/__webpack_require__.i = function (value) {
            return value;
        };
        /******/
        /******/ // define getter function for harmony exports
        /******/__webpack_require__.d = function (exports, name, getter) {
            /******/if (!__webpack_require__.o(exports, name)) {
                /******/Object.defineProperty(exports, name, {
                    /******/configurable: false,
                    /******/enumerable: true,
                    /******/get: getter
                    /******/ });
                /******/
            }
            /******/
        };
        /******/
        /******/ // getDefaultExport function for compatibility with non-harmony modules
        /******/__webpack_require__.n = function (module) {
            /******/var getter = module && module.__esModule ?
            /******/function getDefault() {
                return module['default'];
            } :
            /******/function getModuleExports() {
                return module;
            };
            /******/__webpack_require__.d(getter, 'a', getter);
            /******/return getter;
            /******/
        };
        /******/
        /******/ // Object.prototype.hasOwnProperty.call
        /******/__webpack_require__.o = function (object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        };
        /******/
        /******/ // __webpack_public_path__
        /******/__webpack_require__.p = "";
        /******/
        /******/ // Load entry module and return exports
        /******/return __webpack_require__(__webpack_require__.s = 2);
        /******/
    })(
    /************************************************************************/
    /******/[
    /* 0 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";

        Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__lib_templating__ = __webpack_require__(3);
        /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "applyTemplate", function () {
            return __WEBPACK_IMPORTED_MODULE_0__lib_templating__["a"];
        });
        /**
         * Created by ThatJoeMoore on 2/14/17
         */

        /***/
    },
    /* 1 */
    /***/function (module, exports, __webpack_require__) {

        module.exports = "<style>" + __webpack_require__(4) + "</style> <div id=\"card-content\"> <slot> </slot> </div>";

        /***/
    },
    /* 2 */
    /***/function (module, exports, __webpack_require__) {

        "use strict";

        var util = __webpack_require__(0);
        var template = __webpack_require__(1);

        var ByuCard = function (_HTMLElement) {
            _inherits(ByuCard, _HTMLElement);

            function ByuCard() {
                _classCallCheck(this, ByuCard);

                var _this = _possibleConstructorReturn(this, (ByuCard.__proto__ || Object.getPrototypeOf(ByuCard)).call(this));

                _this.attachShadow({ mode: 'open' });
                return _this;
            }

            return ByuCard;
        }(HTMLElement);

        connectedCallback();{
            util.applyTemplate(this, 'byu-card', template, function () {
                // this._addSomeEventListenersOrSomething();
            });
        }

        // this.shadowRoot.querySelector('#myId');

        window.customElements.define('byu-card', ByuCard);
        window.ByuCard = ByuCard;

        /***/
    },
    /* 3 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0_hash_sum__ = __webpack_require__(6);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_0_hash_sum___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hash_sum__);
        /* harmony export (immutable) */__webpack_exports__["a"] = applyTemplate;
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

        var TEMPLATE_RENDERED_CLASS = 'byu-component-rendered';

        function applyTemplate(element, elementName, template, callback) {
            var sum = __WEBPACK_IMPORTED_MODULE_0_hash_sum___default()(template);

            var elSettings = element.__byu_webCommunity_components = element.__byu_webCommunity_components || {};
            if (elSettings.templateHash === sum) {
                //Nothing has changed in the element.  Don't replace the DOM, don't fire the callback.
                return;
            }
            elSettings.templateHash = sum;

            if (window.ShadyCSS) {
                applyTemplateShady(element, elementName, template, callback, sum);
            } else {
                applyTemplateNative(element, template, callback);
            }
        }

        function applyTemplateShady(element, elementName, template, callback, sum) {
            var templateId = '__byu-custom-element-template_' + elementName + '_' + sum;
            var templateElement = document.head.querySelector('template#' + templateId);
            if (!templateElement) {
                templateElement = document.createElement('template');
                templateElement.id = templateId;
                templateElement.innerHTML = template;
                document.head.appendChild(templateElement);
                ShadyCSS.prepareTemplate(templateElement, elementName);
            }
            if (ShadyCSS.styleElement) {
                ShadyCSS.styleElement(element);
            } else if (ShadyCSS.applyStyle) {
                ShadyCSS.applyStyle(element);
            } else {
                throw new Error('ShadyCSS is not properly defined: no styleElement or applyStyle!');
            }
            var imported = document.importNode(templateElement.content, true);
            var shadow = element.shadowRoot;
            //It'd be nice if we could just diff the DOM and replace what changed between templates, but that might lead to
            // event listeners getting applied twice.  Easier to just clear out the shadow DOM and replace it.
            while (shadow.firstChild) {
                shadow.removeChild(shadow.firstChild);
            }
            shadow.appendChild(imported);
            setTimeout(function () {
                runAfterStamping(element, callback);
            });
        }

        function applyTemplateNative(element, template, callback) {
            element.shadowRoot.innerHTML = template;
            runAfterStamping(element, callback);
        }

        function runAfterStamping(element, callback) {
            element.classList.add(TEMPLATE_RENDERED_CLASS);
            if (callback) {
                callback();
            }
        }

        /***/
    },
    /* 4 */
    /***/function (module, exports, __webpack_require__) {

        exports = module.exports = __webpack_require__(5)();
        // imports


        // module
        exports.push([module.i, ":host{display:inline-block;background-color:#fff;-moz-box-shadow:0 8px 12px rgba(0,0,0,.2);-webkit-box-shadow:0 8px 12px rgba(0,0,0,.2);box-shadow:0 8px 12px rgba(0,0,0,.2);vertical-align:top;min-width:250px;width:30%;max-width:700px;margin-bottom:20px;padding-top:20px}:host(:hover){-moz-box-shadow:0 10px 18px 0 rgba(0,0,0,.3);-webkit-box-shadow:0 10px 18px 0 rgba(0,0,0,.3);box-shadow:0 10px 18px 0 rgba(0,0,0,.3)}:host ul{margin-bottom:0}#card-content ::slotted(*){width:100%;padding:0 20px;color:#444}#card-content ::slotted(ul){padding-left:40px}#card-content ::slotted(img){padding:0;padding-top:20px;width:30%}", ""]);

        // exports


        /***/
    },
    /* 5 */
    /***/function (module, exports) {

        /*
        	MIT License http://www.opensource.org/licenses/mit-license.php
        	Author Tobias Koppers @sokra
        */
        // css base code, injected by the css-loader
        module.exports = function () {
            var list = [];

            // return the list of modules as css string
            list.toString = function toString() {
                var result = [];
                for (var i = 0; i < this.length; i++) {
                    var item = this[i];
                    if (item[2]) {
                        result.push("@media " + item[2] + "{" + item[1] + "}");
                    } else {
                        result.push(item[1]);
                    }
                }
                return result.join("");
            };

            // import a list of modules into the list
            list.i = function (modules, mediaQuery) {
                if (typeof modules === "string") modules = [[null, modules, ""]];
                var alreadyImportedModules = {};
                for (var i = 0; i < this.length; i++) {
                    var id = this[i][0];
                    if (typeof id === "number") alreadyImportedModules[id] = true;
                }
                for (i = 0; i < modules.length; i++) {
                    var item = modules[i];
                    // skip already imported module
                    // this implementation is not 100% perfect for weird media query combinations
                    //  when a module is imported multiple times with different media queries.
                    //  I hope this will never occur (Hey this way we have smaller bundles)
                    if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
                        if (mediaQuery && !item[2]) {
                            item[2] = mediaQuery;
                        } else if (mediaQuery) {
                            item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
                        }
                        list.push(item);
                    }
                }
            };
            return list;
        };

        /***/
    },
    /* 6 */
    /***/function (module, exports, __webpack_require__) {

        "use strict";

        function pad(hash, len) {
            while (hash.length < len) {
                hash = '0' + hash;
            }
            return hash;
        }

        function fold(hash, text) {
            var i;
            var chr;
            var len;
            if (text.length === 0) {
                return hash;
            }
            for (i = 0, len = text.length; i < len; i++) {
                chr = text.charCodeAt(i);
                hash = (hash << 5) - hash + chr;
                hash |= 0;
            }
            return hash < 0 ? hash * -2 : hash;
        }

        function foldObject(hash, o, seen) {
            return Object.keys(o).sort().reduce(foldKey, hash);
            function foldKey(hash, key) {
                return foldValue(hash, o[key], key, seen);
            }
        }

        function foldValue(input, value, key, seen) {
            var hash = fold(fold(fold(input, key), toString(value)), typeof value === 'undefined' ? 'undefined' : _typeof(value));
            if (value === null) {
                return fold(hash, 'null');
            }
            if (value === undefined) {
                return fold(hash, 'undefined');
            }
            if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
                if (seen.indexOf(value) !== -1) {
                    return fold(hash, '[Circular]' + key);
                }
                seen.push(value);
                return foldObject(hash, value, seen);
            }
            return fold(hash, value.toString());
        }

        function toString(o) {
            return Object.prototype.toString.call(o);
        }

        function sum(o) {
            return pad(foldValue(0, o, '', []).toString(16), 8);
        }

        module.exports = sum;

        /***/
    }]);
})();
//# sourceMappingURL=components-compat.js.map
