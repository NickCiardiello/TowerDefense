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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/Constants.js":
/*!*****************************!*\
  !*** ./src/js/Constants.js ***!
  \*****************************/
/*! exports provided: canvas, context, mouse, pathElement, playBtn, mapDropdown, placeBasicTowerBtn, placeSniperTowerBtn, cashLbl, healthLbl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canvas", function() { return canvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "context", function() { return context; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mouse", function() { return mouse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathElement", function() { return pathElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playBtn", function() { return playBtn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDropdown", function() { return mapDropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "placeBasicTowerBtn", function() { return placeBasicTowerBtn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "placeSniperTowerBtn", function() { return placeSniperTowerBtn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cashLbl", function() { return cashLbl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "healthLbl", function() { return healthLbl; });
// Canvas + Context
var canvas = document.querySelector('canvas');
canvas.width = 800;
canvas.height = 800;
var context = canvas.getContext('2d'); // Mouse

var rect = canvas.getBoundingClientRect();
var mouse = {
  x: 0,
  y: 0
};
addEventListener('mousemove', function (event) {
  mouse.x = event.clientX - rect.left;
  mouse.y = event.clientY;
}); // Game Vars
// export var cash = 200;
// export var health = 100;
// Elements

var pathElement = document.createElementNS('http://www.w3.org/2000/svg', "path");
var playBtn = document.getElementById("playBtn");
var mapDropdown = document.getElementById("mapDropdown");
var placeBasicTowerBtn = document.getElementById("placeBasicTowerBtn");
var placeSniperTowerBtn = document.getElementById("placeSniperTowerBtn");
var cashLbl = document.getElementById('cashLbl');
var healthLbl = document.getElementById('healthLbl');

/***/ }),

/***/ "./src/js/Draw.js":
/*!************************!*\
  !*** ./src/js/Draw.js ***!
  \************************/
/*! exports provided: clear, drawTower, drawTowerRange, drawTowerFull, drawPath, drawTowers, drawTowersFull, drawAttack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clear", function() { return clear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawTower", function() { return drawTower; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawTowerRange", function() { return drawTowerRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawTowerFull", function() { return drawTowerFull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawPath", function() { return drawPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawTowers", function() { return drawTowers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawTowersFull", function() { return drawTowersFull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawAttack", function() { return drawAttack; });
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Constants */ "./src/js/Constants.js");
/* harmony import */ var _Maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Maps */ "./src/js/Maps.js");


function clear() {
  _Constants__WEBPACK_IMPORTED_MODULE_0__["context"].clearRect(0, 0, _Constants__WEBPACK_IMPORTED_MODULE_0__["canvas"].width, _Constants__WEBPACK_IMPORTED_MODULE_0__["canvas"].height);
}
function drawTower(tower) {
  tower.context.beginPath();
  tower.context.arc(tower.x, tower.y, tower.radius, 0, Math.PI * 2, false);
  tower.context.fillStyle = tower.color;
  tower.context.fill();
  tower.context.closePath();
}
function drawTowerRange(tower) {
  tower.context.beginPath();
  tower.context.arc(tower.x, tower.y, tower.rangeRadius, 0, Math.PI * 2, false);
  tower.context.fillStyle = '#d3d3d3';
  tower.context.fill();
  tower.context.closePath();
}
function drawTowerFull(tower) {
  drawTowerRange(tower);
  drawTower(tower);
}
function drawPath() {
  _Constants__WEBPACK_IMPORTED_MODULE_0__["context"].beginPath();
  _Constants__WEBPACK_IMPORTED_MODULE_0__["context"].strokeStyle = '#000';
  _Constants__WEBPACK_IMPORTED_MODULE_0__["context"].lineWidth = 1;
  _Constants__WEBPACK_IMPORTED_MODULE_0__["context"].stroke(new Path2D(Object(_Maps__WEBPACK_IMPORTED_MODULE_1__["getMap"])()));
  _Constants__WEBPACK_IMPORTED_MODULE_0__["context"].closePath();
}
function drawTowers(towers) {
  for (var i = 0; i < towers.length; i++) {
    towers[i].drawTower();
  }
}
function drawTowersFull(towers) {
  for (var i = 0; i < towers.length; i++) {
    towers[i].drawTowerRange();
  }

  for (var _i = 0; _i < towers.length; _i++) {
    towers[_i].drawTower();
  }
}
function drawAttack(towerX, towerY, enemyX, enemyY) {
  _Constants__WEBPACK_IMPORTED_MODULE_0__["context"].beginPath();
  _Constants__WEBPACK_IMPORTED_MODULE_0__["context"].moveTo(towerX, towerY);
  _Constants__WEBPACK_IMPORTED_MODULE_0__["context"].lineTo(enemyX, enemyY);
  _Constants__WEBPACK_IMPORTED_MODULE_0__["context"].stroke();
}

