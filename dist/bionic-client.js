(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["bionic"] = factory();
	else
		root["bionic"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Bionic = exports.Bionic = function () {\n  function Bionic() {\n    _classCallCheck(this, Bionic);\n\n    this._settings = Object.create(null);\n    this._data = Object.create(null);\n  }\n\n  _createClass(Bionic, [{\n    key: \"initialize\",\n    value: function initialize(key, user) {\n      var metadata = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};\n\n      this._data = _extends({}, this._data, {\n        client_key: key,\n        reporting_user: user,\n        metadata: metadata\n      });\n      this._settings = {\n        env: options.environment || \"production\"\n      };\n    }\n  }, {\n    key: \"settings\",\n    get: function get() {\n      return this._settings;\n    }\n  }, {\n    key: \"data\",\n    get: function get() {\n      return this._data;\n    }\n  }, {\n    key: \"flagged_content\",\n    set: function set(_content) {\n      this._data = _extends({}, this._data, {\n        flagged_data: _content\n      });\n    }\n  }, {\n    key: \"category\",\n    set: function set(_category) {\n      this._data = _extends({}, this._data, {\n        category: _category\n      });\n    }\n  }, {\n    key: \"context\",\n    set: function set(_context) {\n      this._data = _extends({}, this._data, {\n        context: _context\n      });\n    }\n  }, {\n    key: \"reporting_user\",\n    set: function set(_user) {\n      this._data = _extends({}, this._data, {\n        reporting_user: _user\n      });\n    }\n  }, {\n    key: \"flagged_user\",\n    set: function set(_user) {\n      this._data = _extends({}, this._data, {\n        flagged_user: _user\n      });\n    }\n  }, {\n    key: \"metadata\",\n    set: function set(_metadata) {\n      this._data = _extends({}, this._data, {\n        metadata: _extends({}, this._data.metadata, _metadata)\n      });\n    }\n  }]);\n\n  return Bionic;\n}();\n\nvar bionic = new Bionic();\nvar initialize = exports.initialize = function initialize(key, user, metadata, options) {\n  return bionic.initialize(key, user, metadata, options);\n};\n\nexports.default = bionic;\n\n//# sourceURL=webpack://bionic/./src/config.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.requestor = exports.initialize = exports.config = undefined;\n\nvar _config = __webpack_require__(/*! ./config */ \"./src/config.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nvar _requests = __webpack_require__(/*! ./requests */ \"./src/requests.js\");\n\nvar _requests2 = _interopRequireDefault(_requests);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.config = _config2.default;\nexports.initialize = _config.initialize;\nexports.requestor = _requests2.default;\n\n//# sourceURL=webpack://bionic/./src/index.js?");

/***/ }),

/***/ "./src/requests.js":
/*!*************************!*\
  !*** ./src/requests.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _config = __webpack_require__(/*! ./config */ \"./src/config.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar BionicRequests = function () {\n  function BionicRequests(server) {\n    _classCallCheck(this, BionicRequests);\n\n    this._server = \"https://stream.bionic-app.net\";\n    if (!!server) {\n      this._server = \"https://stream.${server}\";\n    }\n    this._url = this._server + \"/flags\";\n  }\n\n  _createClass(BionicRequests, [{\n    key: \"sendFlag\",\n    value: function sendFlag() {\n      var _this = this;\n\n      return new Promise(function (resolve, reject) {\n        var xhttp = new XMLHttpRequest();\n\n        xhttp.onreadystatechange = function () {\n          if (this.readyState === 4 && this.status >= 299) {\n            if (this.status >= 299) {\n              console.error(\"failed to report content to bionic\");\n              reject(JSON.parse(this.responseText));\n            } else if (this.status === 204) {\n              resolve();\n            }\n          }\n        };\n\n        xhttp.open(\"POST\", _this._url, true);\n        xhttp.setRequestHeader(\"Content-Type\", \"application/json\");\n        xhttp.send(JSON.stringify(_config2.default.data));\n      });\n    }\n  }]);\n\n  return BionicRequests;\n}();\n\nexports.default = BionicRequests;\n\n//# sourceURL=webpack://bionic/./src/requests.js?");

/***/ })

/******/ });
});