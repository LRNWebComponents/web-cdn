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

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

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
        /******/return __webpack_require__(__webpack_require__.s = 4);
        /******/
    })(
    /************************************************************************/
    /******/[
    /* 0 */
    /***/function (module, exports, __webpack_require__) {

        exports = module.exports = __webpack_require__(6)();
        // imports


        // module
        exports.push([module.i, ":host{padding:10px 0;border-bottom:1px solid #e5e5e5;margin-bottom:10px}.section-first{background:#e5e5e5;color:#002e5d}.section-second{padding:15px;color:#767676}:host .content{width:100%}:host .content,:host ::slotted(*){font-family:Gotham A,Gotham B}#title ::slotted(*){color:#002e5d!important;font-size:24px;font-weight:700;text-decoration:none}#price ::slotted(*),.price-label{font-weight:700;color:#4d8501}#time{padding:6px 0;margin:0}#time ::slotted(*){font-size:14px;padding:0;margin:0;text-transform:uppercase}#location{padding:0 0 6px}#location ::slotted(*){font-size:14px;padding:0;margin:0;text-transform:uppercase}#tickets-link ::slotted(*){text-align:center;background-color:#4d8501!important;padding:9px 15px!important;width:120px;font-size:12px;color:#fff!important;text-decoration:none}#tickets-link ::slotted(:before){content:\"Price: \";display:inline}.section-second{min-height:100px;padding:0 15px 15px;display:block}#title ::slotted(*){line-height:1.2}#weekday{text-transform:uppercase;font-size:14px;padding-bottom:10px}#location ::slotted(*){color:#767676;font-size:12px;font-weight:500}#date,#date ::slotted(*){display:none}#year{letter-spacing:3px}.section-third{padding-top:8px;width:auto;margin-left:auto}:host{display:flex;flex-wrap:wrap;justify-content:flex-start;margin:10px 8px;width:100%}:host .section-first{height:120px;width:120px;display:block;background:#e5e5e5;margin-bottom:15px}:host .section-first .content{display:flex;justify-content:center}:host .section-second ::slotted(*){justify-content:flex-start}:host #month-name{padding:10px 0;font-size:13px;text-transform:uppercase;margin-bottom:0;font-weight:500}:host #day-number{font-size:48px;margin-bottom:5px;font-weight:700}:host #title ::slotted(*){color:#002e5d!important;font-size:18px;font-weight:700;text-align:center;padding:0 0 5px}:host #time ::slotted(*){font-size:14px}:host #location ::slotted(*){color:#767676;font-weight:500;padding:4px 0}:host #link ::slotted(*){color:#002e5d;padding:4px 0;text-decoration:none}:host([type=image]) #image ::slotted(*),:host([type=image]) .section-first{height:100px;width:100px}a,div,p{font-family:Gotham A,Gotham B}h1,h2,h3,h4{font-family:Sentinel A,Sentinel B}", ""]);

        // exports


        /***/
    },
    /* 1 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";

        Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__lib_templating__ = __webpack_require__(5);
        /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "applyTemplate", function () {
            return __WEBPACK_IMPORTED_MODULE_0__lib_templating__["a"];
        });
        /**
         * Created by ThatJoeMoore on 2/14/17
         */

        /***/
    },
    /* 2 */
    /***/function (module, exports, __webpack_require__) {

        module.exports = "<style>" + __webpack_require__(0) + "</style> <link type=\"text/css\" rel=\"stylesheet\" href=\"https://cloud.typography.com/75214/6517752/css/fonts.css\" media=\"all\"> <div class=\"section-first\"> <slot id=\"image\" name=\"image\"></slot> </div> <div class=\"section-second\"> <div id=\"title\"> <slot class=\"content\" name=\"title\"> </slot> </div> <div id=\"time\"> <slot class=\"content\" name=\"time\"> </slot> </div> <div id=\"location\"> <slot class=\"content\" name=\"location\"></slot> </div> <div id=\"price\"> <slot class=\"content\" name=\"price\"></slot> </div> <div id=\"link\"> <slot class=\"content\" name=\"link\"></slot> </div> </div> <div class=\"section-third\"> <div id=\"tickets-link\"> <slot class=\"content\" name=\"tickets-link\"></slot> </div> </div>";

        /***/
    },
    /* 3 */
    /***/function (module, exports, __webpack_require__) {

        module.exports = "<style>" + __webpack_require__(0) + "</style> <div class=\"section-first\"> <div id=\"date\"> <slot id=\"date-val\" name=\"date\"></slot> </div> <div id=\"month-name\" class=\"content\"></div> <div id=\"day-number\" class=\"content\"></div> <div id=\"year\" class=\"content\"></div> </div> <div class=\"section-second\"> <div id=\"title\" class=\"content\"> <slot name=\"title\"> </slot> </div> <div id=\"time\" class=\"content\"> <slot name=\"time\"> </slot> </div> <div id=\"location\" class=\"content\"> <slot name=\"location\"></slot> </div> <div id=\"price\" class=\"content\"> <slot name=\"price\"></slot> </div> <div id=\"link\" class=\"content\"> <slot name=\"link\"></slot> </div> </div> <div class=\"section-third\"> <div id=\"tickets-link\"> <slot id=\"tickets-link\" class=\"content\" name=\"tickets-link\"></slot> </div> </div>";

        /***/
    },
    /* 4 */
    /***/function (module, exports, __webpack_require__) {

        "use strict";

        var util = __webpack_require__(1);
        // these only need to be created or established once, so they are outside the class
        var tileTemplate = __webpack_require__(3);
        var imageTemplate = __webpack_require__(2);

        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        var monthAbbs = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

        var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        var ByuCalendarRow = function (_HTMLElement) {
            _inherits(ByuCalendarRow, _HTMLElement);

            function ByuCalendarRow() {
                _classCallCheck(this, ByuCalendarRow);

                var _this = _possibleConstructorReturn(this, (ByuCalendarRow.__proto__ || Object.getPrototypeOf(ByuCalendarRow)).call(this));

                _this.attachShadow({ mode: 'open' });
                return _this;
            }

            _createClass(ByuCalendarRow, [{
                key: 'connectedCallback',
                value: function connectedCallback() {
                    var _this2 = this;

                    // identify which template to use
                    var template = this.type === 'image' ? imageTemplate : tileTemplate;
                    util.applyTemplate(this, 'byu-calendar-row', template, function () {
                        //apply listeners and such here

                        var dateOb = _this2.date;
                        console.log(dateOb);
                        // --- isolate parts of the date
                        // get month
                        var monthName = months[dateOb.getMonth()];
                        console.log(monthName);
                        // get month abbreviation
                        var monthAbb = monthAbbs[dateOb.getMonth()];

                        // get day of the month
                        var day = dateOb.getDate();

                        // get day of week
                        var weekday = weekdays[dateOb.getDay()];

                        // get year
                        var year = dateOb.getFullYear();

                        // set those date pieces as values in the tile's divs
                        if (_this2.type == 'image') {
                            //this.shadowRoot.querySelector('month-abb').innerHTML = monthAbb;
                            // idk if need to do stuff here idk
                            _this2.shadowRoot.querySelector('#weekday').innerHTML = weekday;
                        } else {
                            _this2.shadowRoot.querySelector('#month-name').innerHTML = monthName;
                            _this2.shadowRoot.querySelector('#year').innerHTML = year;
                        }
                        _this2.shadowRoot.querySelector('#day-number').innerHTML = day;
                    });
                }
            }, {
                key: 'type',
                get: function get() {
                    return this.getAttribute('type');
                },
                set: function set(value) {
                    if (value) {
                        this.setAttribute('type', value);
                    } else {
                        this.removeAttribute('type');
                    }
                }
            }, {
                key: 'date',
                get: function get() {
                    var dates = this.shadowRoot.querySelector("#date-val").assignedNodes();
                    if (dates.length) {
                        var date = this.shadowRoot.querySelector("#date-val").assignedNodes()[0];
                        console.log(date.innerText);
                        return new Date(date.innerText.trim());
                    } else {
                        return null;
                    }
                }
            }]);

            return ByuCalendarRow;
        }(HTMLElement);

        window.customElements.define('byu-calendar-row', ByuCalendarRow);
        window.ByuCalendarRow = ByuCalendarRow;

        /***/
    },
    /* 5 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0_hash_sum__ = __webpack_require__(7);
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
    /* 6 */
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
    /* 7 */
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
