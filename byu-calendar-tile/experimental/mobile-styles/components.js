/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ":host{padding:0;-moz-box-shadow:0 8px 12px rgba(0,0,0,.2);-webkit-box-shadow:0 8px 12px rgba(0,0,0,.2);box-shadow:0 8px 12px rgba(0,0,0,.2)}.section-first{background:#002e5d;color:#fff}.section-second{padding:15px}:host .content{width:100%;display:flex;justify-content:center}:host .content,:host ::slotted(*){font-family:Gotham A,Gotham B}#title ::slotted(*){color:#002e5d!important;font-size:18px;font-weight:700;text-decoration:none}#location ::slotted(*),#time ::slotted(*){font-size:14px;text-transform:uppercase}.section-second ::slotted(*){width:100%}#description ::slotted(*),#title ::slotted(*){font-family:Sentinel A,Sentinel B;line-height:1.2}#weekday{text-transform:uppercase;font-size:14px;padding-bottom:10px}#location ::slotted(*){color:#767676;text-transform:uppercase;font-size:12px;font-weight:500}#date,#date ::slotted(*){display:none}:host([layout=vertical]){max-width:170px;display:flex;flex-wrap:wrap;justify-content:flex-start;margin:15px 8px}:host([layout=vertical]) .section-first{height:160px;width:170px;display:flex;flex-wrap:wrap;justify-content:center}:host([layout=vertical]) .section-second{height:190px;padding:15px 0;display:flex;flex-wrap:wrap;justify-content:center;align-content:space-between;align-self:flex-start}:host([layout=vertical]) .section-second ::slotted(*){justify-content:center}:host([layout=vertical]) #month-name{padding:10px;font-size:22px;text-transform:uppercase;margin-bottom:0}:host([layout=vertical]) #day-number{font-size:60px;margin-bottom:10px;font-weight:700}:host([layout=vertical]) #title ::slotted(*){color:#002e5d!important;font-size:18px;font-weight:700;text-align:center;padding:5px 0 10px;height:120px;width:150px}:host([layout=vertical]) #time ::slotted(*){font-size:14px;padding:8px 0!important}:host([layout=vertical]) #location ::slotted(*){color:#767676;text-align:center;font-weight:500}@media screen and (max-width:767px){:host([layout=vertical]) .section-first{height:110px}:host([layout=vertical]) .section-second{height:170px}:host([layout=vertical]) #month-abb{font-size:16px}:host([layout=vertical]) #day-number{font-size:40px}}:host([layout=horizontal]){width:430px;margin:10px 15px;display:flex}:host([layout=horizontal]) .section-first{width:130px;min-height:130px!important}:host([layout=horizontal]) .section-second{width:300px}:host([layout=horizontal]) .section-second ::slotted(*){width:290px}:host([layout=horizontal]).extra-wide .section-second ::slotted(*){width:360px}:host([layout=horizontal]) #month-abb{padding:10px 0;font-size:22px;text-transform:uppercase;margin-bottom:0}:host([layout=horizontal]) #day-number{font-size:48px;font-weight:700}:host([layout=horizontal]) #time{padding:10px 0}:host([layout=horizontal]) #time ::slotted(*){color:#fff;padding:5px 0 10px;display:flex;justify-content:center;text-align:center}:host([layout=horizontal]) #title ::slotted(*){padding:5px 0 10px;width:100%;overflow:hidden}:host([layout=horizontal]) #location ::slotted(*){padding-top:8px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis!important}@media screen and (max-width:767px){:host([layout=horizontal]){width:97%;margin:5px 10px}:host([layout=horizontal]) .section-first{width:40%;min-height:100px!important}:host([layout=horizontal]) .section-second{width:60%}:host([layout=horizontal]).extra-wide .section-second ::slotted(*),:host([layout=horizontal]) .section-second ::slotted(*){width:auto}:host([layout=horizontal]) #month-abb{font-size:16px}:host([layout=horizontal]) #day-number{font-size:28px}}.section-second ::slotted(*){color:#767676;padding:0;margin:0;display:flex;flex-wrap:wrap;width:100%}:host ::slotted(img){display:none}a,div,p{font-family:Gotham A,Gotham B}h1,h2,h3,h4{font-family:Sentinel A,Sentinel B}", ""]);

// exports


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_templating__ = __webpack_require__(5);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "applyTemplate", function() { return __WEBPACK_IMPORTED_MODULE_0__lib_templating__["a"]; });
/**
 * Created by ThatJoeMoore on 2/14/17
 */







