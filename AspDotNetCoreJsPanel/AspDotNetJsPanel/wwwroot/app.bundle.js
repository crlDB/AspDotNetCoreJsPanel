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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ts/app.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/bootstrap/dist/css/bootstrap.css":
/*!*******************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/jspanel4/dist/jspanel.css":
/*!************************************************!*\
  !*** ./node_modules/jspanel4/dist/jspanel.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/jspanel4/dist/jspanel.js":
/*!********************************************************************************************************!*\
  !*** delegated ./node_modules/jspanel4/dist/jspanel.js from dll-reference vendor_a870865556c716cd3b6f ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor_a870865556c716cd3b6f */ "dll-reference vendor_a870865556c716cd3b6f"))(5);

/***/ }),

/***/ "./src/css/site.css":
/*!**************************!*\
  !*** ./src/css/site.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/ts/app.ts":
/*!***********************!*\
  !*** ./src/ts/app.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_jsPanel) {
//! App
//! version : 1.0.0
//! author  : De Bels Carl
//! license : MIT
//! date    : Q1-2019
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ../css/site.css */ "./src/css/site.css");
__webpack_require__(/*! ../../node_modules/bootstrap/dist/css/bootstrap.css */ "./node_modules/bootstrap/dist/css/bootstrap.css");
__webpack_require__(/*! ../../node_modules/jspanel4/dist/jspanel.css */ "./node_modules/jspanel4/dist/jspanel.css");
__webpack_require__(/*! lib_jspanel */ "./node_modules/jspanel4/dist/jspanel.js");
//import "lib_jspanel_hint";
var w = window;
var panel = __webpack_provided_window_dot_jsPanel.create({
    setStatus: 'maximized'
});
window.setTimeout(function () {
    panel.normalize();
}, 2000);
// note the class 'jsPanel-ftr-btn' added to the button elements preventing them from acting as drag handle
// while the span element does drag the panel
//w.jsPanel.hint.create({
//    position: 'center-top 0 15 down',
//    contentSize: '330 auto',
//    content: '<p>carl de bels</p>',
//    theme: 'success filled',
//    headerTitle: '<i class="fa fa-check"></i> Success'
//});
//w.jsPanel.create({
//    theme: {
//        bgPanel: 'rgb(65, 126, 128)',
//        bgContent: '#67989A',
//        colorHeader: '#f0f0f0',
//        colorContent: '#333'
//    },
//    headerToolbar: '<span>just some text ...</span>',
//    content: '<p>Lorem ipsum ...</p>',
//    contentSize: '400 170',
//    position: 'center -60 -60'
//});
//w.jsPanel.create({
//    theme: {
//        bgPanel: 'url("img/trianglify-primary.svg") right bottom',
//        bgContent: '#fff',
//        colorHeader: '#fff',
//        colorContent: '#000'
//    },
//    headerToolbar: '<span>just some text ...</span>',
//    content: '<p>Lorem ipsum ...</p>',
//    contentSize: '400 170'
//});
//w.jsPanel.create({
//    theme: {
//        bgPanel: 'linear-gradient(120deg,#155799,#159957)',
//        bgContent: 'transparent',
//        colorHeader: '#fff',
//        colorContent: '#fff',
//        border: '4px solid #157B75'
//    },
//    headerToolbar: '<span>just some text ...</span>',
//    content: '<p>Lorem ipsum ...</p>',
//    contentSize: '400 170',
//    position: 'center 60 60'
//});
//w.jsPanel.create({
//    theme: 'primary',
//    headerTitle: 'my panel #1',
//    position: 'center-top 0 58',
//    contentSize: '450 250',
//    content: '<p>Example panel ...</p>',
//    callback: function () {
//        this.content.style.padding = '20px';
//    },
//    onbeforeclose: function () {
//        return confirm('Do you really want to close the panel?');
//    }
//});
//w.jsPanel.create({
//    headerTitle: 'just another title'
//});
//w.jsPanel.create({
//    animateIn: 'jsPanelFadeIn'
//});
//w.jsPanel.create({
//    animateIn: 'animated bounceInLeft',    // animation from animate.css
//    animateOut: 'animated bounceOutRight',  // animation from animate.css
//    autoclose: 4000
//});
//w.jsPanel.create({
//    theme: "crimson",
//    border: "2px solid" /* without a color value primary theme color is used for border */
//});
//w.jsPanel.create({
//    theme: 'gainsboro',
//    border: '2px grey', /* border-style defaults to 'solid' */
//    position: 'center 60 60'
//});
//w.jsPanel.create({
//    theme: 'red900',
//    border: 'inset red600', /* border-width defaults to 'medium' */
//    position: 'center 120 120'
//});
//w.jsPanel.create({
//    theme: 'crimson filled',
//    borderRadius: 6
//});
//w.jsPanel.create({
//    border: 'solid',
//    borderRadius: '8px',
//    position: 'center 60 60'
//});
//w.jsPanel.create({
//    boxShadow: 5
//});
//w.jsPanel.create({
//    closeOnEscape: true
//});
//w.jsPanel.create({
//    theme: 'info',
//    position: 'center 50 50',
//    content: '<p>This panel will not close on hitting the <kbd>ESC</kbd> key.</p>'
//});
//w.jsPanel.create({
//    closeOnEscape: true,
//    position: 'center 100 200',
//    callback: function () {
//        var content = this.content;
//        w.jsPanel.create({ // note that this is a childpanel
//            container: content,
//            theme: 'warning',
//            contentSize: '200 80',
//            position: 'center-bottom 0 -10'
//        });
//    }
//})

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! lib_jspanel */ "./node_modules/jspanel4/dist/jspanel.js")))

/***/ }),

/***/ "dll-reference vendor_a870865556c716cd3b6f":
/*!**********************************************!*\
  !*** external "vendor_a870865556c716cd3b6f" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = vendor_a870865556c716cd3b6f;

/***/ })

/******/ });
//# sourceMappingURL=app.bundle.js.map