/***/ }),

/***/ "./src/js/Maps.js":
/*!************************!*\
  !*** ./src/js/Maps.js ***!
  \************************/
/*! exports provided: setMap, getMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMap", function() { return setMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMap", function() { return getMap; });
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Constants */ "./src/js/Constants.js");

var backwardsCMap = 'm-0.5,54.45313c0,0 1,0 3,0c1,0 3,0 7,0c2,0 5,0 9,0c3,0 5,0 8,0c3,0 6,0 9,0c4,0 8,0 11,0c2,0 6,0 8,0c1,0 3,0 5,0c2,0 4,-1 7,-1c4,0 7,0 10,0c4,0 8,0 11,0c3,0 6,0 9,0c2,0 4,0 6,0c2,0 4,0 6,0c2,0 4,0 7,0c2,0 4,0 6,0c4,0 7,0 9,0c3,0 6,0 9,0c2,0 6,0 8,0c2,0 4,0 6,0c3,0 6,0 9,0c3,0 6,0 9,0c3,0 6,0 11,0c3,0 5.82375,0.48626 8,1c2.91975,0.68926 4.87856,0.49346 8,1c1.97418,0.32037 5.03874,0.51945 8,1c3.12144,0.50654 6,1 10,1c7,0 12,0 17,0c7,0 13,0 20,0c6,0 12,0 16,0c5,0 9,0 13,0c6,0 10,0 14,0c4,0 7,0 10,0c2,0 4,0 6,0c2,0 5,0 7,0c4,0 5,0 9,0c4,0 7,0 10,0c3,0 7,0 10,0c3,0 5,0 8,0c2,0 4,0 9,0c3,0 7,0 10,0c4,0 7,0 10,0c4,0 7,0 10,0c3,0 6,0 11,0c2,0 4,0 6,0c2,0 5,0 8,0c3,0 6,0 8,0c3,0 5,0 7,0c4,0 6.0535,0.54049 8,1c2.17624,0.51374 3.15225,1.23463 5,2c1.30655,0.54119 2.82376,1.48626 5,2c0.97324,0.22975 2.0535,0.54049 4,1c2.17624,0.51374 4.0535,0.54049 6,1c2.17624,0.51374 3.82376,1.48626 6,2c1.9465,0.4595 4.82376,0.48626 7,1c2.91974,0.68926 5,0 6,1c1,1 3.69345,1.4588 5,2c1.84775,0.76537 2.69345,1.4588 4,2c0.92389,0.38268 2,1 3,2c1,1 1.61731,2.07612 2,3c0.5412,1.30656 1.69254,2.186 3,4c0.8269,1.14727 1.5405,2.0535 2,4c0.51373,2.17625 0.5405,3.0535 1,5c0.51373,2.17625 1,4 1,6c0,2 1,4 1,7c0,2 0,4 0,6c0,3 0,4 0,5c0,3 0,4 0,5c0,2 -0.22977,4.02675 0,5c0.51373,2.17625 1,4 1,6c0,1 0,3 0,5c0,2 0,3 0,5c0,2 0,4 0,5c0,2 0.4595,5.0535 0,7c-0.51373,2.17625 -0.5405,3.0535 -1,5c-0.51373,2.17625 -1.5405,3.0535 -2,5c-0.51373,2.17625 -2,3 -2,5c0,2 -1.5405,4.0535 -2,6c-0.51373,2.17625 -1.77023,4.02675 -2,5c-0.51373,2.17625 -0.69254,5.186 -2,7c-0.8269,1.14726 -1.69254,3.186 -3,5c-0.8269,1.14726 -2.1731,1.85274 -3,3c-1.30746,1.814 -2,3 -2,3c-1,1 -2.4588,1.69344 -3,3c-0.38269,0.92387 -1,1 -3,2c0,0 -3,1 -5,2c-4,2 -6.0535,2.5405 -8,3c-2.17624,0.51375 -3.93414,1.14429 -6,2c-2.92157,1.21014 -5.82376,1.48625 -8,2c-3.89301,0.91901 -6.87857,0.49345 -10,1c-7.8967,1.28146 -13,0 -19,0c-4,0 -7,0 -10,0c-3,0 -6,0 -8,0c-3,0 -5,0 -7,0c-3,0 -7,0 -11,0c-4,0 -8,0 -12,0c-4,0 -9,0 -13,0c-5,0 -9,0 -13,0c-5,0 -10,0 -18,0c-7,0 -13,0 -20,0c-6,0 -10,0 -15,0c-6,0 -11,0 -16,0c-5,0 -11,0 -18,0c-4,0 -10,0 -17,0c-6,0 -12.9258,0.49756 -18,1c-3.98053,0.39415 -8,1 -12,1c-4,0 -8,0 -14,0c-6,0 -15,0 -19,0c-5,0 -11,0 -17,0c-5,0 -10,0 -15,0c-4,0 -10,0 -14,0c-5,0 -12,0 -16,0c-4,0 -8,0 -12,0c-4,0 -7,0 -11,0c-4,0 -7,0 -11,0c-4,0 -8,0 -12,0c-3,0 -7,0 -11,0c-3,0 -6,0 -8,0c-2,0 -5,0 -8,0c-3,0 -6,0 -9,0c-4,0 -7,0 -9,0c-4,0 -7,0 -9,0c-2,0 -4.02675,-0.22975 -5,0c-2.17625,0.51375 -4,1 -5,1c-1,0 -3,0 -4,0c-2,0 -3,0 -3,0c-1,0 -1,0 -1,0c-1,0 -1,0 -1,0c0,0 -1,0 -1,0c0,0 -1,0 -2,0c0,0 0,0 -1,0c0,0 0,0 0,0c-1,0 -2,0 -2,0l0,0l-1,0l0,0';
var sMap = 'm468.36093,-0.54688c0,0 0,2.38469 0,4.76938c0,0 0,2.38469 0,4.76938c0,2.38469 0,4.76938 0,7.15407c0,0 0,2.38469 0,2.38469c0,2.38469 0,4.76938 0,4.76938c0,2.38469 -2.21966,3.08315 0,4.76938c2.21966,1.68623 3.13907,2.38469 3.13907,2.38469c0,2.38469 0,2.38469 0,4.76938c0,0 0,2.38469 0,4.76938c0,0 0,2.38469 0,2.38469c0,2.38469 0,2.38469 0,4.76938c0,0 0,0 0,2.38469c0,0 0,0 0,2.38469c0,0 0,2.38469 0,2.38469c0,0 0,2.38469 0,2.38469c-3.13907,0 -3.13907,2.38469 -3.13907,2.38469c0,0 0,2.38469 0,2.38469c0,0 -3.13907,0 -3.13907,2.38469c0,0 -0.91941,0.69846 -3.13907,2.38469c-2.21966,1.68623 0,2.38469 -3.13907,4.76938c0,0 -0.91941,0.69846 -3.13907,2.38469c-2.21966,1.68623 0,2.38469 0,2.38469c-3.13907,2.38469 -0.91941,3.08315 -3.13907,4.76938c-2.21966,1.68623 -0.91941,0.69846 -3.13907,2.38469c-2.21966,1.68623 -3.13907,2.38469 -6.27815,2.38469c0,0 -3.13907,0 -3.13907,0c-3.13907,2.38469 -6.51711,1.47211 -9.41722,2.38469c-4.1014,1.29058 -6.51711,1.47211 -9.41722,2.38469c-4.1014,1.29058 -3.61696,0.55953 -9.41722,2.38469c-4.1014,1.29058 -6.27815,2.38469 -9.41722,2.38469c-3.13907,0 -3.61698,-1.82516 -9.41722,0c-4.1014,1.29058 -12.55629,2.38469 -12.55629,2.38469c-9.41722,0 -16.17327,-1.82516 -21.97351,0c-4.1014,1.29058 -9.41722,2.38469 -12.55629,2.38469c-6.27815,0 -9.41722,0 -12.55629,0c-3.13907,0 -3.37801,-0.91258 -6.27815,0c-4.1014,1.29058 -6.27815,2.38469 -6.27815,2.38469c-3.13907,0 -6.27815,0 -9.41722,0c-3.13907,0 -6.27815,2.38469 -9.41722,2.38469c-6.27815,0 -6.27815,0 -12.55629,0c-6.27815,0 -15.14209,1.15957 -21.97351,2.38469c-6.11019,1.09578 -12.55629,0 -18.83444,0c-6.27815,0 -12.55629,2.38469 -18.83444,2.38469c-3.13907,0 -6.27815,0 -9.41722,0c-6.27815,0 -8.86394,1.15957 -15.69536,2.38469c-3.05509,0.54789 -3.37803,-0.91258 -6.27815,0c-4.1014,1.29058 -6.27815,2.38469 -9.41722,2.38469c0,0 -3.13907,2.38469 -3.13907,2.38469c-3.13907,0 -4.05848,0.69846 -6.27815,2.38469c-2.21966,1.68623 -3.37803,1.47211 -6.27815,2.38469c-4.1014,1.29058 -3.13907,2.38469 -6.27815,4.76938c0,0 -4.05848,-1.68623 -6.27815,0c-2.21966,1.68623 -0.91941,3.08315 -3.13907,4.76938c-2.21966,1.68623 -4.05848,0.69846 -6.27815,2.38469c-2.21966,1.68623 -3.13907,2.38469 -3.13907,2.38469c-3.13907,2.38469 -3.13907,2.38469 -6.27815,4.76938c0,0 2.21966,0.69846 0,2.38469c-2.21966,1.68623 -3.13907,2.38469 -3.13907,4.76938c0,0 0,2.38469 0,2.38469c0,2.38469 0,4.76938 0,4.76938c0,2.38469 0,2.38469 0,4.76938c0,2.38469 0,2.38469 0,4.76938c0,0 0,2.38469 0,2.38469c0,2.38469 3.13907,4.76938 3.13907,4.76938c3.13907,2.38469 4.5793,1.65363 6.27815,4.76938c1.20127,2.20317 0.91941,3.08315 3.13907,4.76938c2.21966,1.68623 6.27815,2.38469 6.27815,2.38469c0,2.38469 3.13907,2.38469 3.13907,4.76938c0,0 3.13907,2.38469 3.13907,2.38469c3.13907,0 3.13907,2.38469 6.27815,2.38469c3.13907,0 3.13907,2.38469 6.27815,2.38469c0,0 0.91941,0.69846 3.13907,2.38469c2.21966,1.68623 3.37803,1.47211 6.27815,2.38469c4.1014,1.29059 6.27815,2.38469 6.27815,2.38469c3.13907,2.38469 6.27815,2.38469 9.41722,4.76938c0,0 3.13907,2.38469 6.27815,2.38469c0,0 0,2.38469 3.13907,2.38469c3.13907,0 7.19756,0.69846 9.41722,2.38469c2.21966,1.68623 3.37801,1.47211 6.27815,2.38469c4.1014,1.29059 5.31582,3.47879 9.41722,4.76938c2.90013,0.91258 6.27815,0 6.27815,0c3.13907,0 6.27815,2.38469 9.41722,2.38469c0,0 4.05848,0.69846 6.27815,2.38469c2.21966,1.68623 7.19756,-1.68623 9.41722,0c2.21966,1.68623 3.13907,2.38469 6.27815,2.38469c3.13907,0 2.17675,1.0941 6.27815,2.38469c2.90013,0.91258 3.13907,0 6.27815,0c3.13907,0 3.13907,0 6.27815,0c3.13907,0 3.13907,0 6.27815,0c0,0 3.13907,0 6.27815,0c3.13907,0 2.17675,1.0941 6.27815,2.38469c2.90013,0.91258 9.41722,0 12.55629,0c6.27815,0 6.27815,0 12.55629,0c6.27815,0 8.45489,1.0941 12.55629,2.38469c2.90013,0.91258 6.27815,0 12.55629,0c3.13907,0 6.75605,-1.82516 12.55629,0c4.1014,1.29059 6.27815,2.38469 9.41722,2.38469c3.13907,0 6.27815,2.38469 6.27815,2.38469c3.13907,0 7.19756,0.69846 9.41722,2.38469c2.21966,1.68623 5.31582,3.47879 9.41722,4.76938c2.90011,0.91258 5.07685,2.56621 6.27815,4.76938c1.69886,3.11575 3.13907,2.38469 6.27815,4.76938c3.13907,2.38469 3.37804,3.8568 6.27815,4.76938c4.1014,1.29059 3.13907,4.76938 3.13907,7.15407c0,2.38469 3.13907,4.76938 3.13907,4.76938c0,2.38469 0,4.76938 0,7.15407c0,0 0,2.38469 0,4.76938c0,2.38469 0,2.38469 0,4.76938c0,4.76938 0,4.76938 0,9.53876c0,4.76938 0,4.76938 0,9.53876c0,0 0,2.38469 0,7.15407c0,0 2.21966,3.08315 0,4.76938c-2.21966,1.68623 -0.91941,3.08315 -3.13907,4.76938c-2.21966,1.68623 -4.05848,0.69846 -6.27815,2.38469c-2.21966,1.68623 -6.27815,0 -9.41722,2.38469c0,0 -5.31582,1.0941 -9.41722,2.38469c-2.90013,0.9126 -5.31582,1.0941 -9.41722,2.38469c-2.90013,0.9126 -9.41722,2.38469 -12.55629,2.38469c-6.27815,0 -13.14017,-0.73317 -18.83444,2.38469c-3.60136,1.97191 -10.0011,1.65152 -15.69536,4.76938c-3.60136,1.97191 -8.86394,5.92894 -15.69536,7.15407c-3.05511,0.54789 -6.27815,2.38469 -9.41722,4.76938c0,0 -6.27815,2.38469 -9.41722,4.76938c0,0 -5.81585,0.41278 -9.41722,2.38469c-5.69426,3.11786 -11.59396,3.47879 -15.69536,4.76938c-5.80024,1.82516 -12.78168,1.64839 -28.25166,4.76938c-9.59408,1.93556 -22.02656,4.53901 -40.80795,7.15407c-15.74393,2.19213 -27.96219,5.95274 -40.80795,7.15407c-12.46222,1.16549 -24.73136,3.56143 -34.5298,4.76938c-9.29562,1.14595 -18.28117,1.15956 -25.11258,2.38469c-3.05509,0.54789 -9.41722,0 -12.55629,0c-3.13907,0 -6.27815,0 -12.55629,0c-3.13907,0 -6.27815,0 -9.41722,0c0,0 -3.13907,0 -6.27815,0c-3.13907,0 -6.27815,0 -6.27815,0c-3.13907,0 -6.27815,0 -9.41722,0c0,0 -6.27815,0 -9.41722,0c0,0 -3.13907,0 -6.27815,0c-3.13907,0 -9.41722,0 -9.41722,0c-3.13907,0 -9.41722,0 -9.41722,0c-3.13907,0 -3.13907,0 -3.13907,0c-3.13907,0 -3.13907,0 -6.27815,0c0,0 0,0 -3.13907,0c0,0 0,0 0,0c-3.13907,0 -3.13907,0 -3.13907,0c-3.13907,0 -3.13907,0 -3.13907,0c0,0 -3.13907,0 -3.13907,0c0,0 -3.13907,0 -3.13907,0c0,0 0,0 -3.13907,0l0,0l0,0l-3.13907,0';
var curMap;
function setMap(map) {
  switch (map) {
    case 'backwardsCMap':
      curMap = backwardsCMap;
      break;

    case 'sMap':
      curMap = sMap;
      break;

    default:
      curMap = backwardsCMap;
  }

  _Constants__WEBPACK_IMPORTED_MODULE_0__["pathElement"].setAttributeNS(null, 'd', curMap);
}
function getMap() {
  return curMap;
}

