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
/*! exports provided: canvas, context, mouse, pathElement, playBtn, mapDropdown, placeBasicTowerBtn, placeSniperTowerBtn, placeSentryTowerBtn, cashLbl, healthLbl */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "placeSentryTowerBtn", function() { return placeSentryTowerBtn; });
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
}); // Elements

var pathElement = document.createElementNS('http://www.w3.org/2000/svg', "path");
var playBtn = document.getElementById("playBtn");
var mapDropdown = document.getElementById("mapDropdown");
var placeBasicTowerBtn = document.getElementById("placeBasicTowerBtn");
var placeSniperTowerBtn = document.getElementById("placeSniperTowerBtn");
var placeSentryTowerBtn = document.getElementById("placeSentryTowerBtn");
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

var sinMap = 'm-2.5,590.45313c0,0 0,0 2,0c2,0 3.07612,-0.61731 4,-1c1.30656,-0.5412 2,-1 3,-1c1,0 3,-1 3,-1c1,0 1.69344,-0.4588 3,-1c1.84776,-0.76538 2.69344,-0.4588 4,-1c0.92388,-0.38269 2,-1 3,-1c2,0 3.07612,-0.61731 4,-1c1.30656,-0.5412 2.85273,-1.1731 4,-2c1.81399,-1.30743 3.02675,-1.77026 4,-2c2.17625,-0.51373 2,-2 3,-3c1,-1 1.61732,-2.07611 2,-3c0.54119,-1.30658 2,-1 3,-2c1,-1 2,-3 3,-4c1,-1 1.45881,-1.69342 2,-3c0.38268,-0.92389 1,-3 2,-5c1,-2 2.22421,-4.90283 3,-7c1.4305,-3.867 4.75531,-10.13202 7,-14c1.80972,-3.11847 4.4159,-5.76111 6,-9c1.38935,-2.8407 2.33749,-5.31 4,-8c1.48699,-2.40601 3.14429,-4.93414 4,-7c1.21015,-2.92157 2.11587,-5.96384 3,-9c1.15277,-3.95868 3.11587,-6.96384 4,-10c1.15277,-3.95868 2.14773,-7.94342 4,-13c1.08769,-2.96933 2.54863,-6.76993 4,-11c1.65482,-4.82303 3.95399,-13.01331 6,-20c2.93415,-10.01953 5.28472,-14.92484 7,-22c1.20139,-4.95547 3.8484,-11.0451 6,-18c1.86919,-6.04202 3,-13 5,-18c2,-5 3.88929,-12.03806 6,-18c2.85142,-8.05417 8,-27 11,-36c5,-15 9.78102,-27.70364 14,-40c3.70029,-10.78461 5.98534,-18.52814 8,-24c2.10167,-5.70816 2.5695,-9.133 4,-13c1.55159,-4.19434 4.64886,-10.19577 7,-14c2.62866,-4.25325 4.72398,-8.22273 8,-12c2.77979,-3.20512 7.82285,-7.18536 12,-11c5.76726,-5.26675 13.74184,-11.32718 20,-16c8.66713,-6.47154 20.0947,-14.87578 28,-21c5.06187,-3.92142 9.40401,-7.41156 14,-11c3.34407,-2.61098 6.06601,-4.87766 8,-6c3.11848,-1.80972 5,-2 7,-2c2,0 4,0 7,0c3,0 5,0 8,0c2,0 5.01498,-0.24437 7,0c4.09222,0.50377 6.03873,1.51945 9,2c3.12143,0.50655 5.87857,1.49345 9,2c2.96127,0.48055 9.17163,0.84087 13,2c3.45084,1.04483 6.31,1.33749 9,3c2.40601,1.487 4,3 6,4c2,1 5.06601,1.87766 7,3c3.11847,1.80972 4,3 6,5c2,2 5,4 7,6c3,3 4.70547,5.34619 7,7c1.814,1.30745 4,3 6,5c2,2 4.61383,2.297 7,5c1.47983,1.67633 3.1731,3.85274 4,5c1.30746,1.814 2.53491,2.31076 4,4c2.07193,2.38896 2.34619,3.70546 4,6c1.30746,1.814 1.71411,4.21167 4,7c1.79318,2.18735 4,4 5,5c2,2 3,4 5,6c2,2 3.34619,2.70546 5,5c1.30746,1.814 2,3 4,6c2,3 4.14429,4.93414 5,7c1.21014,2.92157 2.41589,4.76108 4,8c1.38934,2.84073 2,6 3,9c1,3 2.91232,6.03067 4,9c1.85226,5.05658 1.84085,9.17163 3,13c1.04483,3.45084 3.11588,5.96384 4,9c1.15277,3.95868 1.95517,6.54916 3,10c0.86935,2.87128 0.31073,5.08026 1,8c0.51373,2.17624 2.48627,5.82376 3,8c0.4595,1.9465 0.67963,4.02582 1,6c0.50653,3.12143 1.49347,5.87857 2,9c0.32037,1.97418 1.31073,5.08026 2,8c1.0275,4.35251 2.73145,10.0769 4,14c1.65686,5.12396 3.73145,8.0769 5,12c1.65686,5.12396 3.54861,8.76993 5,13c1.65482,4.82303 2.28857,8.86829 4,13c1.21014,2.92157 1.98163,6.71201 3,12c0.75644,3.92783 0.84723,7.04132 2,11c0.88412,3.03616 0.84723,7.04132 2,11c0.88412,3.03616 1.56952,7.133 3,11c1.55161,4.19434 2.67862,8.12704 4,11c2.43649,5.29749 3.61066,7.15927 5,10c1.58411,3.23892 3.41589,5.76108 5,9c1.38934,2.84073 2.41589,5.76108 4,9c1.38934,2.84073 2,5 3,8c1,3 3,6 4,9c1,3 2.41589,4.76111 4,8c1.38934,2.8407 2.78986,6.07843 4,9c1.71143,4.13171 4.19028,6.88153 6,10c2.24469,3.86798 2.724,7.22272 6,11c1.85318,2.13672 2.81265,4.20679 5,6c2.78833,2.28589 4,3 6,4c2,1 1.82373,2.48627 4,3c0.97327,0.22974 2,0 4,0c2,0 4,0 7,0c2,0 6,1 10,2c4,1 8,1 12,2c4,1 6.87854,1.49347 10,2c1.97418,0.32037 3,0 5,0c1,0 3,0 4,0c1,0 2,0 4,0c1,0 1.90631,-1.10339 3,-2c2.78833,-2.28589 3,-3 5,-4c2,-1 4,-3 6,-4c2,-1 3.88153,-3.19031 7,-5c1.93402,-1.12231 5.06598,-2.87769 7,-4c3.11847,-1.80969 5.88153,-4.19031 9,-6c1.93402,-1.12231 5,-3 9,-5c4,-2 8.13202,-3.75531 12,-6c3.11847,-1.80969 6,-3 8,-4c2,-1 4.88153,-3.19031 8,-5c1.93402,-1.12231 4.34619,-2.70544 6,-5c1.30743,-1.81396 4.08051,-4.93176 10,-12c9.12537,-10.89624 21.6723,-25.26816 34,-40c6.82196,-8.15234 15.35577,-16.76016 22,-27c3.17389,-4.89148 5.56952,-9.133 7,-13c1.55157,-4.19434 3.84723,-8.04132 5,-12c0.88416,-3.03616 2.09546,-6.97736 3,-11c1.11865,-4.97479 2.69073,-9.7764 4,-15c2.20154,-8.78369 2.49872,-14.94672 3,-22c0.42535,-5.98489 0.56506,-16.01352 1,-23c0.50098,-8.04669 0.61292,-14.01071 1,-21c0.50079,-9.04153 0.362,-19.02264 1,-28c0.50128,-7.05328 1,-13 1,-19c0,-3 -1.14807,-6.22836 0,-9c0.5412,-1.30655 0.54047,-3.0535 1,-5c0.51373,-2.17624 0.23462,-3.15225 1,-5c0.5412,-1.30655 0.33746,-2.31 2,-5c0.74347,-1.203 2.1731,-2.85274 3,-4c1.30743,-1.814 2.1731,-3.85274 3,-5c1.30743,-1.814 2.4588,-3.69344 3,-5c0.76538,-1.84776 1,-3 3,-5c2,-2 3.18604,-2.69255 5,-4c1.14728,-0.8269 3,-1 4,-2c1,-1 1.47424,-1.14935 2,-2c1.1756,-1.90211 3,-2 3,-2c1,-1 2.07611,-2.61731 3,-3c1.30658,-0.5412 2.8244,-1.09789 4,-3c0.52576,-0.85065 2.07611,-1.61731 3,-2c1.30658,-0.5412 2,-1 3,-2c1,-1 3,-2 4,-3c1,-1 1.69342,-1.4588 3,-2c0.92389,-0.38269 2,0 3,0c1,0 2,0 3,0c0,0 1,0 2,0c1,0 1,0 1,0c1,0 1,0 1,0c1,0 1,-1 1,-1l0,0l0,0l0,-1';
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

    case 'sinMap':
      curMap = sinMap;
      break;

    default:
      curMap = sinMap;
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


