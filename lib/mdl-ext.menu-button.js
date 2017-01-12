(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("menu-button", [], factory);
	else if(typeof exports === 'object')
		exports["menu-button"] = factory();
	else
		root["mdl-ext"] = root["mdl-ext"] || {}, root["mdl-ext"]["menu-button"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _classCallCheck2 = __webpack_require__(84);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(85);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _toConsumableArray2 = __webpack_require__(41);
	
	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
	
	var _stringUtils = __webpack_require__(63);
	
	var _fullThrottle = __webpack_require__(56);
	
	var _fullThrottle2 = _interopRequireDefault(_fullThrottle);
	
	var _constants = __webpack_require__(29);
	
	var _domUtils = __webpack_require__(72);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @license
	 * Copyright 2016 Leif Olsen. All Rights Reserved.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *      http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *
	 * This code is built with Google Material Design Lite,
	 * which is Licensed under the Apache License, Version 2.0
	 */
	
	/**
	 * A menu button is a button that opens a menu. It is often styled as a
	 * typical push button with a downward pointing arrow or triangle to hint
	 * that activating the button will display a menu.
	 */
	var JS_MENU_BUTTON = 'mdlext-js-menu-button';
	var MENU_BUTTON_MENU = 'mdlext-menu';
	var MENU_BUTTON_MENU_ITEM = 'mdlext-menu__item';
	var MENU_BUTTON_MENU_ITEM_SEPARATOR = 'mdlext-menu__item-separator';
	//const MDL_LAYOUT_CONTENT = 'mdl-layout__content';
	
	/**
	 * Creates the menu controlled by the menu button
	 * @param element
	 * @return {{element: Element, selected: Element, open: (function(*=)), removeListeners: (function()), downgrade: (function())}}
	 */
	
	var menuFactory = function menuFactory(element) {
	
	  var ariaControls = null;
	  var parentNode = null;
	
	  var removeAllSelected = function removeAllSelected() {
	    [].concat((0, _toConsumableArray3.default)(element.querySelectorAll('.' + MENU_BUTTON_MENU_ITEM + '[aria-selected="true"]'))).forEach(function (selectedItem) {
	      return selectedItem.removeAttribute('aria-selected');
	    });
	  };
	
	  var setSelected = function setSelected(item) {
	    var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	
	    if (force || item && !item.hasAttribute('aria-selected')) {
	      removeAllSelected();
	      if (item) {
	        item.setAttribute('aria-selected', 'true');
	      }
	    }
	  };
	
	  var getSelected = function getSelected() {
	    return element.querySelector('.' + MENU_BUTTON_MENU_ITEM + '[aria-selected="true"]');
	  };
	
	  var isDisabled = function isDisabled(item) {
	    return item && item.hasAttribute('disabled');
	  };
	
	  var isSeparator = function isSeparator(item) {
	    return item && item.classList.contains(MENU_BUTTON_MENU_ITEM_SEPARATOR);
	  };
	
	  var focus = function focus(item) {
	    if (item) {
	      item = item.closest('.' + MENU_BUTTON_MENU_ITEM);
	    }
	    if (item) {
	      item.focus();
	    }
	  };
	
	  var nextItem = function nextItem(current) {
	    var n = current.nextElementSibling;
	    if (!n) {
	      n = element.firstElementChild;
	    }
	    if (!isDisabled(n) && !isSeparator(n)) {
	      focus(n);
	    } else {
	      var i = element.children.length;
	      while (n && i-- > 0) {
	        if (isDisabled(n) || isSeparator(n)) {
	          n = n.nextElementSibling;
	          if (!n) {
	            n = element.firstElementChild;
	          }
	        } else {
	          focus(n);
	          break;
	        }
	      }
	    }
	  };
	
	  var previousItem = function previousItem(current) {
	    var p = current.previousElementSibling;
	    if (!p) {
	      p = element.lastElementChild;
	    }
	    if (!isDisabled(p) && !isSeparator(p)) {
	      focus(p);
	    } else {
	      var i = element.children.length;
	      while (p && i-- > 0) {
	        if (isDisabled(p) || isSeparator(p)) {
	          p = p.previousElementSibling;
	          if (!p) {
	            p = element.lastElementChild;
	          }
	        } else {
	          focus(p);
	          break;
	        }
	      }
	    }
	  };
	
	  var firstItem = function firstItem() {
	    var item = element.firstElementChild;
	    if (isDisabled(item) || isSeparator(item)) {
	      nextItem(item);
	    } else {
	      focus(item);
	    }
	  };
	
	  var lastItem = function lastItem() {
	    var item = element.lastElementChild;
	    if (isDisabled(item) || isSeparator(item)) {
	      previousItem(item);
	    } else {
	      focus(item);
	    }
	  };
	
	  var selectItem = function selectItem(item) {
	    if (item && !isDisabled(item) && !isSeparator(item)) {
	      setSelected(item);
	      close(true, item);
	    }
	  };
	
	  var keyDownHandler = function keyDownHandler(event) {
	
	    var item = event.target.closest('.' + MENU_BUTTON_MENU_ITEM);
	
	    switch (event.keyCode) {
	      case _constants.VK_ARROW_UP:
	      case _constants.VK_ARROW_LEFT:
	        if (item) {
	          previousItem(item);
	        } else {
	          firstItem();
	        }
	        break;
	
	      case _constants.VK_ARROW_DOWN:
	      case _constants.VK_ARROW_RIGHT:
	        if (item) {
	          nextItem(item);
	        } else {
	          lastItem();
	        }
	        break;
	
	      case _constants.VK_HOME:
	        firstItem();
	        break;
	
	      case _constants.VK_END:
	        lastItem();
	        break;
	
	      case _constants.VK_SPACE:
	      case _constants.VK_ENTER:
	        selectItem(item);
	        break;
	
	      case _constants.VK_ESC:
	        close(true);
	        break;
	
	      case _constants.VK_TAB:
	        // We do not have a "natural" tab order from menu, so the best we can do is to set focus back to the button
	        close(true);
	        break;
	
	      default:
	        return;
	    }
	    event.preventDefault();
	  };
	
	  var blurHandler = function blurHandler(event) {
	
	    // See: https://github.com/facebook/react/issues/2011
	    var t = event.relatedTarget || event.explicitOriginalTarget || // FF
	    document.activeElement; // IE11
	
	    //console.log('***** blur, target, relatedTarget', event.target, t);
	
	    try {
	      if (t) {
	        if (t.closest('.' + MENU_BUTTON_MENU) !== element && shouldClose(t)) {
	          close();
	        }
	      } else {
	        close();
	      }
	    } catch (err) {
	      // FF throws error: "TypeError: n.closest is not a function" if related target is a text node
	      close();
	    }
	  };
	
	  var clickHandler = function clickHandler(event) {
	    //console.log('***** click, target', event.target);
	
	    event.preventDefault();
	    var t = event.target;
	    if (t && t.closest('.' + MENU_BUTTON_MENU) === element) {
	      var item = t.closest('.' + MENU_BUTTON_MENU_ITEM);
	      if (item) {
	        selectItem(item);
	      }
	    } else {
	      if (shouldClose(t)) {
	        close();
	      }
	    }
	  };
	
	  var touchStartHandler = function touchStartHandler(event) {
	    //console.log('***** touchStart, target', event.target);
	
	    var t = event.target;
	    if (!(t && t.closest('.' + MENU_BUTTON_MENU) === element)) {
	      if (event.type === 'touchstart') {
	        event.preventDefault();
	      }
	      close();
	    }
	  };
	
	  var addListeners = function addListeners() {
	    element.addEventListener('keydown', keyDownHandler, false);
	    element.addEventListener('blur', blurHandler, true);
	    element.addEventListener('click', clickHandler, true);
	    document.documentElement.addEventListener('touchstart', touchStartHandler, true);
	  };
	
	  var _removeListeners = function _removeListeners() {
	    element.removeEventListener('keydown', keyDownHandler, false);
	    element.removeEventListener('blur', blurHandler, true);
	    element.removeEventListener('click', clickHandler, true);
	    document.documentElement.removeEventListener('touchstart', touchStartHandler, true);
	  };
	
	  var _open = function _open(controlElement) {
	    var position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'first';
	
	
	    ariaControls = controlElement.closest('.' + JS_MENU_BUTTON);
	
	    element.style['min-width'] = Math.max(124, controlElement.getBoundingClientRect().width) + 'px';
	    element.removeAttribute('hidden');
	    (0, _domUtils.tether)(controlElement, element);
	
	    var item = void 0;
	    switch (position.toLowerCase()) {
	      case 'first':
	        firstItem();
	        break;
	
	      case 'last':
	        lastItem();
	        break;
	
	      case 'selected':
	        item = getSelected();
	        if (item && !item.hasAttribute('disabled')) {
	          focus(item);
	        } else {
	          firstItem();
	        }
	        break;
	    }
	
	    addListeners();
	  };
	
	  var shouldClose = function shouldClose(target) {
	    //console.log('***** shouldClose');
	
	    var result = false;
	    var btn = target && target.closest('.' + JS_MENU_BUTTON) || null;
	    if (!btn) {
	      result = true;
	    } else if (btn.getAttribute('aria-controls') === element.id) {
	      if (btn !== ariaControls) {
	        result = true;
	      }
	    } else {
	      result = true;
	    }
	    return result;
	  };
	
	  var close = function close() {
	    var forceFocus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	    var item = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	
	    _removeListeners();
	
	    element.dispatchEvent(new CustomEvent('_closemenu', {
	      bubbles: true,
	      cancelable: true,
	      detail: { forceFocus: forceFocus, item: item }
	    }));
	  };
	
	  var addWaiAria = function addWaiAria() {
	    if (!element.hasAttribute('id')) {
	      // Generate a random id
	      element.id = 'menu-button-' + (0, _stringUtils.randomString)();
	    }
	    element.setAttribute('tabindex', '-1');
	    element.setAttribute('role', 'menu');
	    element.setAttribute('hidden', '');
	
	    [].concat((0, _toConsumableArray3.default)(element.querySelectorAll('.' + MENU_BUTTON_MENU_ITEM))).forEach(function (menuitem) {
	      menuitem.setAttribute('tabindex', '-1');
	      menuitem.setAttribute('role', 'menuitem');
	    });
	
	    [].concat((0, _toConsumableArray3.default)(element.querySelectorAll('.' + MENU_BUTTON_MENU_ITEM_SEPARATOR))).forEach(function (menuitem) {
	      menuitem.setAttribute('role', 'separator');
	    });
	  };
	
	  var init = function init() {
	    addWaiAria();
	    parentNode = element.parentNode;
	    element.classList.add('is-upgraded');
	  };
	
	  var _downgrade = function _downgrade() {
	    _removeListeners();
	    if (element.parentNode !== parentNode) {
	      parentNode.appendChild(element);
	    }
	    element.classList.remove('is-upgraded');
	  };
	
	  init();
	
	  return {
	    /**
	     * Get the menu element
	     * @returns {Element} the menu element
	     */
	    get element() {
	      return element;
	    },
	
	    /**
	     * Set selected menu item
	     * @param item
	     */
	    set selected(item) {
	      setSelected(item, true);
	    },
	
	    /**
	     * Open menu
	     * @param {Element} controlElement the element where the menu should be aligned to
	     * @param {String} position menuElement item to receive focus after menu element is opened
	     */
	    open: function open(controlElement) {
	      var position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'first';
	      return _open(controlElement, position);
	    },
	
	    /**
	     * Remove event listeners.
	     */
	    removeListeners: function removeListeners() {
	      return _removeListeners();
	    },
	
	    /**
	     * Downgrade menu
	     */
	    downgrade: function downgrade() {
	      return _downgrade();
	    }
	  };
	};
	
	/**
	 * The menubutton component
	 */
	
	var MenuButton = function () {
	  function MenuButton(element) {
	    var _this = this;
	
	    (0, _classCallCheck3.default)(this, MenuButton);
	
	    this.keyDownHandler = function (event) {
	      if (!_this.isDisabled()) {
	        switch (event.keyCode) {
	          case _constants.VK_ARROW_UP:
	            _this.openMenu('last');
	            break;
	
	          case _constants.VK_ARROW_DOWN:
	            _this.openMenu();
	            break;
	
	          case _constants.VK_SPACE:
	          case _constants.VK_ENTER:
	            _this.openMenu('selected');
	            break;
	
	          case _constants.VK_ESC:
	            _this.closeMenu();
	            break;
	
	          case _constants.VK_TAB:
	            _this.closeMenu();
	            return;
	
	          default:
	            return;
	        }
	      }
	      //event.stopPropagation();
	      event.preventDefault();
	    };
	
	    this.clickHandler = function () {
	
	      if (!_this.isDisabled()) {
	        if (_this.element.getAttribute('aria-expanded').toLowerCase() === 'true') {
	          _this.closeMenu(true);
	        } else {
	          _this.openMenu('selected');
	        }
	      }
	    };
	
	    this.recalcMenuPosition = (0, _fullThrottle2.default)(function () {
	      var c = _this.focusElement.getBoundingClientRect();
	      var dx = _this.focusElementLastScrollPosition.left - c.left;
	      var dy = _this.focusElementLastScrollPosition.top - c.top;
	      var left = (parseFloat(_this.menu.element.style.left) || 0) - dx;
	      var top = (parseFloat(_this.menu.element.style.top) || 0) - dy;
	
	      _this.menu.element.style.left = left + 'px';
	      _this.menu.element.style.top = top + 'px';
	      _this.focusElementLastScrollPosition = c;
	    });
	
	    this.positionChangeHandler = function () {
	      _this.recalcMenuPosition(_this);
	    };
	
	    this.closeMenuHandler = function (event) {
	      if (event && event.detail) {
	        if (event.detail.item && event.detail.item !== _this.selectedItem) {
	          _this.selectedItem = event.detail.item;
	          _this.dispatchMenuSelect();
	        }
	        _this.closeMenu(event.detail.forceFocus);
	      }
	    };
	
	    this.element = element;
	    this.focusElement = undefined;
	    this.focusElementLastScrollPosition = undefined;
	    this.scrollElements = [];
	    this.menu = undefined;
	    this.selectedItem = null;
	    this.init();
	  }
	
	  /**
	   * Re-position menu if content is scrolled, window is resized or orientation change
	   * @see https://javascriptweblog.wordpress.com/2015/11/02/of-classes-and-arrow-functions-a-cautionary-tale/
	   */
	
	
	  (0, _createClass3.default)(MenuButton, [{
	    key: 'dispatchMenuSelect',
	    value: function dispatchMenuSelect() {
	      this.element.dispatchEvent(new CustomEvent('menuselect', {
	        bubbles: true,
	        cancelable: true,
	        detail: { source: this.selectedItem }
	      }));
	    }
	  }, {
	    key: 'isDisabled',
	    value: function isDisabled() {
	      return this.element.hasAttribute('disabled');
	    }
	  }, {
	    key: 'removeListeners',
	    value: function removeListeners() {
	      this.element.removeEventListener('keydown', this.keyDownHandler);
	      this.element.removeEventListener('click', this.clickHandler);
	    }
	  }, {
	    key: 'openMenu',
	    value: function openMenu() {
	      var _this2 = this;
	
	      var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'first';
	
	      if (!this.isDisabled() && this.menu) {
	
	        // Close the menu if button position change
	        this.scrollElements = (0, _domUtils.getScrollParents)(this.element);
	        this.scrollElements.forEach(function (el) {
	          return el.addEventListener('scroll', _this2.positionChangeHandler);
	        });
	        window.addEventListener('resize', this.positionChangeHandler);
	        window.addEventListener('orientationchange', this.positionChangeHandler);
	        this.menu.element.addEventListener('_closemenu', this.closeMenuHandler);
	
	        this.menu.selected = this.selectedItem;
	        this.menu.open(this.focusElement, position);
	        this.element.setAttribute('aria-expanded', 'true');
	
	        this.focusElementLastScrollPosition = this.focusElement.getBoundingClientRect();
	      }
	    }
	  }, {
	    key: 'closeMenu',
	    value: function closeMenu() {
	      var _this3 = this;
	
	      var forceFocus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	
	      if (this.menu) {
	        this.menu.removeListeners();
	        this.scrollElements.forEach(function (el) {
	          return el.removeEventListener('scroll', _this3.positionChangeHandler);
	        });
	        window.removeEventListener('resize', this.positionChangeHandler);
	        window.removeEventListener('orientationchange', this.positionChangeHandler);
	        this.menu.element.removeEventListener('_closemenu', this.closeMenuHandler);
	
	        if (forceFocus) {
	          this.focus();
	        }
	        this.element.setAttribute('aria-expanded', 'false');
	        this.menu.element.setAttribute('hidden', '');
	      }
	    }
	  }, {
	    key: 'focus',
	    value: function focus() {
	      if (!this.isDisabled()) {
	        this.focusElement.focus();
	      }
	    }
	  }, {
	    key: 'init',
	    value: function init() {
	      var _this4 = this;
	
	      var addListeners = function addListeners() {
	        _this4.element.addEventListener('keydown', _this4.keyDownHandler);
	        _this4.element.addEventListener('click', _this4.clickHandler);
	      };
	
	      var addWaiAria = function addWaiAria() {
	        _this4.element.setAttribute('role', 'button');
	        _this4.element.setAttribute('aria-expanded', 'false');
	        _this4.element.setAttribute('aria-haspopup', 'true');
	      };
	
	      var addFocusElement = function addFocusElement() {
	        _this4.focusElement = _this4.element.querySelector('input[type="text"]');
	        if (!_this4.focusElement) {
	          _this4.focusElement = _this4.element;
	
	          if (!(_this4.focusElement.tagName.toLowerCase() === 'button' || _this4.focusElement.tagName.toLowerCase() === 'input')) {
	            if (!_this4.focusElement.hasAttribute('tabindex')) {
	              _this4.focusElement.setAttribute('tabindex', '0');
	            }
	          }
	        }
	      };
	
	      var moveElementToDocumentBody = function moveElementToDocumentBody(element) {
	        // To position an element on top of all other z-indexed elements, the element should be moved to document.body
	        //       See: https://philipwalton.com/articles/what-no-one-told-you-about-z-index/
	
	        if (element.parentNode !== document.body) {
	          return document.body.appendChild(element);
	        }
	        return element;
	      };
	
	      var findMenuElement = function findMenuElement() {
	        var menuElement = void 0;
	        var menuElementId = _this4.element.getAttribute('aria-controls');
	        if (menuElementId !== null) {
	          menuElement = document.querySelector('#' + menuElementId);
	        } else {
	          menuElement = _this4.element.parentNode.querySelector('.' + MENU_BUTTON_MENU);
	        }
	        return menuElement;
	      };
	
	      var addMenu = function addMenu() {
	        var menuElement = findMenuElement();
	        if (menuElement) {
	          if (menuElement.componentInstance) {
	            _this4.menu = menuElement.componentInstance;
	          } else {
	            _this4.menu = menuFactory(menuElement);
	            menuElement.componentInstance = _this4.menu;
	            moveElementToDocumentBody(menuElement);
	          }
	          _this4.element.setAttribute('aria-controls', _this4.menu.element.id);
	        }
	      };
	
	      addFocusElement();
	      addWaiAria();
	      addMenu();
	      this.removeListeners();
	      addListeners();
	    }
	  }, {
	    key: 'downgrade',
	    value: function downgrade() {
	      var _this5 = this;
	
	      if (this.menu) {
	        // Do not downgrade menu if there are other buttons sharing this menu
	        var related = [].concat((0, _toConsumableArray3.default)(document.querySelectorAll('.' + JS_MENU_BUTTON + '[aria-controls="' + this.element.getAttribute('aria-controls') + '"]')));
	        if (related.filter(function (c) {
	          return c !== _this5.element && c.getAttribute('data-upgraded').indexOf('MaterialExtMenuButton') >= 0;
	        }).length === 0) {
	          this.menu.downgrade();
	        }
	      }
	      this.removeListeners();
	    }
	  }]);
	  return MenuButton;
	}();
	
	(function () {
	  'use strict';
	
	  /**
	   * https://github.com/google/material-design-lite/issues/4205
	   * @constructor
	   * @param {Element} element The element that will be upgraded.
	   */
	
	  var MaterialExtMenuButton = function MaterialExtMenuButton(element) {
	    this.element_ = element;
	    this.menuButton_ = null;
	
	    // Initialize instance.
	    this.init();
	  };
	  window['MaterialExtMenuButton'] = MaterialExtMenuButton;
	
	  // Public methods.
	
	  /**
	   * Get the menu element controlled by this button, null if no menu is controlled by this button
	   * @public
	   */
	  MaterialExtMenuButton.prototype.getMenuElement = function () {
	    return this.menuButton_.menu ? this.menuButton_.menu.element : null;
	  };
	  MaterialExtMenuButton.prototype['getMenuElement'] = MaterialExtMenuButton.prototype.getMenuElement;
	
	  /**
	   * Open menu
	   * @public
	   * @param {String} position one of "first", "last" or "selected"
	   */
	  MaterialExtMenuButton.prototype.openMenu = function (position) {
	    this.menuButton_.openMenu(position);
	  };
	  MaterialExtMenuButton.prototype['openMenu'] = MaterialExtMenuButton.prototype.openMenu;
	
	  /**
	   * Close menu
	   * @public
	   */
	  MaterialExtMenuButton.prototype.closeMenu = function () {
	    this.menuButton_.closeMenu(true);
	  };
	  MaterialExtMenuButton.prototype['closeMenu'] = MaterialExtMenuButton.prototype.closeMenu;
	
	  /**
	   * Get selected menu item
	   * @public
	   * @returns {Element} The selected menu item or null if no item selected
	   */
	  MaterialExtMenuButton.prototype.getSelectedMenuItem = function () {
	    return this.menuButton_.selectedItem;
	  };
	  MaterialExtMenuButton.prototype['getSelectedMenuItem'] = MaterialExtMenuButton.prototype.getSelectedMenuItem;
	
	  /**
	   * Set (default) selected menu item
	   * @param {Element} item
	   */
	  MaterialExtMenuButton.prototype.setSelectedMenuItem = function (item) {
	    this.menuButton_.selectedItem = item;
	  };
	  MaterialExtMenuButton.prototype['setSelectedMenuItem'] = MaterialExtMenuButton.prototype.setSelectedMenuItem;
	
	  /**
	   * Initialize component
	   */
	  MaterialExtMenuButton.prototype.init = function () {
	    if (this.element_) {
	      this.menuButton_ = new MenuButton(this.element_);
	      this.element_.addEventListener('mdl-componentdowngraded', this.mdlDowngrade_.bind(this));
	      this.element_.classList.add(_constants.IS_UPGRADED);
	    }
	  };
	
	  /**
	   * Downgrade component
	   * E.g remove listeners and clean up resources
	   */
	  MaterialExtMenuButton.prototype.mdlDowngrade_ = function () {
	    this.menuButton_.downgrade();
	  };
	
	  // The component registers itself. It can assume componentHandler is available
	  // in the global scope.
	  /* eslint no-undef: 0 */
	  componentHandler.register({
	    constructor: MaterialExtMenuButton,
	    classAsString: 'MaterialExtMenuButton',
	    cssClass: JS_MENU_BUTTON,
	    widget: true
	  });
	})();

/***/ },
/* 1 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 2 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(23)('wks')
	  , uid        = __webpack_require__(25)
	  , Symbol     = __webpack_require__(1).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(6)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(7);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(1)
	  , core      = __webpack_require__(2)
	  , ctx       = __webpack_require__(20)
	  , hide      = __webpack_require__(9)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(10)
	  , createDesc = __webpack_require__(14);
	module.exports = __webpack_require__(4) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(5)
	  , IE8_DOM_DEFINE = __webpack_require__(31)
	  , toPrimitive    = __webpack_require__(34)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(4) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(23)('keys')
	  , uid    = __webpack_require__(25);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(28)
	  , defined = __webpack_require__(12);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(12);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 19 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(26);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(7)
	  , document = __webpack_require__(1).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(1)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(13)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 25 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(32)
	  , enumBugKeys = __webpack_require__(22);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(19);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 29 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var VK_TAB = 9;
	var VK_ENTER = 13;
	var VK_ESC = 27;
	var VK_SPACE = 32;
	var VK_PAGE_UP = 33;
	var VK_PAGE_DOWN = 34;
	var VK_END = 35;
	var VK_HOME = 36;
	var VK_ARROW_LEFT = 37;
	var VK_ARROW_UP = 38;
	var VK_ARROW_RIGHT = 39;
	var VK_ARROW_DOWN = 40;
	
	var ARIA_EXPANDED = 'aria-expanded';
	var ARIA_HIDDEN = 'aria-hidden';
	var ARIA_MULTISELECTABLE = 'aria-multiselectable';
	var ARIA_SELECTED = 'aria-selected';
	
	var IS_DIRTY = 'is-dirty';
	var IS_DISABLED = 'is-disabled';
	var IS_EXPANDED = 'is-expanded';
	var IS_FOCUSED = 'is-focused';
	var IS_INVALID = 'is-invalid';
	var IS_UPGRADED = 'is-upgraded';
	var DATA_UPGRADED = 'data-upgraded';
	
	var MDL_RIPPLE = 'mdl-ripple';
	var MDL_RIPPLE_COMPONENT = 'MaterialRipple';
	var MDL_RIPPLE_CONTAINER = 'mdlext-carousel__slide__ripple-container';
	var MDL_RIPPLE_EFFECT = 'mdl-js-ripple-effect';
	var MDL_RIPPLE_EFFECT_IGNORE_EVENTS = 'mdl-js-ripple-effect--ignore-events';
	
	exports.VK_TAB = VK_TAB;
	exports.VK_ENTER = VK_ENTER;
	exports.VK_ESC = VK_ESC;
	exports.VK_SPACE = VK_SPACE;
	exports.VK_PAGE_UP = VK_PAGE_UP;
	exports.VK_PAGE_DOWN = VK_PAGE_DOWN;
	exports.VK_END = VK_END;
	exports.VK_HOME = VK_HOME;
	exports.VK_ARROW_LEFT = VK_ARROW_LEFT;
	exports.VK_ARROW_UP = VK_ARROW_UP;
	exports.VK_ARROW_RIGHT = VK_ARROW_RIGHT;
	exports.VK_ARROW_DOWN = VK_ARROW_DOWN;
	exports.ARIA_EXPANDED = ARIA_EXPANDED;
	exports.ARIA_HIDDEN = ARIA_HIDDEN;
	exports.ARIA_MULTISELECTABLE = ARIA_MULTISELECTABLE;
	exports.ARIA_SELECTED = ARIA_SELECTED;
	exports.IS_DIRTY = IS_DIRTY;
	exports.IS_DISABLED = IS_DISABLED;
	exports.IS_EXPANDED = IS_EXPANDED;
	exports.IS_FOCUSED = IS_FOCUSED;
	exports.IS_INVALID = IS_INVALID;
	exports.IS_UPGRADED = IS_UPGRADED;
	exports.DATA_UPGRADED = DATA_UPGRADED;
	exports.MDL_RIPPLE = MDL_RIPPLE;
	exports.MDL_RIPPLE_COMPONENT = MDL_RIPPLE_COMPONENT;
	exports.MDL_RIPPLE_CONTAINER = MDL_RIPPLE_CONTAINER;
	exports.MDL_RIPPLE_EFFECT = MDL_RIPPLE_EFFECT;
	exports.MDL_RIPPLE_EFFECT_IGNORE_EVENTS = MDL_RIPPLE_EFFECT_IGNORE_EVENTS;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(16)
	  , toLength  = __webpack_require__(24)
	  , toIndex   = __webpack_require__(33);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(4) && !__webpack_require__(6)(function(){
	  return Object.defineProperty(__webpack_require__(21)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(11)
	  , toIObject    = __webpack_require__(16)
	  , arrayIndexOf = __webpack_require__(30)(false)
	  , IE_PROTO     = __webpack_require__(15)('IE_PROTO');
	
	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(13)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(7);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(10).f
	  , has = __webpack_require__(11)
	  , TAG = __webpack_require__(3)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(54)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(38)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(19)
	  , TAG = __webpack_require__(3)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(49)
	  , $export        = __webpack_require__(8)
	  , redefine       = __webpack_require__(53)
	  , hide           = __webpack_require__(9)
	  , has            = __webpack_require__(11)
	  , Iterators      = __webpack_require__(18)
	  , $iterCreate    = __webpack_require__(47)
	  , setToStringTag = __webpack_require__(35)
	  , getPrototypeOf = __webpack_require__(52)
	  , ITERATOR       = __webpack_require__(3)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(37)
	  , ITERATOR  = __webpack_require__(3)('iterator')
	  , Iterators = __webpack_require__(18);
	module.exports = __webpack_require__(2).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(42), __esModule: true };

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _from = __webpack_require__(40);
	
	var _from2 = _interopRequireDefault(_from);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }
	
	    return arr2;
	  } else {
	    return (0, _from2.default)(arr);
	  }
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(36);
	__webpack_require__(55);
	module.exports = __webpack_require__(2).Array.from;

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(10)
	  , createDesc      = __webpack_require__(14);
	
	module.exports = function(object, index, value){
	  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1).document && document.documentElement;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(18)
	  , ITERATOR   = __webpack_require__(3)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(5);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(50)
	  , descriptor     = __webpack_require__(14)
	  , setToStringTag = __webpack_require__(35)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(9)(IteratorPrototype, __webpack_require__(3)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(3)('iterator')
	  , SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	
	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 49 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(5)
	  , dPs         = __webpack_require__(51)
	  , enumBugKeys = __webpack_require__(22)
	  , IE_PROTO    = __webpack_require__(15)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(21)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(44).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};
	
	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(10)
	  , anObject = __webpack_require__(5)
	  , getKeys  = __webpack_require__(27);
	
	module.exports = __webpack_require__(4) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(11)
	  , toObject    = __webpack_require__(17)
	  , IE_PROTO    = __webpack_require__(15)('IE_PROTO')
	  , ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(9);

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(13)
	  , defined   = __webpack_require__(12);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx            = __webpack_require__(20)
	  , $export        = __webpack_require__(8)
	  , toObject       = __webpack_require__(17)
	  , call           = __webpack_require__(46)
	  , isArrayIter    = __webpack_require__(45)
	  , toLength       = __webpack_require__(24)
	  , createProperty = __webpack_require__(43)
	  , getIterFn      = __webpack_require__(39);
	
	$export($export.S + $export.F * !__webpack_require__(48)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _apply = __webpack_require__(57);
	
	var _apply2 = _interopRequireDefault(_apply);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Since some events can fire at a high rate, the event handler should be limited to execute computationally
	 * expensive operations, such as DOM modifications, inside a single rendered frame.
	 * When listening to e.g. scroll and resize events, the browser tends to fire off more events per
	 * second than are actually useful. For instance, if your event listener sets some element positions, then it
	 * is possible for those positions to be updated multiple times in a single rendered frame. In this case, all of
	 * the layout calculations triggered by setting the elements' positions will be wasted except for the one time that
	 * it runs immediately prior to the browser rendering the updated layout to the screen.
	 * To avoid wasting cycles, we can use requestAnimationFrame to only run the event listener once just before the page
	 * is rendered to the screen.
	 * *
	 * @param callback the function to throttle
	 * @param context  optional context of this, default to global
	 * @return {function(...[*])}
	 */
	var fullThrottle = function fullThrottle(callback, context) {
	
	  if (!context) {
	    context = undefined || window;
	  }
	
	  var throttling = false;
	
	  return function () {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    if (!throttling) {
	      throttling = true;
	      window.requestAnimationFrame(function () {
	        throttling = false;
	        return (0, _apply2.default)(callback, context, args);
	      });
	    }
	  };
	};
	
	exports.default = fullThrottle;
	module.exports = exports["default"];

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(58), __esModule: true };

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(60);
	module.exports = __webpack_require__(2).Reflect.apply;