/***/ }),

/***/ "./src/js/Rounds.js":
/*!**************************!*\
  !*** ./src/js/Rounds.js ***!
  \**************************/
/*! exports provided: createEnemiesForRound, getReward */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEnemiesForRound", function() { return createEnemiesForRound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getReward", function() { return getReward; });
/* harmony import */ var _enemies_Circle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enemies/Circle */ "./src/js/enemies/Circle.js");
/* harmony import */ var _enemies_Squares__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enemies/Squares */ "./src/js/enemies/Squares.js");


function createEnemiesForRound(context, round) {
  var enemies = [];

  switch (round) {
    case 1:
      enemies[0] = new _enemies_Squares__WEBPACK_IMPORTED_MODULE_1__["default"](context, 'red');
      enemies[1] = new _enemies_Squares__WEBPACK_IMPORTED_MODULE_1__["default"](context, 'gray');
      enemies[2] = new _enemies_Circle__WEBPACK_IMPORTED_MODULE_0__["default"](context, 'blue');
      enemies[3] = new _enemies_Circle__WEBPACK_IMPORTED_MODULE_0__["default"](context, 'yellow');
      break;

    case 2:
      enemies[0] = new _enemies_Circle__WEBPACK_IMPORTED_MODULE_0__["default"](context, 'blue');
      enemies[1] = new _enemies_Circle__WEBPACK_IMPORTED_MODULE_0__["default"](context, 'yellow');
      break;

    default:
      break;
  }

  return enemies;
}
function getReward(round) {
  switch (round) {
    case 1:
      return 50;

    case 2:
      return 50;

    default:
      return 0;
  }
}

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _towers_Tower__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./towers/Tower */ "./src/js/towers/Tower.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Constants */ "./src/js/Constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
/* harmony import */ var _Rounds__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Rounds */ "./src/js/Rounds.js");
/* harmony import */ var _Maps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Maps */ "./src/js/Maps.js");
/* harmony import */ var _Draw__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Draw */ "./src/js/Draw.js");





 // Game Vars