/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<style>" + __webpack_require__ (0) + "</style> <link type=\"text/css\" rel=\"stylesheet\" href=\"https://cloud.typography.com/75214/6517752/css/fonts.css\" media=\"all\"> <div class=\"section-first\"> <div id=\"date\"> <slot id=\"date-val\" name=\"date\"> </slot> </div> <div id=\"month-abb\" class=\"content\"></div> <div id=\"day-number\" class=\"content\"></div> <div id=\"time\" class=\"content\"> <slot name=\"time\"></slot> </div> </div> <div class=\"section-second\"> <div id=\"title\" class=\"content\"> <slot name=\"title\"></slot> </div> <div id=\"location\" class=\"content\"> <slot name=\"location\"></slot> </div> <div id=\"description\"> <slot class=\"content\" name=\"description\"> </slot> </div> </div>";

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<style>" + __webpack_require__ (0) + "</style> <link type=\"text/css\" rel=\"stylesheet\" href=\"https://cloud.typography.com/75214/6517752/css/fonts.css\" media=\"all\"> <div class=\"section-first\"> <div id=\"date\"> <slot id=\"date-val\" name=\"date\"> </slot> </div> <div id=\"month-name\" class=\"content\"></div> <div id=\"day-number\" class=\"content\"></div> <div id=\"weekday\" class=\"content\"></div> </div> <div class=\"section-second\"> <div id=\"title\" class=\"content\"> <slot name=\"title\"></slot> </div> <div id=\"time\" class=\"content\"> <slot name=\"time\"></slot> </div> <div id=\"location\" class=\"content\"> <slot name=\"location\"></slot> </div> </div>";

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const util = __webpack_require__(1);
// these only need to be created or established once, so they are outside the class
const verticalTemplate = __webpack_require__(3);
const horizontalTemplate = __webpack_require__(2);

var months =["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var monthAbbs = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday", "Saturday"];

class ByuCalendarTile extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }
    get layout() {
        return this.getAttribute('layout');
    }
    set layout(value) {
        if(value){
            this.setAttribute('layout', value);
        } else {
            this.removeAttribute('layout');
        }
    }
    get date(){
        var dates = this.shadowRoot.querySelector("#date-val").assignedNodes();
        if(dates.length){
            var date = this.shadowRoot.querySelector("#date-val").assignedNodes()[0];
            console.log(date.innerText);
            return new Date(date.innerText.trim());
        }
        else {
            return null;
        }
    }
    connectedCallback() {
        // identify which template to use
        let template = this.layout === 'horizontal' ? horizontalTemplate : verticalTemplate;
        util.applyTemplate(this, 'byu-calendar-tile', template, () => {

            var dateOb = this.date;
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

            // set those date pieces as values in the tile's divs
            if (this.layout == 'horizontal') {
                this.shadowRoot.querySelector('#month-abb').innerHTML = monthAbb;
            } else {
                this.shadowRoot.querySelector('#month-name').innerHTML = monthName;
                this.shadowRoot.querySelector('#weekday').innerHTML = weekday;
            }
            this.shadowRoot.querySelector('#day-number').innerHTML = day;

        });
    }
}

window.customElements.define('byu-calendar-tile', ByuCalendarTile);
window.ByuCalendarTile = ByuCalendarTile;



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hash_sum__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hash_sum___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hash_sum__);
/* harmony export (immutable) */ __webpack_exports__["a"] = applyTemplate;
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




const TEMPLATE_RENDERED_CLASS = 'byu-component-rendered';

function applyTemplate(element, elementName, template, callback) {
    let sum = __WEBPACK_IMPORTED_MODULE_0_hash_sum___default()(template);

    let elSettings = element.__byu_webCommunity_components = element.__byu_webCommunity_components || {};
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
    let templateId = '__byu-custom-element-template_' + elementName + '_' + sum;
    let templateElement = document.head.querySelector('template#' + templateId);
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
    let imported = document.importNode(templateElement.content, true);
    let shadow = element.shadowRoot;
    //It'd be nice if we could just diff the DOM and replace what changed between templates, but that might lead to
    // event listeners getting applied twice.  Easier to just clear out the shadow DOM and replace it.
    while (shadow.firstChild) {
        shadow.removeChild(shadow.firstChild);
    }
    shadow.appendChild(imported);
    setTimeout(function() {
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



/***/ }),
/* 6 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function pad (hash, len) {
  while (hash.length < len) {
    hash = '0' + hash;
  }
  return hash;
}

function fold (hash, text) {
  var i;
  var chr;
  var len;
  if (text.length === 0) {
    return hash;
  }
  for (i = 0, len = text.length; i < len; i++) {
    chr = text.charCodeAt(i);
    hash = ((hash << 5) - hash) + chr;
    hash |= 0;
  }
  return hash < 0 ? hash * -2 : hash;
}

function foldObject (hash, o, seen) {
  return Object.keys(o).sort().reduce(foldKey, hash);
  function foldKey (hash, key) {
    return foldValue(hash, o[key], key, seen);
  }
}

function foldValue (input, value, key, seen) {
  var hash = fold(fold(fold(input, key), toString(value)), typeof value);
  if (value === null) {
    return fold(hash, 'null');
  }
  if (value === undefined) {
    return fold(hash, 'undefined');
  }
  if (typeof value === 'object') {
    if (seen.indexOf(value) !== -1) {
      return fold(hash, '[Circular]' + key);
    }
    seen.push(value);
    return foldObject(hash, value, seen);
  }
  return fold(hash, value.toString());
}

function toString (o) {
  return Object.prototype.toString.call(o);
}

function sum (o) {
  return pad(foldValue(0, o, '', []).toString(16), 8);
}

module.exports = sum;


/***/ })
/******/ ]);
//# sourceMappingURL=components.js.map