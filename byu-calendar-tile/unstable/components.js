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

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, ":host{padding:0;-moz-box-shadow:0 8px 12px rgba(0,0,0,.2);-webkit-box-shadow:0 8px 12px rgba(0,0,0,.2);box-shadow:0 8px 12px rgba(0,0,0,.2)}.section-first{background:#002e5d;color:#fff}.section-second{padding:15px}:host .content{width:100%;display:flex;justify-content:center}:host .content,:host ::slotted(*){font-family:Gotham A,Gotham B}#title::slotted(*){color:#002e5d;font-size:18px;font-weight:700;text-decoration:none}#location::slotted(*),#time::slotted(*){font-size:14px;text-transform:uppercase}.section-second::slotted(*){width:100%}#description::slotted(*),#title::slotted(*){font-family:Sentinel A,Sentinel B}#weekday{padding-bottom:10px}#location::slotted(*),#weekday{text-transform:uppercase;font-size:12px}#location::slotted(*){color:#767676;font-weight:500}#date,#date::slotted(*){display:none}:host([layout=vertical]){max-width:170px;display:flex;flex-wrap:wrap;margin:15px 8px}:host([layout=vertical]) .section-first{height:160px;width:170px;display:flex;flex-wrap:wrap;justify-content:center}:host([layout=vertical]) .section-second{display:flex;flex-wrap:wrap;justify-content:center;align-content:space-between}:host([layout=vertical]) .section-second ::slotted(*){justify-content:center}:host([layout=vertical]) #month-name{padding:10px;font-size:22px;text-transform:uppercase;margin-bottom:0}:host([layout=vertical]) #day-number{font-size:60px;margin-bottom:10px;font-weight:700}:host([layout=vertical]) #title::slotted(*){color:#002e5d;font-size:18px;font-weight:700;padding:5px 0 10px;height:120px;width:100%;display:flex;justify-content:center;align-content:flex-start;width:150px;overflow:hidden}:host([layout=vertical]) #time::slotted(*){font-size:14px;padding:8px 0}:host([layout=vertical]) #location::slotted(*){color:#767676;text-align:center;font-weight:500}:host([layout=horizontal]){width:420px;margin:10px 15px;display:flex}:host([layout=horizontal]) .section-first{width:120px}:host([layout=horizontal]) .section-second{width:300px;align-items:space-between}:host([layout=horizontal]) #month-abb{padding:10px;font-size:22px;text-transform:uppercase;margin-bottom:0}:host([layout=horizontal]) #day-number{font-size:48px;font-weight:700}:host([layout=horizontal]) #time::slotted(*){color:#fff;display:flex;justify-content:center}:host([layout=horizontal]) #title::slotted(*){padding:5px 0 10px;width:100%;overflow:hidden}:host([layout=horizontal]) #location::slotted(*){padding-top:8px}.section-second ::slotted(*){color:#767676;padding:0;margin:0;display:flex;flex-wrap:wrap;width:100%}:host ::slotted(img){display:none}a,div,p{font-family:Gotham A,Gotham B}h1,h2,h3,h4{font-family:Sentinel A,Sentinel B}", ""]);

// exports


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<style>" + __webpack_require__ (0) + "</style>\n<link type=\"text/css\" rel=\"stylesheet\" href=\"https://cloud.typography.com/75214/6517752/css/fonts.css\" media=\"all\" />\n\n<!-- Use the id \"title\" for title -->\n<!--<div class=\"byu-calendar-tile\">-->\n    <div class=\"section-first\">\n        <slot id=\"date\" name=\"date\">   </slot>\n        <div id=\"month-abb\" class=\"content\" ></div>\n        <div id=\"day-number\" class=\"content\" ></div>\n        <slot id=\"time\" class=\"content\" name=\"time\">   </slot>\n    </div>\n    <div class=\"section-second\">\n        <slot id=\"title\" class=\"content\" name=\"title\">  </slot>\n        <slot id=\"description\" class=\"content\" name=\"description\">  </slot>\n        <slot id=\"location\" class=\"content\" name=\"location\"></slot>\n    </div>\n<!--</div>-->\n";

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<style>" + __webpack_require__ (0) + "</style>\n<!--<link rel=\"stylesheet\" href=\"https://cloud.typography.com/75214/6517752/css/fonts.css\">-->\n<link type=\"text/css\" rel=\"stylesheet\" href=\"https://cloud.typography.com/75214/6517752/css/fonts.css\" media=\"all\" />\n\n<!-- Use the id \"title\" for title -->\n<!--<div class=\"byu-calendar-tile\" >-->\n    <div class=\"section-first\">\n        <slot id=\"date\" name=\"date\">   </slot>\n        <div id=\"month-name\" class=\"content\" ></div>\n        <div id=\"day-number\" class=\"content\" ></div>\n        <div id=\"weekday\" class=\"content\" ></div>\n    </div>\n    <div class=\"section-second\">\n        <slot id=\"title\" class=\"content\" name=\"title\">  </slot>\n        <slot id=\"time\" class=\"content\" name=\"time\">   </slot>\n        <slot id=\"location\" class=\"content\" name=\"location\"></slot>\n    </div>\n<!--</div>-->\n\n\n\n\n";

/***/ }),
/* 3 */
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// these only need to be created or established once, so they are outside the class
const verticalTemplate = __webpack_require__(2);
const horizontalTemplate = __webpack_require__(1);

var months =["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var monthAbbs = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday", "Saturday"];

class ByuCalendarTile extends HTMLElement {

    constructor() {
        super();
        this._shadowRoot = this.attachShadow({mode: 'open'});
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
        var dates = this.shadowRoot.querySelector("#date").assignedNodes();
        if(dates.length){
            var date = this.shadowRoot.querySelector("#date").assignedNodes()[0];
            console.log(date.innerText);
            return new Date(date.innerText.trim());
        }
        else {
            return null;
        }
    }
    connectedCallback(){
        // identify which template to use
        this._shadowRoot.innerHTML = this.layout === 'horizontal' ? horizontalTemplate : verticalTemplate;

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
        if(this.layout == 'horizontal') {
            this._shadowRoot.getElementById('month-abb').innerHTML = monthAbb;
        } else {
            this._shadowRoot.getElementById('month-name').innerHTML = monthName;
            this._shadowRoot.getElementById('weekday').innerHTML = weekday;
        }
        this._shadowRoot.getElementById('day-number').innerHTML = day;

    }
}

window.customElements.define('byu-calendar-tile', ByuCalendarTile);
window.ByuCalendarTile = ByuCalendarTile;



/***/ })
/******/ ]);
//# sourceMappingURL=components.js.map