var cash = 200;
var health = 100;
var towers = [];
var placing = false;
var round = 1;
var enemies = [];
var running = false;
/*
Init
 */

Object(_Maps__WEBPACK_IMPORTED_MODULE_4__["setMap"])('');
checkAfford(cash);
Object(_Draw__WEBPACK_IMPORTED_MODULE_5__["drawPath"])();
_Constants__WEBPACK_IMPORTED_MODULE_1__["playBtn"].addEventListener("click", run, false);
_Constants__WEBPACK_IMPORTED_MODULE_1__["mapDropdown"].addEventListener("change", function () {
  setNewMap();
}, false);
_Constants__WEBPACK_IMPORTED_MODULE_1__["placeBasicTowerBtn"].addEventListener("click", function () {
  placeTower('BasicTower');
}, false);
_Constants__WEBPACK_IMPORTED_MODULE_1__["placeSniperTowerBtn"].addEventListener("click", function () {
  placeTower('SniperTower');
}, false);
_Constants__WEBPACK_IMPORTED_MODULE_1__["canvas"].addEventListener('click', function () {
  placing = false;
}, false);
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && placing) {
    placing = false;
    towers.pop();
    cash += towers[towers.length - 1].price;
    Object(_Draw__WEBPACK_IMPORTED_MODULE_5__["drawTowers"])(towers);
    Object(_Draw__WEBPACK_IMPORTED_MODULE_5__["drawPath"])();
  }
}, false);
/*
Drag and drop tower
 */