/***/ },
/* 59 */,
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
	var $export   = __webpack_require__(8)
	  , aFunction = __webpack_require__(26)
	  , anObject  = __webpack_require__(5)
	  , rApply    = (__webpack_require__(1).Reflect || {}).apply
	  , fApply    = Function.apply;
	// MS Edge argumentsList argument is optional
	$export($export.S + $export.F * !__webpack_require__(6)(function(){
	  rApply(function(){});
	}), 'Reflect', {
	  apply: function apply(target, thisArgument, argumentsList){
	    var T = aFunction(target)
	      , L = anObject(argumentsList);
	    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
	  }
	});

/***/ },
/* 61 */,
/* 62 */,
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * @license
	 * Copyright 2016 Leif Olsen. All Rights Reserved.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *      http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	
	/**
	 * A javascript utility for conditionally creating a list of strings.
	 * The function takes any number of arguments which can be a string or object.
	 * Inspired by (but not copied from) JedWatson/classnames, https://github.com/JedWatson/classnames
	 *
	 * @param  {*} args the strings and/or objects to
	 * @return {Array} a list of strings
	 * @example
	 * // Returns ['foo', 'bar', 'baz', 'quux']
	 * stringList(', ', 'foo', { bar: true, duck: false }, 'baz', { quux: true });
	 * @example see the tests for more examples
	 */
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.stringList = exports.randomString = exports.joinStrings = undefined;
	
	var _keys = __webpack_require__(64);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var stringList = function stringList() {
	  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }
	
	  var isString = function isString(str) {
	    return str != null && typeof str === 'string';
	  };
	
	  var flatten = function flatten(list) {
	    return list.reduce(function (a, b) {
	      return a.concat(Array.isArray(b) ? flatten(b) : b);
	    }, []);
	  };
	
	  var objectToStrings = function objectToStrings(arg) {
	    return (0, _keys2.default)(arg).filter(function (key) {
	      return arg[key];
	    }).map(function (key) {
	      return key;
	    });
	  };
	
	  return args.filter(function (arg) {
	    return !!arg;
	  }).map(function (arg) {
	    return isString(arg) ? arg : objectToStrings(arg);
	  }).reduce(function (result, arg) {
	    return result.concat(Array.isArray(arg) ? flatten(arg) : arg);
	  }, []);
	};
	
	/**
	 * A simple javascript utility for conditionally joining strings together.
	 * The function takes a delimiter string and any number of arguments which can be a string or object.
	 *
	 * @param delimiter delimiter to separate joined strings
	 * @param  {*} args the strings and/or objects to join
	 * @return {String} the joined strings
	 * @example
	 * // Returns 'foo, bar, baz, quux'
	 * joinStrings(', ', 'foo', { bar: true, duck: false }, 'baz', { quux: true });
	 * @example see the tests for more examples
	 */
	var joinStrings = function joinStrings() {
	  for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	    args[_key2 - 1] = arguments[_key2];
	  }
	
	  var delimiter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ' ';
	  return stringList.apply(undefined, args).join(delimiter);
	};
	
	/**
	 * Generates a random string with a given length
	 * @param n {Integer} length of generated string
	 * @see http://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
	 * @return {String} the random string
	 * @example
	 * // Returns e.g. 'pd781w0y'
	 * randomString(8);
	 * @example see the tests for more examples
	 */
	var randomString = function randomString() {
	  var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 12;
	  return Array(n + 1).join((Math.random().toString(36) + '00000000000000000').slice(2, 18)).slice(0, n);
	};
	
	exports.joinStrings = joinStrings;
	exports.randomString = randomString;
	exports.stringList = stringList;

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(66), __esModule: true };

