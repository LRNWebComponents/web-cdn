var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

;

(function () {
	'use strict';

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
		/******/return __webpack_require__(__webpack_require__.s = 3);
		/******/
	})(
	/************************************************************************/
	/******/[
	/* 0 */
	/***/function (module, exports, __webpack_require__) {

		module.exports = "<style>" + __webpack_require__(1) + "</style>\n<!-- Use the id \"title\" for title -->\n<slot id=\"card-content\">\n\n</slot>\n\n\n\n\n\n\n\n";

		/***/
	},
	/* 1 */
	/***/function (module, exports, __webpack_require__) {

		exports = module.exports = __webpack_require__(2)();
		// imports


		// module
		exports.push([module.i, ":host{display:inline-block;background-color:#fff;padding:0;-moz-box-shadow:0 8px 12px rgba(0,0,0,.2);-webkit-box-shadow:0 8px 12px rgba(0,0,0,.2);box-shadow:0 8px 12px rgba(0,0,0,.2);vertical-align:top;min-width:250px;width:30%;max-width:700px;margin-bottom:20px}#card-content ::slotted(*){width:100%;padding:10px 15px}#card-content ::slotted(img){padding:0}:host.picture-left #inner-top .profile-image{order:1}:host[theme=blue] .profile-image{background:#002e5d}:host[theme=gray] .profile-image{background:gray}#card-content::slotted(*){color:#444}", ""]);

		// exports


		/***/
	},
	/* 2 */
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
	/* 3 */
	/***/function (module, exports, __webpack_require__) {

		"use strict";

		var template = __webpack_require__(0);

		var ByuCard = function (_HTMLElement) {
			_inherits(ByuCard, _HTMLElement);

			function ByuCard() {
				_classCallCheck(this, ByuCard);

				var _this = _possibleConstructorReturn(this, (ByuCard.__proto__ || Object.getPrototypeOf(ByuCard)).call(this));

				var shadowRoot = _this.attachShadow({ mode: 'open' });
				shadowRoot.innerHTML = template;
				return _this;
			}

			return ByuCard;
		}(HTMLElement);

		window.customElements.define('byu-card', ByuCard);
		window.ByuCard = ByuCard;

		/***/
	}]);
})();
//# sourceMappingURL=components.es5.js.map