function placeTower(towerType) {
  placing = true;
  towers[towers.length] = new _towers_Tower__WEBPACK_IMPORTED_MODULE_0__["default"](_Constants__WEBPACK_IMPORTED_MODULE_1__["context"], towerType, _Constants__WEBPACK_IMPORTED_MODULE_1__["mouse"].x, _Constants__WEBPACK_IMPORTED_MODULE_1__["mouse"].y);
  place();
}

function place() {
  Object(_Draw__WEBPACK_IMPORTED_MODULE_5__["clear"])();

  if (placing) {
    requestAnimationFrame(place);
    towers[towers.length - 1].update(_Constants__WEBPACK_IMPORTED_MODULE_1__["mouse"].x, _Constants__WEBPACK_IMPORTED_MODULE_1__["mouse"].y);
    Object(_Draw__WEBPACK_IMPORTED_MODULE_5__["drawTowersFull"])(towers);
  } else {
    cash -= towers[towers.length - 1].price;
    _Constants__WEBPACK_IMPORTED_MODULE_1__["cashLbl"].innerHTML = "$" + cash;
    checkAfford(cash);
    Object(_Draw__WEBPACK_IMPORTED_MODULE_5__["drawTowers"])(towers);
  }

  Object(_Draw__WEBPACK_IMPORTED_MODULE_5__["drawPath"])();
}
/*
Play round
 */