/***/ },
/* 65 */,
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(71);
	module.exports = __webpack_require__(2).Object.keys;

/***/ },
/* 67 */,
/* 68 */,
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(8)
	  , core    = __webpack_require__(2)
	  , fails   = __webpack_require__(6);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 70 */,
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(17)
	  , $keys    = __webpack_require__(27);
	
	__webpack_require__(69)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 72 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Remove child element(s)
	 * element.innerHTNL = '' has a performance penality!
	 * @see http://jsperf.com/empty-an-element/16
	 * @see http://jsperf.com/force-reflow
	 * @param element
	 * @param forceReflow
	 */
	var removeChildElements = function removeChildElements(element) {
	  var forceReflow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	
	
	  // See: http://jsperf.com/empty-an-element/16
	  while (element.lastChild) {
	    element.removeChild(element.lastChild);
	  }
	  if (forceReflow) {
	    // See: http://jsperf.com/force-reflow
	    var d = element.style.display;
	
	    element.style.display = 'none';
	    element.style.display = d;
	  }
	};
	
	/**
	 * Moves child elements from a DOM node to another dom node.
	 * @param source {HTMLElement}
	 * @param target {HTMLElement} If the target parameter is ommited, a document fragment is created
	 * @return {HTMLElement} The target node
	 *
	 * @example
	 * // Moves child elements from a DOM node to another dom node.
	 * moveElements(source, destination);
	 *
	 * @example
	 * // If the second parameter is ommited, a document fragment is created:
	 * let fragment = moveElements(source);
	 *
	 * @See: https://github.com/webmodules/dom-move
	 */
	var moveElements = function moveElements(source, target) {
	  if (!target) {
	    target = source.ownerDocument.createDocumentFragment();
	  }
	  while (source.firstChild) {
	    target.appendChild(source.firstChild);
	  }
	  return target;
	};
	
	/**
	 * Get the browser viewport dimensions
	 * @see http://stackoverflow.com/questions/1248081/get-the-browser-viewport-dimensions-with-javascript
	 * @return {{windowWidth: number, windowHeight: number}}
	 */
	var getWindowViewport = function getWindowViewport() {
	  return {
	    viewportWidth: Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0),
	    viewportHeight: Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
	  };
	};
	
	/**
	 * Check whether an element is in the window viewport
	 * @see http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport/
	 * @param top
	 * @param left
	 * @param bottom
	 * @param right
	 * @return {boolean} true if rectangle is inside window viewport, otherwise false
	 */
	var isRectInsideWindowViewport = function isRectInsideWindowViewport(_ref) {
	  var top = _ref.top,
	      left = _ref.left,
	      bottom = _ref.bottom,
	      right = _ref.right;
	
	  var _getWindowViewport = getWindowViewport(),
	      viewportWidth = _getWindowViewport.viewportWidth,
	      viewportHeight = _getWindowViewport.viewportHeight;
	
	  return top >= 0 && left >= 0 && bottom <= viewportHeight && right <= viewportWidth;
	};
	
	/**
	 * Get a list of parent elements that can possibly scroll
	 * @param el the element to get parents for
	 * @returns {Array}
	 */
	var getScrollParents = function getScrollParents(el) {
	  var elements = [];
	  for (el = el.parentNode; el; el = el.parentNode) {
	    var cs = window.getComputedStyle(el);
	    if (!(cs.overflowY === 'hidden' && cs.overflowX === 'hidden')) {
	      elements.unshift(el);
	    }
	    if (el === document.body) {
	      break;
	    }
	  }
	  return elements;
	};
	
	/**
	 * Position element next to button
	 *
	 * Positioning strategy
	 *  1. element.height > viewport.height
	 *     let element.height = viewport.heigt
	 *     let element.overflow-y = auto
	 *  2. element.width > viewport.width
	 *     let element.width = viewport.width
	 *  3. position element below button, align left edge of element with button left
	 *       done if element inside viewport
	 *  4. position element below button, align right edge of element with button right
	 *       done if element inside viewport
	 *  5. positions element above button, aligns left edge of element with button left
	 *       done if element inside viewport
	 *  6. position element above the control element, aligned to its right.
	 *       done if element inside viewport
	 *  7. position element at button right hand side, aligns element top with button top
	 *       done if element inside viewport
	 *  8. position element at button left hand side, aligns element top with button top
	 *       done if element inside viewport
	 *  9. position element inside viewport
	 *     1. position element at viewport bottom
	 *     2. position element at button right hand side
	 *        done if element inside viewport
	 *     3. position element at button left hand side
	 *       done if element inside viewport
	 *     4. position element at viewport right
	 * 10. done
	 *
	 */
	var tether = function tether(controlledBy, element) {
	  var controlRect = controlledBy.getBoundingClientRect();
	
	  // 1. will element height fit inside window viewport?
	
	  var _getWindowViewport2 = getWindowViewport(),
	      viewportWidth = _getWindowViewport2.viewportWidth,
	      viewportHeight = _getWindowViewport2.viewportHeight;
	
	  element.style.height = 'auto';
	  //element.style.overflowY = 'hidden';
	  if (element.offsetHeight > viewportHeight) {
	    element.style.height = viewportHeight + 'px';
	    element.style.overflowY = 'auto';
	  }
	
	  // 2. will element width fit inside window viewport?
	  element.style.width = 'auto';
	  if (element.offsetWidth > viewportWidth) {
	    element.style.width = viewportWidth + 'px';
	  }
	
	  var elementRect = element.getBoundingClientRect();
	
	  // element to control distance
	  var dy = controlRect.top - elementRect.top;
	  var dx = controlRect.left - elementRect.left;
	
	  // element rect, window coordinates relative to top,left of control
	  var top = elementRect.top + dy;
	  var left = elementRect.left + dx;
	  var bottom = top + elementRect.height;
	  var right = left + elementRect.width;
	
	  // Position relative to control
	  var ddy = dy;
	  var ddx = dx;
	
	  if (isRectInsideWindowViewport({
	    top: top + controlRect.height,
	    left: left,
	    bottom: bottom + controlRect.height,
	    right: right
	  })) {
	    // 3 position element below the control element, aligned to its left
	    ddy = controlRect.height + dy;
	    //console.log('***** 3');
	  } else if (isRectInsideWindowViewport({
	    top: top + controlRect.height,
	    left: left + controlRect.width - elementRect.width,
	    bottom: bottom + controlRect.height,
	    right: left + controlRect.width
	  })) {
	    // 4 position element below the control element, aligned to its right
	    ddy = controlRect.height + dy;
	    ddx = dx + controlRect.width - elementRect.width;
	    //console.log('***** 4');
	  } else if (isRectInsideWindowViewport({
	    top: top - elementRect.height,
	    left: left,
	    bottom: bottom - elementRect.height,
	    right: right
	  })) {
	    // 5. position element above the control element, aligned to its left.
	    ddy = dy - elementRect.height;
	    //console.log('***** 5');
	  } else if (isRectInsideWindowViewport({
	    top: top - elementRect.height,
	    left: left + controlRect.width - elementRect.width,
	    bottom: bottom - elementRect.height,
	    right: left + controlRect.width
	  })) {
	    // 6. position element above the control element, aligned to its right.
	    ddy = dy - elementRect.height;
	    ddx = dx + controlRect.width - elementRect.width;
	    //console.log('***** 6');
	  } else if (isRectInsideWindowViewport({
	    top: top,
	    left: left + controlRect.width,
	    bottom: bottom,
	    right: right + controlRect.width
	  })) {
	    // 7. position element at button right hand side
	    ddx = controlRect.width + dx;
	    //console.log('***** 7');
	  } else if (isRectInsideWindowViewport({
	    top: top,
	    left: left - controlRect.width,
	    bottom: bottom,
	    right: right - controlRect.width
	  })) {
	    // 8. position element at button left hand side
	    ddx = dx - elementRect.width;
	    //console.log('***** 8');
	  } else {
	    // 9. position element inside viewport, near controlrect if possible
	    //console.log('***** 9');
	
	    // 9.1 position element near controlrect bottom
	    ddy = dy - bottom + viewportHeight;
	    if (top + controlRect.height >= 0 && bottom + controlRect.height <= viewportHeight) {
	      ddy = controlRect.height + dy;
	    } else if (top - elementRect.height >= 0 && bottom - elementRect.height <= viewportHeight) {
	      ddy = dy - elementRect.height;
	    }
	
	    if (left + elementRect.width + controlRect.width <= viewportWidth) {
	      // 9.2 Position element at button right hand side
	      ddx = controlRect.width + dx;
	      //console.log('***** 9.2');
	    } else if (left - elementRect.width >= 0) {
	      // 9.3 Position element at button left hand side
	      ddx = dx - elementRect.width;
	      //console.log('***** 9.3');
	    } else {
	      // 9.4 position element at (near) viewport right
	      var r = left + elementRect.width - viewportWidth;
	      ddx = dx - r;
	      //console.log('***** 9.4');
	    }
	  }
	
	  // 10. done
	  element.style.top = element.offsetTop + ddy + 'px';
	  element.style.left = element.offsetLeft + ddx + 'px';
	  //console.log('***** 10. done');
	};
	
	/**
	 * Get a list of offset parents for given element
	 * @see https://www.benpickles.com/articles/51-finding-a-dom-nodes-common-ancestor-using-javascript
	 * @param el the element
	 * @return {Array} a list of offset parents
	 */
	/*
	const offsetParents = (el) => {
	  const elements = [];
	  for (; el; el = el.offsetParent) {
	    elements.unshift(el);
	  }
	  if(!elements.find(e => e === document.body)) {
	    elements.unshift(document.body);
	  }
	  return elements;
	};
	*/
	
	/**
	 * Finds the common offset ancestor of two DOM nodes
	 * @see https://www.benpickles.com/articles/51-finding-a-dom-nodes-common-ancestor-using-javascript
	 * @see https://gist.github.com/benpickles/4059636
	 * @param a
	 * @param b
	 * @return {Element} The common offset ancestor of a and b
	 */
	/*
	const commonOffsetAncestor = (a, b) => {
	  const parentsA = offsetParents(a);
	  const parentsB = offsetParents(b);
	
	  for (let i = 0; i < parentsA.length; i++) {
	    if (parentsA[i] !== parentsB[i]) return parentsA[i-1];
	  }
	};
	*/
	
	/**
	 * Calculate position relative to a target element
	 * @see http://stackoverflow.com/questions/21064101/understanding-offsetwidth-clientwidth-scrollwidth-and-height-respectively
	 * @param target
	 * @param el
	 * @return {{top: number, left: number}}
	 */
	/*
	const calcPositionRelativeToTarget = (target, el) => {
	  let top = 0;
	  let left = 0;
	
	  while(el) {
	    top += (el.offsetTop - el.scrollTop + el.clientTop) || 0;
	    left += (el.offsetLeft - el.scrollLeft + el.clientLeft) || 0;
	    el = el.offsetParent;
	
	    if(el === target) {
	      break;
	    }
	  }
	  return { top: top, left: left };
	};
	*/
	
	exports.removeChildElements = removeChildElements;
	exports.moveElements = moveElements;
	exports.getWindowViewport = getWindowViewport;
	exports.isRectInsideWindowViewport = isRectInsideWindowViewport;
	exports.getScrollParents = getScrollParents;
	exports.tether = tether;

/***/ },
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(89), __esModule: true };

/***/ },
/* 83 */,
/* 84 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(82);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ },
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(97);
	var $Object = __webpack_require__(2).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(4), 'Object', {defineProperty: __webpack_require__(10).f});

/***/ }
/******/ ])
});
;
//# sourceMappingURL=mdl-ext.menu-button.js.map