function createEnemiesForRound(round) {
  var enemies = [];

  switch (round) {
    case 1:
      for (var i = 0; i < 6; i++) {
        enemies[i] = new _enemies_Circle__WEBPACK_IMPORTED_MODULE_0__["default"]('red', i * -150, 1, false);
      }

      break;

    case 2:
      for (var _i = 0; _i < 10; _i++) {
        if (_i % 2 === 0) {
          enemies[_i] = new _enemies_Circle__WEBPACK_IMPORTED_MODULE_0__["default"]('yellow', _i * -50, 1, false);
        } else {
          enemies[_i] = new _enemies_Squares__WEBPACK_IMPORTED_MODULE_1__["default"]('gray', _i * -50, 1);
        }
      }

      break;

    case 3:
      for (var _i2 = 0; _i2 < 3; _i2++) {
        enemies[_i2] = new _enemies_Circle__WEBPACK_IMPORTED_MODULE_0__["default"]('red', _i2 * -150, 1, true);
      }

    default:
      break;
  }

  return enemies;
}
function getReward(round) {
  return 50; // switch(round) {
  // case 1:
  //     return 50;
  // case 2:
  //     return 50;
  // default:
  //     return 0;
  // }
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

var round = 1;
var cash = 150;
var health = 100;
var towers = [];
var enemies = [];
var placing = false;
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
_Constants__WEBPACK_IMPORTED_MODULE_1__["placeSentryTowerBtn"].addEventListener("click", function () {
  placeTower('SentryTower');
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
  enemies = Object(_Rounds__WEBPACK_IMPORTED_MODULE_3__["createEnemiesForRound"])(round);
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
      enemies.splice(i, 1);
      _Constants__WEBPACK_IMPORTED_MODULE_1__["healthLbl"].innerHTML = "Health: " + health;

      if (health <= 0) {
        alert('Game Over');
      }
    }
  }

  for (var _i = enemies.length - 1; _i >= 0; _i--) {
    for (var j = 0; j < towers.length; j++) {
      if (enemies[_i].alive > 0 && Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getDistance"])(enemies[_i].x, enemies[_i].y, towers[j].x, towers[j].y) < towers[j].rangeRadius) {
        if (!enemies[_i].camo || enemies[_i].camo && towers[j].detectCamo) {
          Object(_Draw__WEBPACK_IMPORTED_MODULE_5__["drawAttack"])(towers[j].x, towers[j].y, enemies[_i].x, enemies[_i].y);

          enemies[_i].hit(towers[j].damage);
        }

        if (!enemies[_i].alive) {
          cash += enemies[_i].damage;
          _Constants__WEBPACK_IMPORTED_MODULE_1__["cashLbl"].innerHTML = "$" + cash;
          enemies.splice(_i, 1);
        }
      }
    }
  }

  if (enemies.length === 0) {
    running = false;
    cash += Object(_Rounds__WEBPACK_IMPORTED_MODULE_3__["getReward"])(round);
    _Constants__WEBPACK_IMPORTED_MODULE_1__["cashLbl"].innerHTML = "$" + cash;
    checkAfford();
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
  _Constants__WEBPACK_IMPORTED_MODULE_1__["placeBasicTowerBtn"].disabled = cash < 100;
  _Constants__WEBPACK_IMPORTED_MODULE_1__["placeSentryTowerBtn"].disabled = cash < 100;
  _Constants__WEBPACK_IMPORTED_MODULE_1__["placeSniperTowerBtn"].disabled = cash < 150;
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
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants */ "./src/js/Constants.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Circle = /*#__PURE__*/function () {
  function Circle(color, step, armorMultiplier, isCamo) {
    _classCallCheck(this, Circle);

    this.step = step;
    this.x = 0;
    this.y = 0;
    this.alive = true;
    this.damage = 10;
    this.armorMultipler = armorMultiplier;
    this.camo = isCamo;

    switch (color) {
      case "red":
        this.radius = 20;
        this.speed = 3;
        this.color = 'red';
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
      _Constants__WEBPACK_IMPORTED_MODULE_0__["context"].beginPath();
      _Constants__WEBPACK_IMPORTED_MODULE_0__["context"].fillStyle = this.color;
      _Constants__WEBPACK_IMPORTED_MODULE_0__["context"].arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
      _Constants__WEBPACK_IMPORTED_MODULE_0__["context"].fill();

      if (this.camo) {
        _Constants__WEBPACK_IMPORTED_MODULE_0__["context"].lineWidth = 5;
        _Constants__WEBPACK_IMPORTED_MODULE_0__["context"].strokeStyle = 'gray';
        _Constants__WEBPACK_IMPORTED_MODULE_0__["context"].stroke();
      }

      if (this.armorMultipler > 1) {
        _Constants__WEBPACK_IMPORTED_MODULE_0__["context"].lineWidth = 5;
        _Constants__WEBPACK_IMPORTED_MODULE_0__["context"].strokeStyle = "black";
        _Constants__WEBPACK_IMPORTED_MODULE_0__["context"].stroke();
      }

      _Constants__WEBPACK_IMPORTED_MODULE_0__["context"].closePath();
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
      damageTaken /= this.armorMultipler;
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
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants */ "./src/js/Constants.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Square = /*#__PURE__*/function () {
  function Square(color, step, armorMultiplier) {
    _classCallCheck(this, Square);

    this.step = step;
    this.x = 0;
    this.y = 0;
    this.alive = true;
    this.damage = 15;
    this.armorMultiplier = armorMultiplier;
    this.isCamo = false;

    switch (color) {
      case "gray":
        this.speed = 2;
        this.height = 60;
        this.width = 60;
        this.color = 'gray';
        break;

      case "black":
        this.speed = 4;
        this.height = 40;
        this.width = 40;
        this.color = 'black';
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
      _Constants__WEBPACK_IMPORTED_MODULE_0__["context"].beginPath();
      _Constants__WEBPACK_IMPORTED_MODULE_0__["context"].fillStyle = this.color;
      _Constants__WEBPACK_IMPORTED_MODULE_0__["context"].rect(this.x, this.y, this.width, this.height);
      _Constants__WEBPACK_IMPORTED_MODULE_0__["context"].fill();

      if (this.armorMultiplier > 1) {
        _Constants__WEBPACK_IMPORTED_MODULE_0__["context"].lineWidth = 5;
        _Constants__WEBPACK_IMPORTED_MODULE_0__["context"].strokeStyle = "black";
        _Constants__WEBPACK_IMPORTED_MODULE_0__["context"].stroke();
      }

      _Constants__WEBPACK_IMPORTED_MODULE_0__["context"].closePath();
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
      damageTaken *= 0.5 / this.armorMultiplier;
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
    this.detectCamo = false;

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

      case "SentryTower":
        this.radius = 10;
        this.rangeRadius = 75;
        this.color = '#228b22';
        this.damage = 0.25;
        this.price = 100;
        this.detectCamo = true;
        break;

      default:
        this.radius = 0;
        this.rangeRadius = 0;
        this.color = '#000';
        this.damage = 0;
        break;
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