function run() {
  running = true;
  enemies = Object(_Rounds__WEBPACK_IMPORTED_MODULE_3__["createEnemiesForRound"])(_Constants__WEBPACK_IMPORTED_MODULE_1__["context"], round);
  startRound();
}

function startRound() {
  _Constants__WEBPACK_IMPORTED_MODULE_1__["context"].clearRect(0, 0, _Constants__WEBPACK_IMPORTED_MODULE_1__["canvas"].width, _Constants__WEBPACK_IMPORTED_MODULE_1__["canvas"].height);
  Object(_Draw__WEBPACK_IMPORTED_MODULE_5__["drawTowers"])(towers);
  Object(_Draw__WEBPACK_IMPORTED_MODULE_5__["drawPath"])();

  for (var i = 0; i < enemies.length; i++) {
    var x = parseInt(_Constants__WEBPACK_IMPORTED_MODULE_1__["pathElement"].getPointAtLength(enemies[i].step).x);
    var y = parseInt(_Constants__WEBPACK_IMPORTED_MODULE_1__["pathElement"].getPointAtLength(enemies[i].step).y);
    enemies[i].update(x, y);
    enemies[i].move();

    if (enemies[i].step >= _Constants__WEBPACK_IMPORTED_MODULE_1__["pathElement"].getTotalLength()) {
      health -= enemies[i].damage;
      enemies.splice(i, 1); // document.getElementById('healthLbl').innerHTML = "Health: " + health;

      _Constants__WEBPACK_IMPORTED_MODULE_1__["healthLbl"].innerHTML = "Health: " + health;

      if (health <= 0) {
        alert('Game Over');
      }
    }
  }

  for (var _i = enemies.length - 1; _i >= 0; _i--) {
    for (var j = 0; j < towers.length; j++) {
      if (enemies[_i].alive > 0 && Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getDistance"])(enemies[_i].x, enemies[_i].y, towers[j].x, towers[j].y) < towers[j].rangeRadius) {
        Object(_Draw__WEBPACK_IMPORTED_MODULE_5__["drawAttack"])(towers[j].x, towers[j].y, enemies[_i].x, enemies[_i].y);

        enemies[_i].hit(towers[j].damage);

        if (!enemies[_i].alive) {
          cash += enemies[_i].damage;
          _Constants__WEBPACK_IMPORTED_MODULE_1__["cashLbl"].innerHTML = "$" + cash;
          enemies.splice(_i, 1);
        }

        break;
      }
    }
  }

  if (enemies.length === 0) {
    running = false;
    cash += Object(_Rounds__WEBPACK_IMPORTED_MODULE_3__["getReward"])(round);
    _Constants__WEBPACK_IMPORTED_MODULE_1__["cashLbl"].innerHTML = "$" + cash;
    round++;
    _Constants__WEBPACK_IMPORTED_MODULE_1__["playBtn"].innerHTML = "Play Round " + round;
  } else {
    requestAnimationFrame(startRound);
  }
}

