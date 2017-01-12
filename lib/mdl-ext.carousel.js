(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("carousel", [], factory);
	else if(typeof exports === 'object')
		exports["carousel"] = factory();
	else
		root["mdl-ext"] = root["mdl-ext"] || {}, root["mdl-ext"]["carousel"] = factory();
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
	
	var _isInteger = __webpack_require__(75);
	
	var _isInteger2 = _interopRequireDefault(_isInteger);
	
	var _toConsumableArray2 = __webpack_require__(41);
	
	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
	
	var _assign = __webpack_require__(61);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _intervalFunction = __webpack_require__(74);
	
	var _intervalFunction2 = _interopRequireDefault(_intervalFunction);
	
	var _easing = __webpack_require__(73);
	
	var _jsonUtils = __webpack_require__(62);
	
	var _constants = __webpack_require__(29);
	
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
	 * Image carousel
	 */
	
	(function () {
	  'use strict';
	
	  //const CAROUSEL = 'mdlext-carousel';
	
	  var SLIDE = 'mdlext-carousel__slide';
	  var ROLE = 'list';
	  var SLIDE_ROLE = 'listitem';
	
	  /**
	   * @constructor
	   * @param {Element} element The element that will be upgraded.
	   */
	  var MaterialExtCarousel = function MaterialExtCarousel(element) {
	    // Stores the element.
	    this.element_ = element;
	
	    // Default config
	    this.config_ = {
	      interactive: true,
	      autostart: false,
	      type: 'slide',
	      interval: 1000,
	      animationLoop: (0, _intervalFunction2.default)(1000)
	    };
	
	    this.scrollAnimation_ = (0, _intervalFunction2.default)(33);
	
	    // Initialize instance.
	    this.init();
	  };
	
	  window['MaterialExtCarousel'] = MaterialExtCarousel;
	
	  /**
	   * Start slideshow animation
	   * @private
	   */
	  MaterialExtCarousel.prototype.startSlideShow_ = function () {
	    var _this = this;
	
	    var nextSlide = function nextSlide() {
	      var slide = _this.element_.querySelector('.' + SLIDE + '[aria-selected]');
	      if (slide) {
	        slide.removeAttribute('aria-selected');
	        slide = slide.nextElementSibling;
	      }
	      if (!slide) {
	        slide = _this.element_.querySelector('.' + SLIDE + ':first-child');
	        _this.animateScroll_(0);
	      }
	      if (slide) {
	        _this.moveSlideIntoViewport_(slide);
	        slide.setAttribute('aria-selected', '');
	        _this.emitSelectEvent_('next', null, slide);
	        return true;
	      }
	      return false;
	    };
	
	    var nextScroll = function nextScroll(direction) {
	      var nextDirection = direction;
	
	      if ('next' === direction && _this.element_.scrollLeft === _this.element_.scrollWidth - _this.element_.clientWidth) {
	        nextDirection = 'prev';
	      } else if (_this.element_.scrollLeft === 0) {
	        nextDirection = 'next';
	      }
	      var x = 'next' === nextDirection ? Math.min(_this.element_.scrollLeft + _this.element_.clientWidth, _this.element_.scrollWidth - _this.element_.clientWidth) : Math.max(_this.element_.scrollLeft - _this.element_.clientWidth, 0);
	
	      _this.animateScroll_(x, 1000);
	      return nextDirection;
	    };
	
	    if (!this.config_.animationLoop.started) {
	      (function () {
	        _this.config_.animationLoop.interval = _this.config_.interval;
	        var direction = 'next';
	
	        if ('scroll' === _this.config_.type) {
	          _this.config_.animationLoop.start(function () {
	            direction = nextScroll(direction);
	            return true; // It runs until cancelSlideShow_ is triggered
	          });
	        } else {
	          nextSlide();
	          _this.config_.animationLoop.start(function () {
	            return nextSlide(); // It runs until cancelSlideShow_ is triggered
	          });
	        }
	      })();
	    }
	
	    // TODO: Pause animation when carousel is not in browser viewport or user changes tab
	  };
	
	  /**
	   * Cancel slideshow if running. Emmits a 'pause' event
	   * @private
	   */
	  MaterialExtCarousel.prototype.cancelSlideShow_ = function () {
	    if (this.config_.animationLoop.started) {
	      this.config_.animationLoop.stop();
	      this.emitSelectEvent_('pause', _constants.VK_ESC, this.element_.querySelector('.' + SLIDE + '[aria-selected]'));
	    }
	  };
	
	  /**
	   * Animate scroll
	   * @param newPosition
	   * @param newDuration
	   * @param completedCallback
	   * @private
	   */
	  MaterialExtCarousel.prototype.animateScroll_ = function (newPosition, newDuration, completedCallback) {
	    var _this2 = this;
	
	    var start = this.element_.scrollLeft;
	    var distance = newPosition - start;
	
	    if (distance !== 0) {
	      (function () {
	        var duration = Math.max(Math.min(Math.abs(distance), newDuration || 400), 100); // duration is between 100 and newDuration||400ms||distance
	        var t = 0;
	        _this2.scrollAnimation_.stop();
	        _this2.scrollAnimation_.start(function (timeElapsed) {
	          t += timeElapsed;
	          if (t < duration) {
	            _this2.element_.scrollLeft = (0, _easing.inOutQuintic)(t, start, distance, duration);
	            return true;
	          } else {
	            _this2.element_.scrollLeft = newPosition;
	            if (completedCallback) {
	              completedCallback();
	            }
	            return false;
	          }
	        });
	      })();
	    } else {
	      if (completedCallback) {
	        completedCallback();
	      }
	    }
	  };
	
	  /**
	   * Execute commend
	   * @param event
	   * @private
	   */
	  MaterialExtCarousel.prototype.command_ = function (event) {
	    var _this3 = this;
	
	    var x = 0;
	    var slide = null;
	    var a = event.detail.action.toLowerCase();
	
	    // Cancel slideshow if running
	    this.cancelSlideShow_();
	
	    switch (a) {
	      case 'first':
	        slide = this.element_.querySelector('.' + SLIDE + ':first-child');
	        break;
	
	      case 'last':
	        x = this.element_.scrollWidth - this.element_.clientWidth;
	        slide = this.element_.querySelector('.' + SLIDE + ':last-child');
	        break;
	
	      case 'scroll-prev':
	        x = Math.max(this.element_.scrollLeft - this.element_.clientWidth, 0);
	        break;
	
	      case 'scroll-next':
	        x = Math.min(this.element_.scrollLeft + this.element_.clientWidth, this.element_.scrollWidth - this.element_.clientWidth);
	        break;
	
	      case 'next':
	      case 'prev':
	        slide = this.element_.querySelector('.' + SLIDE + '[aria-selected]');
	        if (slide) {
	          slide = a === 'next' ? slide.nextElementSibling : slide.previousElementSibling;
	          this.setAriaSelected_(slide);
	          this.emitSelectEvent_(a, null, slide);
	        }
	        return;
	
	      case 'play':
	        (0, _assign2.default)(this.config_, event.detail);
	        this.startSlideShow_();
	        return;
	
	      case 'pause':
	        return;
	
	      default:
	        return;
	    }
	
	    this.animateScroll_(x, undefined, function () {
	      if ('scroll-next' === a || 'scroll-prev' === a) {
	        var slides = _this3.getSlidesInViewport_();
	        if (slides.length > 0) {
	          slide = 'scroll-next' === a ? slides[0] : slides[slides.length - 1];
	        }
	      }
	      _this3.setAriaSelected_(slide);
	      _this3.emitSelectEvent_(a, null, slide);
	    });
	  };
	
	  /**
	   * Handles custom command event, 'scroll-prev', 'scroll-next', 'first', 'last', next, prev, play, pause
	   * @param event. A custom event
	   * @private
	   */
	  MaterialExtCarousel.prototype.commandHandler_ = function (event) {
	    event.preventDefault();
	    event.stopPropagation();
	    if (event.detail && event.detail.action) {
	      this.command_(event);
	    }
	  };
	
	  /**
	   * Handle keypress
	   * @param event
	   * @private
	   */
	  MaterialExtCarousel.prototype.keyDownHandler_ = function (event) {
	
	    if (event && event.target && event.target !== this.element_) {
	
	      var action = 'first';
	
	      if (event.keyCode === _constants.VK_HOME || event.keyCode === _constants.VK_END || event.keyCode === _constants.VK_PAGE_UP || event.keyCode === _constants.VK_PAGE_DOWN) {
	
	        event.preventDefault();
	        if (event.keyCode === _constants.VK_END) {
	          action = 'last';
	        } else if (event.keyCode === _constants.VK_PAGE_UP) {
	          action = 'scroll-prev';
	        } else if (event.keyCode === _constants.VK_PAGE_DOWN) {
	          action = 'scroll-next';
	        }
	        this.command_(action);
	      } else if (event.keyCode === _constants.VK_TAB || event.keyCode === _constants.VK_ENTER || event.keyCode === _constants.VK_SPACE || event.keyCode === _constants.VK_ARROW_UP || event.keyCode === _constants.VK_ARROW_LEFT || event.keyCode === _constants.VK_ARROW_DOWN || event.keyCode === _constants.VK_ARROW_RIGHT) {
	
	        var slide = getSlide_(event.target);
	
	        if (!slide) {
	          return;
	        }
	
	        // Cancel slideshow if running
	        this.cancelSlideShow_();
	
	        switch (event.keyCode) {
	          case _constants.VK_ARROW_UP:
	          case _constants.VK_ARROW_LEFT:
	            action = 'prev';
	            slide = slide.previousElementSibling;
	            break;
	
	          case _constants.VK_ARROW_DOWN:
	          case _constants.VK_ARROW_RIGHT:
	            action = 'next';
	            slide = slide.nextElementSibling;
	            break;
	
	          case _constants.VK_TAB:
	            if (event.shiftKey) {
	              action = 'prev';
	              slide = slide.previousElementSibling;
	            } else {
	              action = 'next';
	              slide = slide.nextElementSibling;
	            }
	            break;
	
	          case _constants.VK_SPACE:
	          case _constants.VK_ENTER:
	            action = 'select';
	            break;
	        }
	
	        if (slide) {
	          event.preventDefault();
	          setFocus_(slide);
	          this.emitSelectEvent_(action, event.keyCode, slide);
	        }
	      }
	    }
	  };
	
	  /**
	   * Handle dragging
	   * @param event
	   * @private
	   */
	  MaterialExtCarousel.prototype.dragHandler_ = function (event) {
	    var _this4 = this;
	
	    event.preventDefault();
	
	    // Cancel slideshow if running
	    this.cancelSlideShow_();
	
	    var updating = false;
	    var rAFDragId = 0;
	
	    var startX = event.clientX || (event.touches !== undefined ? event.touches[0].clientX : 0);
	    var prevX = startX;
	    var targetElement = event.target;
	
	    var update = function update(e) {
	      var currentX = e.clientX || (e.touches !== undefined ? e.touches[0].clientX : 0);
	      var dx = prevX - currentX;
	
	      if (dx < 0) {
	        _this4.element_.scrollLeft = Math.max(_this4.element_.scrollLeft + dx, 0);
	      } else if (dx > 0) {
	        _this4.element_.scrollLeft = Math.min(_this4.element_.scrollLeft + dx, _this4.element_.scrollWidth - _this4.element_.clientWidth);
	      }
	
	      prevX = currentX;
	      updating = false;
	    };
	
	    // drag handler
	    var drag = function drag(e) {
	      e.preventDefault();
	
	      if (!updating) {
	        rAFDragId = window.requestAnimationFrame(function () {
	          return update(e);
	        });
	        updating = true;
	      }
	    };
	
	    // end drag handler
	    var endDrag = function endDrag(e) {
	      e.preventDefault();
	
	      _this4.element_.removeEventListener('mousemove', drag);
	      _this4.element_.removeEventListener('touchmove', drag);
	      window.removeEventListener('mouseup', endDrag);
	      window.removeEventListener('touchend', endDrag);
	
	      // cancel any existing drag rAF, see: http://www.html5rocks.com/en/tutorials/speed/animations/
	      window.cancelAnimationFrame(rAFDragId);
	
	      var slide = getSlide_(targetElement);
	      setFocus_(slide);
	      _this4.emitSelectEvent_('click', null, slide);
	    };
	
	    this.element_.addEventListener('mousemove', drag);
	    this.element_.addEventListener('touchmove', drag);
	    window.addEventListener('mouseup', endDrag);
	    window.addEventListener('touchend', endDrag);
	  };
	
	  /**
	   * Handle click
	   * @param event
	   * @private
	   */
	  MaterialExtCarousel.prototype.clickHandler_ = function (event) {
	    // Click is handled by drag
	    event.preventDefault();
	  };
	
	  /**
	   * Handle focus
	   * @param event
	   * @private
	   */
	  MaterialExtCarousel.prototype.focusHandler_ = function (event) {
	    var slide = getSlide_(event.target);
	    if (slide) {
	      // The last focused/selected slide has 'aria-selected', even if focus is lost
	      this.setAriaSelected_(slide);
	      slide.classList.add(_constants.IS_FOCUSED);
	    }
	  };
	
	  /**
	   * Handle blur
	   * @param event
	   * @private
	   */
	  MaterialExtCarousel.prototype.blurHandler_ = function (event) {
	    var slide = getSlide_(event.target);
	    if (slide) {
	      slide.classList.remove(_constants.IS_FOCUSED);
	    }
	  };
	
	  /**
	   * Emits a custeom 'select' event
	   * @param command
	   * @param keyCode
	   * @param slide
	   * @private
	   */
	  MaterialExtCarousel.prototype.emitSelectEvent_ = function (command, keyCode, slide) {
	
	    if (slide) {
	      this.moveSlideIntoViewport_(slide);
	
	      var evt = new CustomEvent('select', {
	        bubbles: true,
	        cancelable: true,
	        detail: {
	          command: command,
	          keyCode: keyCode,
	          source: slide
	        }
	      });
	      this.element_.dispatchEvent(evt);
	    }
	  };
	
	  /**
	   * Get the first visible slide in component viewport
	   * @private
	   */
	  MaterialExtCarousel.prototype.getSlidesInViewport_ = function () {
	    var carouselRect = this.element_.getBoundingClientRect();
	
	    var slidesInViewport = [].concat((0, _toConsumableArray3.default)(this.element_.querySelectorAll('.' + SLIDE))).filter(function (slide) {
	      var slideRect = slide.getBoundingClientRect();
	      return slideRect.left >= carouselRect.left && slideRect.right <= carouselRect.right;
	    });
	    return slidesInViewport;
	  };
	
	  /**
	   * Move slide into component viewport - if needed
	   * @param slide
	   * @private
	   */
	  MaterialExtCarousel.prototype.moveSlideIntoViewport_ = function (slide) {
	    var carouselRect = this.element_.getBoundingClientRect();
	    var slideRect = slide.getBoundingClientRect();
	
	    if (slideRect.left < carouselRect.left) {
	      var x = this.element_.scrollLeft - (carouselRect.left - slideRect.left);
	      this.animateScroll_(x);
	    } else if (slideRect.right > carouselRect.right) {
	      var _x = this.element_.scrollLeft - (carouselRect.right - slideRect.right);
	      this.animateScroll_(_x);
	    }
	  };
	
	  /**
	   * Removes 'aria-selected' from all slides in carousel
	   * @private
	   */
	  MaterialExtCarousel.prototype.setAriaSelected_ = function (slide) {
	    if (slide) {
	      [].concat((0, _toConsumableArray3.default)(this.element_.querySelectorAll('.' + SLIDE + '[aria-selected]'))).forEach(function (slide) {
	        return slide.removeAttribute('aria-selected');
	      });
	      slide.setAttribute('aria-selected', '');
	    }
	  };
	
	  /**
	   * Removes event listeners
	   * @private
	   */
	  MaterialExtCarousel.prototype.removeListeners_ = function () {
	    this.element_.removeEventListener('focus', this.focusHandler_);
	    this.element_.removeEventListener('blur', this.blurHandler_);
	    this.element_.removeEventListener('keydown', this.keyDownHandler_);
	    this.element_.removeEventListener('mousedown', this.dragHandler_);
	    this.element_.removeEventListener('touchstart', this.dragHandler_);
	    this.element_.removeEventListener('click', this.clickHandler_, false);
	    this.element_.removeEventListener('command', this.commandHandler_);
	    this.element_.removeEventListener('mdl-componentdowngraded', this.mdlDowngrade_);
	  };
	
	  // Helpers
	  var getSlide_ = function getSlide_(element) {
	    return element.closest('.' + SLIDE);
	  };
	
	  var setFocus_ = function setFocus_(slide) {
	    if (slide) {
	      slide.focus();
	    }
	  };
	
	  var addRipple_ = function addRipple_(slide) {
	    if (!slide.querySelector('.' + _constants.MDL_RIPPLE_CONTAINER)) {
	      var rippleContainer = document.createElement('span');
	      rippleContainer.classList.add(_constants.MDL_RIPPLE_CONTAINER);
	      rippleContainer.classList.add(_constants.MDL_RIPPLE_EFFECT);
	      var ripple = document.createElement('span');
	      ripple.classList.add(_constants.MDL_RIPPLE);
	      rippleContainer.appendChild(ripple);
	
	      var img = slide.querySelector('img');
	      if (img) {
	        // rippleContainer blocks image title
	        rippleContainer.title = img.title;
	      }
	      slide.appendChild(rippleContainer);
	      componentHandler.upgradeElement(rippleContainer, _constants.MDL_RIPPLE_COMPONENT);
	    }
	  };
	  // End helpers
	
	
	  // Public methods.
	
	  /**
	   * Cancel animation - if running.
	   *
	   * @public
	   */
	  MaterialExtCarousel.prototype.stopAnimation = function () {
	    this.config_.animationLoop.stop();
	  };
	  MaterialExtCarousel.prototype['stopAnimation'] = MaterialExtCarousel.prototype.stopAnimation;
	
	  /**
	   * Upgrade slides
	   * Use if more list elements are added later (dynamically)
	   *
	   * @public
	   */
	  MaterialExtCarousel.prototype.upgradeSlides = function () {
	    var _this5 = this;
	
	    var hasRippleEffect = this.element_.classList.contains(_constants.MDL_RIPPLE_EFFECT);
	
	    [].concat((0, _toConsumableArray3.default)(this.element_.querySelectorAll('.' + SLIDE))).forEach(function (slide) {
	
	      slide.setAttribute('role', SLIDE_ROLE);
	
	      if (_this5.config_.interactive) {
	        if (!slide.getAttribute('tabindex')) {
	          slide.setAttribute('tabindex', '0');
	        }
	        if (hasRippleEffect) {
	          addRipple_(slide);
	        }
	      } else {
	        slide.setAttribute('tabindex', '-1');
	      }
	    });
	  };
	  MaterialExtCarousel.prototype['upgradeSlides'] = MaterialExtCarousel.prototype.upgradeSlides;
	
	  /**
	   * Get config object
	   *
	   * @public
	   */
	  MaterialExtCarousel.prototype.getConfig = function () {
	    return this.config_;
	  };
	  MaterialExtCarousel.prototype['getConfig'] = MaterialExtCarousel.prototype.getConfig;
	
	  /**
	   * Initialize component
	   */
	  MaterialExtCarousel.prototype.init = function () {
	
	    if (this.element_) {
	      // Config
	      if (this.element_.hasAttribute('data-config')) {
	        this.config_ = (0, _jsonUtils.jsonStringToObject)(this.element_.getAttribute('data-config'), this.config_);
	      }
	
	      // Wai-Aria
	      this.element_.setAttribute('role', ROLE);
	
	      // Prefer tabindex -1
	      if (!(0, _isInteger2.default)(this.element_.getAttribute('tabindex'))) {
	        this.element_.setAttribute('tabindex', -1);
	      }
	
	      // Remove listeners, just in case ...
	      this.removeListeners_();
	
	      if (this.config_.interactive) {
	
	        // Ripple
	        var hasRippleEffect = this.element_.classList.contains(_constants.MDL_RIPPLE_EFFECT);
	        if (hasRippleEffect) {
	          this.element_.classList.add(_constants.MDL_RIPPLE_EFFECT_IGNORE_EVENTS);
	        }
	
	        // Listen to focus/blur events
	        this.element_.addEventListener('focus', this.focusHandler_.bind(this), true);
	        this.element_.addEventListener('blur', this.blurHandler_.bind(this), true);
	
	        // Listen to keyboard events
	        this.element_.addEventListener('keydown', this.keyDownHandler_.bind(this), false);
	
	        // Listen to drag events
	        this.element_.addEventListener('mousedown', this.dragHandler_.bind(this), false);
	        this.element_.addEventListener('touchstart', this.dragHandler_.bind(this), false);
	
	        // Listen to click events
	        this.element_.addEventListener('click', this.clickHandler_.bind(this), false);
	      }
	
	      // Listen to custom 'command' event
	      this.element_.addEventListener('command', this.commandHandler_.bind(this), false);
	
	      // Listen to 'mdl-componentdowngraded' event
	      this.element_.addEventListener('mdl-componentdowngraded', this.mdlDowngrade_.bind(this));
	
	      // Slides collection
	      this.upgradeSlides();
	
	      // Set upgraded flag
	      this.element_.classList.add(_constants.IS_UPGRADED);
	
	      if (this.config_.autostart) {
	        // Start slideshow
	        this.startSlideShow_();
	      }
	    }
	  };
	
	  /*
	   * Downgrade component
	   * E.g remove listeners and clean up resources
	   */
	  MaterialExtCarousel.prototype.mdlDowngrade_ = function () {
	    'use strict';
	    //console.log('***** MaterialExtCarousel.mdlDowngrade_');
	
	    // Stop animation - if any
	
	    this.stopAnimation();
	
	    // Remove listeners
	    this.removeListeners_();
	  };
	
	  // The component registers itself. It can assume componentHandler is available
	  // in the global scope.
	  /* eslint no-undef: 0 */
	  componentHandler.register({
	    constructor: MaterialExtCarousel,
	    classAsString: 'MaterialExtCarousel',
	    cssClass: 'mdlext-js-carousel',
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
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 60 */,
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(65), __esModule: true };

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * Converts a JSON string to object
	 * @param jsonString
	 * @param source
	 */
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.jsonStringToObject = undefined;
	
	var _assign = __webpack_require__(61);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var jsonStringToObject = function jsonStringToObject(jsonString) {
	  var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	  var s = jsonString.replace(/'/g, '"');
	  try {
	    return (0, _assign2.default)(source, JSON.parse(s));
	  } catch (e) {
	    throw new Error('Failed to parse json string: ' + s + '. Error: ' + e.message);
	  }
	};
	
	exports.jsonStringToObject = jsonStringToObject;

/***/ },
/* 63 */,
/* 64 */,
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(70);
	module.exports = __webpack_require__(2).Object.assign;

/***/ },
/* 66 */,
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(27)
	  , gOPS     = __webpack_require__(68)
	  , pIE      = __webpack_require__(59)
	  , toObject = __webpack_require__(17)
	  , IObject  = __webpack_require__(28)
	  , $assign  = Object.assign;
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(6)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 68 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 69 */,
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(8);
	
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(67)});

/***/ },
/* 71 */,
/* 72 */,
/* 73 */
/***/ function(module, exports) {

	'use strict';
	
	// See: http://robertpenner.com/easing/
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var easeInOutQuad = function easeInOutQuad(t, b, c, d) {
	  t /= d / 2;
	  if (t < 1) return c / 2 * t * t + b;
	  t--;
	  return -c / 2 * (t * (t - 2) - 1) + b;
	};
	
	var inOutQuintic = function inOutQuintic(t, b, c, d) {
	  var ts = (t /= d) * t;
	  var tc = ts * t;
	  return b + c * (6 * tc * ts + -15 * ts * ts + 10 * tc);
	};
	
	exports.easeInOutQuad = easeInOutQuad;
	exports.inOutQuintic = inOutQuintic;

/***/ },
/* 74 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var MIN_INERVAL = 1000 / 60;
	
	/**
	 * Trigger a callback at a given interval
	 * @param interval defaults to 1000/60 ms
	 * @return {function()} reference to start, stop, immediate and started
	 */
	
	var intervalFunction = function intervalFunction() {
	  var interval = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : MIN_INERVAL;
	
	
	  var lapse = interval < MIN_INERVAL ? MIN_INERVAL : interval;
	  var cb = undefined;
	  var next = null;
	  var timeElapsed = 0;
	
	  var execute = function execute() {
	    var f = cb(timeElapsed);
	    if (!f) {
	      cancel();
	    }
	  };
	
	  var cancel = function cancel() {
	    if (next) {
	      window.cancelAnimationFrame(next);
	    }
	    next = null;
	    timeElapsed = 0;
	  };
	
	  var _start = function _start() {
	    var timeStart = Date.now();
	
	    var loop = function loop(now) {
	      if (next) {
	        next = window.requestAnimationFrame(function () {
	          return loop(Date.now());
	        });
	
	        timeElapsed += now - timeStart;
	
	        if (timeElapsed >= lapse) {
	          execute();
	          if ((timeElapsed -= lapse) > lapse) {
	            // time elapsed - interval_ > interval_ , indicates inactivity
	            // Could be due to browser minimized, tab changed, screen saver started, computer sleep, and so on
	            timeElapsed = 0;
	          }
	        }
	        timeStart = now;
	      }
	    };
	
	    next = 1; // a truthy value for first loop
	    loop(timeStart);
	  };
	
	  return {
	    get started() {
	      return next != null;
	    },
	    get interval() {
	      return lapse;
	    },
	    set interval(value) {
	      lapse = value < MIN_INERVAL ? MIN_INERVAL : value;
	    },
	    start: function start(callback) {
	      if (typeof callback !== 'function') {
	        throw new TypeError('callback parameter must be a function');
	      }
	      cb = callback;
	      _start();
	    },
	    immediate: function immediate() {
	      if (!cb) {
	        throw new ReferenceError('callback parameter is not defined. Call start before immediate.');
	      }
	      execute();
	    },
	
	    stop: function stop() {
	      return cancel();
	    }
	  };
	};
	
	exports.default = intervalFunction;
	module.exports = exports['default'];

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(76), __esModule: true };

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(78);
	module.exports = __webpack_require__(2).Number.isInteger;

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(7)
	  , floor    = Math.floor;
	module.exports = function isInteger(it){
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Number', {isInteger: __webpack_require__(77)});

/***/ }
/******/ ])
});
;
//# sourceMappingURL=mdl-ext.carousel.js.map