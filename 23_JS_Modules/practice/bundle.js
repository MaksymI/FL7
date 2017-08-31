/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__student__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__addGroup__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__output__ = __webpack_require__(3);




__WEBPACK_IMPORTED_MODULE_0__student__["a" /* default */].addToList(__WEBPACK_IMPORTED_MODULE_1__addGroup__["a" /* default */].addGroup('Ivan'));
__WEBPACK_IMPORTED_MODULE_0__student__["a" /* default */].addToList(__WEBPACK_IMPORTED_MODULE_1__addGroup__["a" /* default */].addGroup('Vasyl'));
__WEBPACK_IMPORTED_MODULE_0__student__["a" /* default */].addToList(__WEBPACK_IMPORTED_MODULE_1__addGroup__["a" /* default */].addGroup('Andriy'));

Object(__WEBPACK_IMPORTED_MODULE_2__output__["a" /* outputToPage */])(__WEBPACK_IMPORTED_MODULE_0__student__["a" /* default */].getList().join(','));

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
let studentList = [];

function addToList(name) {
    studentList.push(name);
}

function getList() {
    return studentList;
}

/* harmony default export */ __webpack_exports__["a"] = ({
    addToList: addToList,
    getList: getList,
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function addGroup(data) {
    return `${data} - group1`;
}

/* harmony default export */ __webpack_exports__["a"] = ({
    addGroup: addGroup
});

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = outputToPage;
/* unused harmony export outputToConsole */
function outputToPage (data) {
    let divNode = document.getElementById('out');
    divNode.innerHTML = data;
}

function outputToConsole (data) {
    console.log('Data: ' + data);
}


/***/ })
/******/ ]);