function setNewMap() {
  Object(_Maps__WEBPACK_IMPORTED_MODULE_4__["setMap"])(_Constants__WEBPACK_IMPORTED_MODULE_1__["mapDropdown"].options[_Constants__WEBPACK_IMPORTED_MODULE_1__["mapDropdown"].selectedIndex].text);
  Object(_Draw__WEBPACK_IMPORTED_MODULE_5__["clear"])();
  Object(_Draw__WEBPACK_IMPORTED_MODULE_5__["drawPath"])();
}

function checkAfford() {
  document.getElementById('placeBasicTowerBtn').disabled = cash < 100;
  document.getElementById('placeSniperTowerBtn').disabled = cash < 150;
}

/***/ }),

/***/ "./src/js/enemies/Circle.js":
/*!**********************************!*\
  !*** ./src/js/enemies/Circle.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Circle; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Circle = /*#__PURE__*/function () {
  function Circle(context, color) {
    _classCallCheck(this, Circle);

    this.context = context;
    this.step = 0;
    this.x = 0;
    this.y = 0;
    this.alive = true;
    this.damage = 10;

    switch (color) {
      case "blue":
        this.radius = 50;
        this.speed = 5;
        this.color = 'blue';
        break;

      case "yellow":
        this.radius = 30;
        this.speed = 10;
        this.color = 'yellow';
        break;

      default:
        this.radius = 0;
        this.rangeRadius = 0;
        this.color = '#000';
    }
  }

  _createClass(Circle, [{
    key: "move",
    value: function move() {
      this.context.beginPath();
      this.context.fillStyle = this.color;
      this.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
      this.context.fill();
      this.context.closePath();
    }
  }, {
    key: "update",
    value: function update(x, y) {
      this.x = x;
      this.y = y;
      this.step += this.speed;
    }
  }, {
    key: "hit",
    value: function hit(damageTaken) {
      this.radius -= damageTaken;

      if (this.radius <= 0) {
        this.alive = false;
      }
    }
  }]);

  return Circle;
}();



