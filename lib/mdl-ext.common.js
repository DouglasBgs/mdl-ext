(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("common", [], factory);
	else if(typeof exports === 'object')
		exports["common"] = factory();
	else
		root["mdl-ext"] = root["mdl-ext"] || {}, root["mdl-ext"]["common"] = factory();
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
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _constants = __webpack_require__(29);
	
	Object.defineProperty(exports, 'VK_TAB', {
	  enumerable: true,
	  get: function get() {
	    return _constants.VK_TAB;
	  }
	});
	Object.defineProperty(exports, 'VK_ENTER', {
	  enumerable: true,
	  get: function get() {
	    return _constants.VK_ENTER;
	  }
	});
	Object.defineProperty(exports, 'VK_ESC', {
	  enumerable: true,
	  get: function get() {
	    return _constants.VK_ESC;
	  }
	});
	Object.defineProperty(exports, 'VK_SPACE', {
	  enumerable: true,
	  get: function get() {
	    return _constants.VK_SPACE;
	  }
	});
	Object.defineProperty(exports, 'VK_PAGE_UP', {
	  enumerable: true,
	  get: function get() {
	    return _constants.VK_PAGE_UP;
	  }
	});
	Object.defineProperty(exports, 'VK_PAGE_DOWN', {
	  enumerable: true,
	  get: function get() {
	    return _constants.VK_PAGE_DOWN;
	  }
	});
	Object.defineProperty(exports, 'VK_END', {
	  enumerable: true,
	  get: function get() {
	    return _constants.VK_END;
	  }
	});
	Object.defineProperty(exports, 'VK_HOME', {
	  enumerable: true,
	  get: function get() {
	    return _constants.VK_HOME;
	  }
	});
	Object.defineProperty(exports, 'VK_ARROW_LEFT', {
	  enumerable: true,
	  get: function get() {
	    return _constants.VK_ARROW_LEFT;
	  }
	});
	Object.defineProperty(exports, 'VK_ARROW_UP', {
	  enumerable: true,
	  get: function get() {
	    return _constants.VK_ARROW_UP;
	  }
	});
	Object.defineProperty(exports, 'VK_ARROW_RIGHT', {
	  enumerable: true,
	  get: function get() {
	    return _constants.VK_ARROW_RIGHT;
	  }
	});
	Object.defineProperty(exports, 'VK_ARROW_DOWN', {
	  enumerable: true,
	  get: function get() {
	    return _constants.VK_ARROW_DOWN;
	  }
	});
	Object.defineProperty(exports, 'ARIA_EXPANDED', {
	  enumerable: true,
	  get: function get() {
	    return _constants.ARIA_EXPANDED;
	  }
	});
	Object.defineProperty(exports, 'ARIA_HIDDEN', {
	  enumerable: true,
	  get: function get() {
	    return _constants.ARIA_HIDDEN;
	  }
	});
	Object.defineProperty(exports, 'ARIA_MULTISELECTABLE', {
	  enumerable: true,
	  get: function get() {
	    return _constants.ARIA_MULTISELECTABLE;
	  }
	});
	Object.defineProperty(exports, 'ARIA_SELECTED', {
	  enumerable: true,
	  get: function get() {
	    return _constants.ARIA_SELECTED;
	  }
	});
	Object.defineProperty(exports, 'IS_DIRTY', {
	  enumerable: true,
	  get: function get() {
	    return _constants.IS_DIRTY;
	  }
	});
	Object.defineProperty(exports, 'IS_DISABLED', {
	  enumerable: true,
	  get: function get() {
	    return _constants.IS_DISABLED;
	  }
	});
	Object.defineProperty(exports, 'IS_EXPANDED', {
	  enumerable: true,
	  get: function get() {
	    return _constants.IS_EXPANDED;
	  }
	});
	Object.defineProperty(exports, 'IS_FOCUSED', {
	  enumerable: true,
	  get: function get() {
	    return _constants.IS_FOCUSED;
	  }
	});
	Object.defineProperty(exports, 'IS_INVALID', {
	  enumerable: true,
	  get: function get() {
	    return _constants.IS_INVALID;
	  }
	});
	Object.defineProperty(exports, 'IS_UPGRADED', {
	  enumerable: true,
	  get: function get() {
	    return _constants.IS_UPGRADED;
	  }
	});
	Object.defineProperty(exports, 'DATA_UPGRADED', {
	  enumerable: true,
	  get: function get() {
	    return _constants.DATA_UPGRADED;
	  }
	});
	Object.defineProperty(exports, 'MDL_RIPPLE', {
	  enumerable: true,
	  get: function get() {
	    return _constants.MDL_RIPPLE;
	  }
	});
	Object.defineProperty(exports, 'MDL_RIPPLE_COMPONENT', {
	  enumerable: true,
	  get: function get() {
	    return _constants.MDL_RIPPLE_COMPONENT;
	  }
	});
	Object.defineProperty(exports, 'MDL_RIPPLE_CONTAINER', {
	  enumerable: true,
	  get: function get() {
	    return _constants.MDL_RIPPLE_CONTAINER;
	  }
	});
	Object.defineProperty(exports, 'MDL_RIPPLE_EFFECT', {
	  enumerable: true,
	  get: function get() {
	    return _constants.MDL_RIPPLE_EFFECT;
	  }
	});
	Object.defineProperty(exports, 'MDL_RIPPLE_EFFECT_IGNORE_EVENTS', {
	  enumerable: true,
	  get: function get() {
	    return _constants.MDL_RIPPLE_EFFECT_IGNORE_EVENTS;
	  }
	});
	
	var _domUtils = __webpack_require__(72);
	
	Object.defineProperty(exports, 'removeChildElements', {
	  enumerable: true,
	  get: function get() {
	    return _domUtils.removeChildElements;
	  }
	});
	Object.defineProperty(exports, 'moveElements', {
	  enumerable: true,
	  get: function get() {
	    return _domUtils.moveElements;
	  }
	});
	Object.defineProperty(exports, 'getWindowViewport', {
	  enumerable: true,
	  get: function get() {
	    return _domUtils.getWindowViewport;
	  }
	});
	Object.defineProperty(exports, 'isRectInsideWindowViewport', {
	  enumerable: true,
	  get: function get() {
	    return _domUtils.isRectInsideWindowViewport;
	  }
	});
	Object.defineProperty(exports, 'getScrollParents', {
	  enumerable: true,
	  get: function get() {
	    return _domUtils.getScrollParents;
	  }
	});
	Object.defineProperty(exports, 'tether', {
	  enumerable: true,
	  get: function get() {
	    return _domUtils.tether;
	  }
	});
	
	var _stringUtils = __webpack_require__(63);
	
	Object.defineProperty(exports, 'joinStrings', {
	  enumerable: true,
	  get: function get() {
	    return _stringUtils.joinStrings;
	  }
	});
	Object.defineProperty(exports, 'randomString', {
	  enumerable: true,
	  get: function get() {
	    return _stringUtils.randomString;
	  }
	});
	Object.defineProperty(exports, 'stringList', {
	  enumerable: true,
	  get: function get() {
	    return _stringUtils.stringList;
	  }
	});
	
	var _jsonUtils = __webpack_require__(62);
	
	Object.defineProperty(exports, 'jsonStringToObject', {
	  enumerable: true,
	  get: function get() {
	    return _jsonUtils.jsonStringToObject;
	  }
	});
	
	var _fullThrottle = __webpack_require__(56);
	
	Object.defineProperty(exports, 'fullThrottle', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_fullThrottle).default;
	  }
	});
	
	var _easing = __webpack_require__(73);
	
	Object.defineProperty(exports, 'easeInOutQuad', {
	  enumerable: true,
	  get: function get() {
	    return _easing.easeInOutQuad;
	  }
	});
	Object.defineProperty(exports, 'inOutQuintic', {
	  enumerable: true,
	  get: function get() {
	    return _easing.inOutQuintic;
	  }
	});
	
	var _intervalFunction = __webpack_require__(74);
	
	Object.defineProperty(exports, 'intervalFunction', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_intervalFunction).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
/* 3 */,
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
/* 18 */,
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
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
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
/* 59 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
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
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(70);
	module.exports = __webpack_require__(2).Object.assign;

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(71);
	module.exports = __webpack_require__(2).Object.keys;

/***/ },
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
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(8);
	
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(67)});

/***/ },
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

/***/ }
/******/ ])
});
;
//# sourceMappingURL=mdl-ext.common.js.map