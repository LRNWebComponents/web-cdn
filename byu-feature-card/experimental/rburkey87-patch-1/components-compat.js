;(function() {
"use strict";

'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/******/(function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/var installedModules = {};
  /******/
  /******/ // The require function
  /******/function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/if (installedModules[moduleId]) {
      /******/return installedModules[moduleId].exports;
      /******/
    }
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
  /* harmony export (immutable) */
  __webpack_exports__["a"] = matchesSelector;
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

  function matchesSelector(el, selector) {
    var proto = Element.prototype;
    var actual = proto.matches || proto.matchesSelector || proto.mozMatchesSelector || proto.msMatchesSelector || proto.oMatchesSelector || proto.webkitMatchesSelector || function (s) {
      var doc = this.document || this.ownerDocument;
      return doc.querySelectorAll(s).indexOf(this) !== -1;
    };

    return actual.call(el, selector);
  }

  /***/
},
/* 1 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* harmony import */
  var __WEBPACK_IMPORTED_MODULE_0__byu_feature_card_html__ = __webpack_require__(10);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__byu_feature_card_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__byu_feature_card_html__);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__ = __webpack_require__(3);
  /**
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
   **/

  var ATTR_LOGO = 'without-logo';

  var HIDE_ELEMENT_CLASS = '.hide-element';

  var ByuFeatureCard = function (_HTMLElement) {
    _inherits(ByuFeatureCard, _HTMLElement);

    function ByuFeatureCard() {
      _classCallCheck(this, ByuFeatureCard);

      var _this = _possibleConstructorReturn(this, (ByuFeatureCard.__proto__ || Object.getPrototypeOf(ByuFeatureCard)).call(this));

      _this.attachShadow({ mode: 'open' });
      return _this;
    }

    _createClass(ByuFeatureCard, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        var _this2 = this;

        //This will stamp our template for us, then let us perform actions on the stamped DOM.
        __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__["a" /* applyTemplate */](this, 'byu-feature-card', __WEBPACK_IMPORTED_MODULE_0__byu_feature_card_html___default.a, function () {
          disableLogo(_this2);
          setupSlotListeners(_this2);
        });
      }
    }, {
      key: 'withoutLogo',
      get: function get() {
        return this.hasAttribute(ATTR_LOGO);
      }
    }]);

    return ByuFeatureCard;
  }(HTMLElement);

  window.customElements.define('byu-feature-card', ByuFeatureCard);
  window.ByuFeatureCard = ByuFeatureCard;

  // -------------------- Helper Functions --------------------

  function disableLogo(component) {
    var logo = component.shadowRoot.querySelector('#byu-logo');
    var woLogo = component.withoutLogo;

    if (woLogo) {
      logo.classList.add(HIDE_ELEMENT_CLASS);
    }
  }

  function setupSlotListeners(component) {
    var slot = component.shadowRoot.querySelector('#fancy-template');
  }

  /***/
},
/* 2 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";

  Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__byu_feature_card_byu_feature_card_js__ = __webpack_require__(1);
  /**
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
   **/

  /***/
},
/* 3 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* harmony import */
  var __WEBPACK_IMPORTED_MODULE_0__lib_templating__ = __webpack_require__(6);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__lib_matchesSelector__ = __webpack_require__(0);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__lib_querySelectorSlot__ = __webpack_require__(5);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__lib_createEvent__ = __webpack_require__(4);
  /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "a", function () {
    return __WEBPACK_IMPORTED_MODULE_0__lib_templating__["a"];
  });
  /* unused harmony reexport matchesSelector */
  /* unused harmony reexport querySelectorSlot */
  /* unused harmony reexport createEvent */
  /**
   * Created by ThatJoeMoore on 2/14/17
   */

  /***/
},
/* 4 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* unused harmony export default */
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

  function createEvent(name, detail) {
    if (typeof window.CustomEvent === 'function') {
      return new CustomEvent(name, { detail: detail, cancelable: true, bubbles: true });
    }
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(name, true, true, detail);
    return evt;
  }

  /***/
},
/* 5 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* unused harmony export default */
  /* harmony import */
  var __WEBPACK_IMPORTED_MODULE_0__matchesSelector_js__ = __webpack_require__(0);
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

  function querySelectorSlot(slot, selector) {
    var roots = slot.assignedNodes({ flatten: true }).filter(function (n) {
      return n.nodeType === Node.ELEMENT_NODE;
    });

    for (var i = 0, len = roots.length; i < len; i++) {
      var each = roots[i];
      if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__matchesSelector_js__["a" /* default */])(each, selector)) {
        return each;
      }
      var child = each.querySelector(selector);
      if (child) {
        return child;
      }
    }
    return null;
  }

  /***/
},
/* 6 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* harmony export (immutable) */
  __webpack_exports__["a"] = applyTemplate;
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_0_hash_sum__ = __webpack_require__(9);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_0_hash_sum___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hash_sum__);
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

    if (window.ShadyCSS && !window.ShadyCSS.nativeShadow) {
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
/* 7 */
/***/function (module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(8)();
  // imports


  // module
  exports.push([module.i, "/*!\r\n *  @license\r\n *    Copyright 2017 Brigham Young University\r\n *\r\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\r\n *    you may not use this file except in compliance with the License.\r\n *    You may obtain a copy of the License at\r\n *\r\n *        http://www.apache.org/licenses/LICENSE-2.0\r\n *\r\n *    Unless required by applicable law or agreed to in writing, software\r\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\r\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\r\n *    See the License for the specific language governing permissions and\r\n *    limitations under the License.\r\n */\n/*!\r\n *  @license\r\n *    Copyright 2017 Brigham Young University\r\n *\r\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\r\n *    you may not use this file except in compliance with the License.\r\n *    You may obtain a copy of the License at\r\n *\r\n *        http://www.apache.org/licenses/LICENSE-2.0\r\n *\r\n *    Unless required by applicable law or agreed to in writing, software\r\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\r\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\r\n *    See the License for the specific language governing permissions and\r\n *    limitations under the License.\r\n */:host{width:30%}:host .root{margin:10px;display:flex;flex-direction:column;box-sizing:border-box;border:1px solid #e6e6e6}:host .title-slotted-content{width:100%;height:50px;padding:13px;align-items:center;box-sizing:inherit;flex:1;display:flex}:host .title-container{flex-grow:1}:host .logo-container,:host .logo-container img{height:23px}:host .feature-container{padding:5px;margin:0;box-sizing:inherit}:host .first-row{box-sizing:inherit;padding:5px;display:flex}:host .left-slot-container{order:1;padding:10px}:host .right-slot-container{order:2;padding:10px}:host .center-slot-container{width:100%;padding:7px;align-items:flex-end;box-sizing:inherit}:host([without-logo]) .logo-container{display:none}:host(.navy-title) .title-slotted-content{background-color:#002e5d;color:#fff}:host(.navy-title) .title-slotted-content a{color:#fff}:host(.dark-gray-title) .title-slotted-content{background-color:#141414;color:#fff}:host(.dark-gray-title) .title-slotted-content a{color:#fff}:host(.wordpress-gray-title) .title-slotted-content{background-color:#585858;color:#fff}:host(.wordpress-gray-title) .title-slotted-content a{color:#fff}:host(.drupal-blue-title) .title-slotted-content{background-color:#0644be;color:#fff}:host(.drupal-blue-title) .title-slotted-content a{color:#fff}:host(.royal-blue-title) .title-slotted-content{background-color:#003da5;color:#fff}:host(.royal-blue-title) .title-slotted-content a{color:#fff}:host(.gray-title) .title-slotted-content{background-color:#767676;color:#fff}:host(.gray-title) .title-slotted-content a{color:#fff}.title-slotted-content{background-color:var(--byu-feature-card-title-background,#002e5d);color:var(--byu-feature-card-title-color,#fff)}.left-slot-container{width:var(--byu-feature-left-width,50%)}.right-slot-container{width:var(--byu-feature-right-width,50%)}", ""]);

  // exports


  /***/
},
/* 8 */
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
/* 9 */
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
},
/* 10 */
/***/function (module, exports, __webpack_require__) {

  module.exports = "<style>" + __webpack_require__(7) + "</style> <div class=\"root\"> <div class=\"title-slotted-content\"> <div class=\"title-container\"> <slot name=\"title\" id=\"title\"></slot> </div> <div class=\"logo-container\"> <img id=\"byu-logo\" alt=\"Card Logo\" src=\"//cdn.byu.edu/shared-icons/unstable/logos/byu-serif-white.svg\"> </div> </div> <div class=\"first-row\"> <div class=\"left-slot-container\"> <slot name=\"feature-left\" id=\"feature-left\"></slot> </div> <div class=\"right-slot-container\"> <slot name=\"feature-right\" id=\"feature-right\"></slot> </div> </div> <div class=\"center-slot-container\"> <slot name=\"feature-center\" id=\"feature-center\"></slot> </div> </div>";

  /***/
}]
/******/);
}());

//# sourceMappingURL=components-compat.js.map