/***/ }),

/***/ "./src/js/enemies/Squares.js":
/*!***********************************!*\
  !*** ./src/js/enemies/Squares.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Square; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Square = /*#__PURE__*/function () {
  function Square(context, color) {
    _classCallCheck(this, Square);

    this.context = context;
    this.step = 0;
    this.x = 0;
    this.y = 0;
    this.alive = true;
    this.damage = 15;

    switch (color) {
      case "red":
        this.speed = 3;
        this.height = 60;
        this.width = 60;
        this.color = 'red';
        break;

      case "gray":
        this.speed = 1;
        this.height = 40;
        this.width = 40;
        this.color = 'gray';
        break;

      default:
        this.speed = 0;
        this.height = 0;
        this.width = 0;
        this.color = 'black';
    }
  }

  _createClass(Square, [{
    key: "move",
    value: function move() {
      this.context.beginPath();
      this.context.fillStyle = this.color;
      this.context.rect(this.x, this.y, this.width, this.height);
      this.context.fill();
      this.context.closePath();
    }
  }, {
    key: "update",
    value: function update(x, y) {
      this.x = x;
      this.y = y;
      this.step += this.speed;
    }
  }, {
    key: "hit",
    value: function hit(damageTaken) {
      this.height -= damageTaken;
      this.width -= damageTaken;

      if (this.height <= 0 || this.width <= 0) {
        this.alive = false;
      }
    }
  }]);

  return Square;
}();



/***/ }),

/***/ "./src/js/towers/Tower.js":
/*!********************************!*\
  !*** ./src/js/towers/Tower.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tower; });
/* harmony import */ var _Draw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Draw */ "./src/js/Draw.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// import { drawTower, drawTowerRange, drawTowerFull } from '../utils.js';


var Tower = /*#__PURE__*/function () {
  function Tower(context, towerType, x, y) {
    _classCallCheck(this, Tower);

    this.context = context;
    this.x = x;
    this.y = y;

    switch (towerType) {
      case "BasicTower":
        this.radius = 25;
        this.rangeRadius = 125;
        this.color = '#964b00';
        this.damage = 0.5;
        this.price = 100;
        break;

      case "SniperTower":
        this.radius = 10;
        this.rangeRadius = 500;
        this.color = '#00ff00';
        this.damage = 0.25;
        this.price = 150;
        break;

      default:
        this.radius = 0;
        this.rangeRadius = 0;
        this.color = '#000';
        this.damage = 0;
    }
  }

  _createClass(Tower, [{
    key: "drawTower",
    value: function drawTower() {
      Object(_Draw__WEBPACK_IMPORTED_MODULE_0__["drawTower"])(this);
    }
  }, {
    key: "drawTowerFull",
    value: function drawTowerFull() {
      Object(_Draw__WEBPACK_IMPORTED_MODULE_0__["drawTowerFull"])(this);
    }
  }, {
    key: "drawTowerRange",
    value: function drawTowerRange() {
      Object(_Draw__WEBPACK_IMPORTED_MODULE_0__["drawTowerRange"])(this);
    }
  }, {
    key: "update",
    value: function update(x, y) {
      this.x = x;
      this.y = y;
    }
  }]);

  return Tower;
}();



/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! exports provided: randomIntFromRange, randomColor, getDistance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomIntFromRange", function() { return randomIntFromRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomColor", function() { return randomColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDistance", function() { return getDistance; });
function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)];
}
function getDistance(x1, y1, x2, y2) {
  var xDist = x2 - x1;
  var yDist = y2 - y1;
  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map