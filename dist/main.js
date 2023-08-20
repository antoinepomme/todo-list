/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/forms.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/forms.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.todo-form {
    display: grid;
    grid-template: max-content 1fr max-content max-content / 1fr;
    gap: 1rem;
}

.todo-form-title,
.project-form-title {
    font-family: inherit;
    font-size: 1.5rem;
    border: none;
}

.todo-form-title:focus,
.project-form-title:focus {
    border: none;
    outline: none;
}

.todo-form-description {
    resize: none;
    font-family: inherit;
    font-size: 1rem;
    border: none;
}

.todo-form-description:focus {
    border: none;
    outline: none;
}

.form-date-container {
    display: grid;
    grid-template: max-content max-content max-content / max-content max-content 1fr;
    gap: 1rem;
}

.todo-form-date,
.todo-form-projects {
    font-family: inherit;
    padding: 0.3rem 0.5rem;
    border: solid #3ba395 1px;
    border-radius: 5px;
    color: #3ba395;
    font-weight: 600;
}

.todo-form-date:focus,
.todo-form-projects:focus {
    outline: none;
}

.todo-form-date + label {
    grid-row: 2 / 3;
    grid-column: 1 / 2;
}

.radio-container {
    grid-row: 2 / 3;
    grid-column: 2 / 3;
    display: flex;
    gap: 0.8rem;
}

.todo-form-priority {
    width: 3rem;
}

.radio > input[type="radio"] {
    position: relative;
    opacity: 0;
    left: 1.5rem;
    height: 1px;
    width: 1px;
    cursor: pointer;
}


.radio > label {
    font-size: 0.8rem;
    font-weight: 600;
    padding: 0.3rem 0.5rem;
    cursor: pointer;
}

.low {
    border: solid green 1px;
    border-radius: 5px;
    color: green;
}

.medium {
    border: solid orange 1px;
    border-radius: 5px;
    color: orange;
}

.high {
    border: solid red 1px;
    border-radius: 5px;
    color: red;
}

.low:hover,
.radio > input:checked + .low,
.radio > input[type="radio"]:hover + .low {
    background-color: green;
    color: white;
}

.medium:hover,
.radio > input:checked + .medium,
.radio > input[type="radio"]:hover + .medium {
    background-color: orange;
    color: white;
}

.high:hover,
.radio > input:checked + .high,
.radio > input[type="radio"]:hover + .high {
    background-color: red;
    color: white;
}

.form-projects-title {
    grid-row: 3 / 4;
    grid-column: 1 / 2;
}

.todo-form-projects {
    grid-row: 3 / 4;
    grid-column: 2 / 3;
}

.submit-button {    
    padding: 0.3rem 0.5rem;
    grid-row: 3 / 4;
    grid-column: 3 / 4;
    justify-self: end;
    width: fit-content;
    border: solid #3ba395 1px;
    border-radius: 5px;
    color: #3ba395;
    font-weight: 600;
    cursor: pointer;
}

.submit-button:hover {
    background-color: #3ba395;
    color: white;
}

.project-form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 1rem;
}`, "",{"version":3,"sources":["webpack://./src/styles/forms.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,4DAA4D;IAC5D,SAAS;AACb;;AAEA;;IAEI,oBAAoB;IACpB,iBAAiB;IACjB,YAAY;AAChB;;AAEA;;IAEI,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,oBAAoB;IACpB,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,gFAAgF;IAChF,SAAS;AACb;;AAEA;;IAEI,oBAAoB;IACpB,sBAAsB;IACtB,yBAAyB;IACzB,kBAAkB;IAClB,cAAc;IACd,gBAAgB;AACpB;;AAEA;;IAEI,aAAa;AACjB;;AAEA;IACI,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,aAAa;IACb,WAAW;AACf;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,YAAY;IACZ,WAAW;IACX,UAAU;IACV,eAAe;AACnB;;;AAGA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,sBAAsB;IACtB,eAAe;AACnB;;AAEA;IACI,uBAAuB;IACvB,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,wBAAwB;IACxB,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,qBAAqB;IACrB,kBAAkB;IAClB,UAAU;AACd;;AAEA;;;IAGI,uBAAuB;IACvB,YAAY;AAChB;;AAEA;;;IAGI,wBAAwB;IACxB,YAAY;AAChB;;AAEA;;;IAGI,qBAAqB;IACrB,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,sBAAsB;IACtB,eAAe;IACf,kBAAkB;IAClB,iBAAiB;IACjB,kBAAkB;IAClB,yBAAyB;IACzB,kBAAkB;IAClB,cAAc;IACd,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,yBAAyB;IACzB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,oBAAoB;AACxB","sourcesContent":[".todo-form {\n    display: grid;\n    grid-template: max-content 1fr max-content max-content / 1fr;\n    gap: 1rem;\n}\n\n.todo-form-title,\n.project-form-title {\n    font-family: inherit;\n    font-size: 1.5rem;\n    border: none;\n}\n\n.todo-form-title:focus,\n.project-form-title:focus {\n    border: none;\n    outline: none;\n}\n\n.todo-form-description {\n    resize: none;\n    font-family: inherit;\n    font-size: 1rem;\n    border: none;\n}\n\n.todo-form-description:focus {\n    border: none;\n    outline: none;\n}\n\n.form-date-container {\n    display: grid;\n    grid-template: max-content max-content max-content / max-content max-content 1fr;\n    gap: 1rem;\n}\n\n.todo-form-date,\n.todo-form-projects {\n    font-family: inherit;\n    padding: 0.3rem 0.5rem;\n    border: solid #3ba395 1px;\n    border-radius: 5px;\n    color: #3ba395;\n    font-weight: 600;\n}\n\n.todo-form-date:focus,\n.todo-form-projects:focus {\n    outline: none;\n}\n\n.todo-form-date + label {\n    grid-row: 2 / 3;\n    grid-column: 1 / 2;\n}\n\n.radio-container {\n    grid-row: 2 / 3;\n    grid-column: 2 / 3;\n    display: flex;\n    gap: 0.8rem;\n}\n\n.todo-form-priority {\n    width: 3rem;\n}\n\n.radio > input[type=\"radio\"] {\n    position: relative;\n    opacity: 0;\n    left: 1.5rem;\n    height: 1px;\n    width: 1px;\n    cursor: pointer;\n}\n\n\n.radio > label {\n    font-size: 0.8rem;\n    font-weight: 600;\n    padding: 0.3rem 0.5rem;\n    cursor: pointer;\n}\n\n.low {\n    border: solid green 1px;\n    border-radius: 5px;\n    color: green;\n}\n\n.medium {\n    border: solid orange 1px;\n    border-radius: 5px;\n    color: orange;\n}\n\n.high {\n    border: solid red 1px;\n    border-radius: 5px;\n    color: red;\n}\n\n.low:hover,\n.radio > input:checked + .low,\n.radio > input[type=\"radio\"]:hover + .low {\n    background-color: green;\n    color: white;\n}\n\n.medium:hover,\n.radio > input:checked + .medium,\n.radio > input[type=\"radio\"]:hover + .medium {\n    background-color: orange;\n    color: white;\n}\n\n.high:hover,\n.radio > input:checked + .high,\n.radio > input[type=\"radio\"]:hover + .high {\n    background-color: red;\n    color: white;\n}\n\n.form-projects-title {\n    grid-row: 3 / 4;\n    grid-column: 1 / 2;\n}\n\n.todo-form-projects {\n    grid-row: 3 / 4;\n    grid-column: 2 / 3;\n}\n\n.submit-button {    \n    padding: 0.3rem 0.5rem;\n    grid-row: 3 / 4;\n    grid-column: 3 / 4;\n    justify-self: end;\n    width: fit-content;\n    border: solid #3ba395 1px;\n    border-radius: 5px;\n    color: #3ba395;\n    font-weight: 600;\n    cursor: pointer;\n}\n\n.submit-button:hover {\n    background-color: #3ba395;\n    color: white;\n}\n\n.project-form {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    padding-bottom: 1rem;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/poppins/Poppins-Regular.ttf */ "./src/assets/fonts/poppins/Poppins-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: Poppins-regular;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

body {
    font-family: Poppins-regular, sans-serif;
}   

.main-container {
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template: max-content 1fr / 1fr;
    /*filter: blur(8px);*/
}

.header {
    display: flex;
    justify-content: space-between;
    background-color: rgb(219, 107, 2);
    padding: 0.5rem 2rem;
}

nav {
    display: flex;
    justify-content: center;
    align-items: center;
}

img {
    width: 1.8rem;
}

ul {
    list-style-type: none;
}

button {
    background: none;
    border: none;
}

button:hover {
    cursor: pointer;
}

button:focus {
    border: none;
    outline: none;
}

.header > nav > ul {
    display: flex;
    gap: 1rem;
}

.left > ul > li, 
.right > ul > li {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

a {
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: inherit;
}

.user > img {
    width: 2.2rem;
}

.search {
    background-color: rgb(235, 175, 120);
    border: none;
    border-radius: 5px;
    width: 200px;
    height: 1.6rem;
    font-family: inherit;
    padding-left: 0.5rem;
}

.search:focus {
    border: none;
    outline: none;
}

.container {
    display: grid;
    grid-template: 1fr / max-content 1fr;
    padding-top: 3rem;
}

.sidebar {
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
}

.options {
    margin-bottom: 3rem;
}

.options > ul,
.projects > ul {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
}

.options > ul > li > button,
.projects > ul > li > button {
    display: grid;
    grid-template: 1fr / max-content 1fr;
    gap: 0.7rem;
    font-size: 1.2rem;
}

span {
    align-self: center;
}

h4 {
    font-size: 1.3rem;
}

.projects {
    padding-top: 1rem;
}

.content {
    padding: 0 10vw;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

#dialog[open] {
    width: 50vw;
    height: 50vh;
    position: absolute;
    top: 50vh;
    left: 50vw;
    margin-left: -25vw;
    margin-top: -25vh;
    display: grid;
    grid-template: max-content 1fr / 1fr;
    box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.6);
    border: none;
    outline: none;
    border-radius: 10px;
}

.dialog-header {
    background-color: rgb(219, 107, 2);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    text-align: center;
    color: white;
    font-size: 1.5rem;
    font-weight: 900;
    padding: 0.5rem 0;
}

.dialog-header > button {
    position: absolute;
    top: 0.7rem;
    right: 0.5rem;
}

.dialog-container {
    display: grid;
    grid-template: 1fr / max-content 1fr;
}

.dialog-sidebar {
    padding: 1rem;
    padding-right: 5rem;
    font-size: 1.3rem;
    border-right: solid rgb(156, 150, 150) 1px;
}

.dialog-sidebar > ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.dialog-content {
    padding: 1rem;
    font-size: 1.2rem;
    display: grid;
}`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;EACE,4BAA4B;EAC5B,4CAAqD;AACvD;;AAEA;IACI,sBAAsB;IACtB,UAAU;IACV,SAAS;AACb;;AAEA;IACI,wCAAwC;AAC5C;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,aAAa;IACb,oCAAoC;IACpC,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,kCAAkC;IAClC,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;;IAEI,SAAS;IACT,UAAU;IACV,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,qBAAqB;IACrB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,cAAc;AAClB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,oCAAoC;IACpC,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,cAAc;IACd,oBAAoB;IACpB,oBAAoB;AACxB;;AAEA;IACI,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,oCAAoC;IACpC,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,mBAAmB;AACvB;;AAEA;;IAEI,aAAa;IACb,sBAAsB;IACtB,WAAW;AACf;;AAEA;;IAEI,aAAa;IACb,oCAAoC;IACpC,WAAW;IACX,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,SAAS;IACT,UAAU;IACV,kBAAkB;IAClB,iBAAiB;IACjB,aAAa;IACb,oCAAoC;IACpC,0CAA0C;IAC1C,YAAY;IACZ,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,kCAAkC;IAClC,4BAA4B;IAC5B,6BAA6B;IAC7B,kBAAkB;IAClB,YAAY;IACZ,iBAAiB;IACjB,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,oCAAoC;AACxC;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,iBAAiB;IACjB,0CAA0C;AAC9C;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,iBAAiB;IACjB,aAAa;AACjB","sourcesContent":["@font-face {\n  font-family: Poppins-regular;\n  src: url(../assets/fonts/poppins/Poppins-Regular.ttf);\n}\n\n* {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n}\n\nbody {\n    font-family: Poppins-regular, sans-serif;\n}   \n\n.main-container {\n    width: 100vw;\n    height: 100vh;\n    display: grid;\n    grid-template: max-content 1fr / 1fr;\n    /*filter: blur(8px);*/\n}\n\n.header {\n    display: flex;\n    justify-content: space-between;\n    background-color: rgb(219, 107, 2);\n    padding: 0.5rem 2rem;\n}\n\nnav {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\nimg {\n    width: 1.8rem;\n}\n\nul {\n    list-style-type: none;\n}\n\nbutton {\n    background: none;\n    border: none;\n}\n\nbutton:hover {\n    cursor: pointer;\n}\n\nbutton:focus {\n    border: none;\n    outline: none;\n}\n\n.header > nav > ul {\n    display: flex;\n    gap: 1rem;\n}\n\n.left > ul > li, \n.right > ul > li {\n    margin: 0;\n    padding: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\na {\n    text-decoration: none;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: inherit;\n}\n\n.user > img {\n    width: 2.2rem;\n}\n\n.search {\n    background-color: rgb(235, 175, 120);\n    border: none;\n    border-radius: 5px;\n    width: 200px;\n    height: 1.6rem;\n    font-family: inherit;\n    padding-left: 0.5rem;\n}\n\n.search:focus {\n    border: none;\n    outline: none;\n}\n\n.container {\n    display: grid;\n    grid-template: 1fr / max-content 1fr;\n    padding-top: 3rem;\n}\n\n.sidebar {\n    padding: 0 2rem;\n    display: flex;\n    flex-direction: column;\n}\n\n.options {\n    margin-bottom: 3rem;\n}\n\n.options > ul,\n.projects > ul {\n    display: flex;\n    flex-direction: column;\n    gap: 0.8rem;\n}\n\n.options > ul > li > button,\n.projects > ul > li > button {\n    display: grid;\n    grid-template: 1fr / max-content 1fr;\n    gap: 0.7rem;\n    font-size: 1.2rem;\n}\n\nspan {\n    align-self: center;\n}\n\nh4 {\n    font-size: 1.3rem;\n}\n\n.projects {\n    padding-top: 1rem;\n}\n\n.content {\n    padding: 0 10vw;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n#dialog[open] {\n    width: 50vw;\n    height: 50vh;\n    position: absolute;\n    top: 50vh;\n    left: 50vw;\n    margin-left: -25vw;\n    margin-top: -25vh;\n    display: grid;\n    grid-template: max-content 1fr / 1fr;\n    box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.6);\n    border: none;\n    outline: none;\n    border-radius: 10px;\n}\n\n.dialog-header {\n    background-color: rgb(219, 107, 2);\n    border-top-left-radius: 10px;\n    border-top-right-radius: 10px;\n    text-align: center;\n    color: white;\n    font-size: 1.5rem;\n    font-weight: 900;\n    padding: 0.5rem 0;\n}\n\n.dialog-header > button {\n    position: absolute;\n    top: 0.7rem;\n    right: 0.5rem;\n}\n\n.dialog-container {\n    display: grid;\n    grid-template: 1fr / max-content 1fr;\n}\n\n.dialog-sidebar {\n    padding: 1rem;\n    padding-right: 5rem;\n    font-size: 1.3rem;\n    border-right: solid rgb(156, 150, 150) 1px;\n}\n\n.dialog-sidebar > ul {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n.dialog-content {\n    padding: 1rem;\n    font-size: 1.2rem;\n    display: grid;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/todo.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/todo.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/poppins/Poppins-Light.ttf */ "./src/assets/fonts/poppins/Poppins-Light.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/check-mark.svg */ "./src/assets/icons/check-mark.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: Poppins-light;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  }

.todo {
    width: 60vw;
    display: flex;
    align-self: center;
    gap: 1.5rem;
    padding: 0.5rem 2rem;
    transition: all .2s;
    font-family: 'Poppins-light';
}

.todo:hover {
    transform: scale(1.003);
    box-shadow: 3px 3px 5px 2px rgba(0, 0, 0, 0.2);
    transition: all .2s ease-out;
}

.todo > div {
    display: flex;
    align-items: center;
}

.todo-check {
    appearance: none;
    width: 1.2rem;
    height: 1.2rem;
    border: solid #3ba395 2px;
    border-radius: 25%;
    align-self: center;
}

.todo-check:hover {
    cursor: pointer;
}

.todo-check:checked {
    background-color: #3ba395;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    background-size: 1rem;
}

.todo-title {
    margin-right: auto;
    font-size: 1.5rem;
}

.todo-details {
    font-family: inherit;
    font-size: 0.8rem;
    font-weight: 600;
    border: solid #3ba395 1px;
    color: #3ba395;
    padding: 0 1rem;
    border-radius: 5px;
}

.todo-details:hover {
    background-color: #3ba395;
    color: white;
}

.todo-details:focus {
    border: solid #3ba395 1px;
}

.todo-date {
    font-weight: 600;
    font-size: 0.7rem;
}

.done {
    color: grey;
    filter: grayscale(100%);
}

.done > .todo-title{
    text-decoration-line: line-through;
}

.todo-dialog {
    width: 30vw;
    height: 26vh;
    position: absolute;
    top: 50vh;
    left: 50vw;
    margin-left: -15vw;
    margin-top: -13vh;
    display: grid;
    grid-template: max-content max-content max-content / 1fr;
    box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.6);
    border: none;
    outline: none;
    border-radius: 10px;
    padding: 1rem;
}

.todo-dialog > button > img {
    width: 1.3rem;
}

.todo-dialog > button {
    width: fit-content;
    justify-self: flex-end;
}

.todo-dialog-title {
    font-size: 2rem;
    font-style: italic;
    margin-bottom: 1rem;
}

.todo-dialog-container {
    display: grid;
    grid-template: repeat(4, max-content) / max-content max-content;
}

.todo-dialog-container > div {
    margin-right: 1rem;
}

.bold {
    font-weight: 600;
}`, "",{"version":3,"sources":["webpack://./src/styles/todo.css"],"names":[],"mappings":"AAAA;IACI,0BAA0B;IAC1B,4CAAmD;EACrD;;AAEF;IACI,WAAW;IACX,aAAa;IACb,kBAAkB;IAClB,WAAW;IACX,oBAAoB;IACpB,mBAAmB;IACnB,4BAA4B;AAChC;;AAEA;IACI,uBAAuB;IACvB,8CAA8C;IAC9C,4BAA4B;AAChC;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,cAAc;IACd,yBAAyB;IACzB,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,yBAAyB;IACzB,yDAAqD;IACrD,qBAAqB;AACzB;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,oBAAoB;IACpB,iBAAiB;IACjB,gBAAgB;IAChB,yBAAyB;IACzB,cAAc;IACd,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,yBAAyB;IACzB,YAAY;AAChB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,uBAAuB;AAC3B;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,SAAS;IACT,UAAU;IACV,kBAAkB;IAClB,iBAAiB;IACjB,aAAa;IACb,wDAAwD;IACxD,0CAA0C;IAC1C,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,sBAAsB;AAC1B;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,+DAA+D;AACnE;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;AACpB","sourcesContent":["@font-face {\n    font-family: Poppins-light;\n    src: url(../assets/fonts/poppins/Poppins-Light.ttf);\n  }\n\n.todo {\n    width: 60vw;\n    display: flex;\n    align-self: center;\n    gap: 1.5rem;\n    padding: 0.5rem 2rem;\n    transition: all .2s;\n    font-family: 'Poppins-light';\n}\n\n.todo:hover {\n    transform: scale(1.003);\n    box-shadow: 3px 3px 5px 2px rgba(0, 0, 0, 0.2);\n    transition: all .2s ease-out;\n}\n\n.todo > div {\n    display: flex;\n    align-items: center;\n}\n\n.todo-check {\n    appearance: none;\n    width: 1.2rem;\n    height: 1.2rem;\n    border: solid #3ba395 2px;\n    border-radius: 25%;\n    align-self: center;\n}\n\n.todo-check:hover {\n    cursor: pointer;\n}\n\n.todo-check:checked {\n    background-color: #3ba395;\n    background-image: url(../assets/icons/check-mark.svg);\n    background-size: 1rem;\n}\n\n.todo-title {\n    margin-right: auto;\n    font-size: 1.5rem;\n}\n\n.todo-details {\n    font-family: inherit;\n    font-size: 0.8rem;\n    font-weight: 600;\n    border: solid #3ba395 1px;\n    color: #3ba395;\n    padding: 0 1rem;\n    border-radius: 5px;\n}\n\n.todo-details:hover {\n    background-color: #3ba395;\n    color: white;\n}\n\n.todo-details:focus {\n    border: solid #3ba395 1px;\n}\n\n.todo-date {\n    font-weight: 600;\n    font-size: 0.7rem;\n}\n\n.done {\n    color: grey;\n    filter: grayscale(100%);\n}\n\n.done > .todo-title{\n    text-decoration-line: line-through;\n}\n\n.todo-dialog {\n    width: 30vw;\n    height: 26vh;\n    position: absolute;\n    top: 50vh;\n    left: 50vw;\n    margin-left: -15vw;\n    margin-top: -13vh;\n    display: grid;\n    grid-template: max-content max-content max-content / 1fr;\n    box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.6);\n    border: none;\n    outline: none;\n    border-radius: 10px;\n    padding: 1rem;\n}\n\n.todo-dialog > button > img {\n    width: 1.3rem;\n}\n\n.todo-dialog > button {\n    width: fit-content;\n    justify-self: flex-end;\n}\n\n.todo-dialog-title {\n    font-size: 2rem;\n    font-style: italic;\n    margin-bottom: 1rem;\n}\n\n.todo-dialog-container {\n    display: grid;\n    grid-template: repeat(4, max-content) / max-content max-content;\n}\n\n.todo-dialog-container > div {\n    margin-right: 1rem;\n}\n\n.bold {\n    font-weight: 600;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/forms.css":
/*!******************************!*\
  !*** ./src/styles/forms.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_forms_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./forms.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/forms.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_forms_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_forms_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_forms_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_forms_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/todo.css":
/*!*****************************!*\
  !*** ./src/styles/todo.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_todo_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./todo.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/todo.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_todo_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_todo_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_todo_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_todo_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   projectArr: () => (/* binding */ projectArr),
/* harmony export */   todoArr: () => (/* binding */ todoArr)
/* harmony export */ });
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _styles_todo_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/todo.css */ "./src/styles/todo.css");
/* harmony import */ var _styles_forms_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/forms.css */ "./src/styles/forms.css");
/* harmony import */ var _modules_todo_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/todo.js */ "./src/modules/todo.js");
/* harmony import */ var _modules_forms_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/forms.js */ "./src/modules/forms.js");
/* harmony import */ var _modules_projects_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/projects.js */ "./src/modules/projects.js");








//main dialog
const mainContainer = document.getElementById("main-container");
const addButton = document.getElementById("add");
let dialog = document.getElementById("dialog");
const dialogContent = document.getElementById("dialog-content");
const todoFormButton = document.getElementById("todo-form-button");
const projectFormButton = document.getElementById("project-form-button");
const closeButton = document.getElementById("dialog-close");

let projectArr = [];
let todoArr = [];

todoFormButton.addEventListener('click', () => {
    while (dialogContent.firstChild) {
        dialogContent.removeChild(dialogContent.firstChild);
    }
    dialogContent.appendChild((0,_modules_forms_js__WEBPACK_IMPORTED_MODULE_4__.todoForm)());
});
projectFormButton.addEventListener('click', () => {
    while (dialogContent.firstChild) {
        dialogContent.removeChild(dialogContent.firstChild);
    }
    dialogContent.appendChild((0,_modules_forms_js__WEBPACK_IMPORTED_MODULE_4__.projectForm)());
});


addButton.addEventListener('click', () => {
    dialog.showModal();
    mainContainer.style.filter = "blur(3px)";
    dialogContent.appendChild((0,_modules_forms_js__WEBPACK_IMPORTED_MODULE_4__.todoForm)());
});
closeButton.addEventListener('click', () => {
    dialog.close();
    mainContainer.style.filter = "blur(0px)";
    while (dialogContent.firstChild) {
        dialogContent.removeChild(dialogContent.firstChild);
    }
});
dialog.addEventListener('cancel', () => {
    mainContainer.style.filter = "blur(0px)";
    while (dialogContent.firstChild) {
        dialogContent.removeChild(dialogContent.firstChild);
    }
});


const allButton = document.getElementById("all-button");
allButton.addEventListener('click', () => {
    (0,_modules_todo_js__WEBPACK_IMPORTED_MODULE_3__.todoDisplay)();
});


//


//examples
((0,_modules_todo_js__WEBPACK_IMPORTED_MODULE_3__.todoAdd)("abc", "1", "DATETEST", "High", "test"));
((0,_modules_todo_js__WEBPACK_IMPORTED_MODULE_3__.todoAdd)("b", "2", "DATETEST", "Medium"));
((0,_modules_todo_js__WEBPACK_IMPORTED_MODULE_3__.todoAdd)("c", "3", "DATETEST", "High"));
((0,_modules_todo_js__WEBPACK_IMPORTED_MODULE_3__.todoAdd)("d", "4", "DATETEST", "Low", "test"));

(0,_modules_projects_js__WEBPACK_IMPORTED_MODULE_5__.projectsAdd)("test");
(0,_modules_projects_js__WEBPACK_IMPORTED_MODULE_5__.projectsAdd)("test2");
(0,_modules_projects_js__WEBPACK_IMPORTED_MODULE_5__.projectsAdd)("test3");

/***/ }),

/***/ "./src/modules/forms.js":
/*!******************************!*\
  !*** ./src/modules/forms.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   projectForm: () => (/* binding */ projectForm),
/* harmony export */   todoForm: () => (/* binding */ todoForm)
/* harmony export */ });
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ "./src/modules/todo.js");
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects.js */ "./src/modules/projects.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index.js */ "./src/index.js");




function todoForm() {
    let mainContainer = document.getElementById("main-container");
    let content = document.getElementById("content");
    let dialog = document.getElementById("dialog");
    let form = document.createElement("form");
    form.classList.add("todo-form");
    form.autocomplete = "off";

    let formTitle = document.createElement("input");
    formTitle.type = "text";
    formTitle.name = "todo-form-title";
    formTitle.id = "todo-form-title";
    formTitle.classList.add("todo-form-title");
    formTitle.placeholder = "Title: Pay bills"
    formTitle.required = true;
    form.appendChild(formTitle);

    let formDescription = document.createElement("textarea");
    formDescription.name = "todo-form-description";
    formDescription.id = "todo-form-description";
    formDescription.classList = "todo-form-description";
    formDescription.placeholder = "Details: eg internet, phone, rent.";
    form.appendChild(formDescription);

    let formDateContainer = document.createElement("div");
    formDateContainer.classList.add("form-date-container");
    let formDateTitle = document.createElement("label");
    formDateTitle.textContent = "Due Date :";
    formDateContainer.appendChild(formDateTitle);
    let formDate = document.createElement("input")
    formDate.type = "date";
    formDate.name = "todo-form-date";
    formDate.id = "todo-form-date";
    formDate.classList = "todo-form-date";
    formDate.required = true;
    formDateContainer.appendChild(formDate);
    form.appendChild(formDateContainer);

    let formPriorityTitle = document.createElement("label");
    formPriorityTitle.textContent = "Priority :";
    formDateContainer.appendChild(formPriorityTitle);
    let formRadioContainer = document.createElement("div");
    formRadioContainer.classList.add("radio-container");
    let formPriorityLowContainer = document.createElement("div");
    formPriorityLowContainer.classList.add("radio");
    let formPriorityMediumContainer = document.createElement("div");
    formPriorityMediumContainer.classList.add("radio");
    let formPriorityHighContainer = document.createElement("div");
    formPriorityHighContainer.classList.add("radio");
    let formPriorityLow = document.createElement("input");
    formPriorityLow.type = "radio";
    formPriorityLow.name = "todo-form-priority";
    formPriorityLow.id = "todo-form-priority-low";
    formPriorityLow.classList = "todo-form-priority";
    formPriorityLow.value = "Low";
    formPriorityLow.required = true;
    let formPriorityLowLabel = document.createElement("label");
    formPriorityLowLabel.classList.add("low");
    formPriorityLowLabel.setAttribute("for", "todo-form-priority-low");
    formPriorityLowLabel.textContent = "LOW";
    let formPriorityMedium = document.createElement("input");
    formPriorityMedium.type = "radio";
    formPriorityMedium.name = "todo-form-priority";
    formPriorityMedium.id = "todo-form-priority-medium";
    formPriorityMedium.classList = "todo-form-priority";
    formPriorityMedium.value = "Medium";
    formPriorityMedium.required = true;
    let formPriorityMediumLabel = document.createElement("label");
    formPriorityMediumLabel.classList.add("medium");
    formPriorityMediumLabel.setAttribute("for", "todo-form-priority-medium");
    formPriorityMediumLabel.textContent = "MEDIUM";
    let formPriorityHigh = document.createElement("input");
    formPriorityHigh.type = "radio";
    formPriorityHigh.name = "todo-form-priority";
    formPriorityHigh.id = "todo-form-priority-high";
    formPriorityHigh.classList = "todo-form-priority";
    formPriorityHigh.value = "High";
    formPriorityHigh.required = true;
    let formPriorityHighLabel = document.createElement("label");
    formPriorityHighLabel.classList.add("high");
    formPriorityHighLabel.setAttribute("for", "todo-form-priority-high");
    formPriorityHighLabel.textContent = "HIGH";
    formPriorityLowContainer.appendChild(formPriorityLow);
    formPriorityLowContainer.appendChild(formPriorityLowLabel);
    formPriorityMediumContainer.appendChild(formPriorityMedium);
    formPriorityMediumContainer.appendChild(formPriorityMediumLabel);
    formPriorityHighContainer.appendChild(formPriorityHigh);
    formPriorityHighContainer.appendChild(formPriorityHighLabel);
    formRadioContainer.appendChild(formPriorityLowContainer);
    formRadioContainer.appendChild(formPriorityMediumContainer);
    formRadioContainer.appendChild(formPriorityHighContainer);
    formDateContainer.appendChild(formRadioContainer);

    let formProjectsTitle = document.createElement("label");
    formProjectsTitle.textContent = "Project :";
    formProjectsTitle.classList.add("form-projects-title");
    formDateContainer.appendChild(formProjectsTitle);
    let formProjects = document.createElement("select")
    formProjects.name = "todo-form-projects";
    formProjects.id = "todo-form-projects";
    formProjects.classList = "todo-form-projects";
    let defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "";
    formProjects.appendChild(defaultOption);
    for (let i of _index_js__WEBPACK_IMPORTED_MODULE_2__.projectArr) {
        let option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        formProjects.appendChild(option);
    }
    formDateContainer.appendChild(formProjects);

    let submitButton = document.createElement("input");
    submitButton.type = "submit";
    submitButton.classList.add("submit-button");
    submitButton.value = "ADD TO DO";
    formDateContainer.appendChild(submitButton);
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        (0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.todoAdd)(formTitle.value, formDescription.value, formDate.value, document.querySelector('input[name="todo-form-priority"]:checked').value, formProjects.value);
        while (form.firstChild) {
            form.removeChild(form.firstChild);
        }
        dialog.close();
        mainContainer.style.filter = "blur(0px)";
        form.parentNode.removeChild(form);
    })

    return form;
}

function projectForm() {
    let mainContainer = document.getElementById("main-container");
    let dialog = document.getElementById("dialog");
    let form = document.createElement("form");
    form.classList.add("project-form");
    form.autocomplete = "off";

    let formTitle = document.createElement("input");
    formTitle.type = "text";
    formTitle.name = "project-form-title";
    formTitle.id = "project-form-title";
    formTitle.classList.add("project-form-title");
    formTitle.placeholder = "Title: House Renovation"
    formTitle.required = true;
    form.appendChild(formTitle);

    let submitButton = document.createElement("input");
    submitButton.type = "submit";
    submitButton.classList.add("submit-button");
    submitButton.value = "CREATE PROJECT";
    form.appendChild(submitButton);
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        (0,_projects_js__WEBPACK_IMPORTED_MODULE_1__.projectsAdd)(formTitle.value);
        while (form.firstChild) {
            form.removeChild(form.firstChild);
        }
        dialog.close();
        mainContainer.style.filter = "blur(0px)";
        form.parentNode.removeChild(form);
    })

    return form;
}



/***/ }),

/***/ "./src/modules/projects.js":
/*!*********************************!*\
  !*** ./src/modules/projects.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   projectsAdd: () => (/* binding */ projectsAdd),
/* harmony export */   projectsDisplay: () => (/* binding */ projectsDisplay)
/* harmony export */ });
/* harmony import */ var _assets_icons_project_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/icons/project.svg */ "./src/assets/icons/project.svg");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.js */ "./src/index.js");
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo.js */ "./src/modules/todo.js");




function projectsDisplay () {
    const projectsContainer = document.getElementById("projects-ul");
    while (projectsContainer.firstChild) {
        projectsContainer.removeChild(projectsContainer.firstChild);
    }
    for (let i of _index_js__WEBPACK_IMPORTED_MODULE_1__.projectArr) {
        let li = document.createElement("li");
        let button = document.createElement("button");
        button.classList.add(i);
        button.id = i;
        let image = new Image();
        image.src = _assets_icons_project_svg__WEBPACK_IMPORTED_MODULE_0__;
        let span = document.createElement("span");
        span.textContent = i;
        button.appendChild(image);
        button.appendChild(span);
        li.appendChild(button);
        projectsContainer.appendChild(li);
        button.addEventListener('click', () => {
            console.log(i);
            (0,_todo_js__WEBPACK_IMPORTED_MODULE_2__.todoDisplay)(i);
        });
    }
}

function projectsAdd (project) {
    _index_js__WEBPACK_IMPORTED_MODULE_1__.projectArr.push(project);
    projectsDisplay();
}



/***/ }),

/***/ "./src/modules/todo.js":
/*!*****************************!*\
  !*** ./src/modules/todo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   todo: () => (/* binding */ todo),
/* harmony export */   todoAdd: () => (/* binding */ todoAdd),
/* harmony export */   todoDisplay: () => (/* binding */ todoDisplay)
/* harmony export */ });
/* harmony import */ var _assets_icons_trash_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/icons/trash.svg */ "./src/assets/icons/trash.svg");
/* harmony import */ var _assets_icons_edit_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/icons/edit.svg */ "./src/assets/icons/edit.svg");
/* harmony import */ var _assets_icons_cross_black_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/icons/cross-black.svg */ "./src/assets/icons/cross-black.svg");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../index.js */ "./src/index.js");





const mainContainerForTodo = document.getElementById("main-container");
let content = document.getElementById("content");

function todo(title, description, dueDate, priority, project) {
    let todoItem = document.createElement("div");
    todoItem.classList.add("todo");
    todoItem.id = _index_js__WEBPACK_IMPORTED_MODULE_3__.todoArr.length;

    todoItem.setAttribute("data-title", title);
    if (project) {
        todoItem.setAttribute("data-project", project);
    } else {
        todoItem.setAttribute("data-project", "None");
    }
    todoItem.setAttribute("data-priority", priority);
    todoItem.setAttribute("data-date", dueDate);
    todoItem.setAttribute("data-description", description);

    function showDetails(element) {
        let todoDialog = document.createElement("dialog");
        todoDialog.classList.add("todo-dialog");

        let closeDialog = document.createElement("button");
        let crossIcon = new Image();
        crossIcon.src = _assets_icons_cross_black_svg__WEBPACK_IMPORTED_MODULE_2__;
        closeDialog.appendChild(crossIcon);
        todoDialog.appendChild(closeDialog);

        let titleDialog = document.createElement("div");
        titleDialog.classList.add("todo-dialog-title");
        titleDialog.textContent = element.getAttribute("data-title");
        todoDialog.appendChild(titleDialog);

        let todoDialogContainer = document.createElement("div")
        todoDialogContainer.classList.add("todo-dialog-container")

        let projectDialogTitle = document.createElement("div");
        projectDialogTitle.classList.add("bold");
        projectDialogTitle.textContent = "Project :";
        todoDialogContainer.appendChild(projectDialogTitle);
        let projectDialog = document.createElement("div");
        projectDialog.textContent = element.getAttribute("data-project");
        todoDialogContainer.appendChild(projectDialog);

        let priorityDialogTitle = document.createElement("div");
        priorityDialogTitle.classList.add("bold");
        priorityDialogTitle.textContent = "Priority :";
        todoDialogContainer.appendChild(priorityDialogTitle);
        let priorityDialog = document.createElement("div");
        priorityDialog.textContent = element.getAttribute("data-priority");
        todoDialogContainer.appendChild(priorityDialog);

        let dateDialogTitle = document.createElement("div");
        dateDialogTitle.classList.add("bold");
        dateDialogTitle.textContent = "Due Date :";
        todoDialogContainer.appendChild(dateDialogTitle);
        let dateDialog = document.createElement("div");
        dateDialog.textContent = element.getAttribute("data-date");
        todoDialogContainer.appendChild(dateDialog);

        let detailsDialogTitle = document.createElement("div");
        detailsDialogTitle.classList.add("bold");
        detailsDialogTitle.textContent = "Description :";
        todoDialogContainer.appendChild(detailsDialogTitle);
        let detailsDialog = document.createElement("div");
        detailsDialog.textContent = element.getAttribute("data-description");
        todoDialogContainer.appendChild(detailsDialog);

        todoDialog.appendChild(todoDialogContainer);
        document.body.appendChild(todoDialog);

        todoDialog.addEventListener('cancel', () => {
            while (todoDialog.firstChild) {
                if (closeDialog.firstChild) {
                    closeDialog.removeChild(closeDialog.firstChild);
                }
                while (todoDialogContainer.firstChild) {
                    todoDialogContainer.removeChild(todoDialogContainer.firstChild);
                }
                todoDialog.removeChild(todoDialog.firstChild);
            }
            todoDialog.close();
            document.body.removeChild(todoDialog);
            mainContainerForTodo.style.filter = "blur(0px)";
        });

        closeDialog.addEventListener('click', () => {
            while (todoDialog.firstChild) {
                if (closeDialog.firstChild) {
                    closeDialog.removeChild(closeDialog.firstChild);
                }
                while (todoDialogContainer.firstChild) {
                    todoDialogContainer.removeChild(todoDialogContainer.firstChild);
                }
                todoDialog.removeChild(todoDialog.firstChild);
            }
            todoDialog.close();
            document.body.removeChild(todoDialog);
            mainContainerForTodo.style.filter = "blur(0px)";
        });

        todoDialog.showModal();
        mainContainerForTodo.style.filter = "blur(3px)";
    }

    let priorityColor = "green";
    if (priority === "Medium") {
        priorityColor = "orange";
    } else if (priority === "High") {
        priorityColor = "red";
    }
    todoItem.style.borderLeft = "solid " + priorityColor + " 3px";

    let todoCheckBox = document.createElement("input");
    todoCheckBox.type = "checkbox";
    todoCheckBox.classList.add("todo-check");
    todoItem.appendChild(todoCheckBox);
    todoCheckBox.addEventListener('change', () => {
        todoItem.classList.toggle("done");
    });

    let todoTitle = document.createElement("div");
    todoTitle.classList.add("todo-title")
    todoTitle.textContent = title;
    todoItem.appendChild(todoTitle);

    let todoDetailsButton = document.createElement("button");
    todoDetailsButton.classList.add("todo-details")
    todoDetailsButton.textContent = "DETAILS";
    todoItem.appendChild(todoDetailsButton);
    todoDetailsButton.addEventListener('click', () => {
        showDetails(todoItem);
    });

    let todoDate = document.createElement("div");
    todoDate.classList.add("todo-date");
    todoDate.textContent = dueDate;
    todoItem.appendChild(todoDate);

    let todoEditButton = document.createElement("button");
    let editIcon = new Image();
    editIcon.src = _assets_icons_edit_svg__WEBPACK_IMPORTED_MODULE_1__;
    todoEditButton.appendChild(editIcon);
    todoItem.appendChild(todoEditButton);

    let todoDeleteButton = document.createElement("button");
    let editTrash = new Image();
    editTrash.src = _assets_icons_trash_svg__WEBPACK_IMPORTED_MODULE_0__;
    todoDeleteButton.appendChild(editTrash);
    todoItem.appendChild(todoDeleteButton);
    todoDeleteButton.addEventListener('click', () => {
        let i = todoItem.id;
        while (todoItem.firstChild) {
            todoItem.removeChild(todoItem.firstChild);
        }
        todoItem.parentNode.removeChild(todoItem);
        _index_js__WEBPACK_IMPORTED_MODULE_3__.todoArr.splice(i, 1);
        while (_index_js__WEBPACK_IMPORTED_MODULE_3__.todoArr[i]) {
            console.log(i);
            (_index_js__WEBPACK_IMPORTED_MODULE_3__.todoArr[i]).id -= 1;
            i++;
        }
    });

    return todoItem;
}

function todoDisplay (project) {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
    if (project) {
        for (let i of _index_js__WEBPACK_IMPORTED_MODULE_3__.todoArr) {
            if (i.getAttribute("data-project") === project)
            content.appendChild(i);
        }
    } else {
        for (let i of _index_js__WEBPACK_IMPORTED_MODULE_3__.todoArr) {
            content.appendChild(i);
        }
    }
}

function todoAdd (title, description, dueDate, priority, project) {
    _index_js__WEBPACK_IMPORTED_MODULE_3__.todoArr.push(todo(title, description, dueDate, priority, project));
    todoDisplay();
}



/***/ }),

/***/ "./src/assets/fonts/poppins/Poppins-Light.ttf":
/*!****************************************************!*\
  !*** ./src/assets/fonts/poppins/Poppins-Light.ttf ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7641a0f76ca9ef6c252c.ttf";

/***/ }),

/***/ "./src/assets/fonts/poppins/Poppins-Regular.ttf":
/*!******************************************************!*\
  !*** ./src/assets/fonts/poppins/Poppins-Regular.ttf ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "35d26b781dc5fda684cc.ttf";

/***/ }),

/***/ "./src/assets/icons/check-mark.svg":
/*!*****************************************!*\
  !*** ./src/assets/icons/check-mark.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "daae14c9a062cc250e6e.svg";

/***/ }),

/***/ "./src/assets/icons/cross-black.svg":
/*!******************************************!*\
  !*** ./src/assets/icons/cross-black.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "31844cdfff81bb290735.svg";

/***/ }),

/***/ "./src/assets/icons/edit.svg":
/*!***********************************!*\
  !*** ./src/assets/icons/edit.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1e9304b4c631312bd432.svg";

/***/ }),

/***/ "./src/assets/icons/project.svg":
/*!**************************************!*\
  !*** ./src/assets/icons/project.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2de157a19afd208e1f4c.svg";

/***/ }),

/***/ "./src/assets/icons/trash.svg":
/*!************************************!*\
  !*** ./src/assets/icons/trash.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1860742563bdd121c6fc.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHVGQUF1RixZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sTUFBTSxV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QUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL2Zvcm1zLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL3RvZG8uY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL2Zvcm1zLmNzcz9mYzVhIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy90b2RvLmNzcz81NGVlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2Zvcm1zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC50b2RvLWZvcm0ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZTogbWF4LWNvbnRlbnQgMWZyIG1heC1jb250ZW50IG1heC1jb250ZW50IC8gMWZyO1xuICAgIGdhcDogMXJlbTtcbn1cblxuLnRvZG8tZm9ybS10aXRsZSxcbi5wcm9qZWN0LWZvcm0tdGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuLnRvZG8tZm9ybS10aXRsZTpmb2N1cyxcbi5wcm9qZWN0LWZvcm0tdGl0bGU6Zm9jdXMge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4udG9kby1mb3JtLWRlc2NyaXB0aW9uIHtcbiAgICByZXNpemU6IG5vbmU7XG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuLnRvZG8tZm9ybS1kZXNjcmlwdGlvbjpmb2N1cyB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbi5mb3JtLWRhdGUtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGU6IG1heC1jb250ZW50IG1heC1jb250ZW50IG1heC1jb250ZW50IC8gbWF4LWNvbnRlbnQgbWF4LWNvbnRlbnQgMWZyO1xuICAgIGdhcDogMXJlbTtcbn1cblxuLnRvZG8tZm9ybS1kYXRlLFxuLnRvZG8tZm9ybS1wcm9qZWN0cyB7XG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgcGFkZGluZzogMC4zcmVtIDAuNXJlbTtcbiAgICBib3JkZXI6IHNvbGlkICMzYmEzOTUgMXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBjb2xvcjogIzNiYTM5NTtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG4udG9kby1mb3JtLWRhdGU6Zm9jdXMsXG4udG9kby1mb3JtLXByb2plY3RzOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4udG9kby1mb3JtLWRhdGUgKyBsYWJlbCB7XG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcbn1cblxuLnJhZGlvLWNvbnRhaW5lciB7XG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMC44cmVtO1xufVxuXG4udG9kby1mb3JtLXByaW9yaXR5IHtcbiAgICB3aWR0aDogM3JlbTtcbn1cblxuLnJhZGlvID4gaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3BhY2l0eTogMDtcbiAgICBsZWZ0OiAxLjVyZW07XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgd2lkdGg6IDFweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cblxuLnJhZGlvID4gbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgcGFkZGluZzogMC4zcmVtIDAuNXJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5sb3cge1xuICAgIGJvcmRlcjogc29saWQgZ3JlZW4gMXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBjb2xvcjogZ3JlZW47XG59XG5cbi5tZWRpdW0ge1xuICAgIGJvcmRlcjogc29saWQgb3JhbmdlIDFweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgY29sb3I6IG9yYW5nZTtcbn1cblxuLmhpZ2gge1xuICAgIGJvcmRlcjogc29saWQgcmVkIDFweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgY29sb3I6IHJlZDtcbn1cblxuLmxvdzpob3Zlcixcbi5yYWRpbyA+IGlucHV0OmNoZWNrZWQgKyAubG93LFxuLnJhZGlvID4gaW5wdXRbdHlwZT1cInJhZGlvXCJdOmhvdmVyICsgLmxvdyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4ubWVkaXVtOmhvdmVyLFxuLnJhZGlvID4gaW5wdXQ6Y2hlY2tlZCArIC5tZWRpdW0sXG4ucmFkaW8gPiBpbnB1dFt0eXBlPVwicmFkaW9cIl06aG92ZXIgKyAubWVkaXVtIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uaGlnaDpob3Zlcixcbi5yYWRpbyA+IGlucHV0OmNoZWNrZWQgKyAuaGlnaCxcbi5yYWRpbyA+IGlucHV0W3R5cGU9XCJyYWRpb1wiXTpob3ZlciArIC5oaWdoIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uZm9ybS1wcm9qZWN0cy10aXRsZSB7XG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcbn1cblxuLnRvZG8tZm9ybS1wcm9qZWN0cyB7XG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcbn1cblxuLnN1Ym1pdC1idXR0b24geyAgICBcbiAgICBwYWRkaW5nOiAwLjNyZW0gMC41cmVtO1xuICAgIGdyaWQtcm93OiAzIC8gNDtcbiAgICBncmlkLWNvbHVtbjogMyAvIDQ7XG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIGJvcmRlcjogc29saWQgIzNiYTM5NSAxcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGNvbG9yOiAjM2JhMzk1O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc3VibWl0LWJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNiYTM5NTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5wcm9qZWN0LWZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2Zvcm1zLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYiw0REFBNEQ7SUFDNUQsU0FBUztBQUNiOztBQUVBOztJQUVJLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnRkFBZ0Y7SUFDaEYsU0FBUztBQUNiOztBQUVBOztJQUVJLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBOztJQUVJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixZQUFZO0lBQ1osV0FBVztJQUNYLFVBQVU7SUFDVixlQUFlO0FBQ25COzs7QUFHQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDs7QUFFQTs7O0lBR0ksdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7O0FBRUE7OztJQUdJLHdCQUF3QjtJQUN4QixZQUFZO0FBQ2hCOztBQUVBOzs7SUFHSSxxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsb0JBQW9CO0FBQ3hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi50b2RvLWZvcm0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiBtYXgtY29udGVudCAxZnIgbWF4LWNvbnRlbnQgbWF4LWNvbnRlbnQgLyAxZnI7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLnRvZG8tZm9ybS10aXRsZSxcXG4ucHJvamVjdC1mb3JtLXRpdGxlIHtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi50b2RvLWZvcm0tdGl0bGU6Zm9jdXMsXFxuLnByb2plY3QtZm9ybS10aXRsZTpmb2N1cyB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLnRvZG8tZm9ybS1kZXNjcmlwdGlvbiB7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4udG9kby1mb3JtLWRlc2NyaXB0aW9uOmZvY3VzIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uZm9ybS1kYXRlLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IG1heC1jb250ZW50IG1heC1jb250ZW50IG1heC1jb250ZW50IC8gbWF4LWNvbnRlbnQgbWF4LWNvbnRlbnQgMWZyO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi50b2RvLWZvcm0tZGF0ZSxcXG4udG9kby1mb3JtLXByb2plY3RzIHtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIHBhZGRpbmc6IDAuM3JlbSAwLjVyZW07XFxuICAgIGJvcmRlcjogc29saWQgIzNiYTM5NSAxcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgY29sb3I6ICMzYmEzOTU7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi50b2RvLWZvcm0tZGF0ZTpmb2N1cyxcXG4udG9kby1mb3JtLXByb2plY3RzOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLnRvZG8tZm9ybS1kYXRlICsgbGFiZWwge1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG59XFxuXFxuLnJhZGlvLWNvbnRhaW5lciB7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDAuOHJlbTtcXG59XFxuXFxuLnRvZG8tZm9ybS1wcmlvcml0eSB7XFxuICAgIHdpZHRoOiAzcmVtO1xcbn1cXG5cXG4ucmFkaW8gPiBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBsZWZ0OiAxLjVyZW07XFxuICAgIGhlaWdodDogMXB4O1xcbiAgICB3aWR0aDogMXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcbi5yYWRpbyA+IGxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIHBhZGRpbmc6IDAuM3JlbSAwLjVyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmxvdyB7XFxuICAgIGJvcmRlcjogc29saWQgZ3JlZW4gMXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGNvbG9yOiBncmVlbjtcXG59XFxuXFxuLm1lZGl1bSB7XFxuICAgIGJvcmRlcjogc29saWQgb3JhbmdlIDFweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBjb2xvcjogb3JhbmdlO1xcbn1cXG5cXG4uaGlnaCB7XFxuICAgIGJvcmRlcjogc29saWQgcmVkIDFweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBjb2xvcjogcmVkO1xcbn1cXG5cXG4ubG93OmhvdmVyLFxcbi5yYWRpbyA+IGlucHV0OmNoZWNrZWQgKyAubG93LFxcbi5yYWRpbyA+IGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl06aG92ZXIgKyAubG93IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm1lZGl1bTpob3ZlcixcXG4ucmFkaW8gPiBpbnB1dDpjaGVja2VkICsgLm1lZGl1bSxcXG4ucmFkaW8gPiBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdOmhvdmVyICsgLm1lZGl1bSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uaGlnaDpob3ZlcixcXG4ucmFkaW8gPiBpbnB1dDpjaGVja2VkICsgLmhpZ2gsXFxuLnJhZGlvID4gaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXTpob3ZlciArIC5oaWdoIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5mb3JtLXByb2plY3RzLXRpdGxlIHtcXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxufVxcblxcbi50b2RvLWZvcm0tcHJvamVjdHMge1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG59XFxuXFxuLnN1Ym1pdC1idXR0b24geyAgICBcXG4gICAgcGFkZGluZzogMC4zcmVtIDAuNXJlbTtcXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgICBncmlkLWNvbHVtbjogMyAvIDQ7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIGJvcmRlcjogc29saWQgIzNiYTM5NSAxcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgY29sb3I6ICMzYmEzOTU7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnN1Ym1pdC1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2JhMzk1O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5wcm9qZWN0LWZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9mb250cy9wb3BwaW5zL1BvcHBpbnMtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogUG9wcGlucy1yZWd1bGFyO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuKiB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbn1cblxuYm9keSB7XG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnMtcmVndWxhciwgc2Fucy1zZXJpZjtcbn0gICBcblxuLm1haW4tY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGU6IG1heC1jb250ZW50IDFmciAvIDFmcjtcbiAgICAvKmZpbHRlcjogYmx1cig4cHgpOyovXG59XG5cbi5oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTksIDEwNywgMik7XG4gICAgcGFkZGluZzogMC41cmVtIDJyZW07XG59XG5cbm5hdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5pbWcge1xuICAgIHdpZHRoOiAxLjhyZW07XG59XG5cbnVsIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbmJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5idXR0b246Zm9jdXMge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4uaGVhZGVyID4gbmF2ID4gdWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxcmVtO1xufVxuXG4ubGVmdCA+IHVsID4gbGksIFxuLnJpZ2h0ID4gdWwgPiBsaSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5hIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGNvbG9yOiBpbmhlcml0O1xufVxuXG4udXNlciA+IGltZyB7XG4gICAgd2lkdGg6IDIuMnJlbTtcbn1cblxuLnNlYXJjaCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNSwgMTc1LCAxMjApO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMS42cmVtO1xuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xufVxuXG4uc2VhcmNoOmZvY3VzIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIgLyBtYXgtY29udGVudCAxZnI7XG4gICAgcGFkZGluZy10b3A6IDNyZW07XG59XG5cbi5zaWRlYmFyIHtcbiAgICBwYWRkaW5nOiAwIDJyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ub3B0aW9ucyB7XG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbn1cblxuLm9wdGlvbnMgPiB1bCxcbi5wcm9qZWN0cyA+IHVsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAwLjhyZW07XG59XG5cbi5vcHRpb25zID4gdWwgPiBsaSA+IGJ1dHRvbixcbi5wcm9qZWN0cyA+IHVsID4gbGkgPiBidXR0b24ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIC8gbWF4LWNvbnRlbnQgMWZyO1xuICAgIGdhcDogMC43cmVtO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG5zcGFuIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbmg0IHtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbn1cblxuLnByb2plY3RzIHtcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcbn1cblxuLmNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDAgMTB2dztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxcmVtO1xufVxuXG4jZGlhbG9nW29wZW5dIHtcbiAgICB3aWR0aDogNTB2dztcbiAgICBoZWlnaHQ6IDUwdmg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTB2aDtcbiAgICBsZWZ0OiA1MHZ3O1xuICAgIG1hcmdpbi1sZWZ0OiAtMjV2dztcbiAgICBtYXJnaW4tdG9wOiAtMjV2aDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGU6IG1heC1jb250ZW50IDFmciAvIDFmcjtcbiAgICBib3gtc2hhZG93OiAwIDJyZW0gNHJlbSByZ2JhKDAsIDAsIDAsIDAuNik7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmRpYWxvZy1oZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTksIDEwNywgMik7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgcGFkZGluZzogMC41cmVtIDA7XG59XG5cbi5kaWFsb2ctaGVhZGVyID4gYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwLjdyZW07XG4gICAgcmlnaHQ6IDAuNXJlbTtcbn1cblxuLmRpYWxvZy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIC8gbWF4LWNvbnRlbnQgMWZyO1xufVxuXG4uZGlhbG9nLXNpZGViYXIge1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgcGFkZGluZy1yaWdodDogNXJlbTtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIHJnYigxNTYsIDE1MCwgMTUwKSAxcHg7XG59XG5cbi5kaWFsb2ctc2lkZWJhciA+IHVsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxcmVtO1xufVxuXG4uZGlhbG9nLWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgZGlzcGxheTogZ3JpZDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsNEJBQTRCO0VBQzVCLDRDQUFxRDtBQUN2RDs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsU0FBUztBQUNiOztBQUVBO0lBQ0ksd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsa0NBQWtDO0lBQ2xDLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7QUFDYjs7QUFFQTs7SUFFSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBOztJQUVJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsV0FBVztBQUNmOztBQUVBOztJQUVJLGFBQWE7SUFDYixvQ0FBb0M7SUFDcEMsV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLDBDQUEwQztJQUMxQyxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGFBQWE7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogUG9wcGlucy1yZWd1bGFyO1xcbiAgc3JjOiB1cmwoLi4vYXNzZXRzL2ZvbnRzL3BvcHBpbnMvUG9wcGlucy1SZWd1bGFyLnR0Zik7XFxufVxcblxcbioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogUG9wcGlucy1yZWd1bGFyLCBzYW5zLXNlcmlmO1xcbn0gICBcXG5cXG4ubWFpbi1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IG1heC1jb250ZW50IDFmciAvIDFmcjtcXG4gICAgLypmaWx0ZXI6IGJsdXIoOHB4KTsqL1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE5LCAxMDcsIDIpO1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMnJlbTtcXG59XFxuXFxubmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmltZyB7XFxuICAgIHdpZHRoOiAxLjhyZW07XFxufVxcblxcbnVsIHtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYnV0dG9uOmZvY3VzIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uaGVhZGVyID4gbmF2ID4gdWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5sZWZ0ID4gdWwgPiBsaSwgXFxuLnJpZ2h0ID4gdWwgPiBsaSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmEge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuLnVzZXIgPiBpbWcge1xcbiAgICB3aWR0aDogMi4ycmVtO1xcbn1cXG5cXG4uc2VhcmNoIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNSwgMTc1LCAxMjApO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBoZWlnaHQ6IDEuNnJlbTtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xcbn1cXG5cXG4uc2VhcmNoOmZvY3VzIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIC8gbWF4LWNvbnRlbnQgMWZyO1xcbiAgICBwYWRkaW5nLXRvcDogM3JlbTtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgICBwYWRkaW5nOiAwIDJyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5vcHRpb25zIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXG59XFxuXFxuLm9wdGlvbnMgPiB1bCxcXG4ucHJvamVjdHMgPiB1bCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMC44cmVtO1xcbn1cXG5cXG4ub3B0aW9ucyA+IHVsID4gbGkgPiBidXR0b24sXFxuLnByb2plY3RzID4gdWwgPiBsaSA+IGJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IDFmciAvIG1heC1jb250ZW50IDFmcjtcXG4gICAgZ2FwOiAwLjdyZW07XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG5zcGFuIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG5oNCB7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4ucHJvamVjdHMge1xcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICBwYWRkaW5nOiAwIDEwdnc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuI2RpYWxvZ1tvcGVuXSB7XFxuICAgIHdpZHRoOiA1MHZ3O1xcbiAgICBoZWlnaHQ6IDUwdmg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MHZoO1xcbiAgICBsZWZ0OiA1MHZ3O1xcbiAgICBtYXJnaW4tbGVmdDogLTI1dnc7XFxuICAgIG1hcmdpbi10b3A6IC0yNXZoO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiBtYXgtY29udGVudCAxZnIgLyAxZnI7XFxuICAgIGJveC1zaGFkb3c6IDAgMnJlbSA0cmVtIHJnYmEoMCwgMCwgMCwgMC42KTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uZGlhbG9nLWhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTksIDEwNywgMik7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAwO1xcbn1cXG5cXG4uZGlhbG9nLWhlYWRlciA+IGJ1dHRvbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwLjdyZW07XFxuICAgIHJpZ2h0OiAwLjVyZW07XFxufVxcblxcbi5kaWFsb2ctY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIC8gbWF4LWNvbnRlbnQgMWZyO1xcbn1cXG5cXG4uZGlhbG9nLXNpZGViYXIge1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cmVtO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCByZ2IoMTU2LCAxNTAsIDE1MCkgMXB4O1xcbn1cXG5cXG4uZGlhbG9nLXNpZGViYXIgPiB1bCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLmRpYWxvZy1jb250ZW50IHtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ZvbnRzL3BvcHBpbnMvUG9wcGlucy1MaWdodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaWNvbnMvY2hlY2stbWFyay5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogUG9wcGlucy1saWdodDtcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgfVxuXG4udG9kbyB7XG4gICAgd2lkdGg6IDYwdnc7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgZ2FwOiAxLjVyZW07XG4gICAgcGFkZGluZzogMC41cmVtIDJyZW07XG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycztcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMtbGlnaHQnO1xufVxuXG4udG9kbzpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAwMyk7XG4gICAgYm94LXNoYWRvdzogM3B4IDNweCA1cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2Utb3V0O1xufVxuXG4udG9kbyA+IGRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udG9kby1jaGVjayB7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICB3aWR0aDogMS4ycmVtO1xuICAgIGhlaWdodDogMS4ycmVtO1xuICAgIGJvcmRlcjogc29saWQgIzNiYTM5NSAycHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjUlO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLnRvZG8tY2hlY2s6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRvZG8tY2hlY2s6Y2hlY2tlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNiYTM5NTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxcmVtO1xufVxuXG4udG9kby10aXRsZSB7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4udG9kby1kZXRhaWxzIHtcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGJvcmRlcjogc29saWQgIzNiYTM5NSAxcHg7XG4gICAgY29sb3I6ICMzYmEzOTU7XG4gICAgcGFkZGluZzogMCAxcmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnRvZG8tZGV0YWlsczpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNiYTM5NTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi50b2RvLWRldGFpbHM6Zm9jdXMge1xuICAgIGJvcmRlcjogc29saWQgIzNiYTM5NSAxcHg7XG59XG5cbi50b2RvLWRhdGUge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAwLjdyZW07XG59XG5cbi5kb25lIHtcbiAgICBjb2xvcjogZ3JleTtcbiAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcbn1cblxuLmRvbmUgPiAudG9kby10aXRsZXtcbiAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogbGluZS10aHJvdWdoO1xufVxuXG4udG9kby1kaWFsb2cge1xuICAgIHdpZHRoOiAzMHZ3O1xuICAgIGhlaWdodDogMjZ2aDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MHZoO1xuICAgIGxlZnQ6IDUwdnc7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNXZ3O1xuICAgIG1hcmdpbi10b3A6IC0xM3ZoO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZTogbWF4LWNvbnRlbnQgbWF4LWNvbnRlbnQgbWF4LWNvbnRlbnQgLyAxZnI7XG4gICAgYm94LXNoYWRvdzogMCAycmVtIDRyZW0gcmdiYSgwLCAwLCAwLCAwLjYpO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgcGFkZGluZzogMXJlbTtcbn1cblxuLnRvZG8tZGlhbG9nID4gYnV0dG9uID4gaW1nIHtcbiAgICB3aWR0aDogMS4zcmVtO1xufVxuXG4udG9kby1kaWFsb2cgPiBidXR0b24ge1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xufVxuXG4udG9kby1kaWFsb2ctdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLnRvZG8tZGlhbG9nLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlOiByZXBlYXQoNCwgbWF4LWNvbnRlbnQpIC8gbWF4LWNvbnRlbnQgbWF4LWNvbnRlbnQ7XG59XG5cbi50b2RvLWRpYWxvZy1jb250YWluZXIgPiBkaXYge1xuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbn1cblxuLmJvbGQge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3RvZG8uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksMEJBQTBCO0lBQzFCLDRDQUFtRDtFQUNyRDs7QUFFRjtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2Qiw4Q0FBOEM7SUFDOUMsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qix5REFBcUQ7SUFDckQscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHdEQUF3RDtJQUN4RCwwQ0FBMEM7SUFDMUMsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsK0RBQStEO0FBQ25FOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogUG9wcGlucy1saWdodDtcXG4gICAgc3JjOiB1cmwoLi4vYXNzZXRzL2ZvbnRzL3BvcHBpbnMvUG9wcGlucy1MaWdodC50dGYpO1xcbiAgfVxcblxcbi50b2RvIHtcXG4gICAgd2lkdGg6IDYwdnc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZ2FwOiAxLjVyZW07XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAycmVtO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMtbGlnaHQnO1xcbn1cXG5cXG4udG9kbzpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMDMpO1xcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDVweCAycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2Utb3V0O1xcbn1cXG5cXG4udG9kbyA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50b2RvLWNoZWNrIHtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgd2lkdGg6IDEuMnJlbTtcXG4gICAgaGVpZ2h0OiAxLjJyZW07XFxuICAgIGJvcmRlcjogc29saWQgIzNiYTM5NSAycHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI1JTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4udG9kby1jaGVjazpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRvZG8tY2hlY2s6Y2hlY2tlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYmEzOTU7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvaWNvbnMvY2hlY2stbWFyay5zdmcpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDFyZW07XFxufVxcblxcbi50b2RvLXRpdGxlIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLnRvZG8tZGV0YWlscyB7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgYm9yZGVyOiBzb2xpZCAjM2JhMzk1IDFweDtcXG4gICAgY29sb3I6ICMzYmEzOTU7XFxuICAgIHBhZGRpbmc6IDAgMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4udG9kby1kZXRhaWxzOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNiYTM5NTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udG9kby1kZXRhaWxzOmZvY3VzIHtcXG4gICAgYm9yZGVyOiBzb2xpZCAjM2JhMzk1IDFweDtcXG59XFxuXFxuLnRvZG8tZGF0ZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xcbn1cXG5cXG4uZG9uZSB7XFxuICAgIGNvbG9yOiBncmV5O1xcbiAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcXG59XFxuXFxuLmRvbmUgPiAudG9kby10aXRsZXtcXG4gICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLnRvZG8tZGlhbG9nIHtcXG4gICAgd2lkdGg6IDMwdnc7XFxuICAgIGhlaWdodDogMjZ2aDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwdmg7XFxuICAgIGxlZnQ6IDUwdnc7XFxuICAgIG1hcmdpbi1sZWZ0OiAtMTV2dztcXG4gICAgbWFyZ2luLXRvcDogLTEzdmg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IG1heC1jb250ZW50IG1heC1jb250ZW50IG1heC1jb250ZW50IC8gMWZyO1xcbiAgICBib3gtc2hhZG93OiAwIDJyZW0gNHJlbSByZ2JhKDAsIDAsIDAsIDAuNik7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLnRvZG8tZGlhbG9nID4gYnV0dG9uID4gaW1nIHtcXG4gICAgd2lkdGg6IDEuM3JlbTtcXG59XFxuXFxuLnRvZG8tZGlhbG9nID4gYnV0dG9uIHtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xcbn1cXG5cXG4udG9kby1kaWFsb2ctdGl0bGUge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLnRvZG8tZGlhbG9nLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCg0LCBtYXgtY29udGVudCkgLyBtYXgtY29udGVudCBtYXgtY29udGVudDtcXG59XFxuXFxuLnRvZG8tZGlhbG9nLWNvbnRhaW5lciA+IGRpdiB7XFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuXFxuLmJvbGQge1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZm9ybXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mb3Jtcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdG9kby5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RvZG8uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGVzL3N0eWxlLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL3RvZG8uY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvZm9ybXMuY3NzJztcbmltcG9ydCB7IGZvcm1hdCwgY29tcGFyZUFzYyB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCB7IHRvZG9EaXNwbGF5LCB0b2RvQWRkIH0gZnJvbSAnLi9tb2R1bGVzL3RvZG8uanMnO1xuaW1wb3J0IHsgdG9kb0Zvcm0sIHByb2plY3RGb3JtIH0gZnJvbSAnLi9tb2R1bGVzL2Zvcm1zLmpzJztcbmltcG9ydCB7IHByb2plY3RzRGlzcGxheSwgcHJvamVjdHNBZGQgfSBmcm9tICcuL21vZHVsZXMvcHJvamVjdHMuanMnO1xuXG4vL21haW4gZGlhbG9nXG5jb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLWNvbnRhaW5lclwiKTtcbmNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkXCIpO1xubGV0IGRpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGlhbG9nXCIpO1xuY29uc3QgZGlhbG9nQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGlhbG9nLWNvbnRlbnRcIik7XG5jb25zdCB0b2RvRm9ybUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1mb3JtLWJ1dHRvblwiKTtcbmNvbnN0IHByb2plY3RGb3JtQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWZvcm0tYnV0dG9uXCIpO1xuY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpYWxvZy1jbG9zZVwiKTtcblxuZXhwb3J0IGxldCBwcm9qZWN0QXJyID0gW107XG5leHBvcnQgbGV0IHRvZG9BcnIgPSBbXTtcblxudG9kb0Zvcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgd2hpbGUgKGRpYWxvZ0NvbnRlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICBkaWFsb2dDb250ZW50LnJlbW92ZUNoaWxkKGRpYWxvZ0NvbnRlbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIGRpYWxvZ0NvbnRlbnQuYXBwZW5kQ2hpbGQodG9kb0Zvcm0oKSk7XG59KTtcbnByb2plY3RGb3JtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHdoaWxlIChkaWFsb2dDb250ZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgZGlhbG9nQ29udGVudC5yZW1vdmVDaGlsZChkaWFsb2dDb250ZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBkaWFsb2dDb250ZW50LmFwcGVuZENoaWxkKHByb2plY3RGb3JtKCkpO1xufSk7XG5cblxuYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGRpYWxvZy5zaG93TW9kYWwoKTtcbiAgICBtYWluQ29udGFpbmVyLnN0eWxlLmZpbHRlciA9IFwiYmx1cigzcHgpXCI7XG4gICAgZGlhbG9nQ29udGVudC5hcHBlbmRDaGlsZCh0b2RvRm9ybSgpKTtcbn0pO1xuY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZGlhbG9nLmNsb3NlKCk7XG4gICAgbWFpbkNvbnRhaW5lci5zdHlsZS5maWx0ZXIgPSBcImJsdXIoMHB4KVwiO1xuICAgIHdoaWxlIChkaWFsb2dDb250ZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgZGlhbG9nQ29udGVudC5yZW1vdmVDaGlsZChkaWFsb2dDb250ZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbn0pO1xuZGlhbG9nLmFkZEV2ZW50TGlzdGVuZXIoJ2NhbmNlbCcsICgpID0+IHtcbiAgICBtYWluQ29udGFpbmVyLnN0eWxlLmZpbHRlciA9IFwiYmx1cigwcHgpXCI7XG4gICAgd2hpbGUgKGRpYWxvZ0NvbnRlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICBkaWFsb2dDb250ZW50LnJlbW92ZUNoaWxkKGRpYWxvZ0NvbnRlbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxufSk7XG5cblxuY29uc3QgYWxsQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbGwtYnV0dG9uXCIpO1xuYWxsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHRvZG9EaXNwbGF5KCk7XG59KTtcblxuXG4vL1xuXG5cbi8vZXhhbXBsZXNcbih0b2RvQWRkKFwiYWJjXCIsIFwiMVwiLCBcIkRBVEVURVNUXCIsIFwiSGlnaFwiLCBcInRlc3RcIikpO1xuKHRvZG9BZGQoXCJiXCIsIFwiMlwiLCBcIkRBVEVURVNUXCIsIFwiTWVkaXVtXCIpKTtcbih0b2RvQWRkKFwiY1wiLCBcIjNcIiwgXCJEQVRFVEVTVFwiLCBcIkhpZ2hcIikpO1xuKHRvZG9BZGQoXCJkXCIsIFwiNFwiLCBcIkRBVEVURVNUXCIsIFwiTG93XCIsIFwidGVzdFwiKSk7XG5cbnByb2plY3RzQWRkKFwidGVzdFwiKTtcbnByb2plY3RzQWRkKFwidGVzdDJcIik7XG5wcm9qZWN0c0FkZChcInRlc3QzXCIpOyIsImltcG9ydCB7IHRvZG9BZGQgfSBmcm9tICcuL3RvZG8uanMnO1xuaW1wb3J0IHsgcHJvamVjdHNEaXNwbGF5LCBwcm9qZWN0c0FkZCB9IGZyb20gJy4vcHJvamVjdHMuanMnO1xuaW1wb3J0IHsgcHJvamVjdEFyciB9IGZyb20gJy4uL2luZGV4LmpzJztcblxuZnVuY3Rpb24gdG9kb0Zvcm0oKSB7XG4gICAgbGV0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW4tY29udGFpbmVyXCIpO1xuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICAgIGxldCBkaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpYWxvZ1wiKTtcbiAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIGZvcm0uY2xhc3NMaXN0LmFkZChcInRvZG8tZm9ybVwiKTtcbiAgICBmb3JtLmF1dG9jb21wbGV0ZSA9IFwib2ZmXCI7XG5cbiAgICBsZXQgZm9ybVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGZvcm1UaXRsZS50eXBlID0gXCJ0ZXh0XCI7XG4gICAgZm9ybVRpdGxlLm5hbWUgPSBcInRvZG8tZm9ybS10aXRsZVwiO1xuICAgIGZvcm1UaXRsZS5pZCA9IFwidG9kby1mb3JtLXRpdGxlXCI7XG4gICAgZm9ybVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWZvcm0tdGl0bGVcIik7XG4gICAgZm9ybVRpdGxlLnBsYWNlaG9sZGVyID0gXCJUaXRsZTogUGF5IGJpbGxzXCJcbiAgICBmb3JtVGl0bGUucmVxdWlyZWQgPSB0cnVlO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZm9ybVRpdGxlKTtcblxuICAgIGxldCBmb3JtRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgZm9ybURlc2NyaXB0aW9uLm5hbWUgPSBcInRvZG8tZm9ybS1kZXNjcmlwdGlvblwiO1xuICAgIGZvcm1EZXNjcmlwdGlvbi5pZCA9IFwidG9kby1mb3JtLWRlc2NyaXB0aW9uXCI7XG4gICAgZm9ybURlc2NyaXB0aW9uLmNsYXNzTGlzdCA9IFwidG9kby1mb3JtLWRlc2NyaXB0aW9uXCI7XG4gICAgZm9ybURlc2NyaXB0aW9uLnBsYWNlaG9sZGVyID0gXCJEZXRhaWxzOiBlZyBpbnRlcm5ldCwgcGhvbmUsIHJlbnQuXCI7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChmb3JtRGVzY3JpcHRpb24pO1xuXG4gICAgbGV0IGZvcm1EYXRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb3JtRGF0ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZm9ybS1kYXRlLWNvbnRhaW5lclwiKTtcbiAgICBsZXQgZm9ybURhdGVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBmb3JtRGF0ZVRpdGxlLnRleHRDb250ZW50ID0gXCJEdWUgRGF0ZSA6XCI7XG4gICAgZm9ybURhdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybURhdGVUaXRsZSk7XG4gICAgbGV0IGZvcm1EYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXG4gICAgZm9ybURhdGUudHlwZSA9IFwiZGF0ZVwiO1xuICAgIGZvcm1EYXRlLm5hbWUgPSBcInRvZG8tZm9ybS1kYXRlXCI7XG4gICAgZm9ybURhdGUuaWQgPSBcInRvZG8tZm9ybS1kYXRlXCI7XG4gICAgZm9ybURhdGUuY2xhc3NMaXN0ID0gXCJ0b2RvLWZvcm0tZGF0ZVwiO1xuICAgIGZvcm1EYXRlLnJlcXVpcmVkID0gdHJ1ZTtcbiAgICBmb3JtRGF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtRGF0ZSk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChmb3JtRGF0ZUNvbnRhaW5lcik7XG5cbiAgICBsZXQgZm9ybVByaW9yaXR5VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgZm9ybVByaW9yaXR5VGl0bGUudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5IDpcIjtcbiAgICBmb3JtRGF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtUHJpb3JpdHlUaXRsZSk7XG4gICAgbGV0IGZvcm1SYWRpb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9ybVJhZGlvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJyYWRpby1jb250YWluZXJcIik7XG4gICAgbGV0IGZvcm1Qcmlvcml0eUxvd0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9ybVByaW9yaXR5TG93Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJyYWRpb1wiKTtcbiAgICBsZXQgZm9ybVByaW9yaXR5TWVkaXVtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb3JtUHJpb3JpdHlNZWRpdW1Db250YWluZXIuY2xhc3NMaXN0LmFkZChcInJhZGlvXCIpO1xuICAgIGxldCBmb3JtUHJpb3JpdHlIaWdoQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb3JtUHJpb3JpdHlIaWdoQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJyYWRpb1wiKTtcbiAgICBsZXQgZm9ybVByaW9yaXR5TG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGZvcm1Qcmlvcml0eUxvdy50eXBlID0gXCJyYWRpb1wiO1xuICAgIGZvcm1Qcmlvcml0eUxvdy5uYW1lID0gXCJ0b2RvLWZvcm0tcHJpb3JpdHlcIjtcbiAgICBmb3JtUHJpb3JpdHlMb3cuaWQgPSBcInRvZG8tZm9ybS1wcmlvcml0eS1sb3dcIjtcbiAgICBmb3JtUHJpb3JpdHlMb3cuY2xhc3NMaXN0ID0gXCJ0b2RvLWZvcm0tcHJpb3JpdHlcIjtcbiAgICBmb3JtUHJpb3JpdHlMb3cudmFsdWUgPSBcIkxvd1wiO1xuICAgIGZvcm1Qcmlvcml0eUxvdy5yZXF1aXJlZCA9IHRydWU7XG4gICAgbGV0IGZvcm1Qcmlvcml0eUxvd0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGZvcm1Qcmlvcml0eUxvd0xhYmVsLmNsYXNzTGlzdC5hZGQoXCJsb3dcIik7XG4gICAgZm9ybVByaW9yaXR5TG93TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidG9kby1mb3JtLXByaW9yaXR5LWxvd1wiKTtcbiAgICBmb3JtUHJpb3JpdHlMb3dMYWJlbC50ZXh0Q29udGVudCA9IFwiTE9XXCI7XG4gICAgbGV0IGZvcm1Qcmlvcml0eU1lZGl1bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBmb3JtUHJpb3JpdHlNZWRpdW0udHlwZSA9IFwicmFkaW9cIjtcbiAgICBmb3JtUHJpb3JpdHlNZWRpdW0ubmFtZSA9IFwidG9kby1mb3JtLXByaW9yaXR5XCI7XG4gICAgZm9ybVByaW9yaXR5TWVkaXVtLmlkID0gXCJ0b2RvLWZvcm0tcHJpb3JpdHktbWVkaXVtXCI7XG4gICAgZm9ybVByaW9yaXR5TWVkaXVtLmNsYXNzTGlzdCA9IFwidG9kby1mb3JtLXByaW9yaXR5XCI7XG4gICAgZm9ybVByaW9yaXR5TWVkaXVtLnZhbHVlID0gXCJNZWRpdW1cIjtcbiAgICBmb3JtUHJpb3JpdHlNZWRpdW0ucmVxdWlyZWQgPSB0cnVlO1xuICAgIGxldCBmb3JtUHJpb3JpdHlNZWRpdW1MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBmb3JtUHJpb3JpdHlNZWRpdW1MYWJlbC5jbGFzc0xpc3QuYWRkKFwibWVkaXVtXCIpO1xuICAgIGZvcm1Qcmlvcml0eU1lZGl1bUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRvZG8tZm9ybS1wcmlvcml0eS1tZWRpdW1cIik7XG4gICAgZm9ybVByaW9yaXR5TWVkaXVtTGFiZWwudGV4dENvbnRlbnQgPSBcIk1FRElVTVwiO1xuICAgIGxldCBmb3JtUHJpb3JpdHlIaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGZvcm1Qcmlvcml0eUhpZ2gudHlwZSA9IFwicmFkaW9cIjtcbiAgICBmb3JtUHJpb3JpdHlIaWdoLm5hbWUgPSBcInRvZG8tZm9ybS1wcmlvcml0eVwiO1xuICAgIGZvcm1Qcmlvcml0eUhpZ2guaWQgPSBcInRvZG8tZm9ybS1wcmlvcml0eS1oaWdoXCI7XG4gICAgZm9ybVByaW9yaXR5SGlnaC5jbGFzc0xpc3QgPSBcInRvZG8tZm9ybS1wcmlvcml0eVwiO1xuICAgIGZvcm1Qcmlvcml0eUhpZ2gudmFsdWUgPSBcIkhpZ2hcIjtcbiAgICBmb3JtUHJpb3JpdHlIaWdoLnJlcXVpcmVkID0gdHJ1ZTtcbiAgICBsZXQgZm9ybVByaW9yaXR5SGlnaExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGZvcm1Qcmlvcml0eUhpZ2hMYWJlbC5jbGFzc0xpc3QuYWRkKFwiaGlnaFwiKTtcbiAgICBmb3JtUHJpb3JpdHlIaWdoTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidG9kby1mb3JtLXByaW9yaXR5LWhpZ2hcIik7XG4gICAgZm9ybVByaW9yaXR5SGlnaExhYmVsLnRleHRDb250ZW50ID0gXCJISUdIXCI7XG4gICAgZm9ybVByaW9yaXR5TG93Q29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1Qcmlvcml0eUxvdyk7XG4gICAgZm9ybVByaW9yaXR5TG93Q29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1Qcmlvcml0eUxvd0xhYmVsKTtcbiAgICBmb3JtUHJpb3JpdHlNZWRpdW1Db250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybVByaW9yaXR5TWVkaXVtKTtcbiAgICBmb3JtUHJpb3JpdHlNZWRpdW1Db250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybVByaW9yaXR5TWVkaXVtTGFiZWwpO1xuICAgIGZvcm1Qcmlvcml0eUhpZ2hDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybVByaW9yaXR5SGlnaCk7XG4gICAgZm9ybVByaW9yaXR5SGlnaENvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtUHJpb3JpdHlIaWdoTGFiZWwpO1xuICAgIGZvcm1SYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtUHJpb3JpdHlMb3dDb250YWluZXIpO1xuICAgIGZvcm1SYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtUHJpb3JpdHlNZWRpdW1Db250YWluZXIpO1xuICAgIGZvcm1SYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtUHJpb3JpdHlIaWdoQ29udGFpbmVyKTtcbiAgICBmb3JtRGF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtUmFkaW9Db250YWluZXIpO1xuXG4gICAgbGV0IGZvcm1Qcm9qZWN0c1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGZvcm1Qcm9qZWN0c1RpdGxlLnRleHRDb250ZW50ID0gXCJQcm9qZWN0IDpcIjtcbiAgICBmb3JtUHJvamVjdHNUaXRsZS5jbGFzc0xpc3QuYWRkKFwiZm9ybS1wcm9qZWN0cy10aXRsZVwiKTtcbiAgICBmb3JtRGF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtUHJvamVjdHNUaXRsZSk7XG4gICAgbGV0IGZvcm1Qcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIilcbiAgICBmb3JtUHJvamVjdHMubmFtZSA9IFwidG9kby1mb3JtLXByb2plY3RzXCI7XG4gICAgZm9ybVByb2plY3RzLmlkID0gXCJ0b2RvLWZvcm0tcHJvamVjdHNcIjtcbiAgICBmb3JtUHJvamVjdHMuY2xhc3NMaXN0ID0gXCJ0b2RvLWZvcm0tcHJvamVjdHNcIjtcbiAgICBsZXQgZGVmYXVsdE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgZGVmYXVsdE9wdGlvbi52YWx1ZSA9IFwiXCI7XG4gICAgZGVmYXVsdE9wdGlvbi50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgZm9ybVByb2plY3RzLmFwcGVuZENoaWxkKGRlZmF1bHRPcHRpb24pO1xuICAgIGZvciAobGV0IGkgb2YgcHJvamVjdEFycikge1xuICAgICAgICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gaTtcbiAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gaTtcbiAgICAgICAgZm9ybVByb2plY3RzLmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgfVxuICAgIGZvcm1EYXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1Qcm9qZWN0cyk7XG5cbiAgICBsZXQgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHN1Ym1pdEJ1dHRvbi50eXBlID0gXCJzdWJtaXRcIjtcbiAgICBzdWJtaXRCdXR0b24uY2xhc3NMaXN0LmFkZChcInN1Ym1pdC1idXR0b25cIik7XG4gICAgc3VibWl0QnV0dG9uLnZhbHVlID0gXCJBREQgVE8gRE9cIjtcbiAgICBmb3JtRGF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0b2RvQWRkKGZvcm1UaXRsZS52YWx1ZSwgZm9ybURlc2NyaXB0aW9uLnZhbHVlLCBmb3JtRGF0ZS52YWx1ZSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInRvZG8tZm9ybS1wcmlvcml0eVwiXTpjaGVja2VkJykudmFsdWUsIGZvcm1Qcm9qZWN0cy52YWx1ZSk7XG4gICAgICAgIHdoaWxlIChmb3JtLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIGZvcm0ucmVtb3ZlQ2hpbGQoZm9ybS5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICBkaWFsb2cuY2xvc2UoKTtcbiAgICAgICAgbWFpbkNvbnRhaW5lci5zdHlsZS5maWx0ZXIgPSBcImJsdXIoMHB4KVwiO1xuICAgICAgICBmb3JtLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZm9ybSk7XG4gICAgfSlcblxuICAgIHJldHVybiBmb3JtO1xufVxuXG5mdW5jdGlvbiBwcm9qZWN0Rm9ybSgpIHtcbiAgICBsZXQgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbi1jb250YWluZXJcIik7XG4gICAgbGV0IGRpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGlhbG9nXCIpO1xuICAgIGxldCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1mb3JtXCIpO1xuICAgIGZvcm0uYXV0b2NvbXBsZXRlID0gXCJvZmZcIjtcblxuICAgIGxldCBmb3JtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgZm9ybVRpdGxlLnR5cGUgPSBcInRleHRcIjtcbiAgICBmb3JtVGl0bGUubmFtZSA9IFwicHJvamVjdC1mb3JtLXRpdGxlXCI7XG4gICAgZm9ybVRpdGxlLmlkID0gXCJwcm9qZWN0LWZvcm0tdGl0bGVcIjtcbiAgICBmb3JtVGl0bGUuY2xhc3NMaXN0LmFkZChcInByb2plY3QtZm9ybS10aXRsZVwiKTtcbiAgICBmb3JtVGl0bGUucGxhY2Vob2xkZXIgPSBcIlRpdGxlOiBIb3VzZSBSZW5vdmF0aW9uXCJcbiAgICBmb3JtVGl0bGUucmVxdWlyZWQgPSB0cnVlO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZm9ybVRpdGxlKTtcblxuICAgIGxldCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgc3VibWl0QnV0dG9uLnR5cGUgPSBcInN1Ym1pdFwiO1xuICAgIHN1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwic3VibWl0LWJ1dHRvblwiKTtcbiAgICBzdWJtaXRCdXR0b24udmFsdWUgPSBcIkNSRUFURSBQUk9KRUNUXCI7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBwcm9qZWN0c0FkZChmb3JtVGl0bGUudmFsdWUpO1xuICAgICAgICB3aGlsZSAoZm9ybS5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICBmb3JtLnJlbW92ZUNoaWxkKGZvcm0uZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgZGlhbG9nLmNsb3NlKCk7XG4gICAgICAgIG1haW5Db250YWluZXIuc3R5bGUuZmlsdGVyID0gXCJibHVyKDBweClcIjtcbiAgICAgICAgZm9ybS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGZvcm0pO1xuICAgIH0pXG5cbiAgICByZXR1cm4gZm9ybTtcbn1cblxuZXhwb3J0IHsgdG9kb0Zvcm0sIHByb2plY3RGb3JtIH0iLCJpbXBvcnQgaWNvbiBmcm9tIFwiLi4vYXNzZXRzL2ljb25zL3Byb2plY3Quc3ZnXCI7XG5pbXBvcnQgeyBwcm9qZWN0QXJyIH0gZnJvbSAnLi4vaW5kZXguanMnO1xuaW1wb3J0IHsgdG9kb0Rpc3BsYXkgfSBmcm9tIFwiLi90b2RvLmpzXCI7XG5cbmZ1bmN0aW9uIHByb2plY3RzRGlzcGxheSAoKSB7XG4gICAgY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzLXVsXCIpO1xuICAgIHdoaWxlIChwcm9qZWN0c0NvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgICAgIHByb2plY3RzQ29udGFpbmVyLnJlbW92ZUNoaWxkKHByb2plY3RzQ29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBmb3IgKGxldCBpIG9mIHByb2plY3RBcnIpIHtcbiAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoaSk7XG4gICAgICAgIGJ1dHRvbi5pZCA9IGk7XG4gICAgICAgIGxldCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWFnZS5zcmMgPSBpY29uO1xuICAgICAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gaTtcbiAgICAgICAgYnV0dG9uLmFwcGVuZENoaWxkKGltYWdlKTtcbiAgICAgICAgYnV0dG9uLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgICAgICBsaS5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgICAgICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChsaSk7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGkpO1xuICAgICAgICAgICAgdG9kb0Rpc3BsYXkoaSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcHJvamVjdHNBZGQgKHByb2plY3QpIHtcbiAgICBwcm9qZWN0QXJyLnB1c2gocHJvamVjdCk7XG4gICAgcHJvamVjdHNEaXNwbGF5KCk7XG59XG5cbmV4cG9ydCB7IHByb2plY3RzRGlzcGxheSwgcHJvamVjdHNBZGQgfTsiLCJpbXBvcnQgdHJhc2ggZnJvbSAnLi4vYXNzZXRzL2ljb25zL3RyYXNoLnN2Zyc7XG5pbXBvcnQgZWRpdCBmcm9tICcuLi9hc3NldHMvaWNvbnMvZWRpdC5zdmcnO1xuaW1wb3J0IGNyb3NzIGZyb20gJy4uL2Fzc2V0cy9pY29ucy9jcm9zcy1ibGFjay5zdmcnO1xuaW1wb3J0IHsgdG9kb0FyciB9IGZyb20gJy4uL2luZGV4LmpzJztcblxuY29uc3QgbWFpbkNvbnRhaW5lckZvclRvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW4tY29udGFpbmVyXCIpO1xubGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbmZ1bmN0aW9uIHRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCkge1xuICAgIGxldCB0b2RvSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9kb0l0ZW0uY2xhc3NMaXN0LmFkZChcInRvZG9cIik7XG4gICAgdG9kb0l0ZW0uaWQgPSB0b2RvQXJyLmxlbmd0aDtcblxuICAgIHRvZG9JdGVtLnNldEF0dHJpYnV0ZShcImRhdGEtdGl0bGVcIiwgdGl0bGUpO1xuICAgIGlmIChwcm9qZWN0KSB7XG4gICAgICAgIHRvZG9JdGVtLnNldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdFwiLCBwcm9qZWN0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0b2RvSXRlbS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3RcIiwgXCJOb25lXCIpO1xuICAgIH1cbiAgICB0b2RvSXRlbS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByaW9yaXR5XCIsIHByaW9yaXR5KTtcbiAgICB0b2RvSXRlbS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWRhdGVcIiwgZHVlRGF0ZSk7XG4gICAgdG9kb0l0ZW0uc2V0QXR0cmlidXRlKFwiZGF0YS1kZXNjcmlwdGlvblwiLCBkZXNjcmlwdGlvbik7XG5cbiAgICBmdW5jdGlvbiBzaG93RGV0YWlscyhlbGVtZW50KSB7XG4gICAgICAgIGxldCB0b2RvRGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpYWxvZ1wiKTtcbiAgICAgICAgdG9kb0RpYWxvZy5jbGFzc0xpc3QuYWRkKFwidG9kby1kaWFsb2dcIik7XG5cbiAgICAgICAgbGV0IGNsb3NlRGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgbGV0IGNyb3NzSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBjcm9zc0ljb24uc3JjID0gY3Jvc3M7XG4gICAgICAgIGNsb3NlRGlhbG9nLmFwcGVuZENoaWxkKGNyb3NzSWNvbik7XG4gICAgICAgIHRvZG9EaWFsb2cuYXBwZW5kQ2hpbGQoY2xvc2VEaWFsb2cpO1xuXG4gICAgICAgIGxldCB0aXRsZURpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRpdGxlRGlhbG9nLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWRpYWxvZy10aXRsZVwiKTtcbiAgICAgICAgdGl0bGVEaWFsb2cudGV4dENvbnRlbnQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtdGl0bGVcIik7XG4gICAgICAgIHRvZG9EaWFsb2cuYXBwZW5kQ2hpbGQodGl0bGVEaWFsb2cpO1xuXG4gICAgICAgIGxldCB0b2RvRGlhbG9nQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICB0b2RvRGlhbG9nQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWRpYWxvZy1jb250YWluZXJcIilcblxuICAgICAgICBsZXQgcHJvamVjdERpYWxvZ1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcHJvamVjdERpYWxvZ1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJib2xkXCIpO1xuICAgICAgICBwcm9qZWN0RGlhbG9nVGl0bGUudGV4dENvbnRlbnQgPSBcIlByb2plY3QgOlwiO1xuICAgICAgICB0b2RvRGlhbG9nQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3REaWFsb2dUaXRsZSk7XG4gICAgICAgIGxldCBwcm9qZWN0RGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcHJvamVjdERpYWxvZy50ZXh0Q29udGVudCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0XCIpO1xuICAgICAgICB0b2RvRGlhbG9nQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3REaWFsb2cpO1xuXG4gICAgICAgIGxldCBwcmlvcml0eURpYWxvZ1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcHJpb3JpdHlEaWFsb2dUaXRsZS5jbGFzc0xpc3QuYWRkKFwiYm9sZFwiKTtcbiAgICAgICAgcHJpb3JpdHlEaWFsb2dUaXRsZS50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHkgOlwiO1xuICAgICAgICB0b2RvRGlhbG9nQ29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5RGlhbG9nVGl0bGUpO1xuICAgICAgICBsZXQgcHJpb3JpdHlEaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBwcmlvcml0eURpYWxvZy50ZXh0Q29udGVudCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1wcmlvcml0eVwiKTtcbiAgICAgICAgdG9kb0RpYWxvZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eURpYWxvZyk7XG5cbiAgICAgICAgbGV0IGRhdGVEaWFsb2dUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGRhdGVEaWFsb2dUaXRsZS5jbGFzc0xpc3QuYWRkKFwiYm9sZFwiKTtcbiAgICAgICAgZGF0ZURpYWxvZ1RpdGxlLnRleHRDb250ZW50ID0gXCJEdWUgRGF0ZSA6XCI7XG4gICAgICAgIHRvZG9EaWFsb2dDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZURpYWxvZ1RpdGxlKTtcbiAgICAgICAgbGV0IGRhdGVEaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkYXRlRGlhbG9nLnRleHRDb250ZW50ID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWRhdGVcIik7XG4gICAgICAgIHRvZG9EaWFsb2dDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZURpYWxvZyk7XG5cbiAgICAgICAgbGV0IGRldGFpbHNEaWFsb2dUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGRldGFpbHNEaWFsb2dUaXRsZS5jbGFzc0xpc3QuYWRkKFwiYm9sZFwiKTtcbiAgICAgICAgZGV0YWlsc0RpYWxvZ1RpdGxlLnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvbiA6XCI7XG4gICAgICAgIHRvZG9EaWFsb2dDb250YWluZXIuYXBwZW5kQ2hpbGQoZGV0YWlsc0RpYWxvZ1RpdGxlKTtcbiAgICAgICAgbGV0IGRldGFpbHNEaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkZXRhaWxzRGlhbG9nLnRleHRDb250ZW50ID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWRlc2NyaXB0aW9uXCIpO1xuICAgICAgICB0b2RvRGlhbG9nQ29udGFpbmVyLmFwcGVuZENoaWxkKGRldGFpbHNEaWFsb2cpO1xuXG4gICAgICAgIHRvZG9EaWFsb2cuYXBwZW5kQ2hpbGQodG9kb0RpYWxvZ0NvbnRhaW5lcik7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodG9kb0RpYWxvZyk7XG5cbiAgICAgICAgdG9kb0RpYWxvZy5hZGRFdmVudExpc3RlbmVyKCdjYW5jZWwnLCAoKSA9PiB7XG4gICAgICAgICAgICB3aGlsZSAodG9kb0RpYWxvZy5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNsb3NlRGlhbG9nLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VEaWFsb2cucmVtb3ZlQ2hpbGQoY2xvc2VEaWFsb2cuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHdoaWxlICh0b2RvRGlhbG9nQ29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0RpYWxvZ0NvbnRhaW5lci5yZW1vdmVDaGlsZCh0b2RvRGlhbG9nQ29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0b2RvRGlhbG9nLnJlbW92ZUNoaWxkKHRvZG9EaWFsb2cuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0b2RvRGlhbG9nLmNsb3NlKCk7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRvZG9EaWFsb2cpO1xuICAgICAgICAgICAgbWFpbkNvbnRhaW5lckZvclRvZG8uc3R5bGUuZmlsdGVyID0gXCJibHVyKDBweClcIjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY2xvc2VEaWFsb2cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB3aGlsZSAodG9kb0RpYWxvZy5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNsb3NlRGlhbG9nLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VEaWFsb2cucmVtb3ZlQ2hpbGQoY2xvc2VEaWFsb2cuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHdoaWxlICh0b2RvRGlhbG9nQ29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0RpYWxvZ0NvbnRhaW5lci5yZW1vdmVDaGlsZCh0b2RvRGlhbG9nQ29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0b2RvRGlhbG9nLnJlbW92ZUNoaWxkKHRvZG9EaWFsb2cuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0b2RvRGlhbG9nLmNsb3NlKCk7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRvZG9EaWFsb2cpO1xuICAgICAgICAgICAgbWFpbkNvbnRhaW5lckZvclRvZG8uc3R5bGUuZmlsdGVyID0gXCJibHVyKDBweClcIjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdG9kb0RpYWxvZy5zaG93TW9kYWwoKTtcbiAgICAgICAgbWFpbkNvbnRhaW5lckZvclRvZG8uc3R5bGUuZmlsdGVyID0gXCJibHVyKDNweClcIjtcbiAgICB9XG5cbiAgICBsZXQgcHJpb3JpdHlDb2xvciA9IFwiZ3JlZW5cIjtcbiAgICBpZiAocHJpb3JpdHkgPT09IFwiTWVkaXVtXCIpIHtcbiAgICAgICAgcHJpb3JpdHlDb2xvciA9IFwib3JhbmdlXCI7XG4gICAgfSBlbHNlIGlmIChwcmlvcml0eSA9PT0gXCJIaWdoXCIpIHtcbiAgICAgICAgcHJpb3JpdHlDb2xvciA9IFwicmVkXCI7XG4gICAgfVxuICAgIHRvZG9JdGVtLnN0eWxlLmJvcmRlckxlZnQgPSBcInNvbGlkIFwiICsgcHJpb3JpdHlDb2xvciArIFwiIDNweFwiO1xuXG4gICAgbGV0IHRvZG9DaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB0b2RvQ2hlY2tCb3gudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICB0b2RvQ2hlY2tCb3guY2xhc3NMaXN0LmFkZChcInRvZG8tY2hlY2tcIik7XG4gICAgdG9kb0l0ZW0uYXBwZW5kQ2hpbGQodG9kb0NoZWNrQm94KTtcbiAgICB0b2RvQ2hlY2tCb3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICB0b2RvSXRlbS5jbGFzc0xpc3QudG9nZ2xlKFwiZG9uZVwiKTtcbiAgICB9KTtcblxuICAgIGxldCB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvZG9UaXRsZS5jbGFzc0xpc3QuYWRkKFwidG9kby10aXRsZVwiKVxuICAgIHRvZG9UaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xuICAgIHRvZG9JdGVtLmFwcGVuZENoaWxkKHRvZG9UaXRsZSk7XG5cbiAgICBsZXQgdG9kb0RldGFpbHNCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHRvZG9EZXRhaWxzQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWRldGFpbHNcIilcbiAgICB0b2RvRGV0YWlsc0J1dHRvbi50ZXh0Q29udGVudCA9IFwiREVUQUlMU1wiO1xuICAgIHRvZG9JdGVtLmFwcGVuZENoaWxkKHRvZG9EZXRhaWxzQnV0dG9uKTtcbiAgICB0b2RvRGV0YWlsc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgc2hvd0RldGFpbHModG9kb0l0ZW0pO1xuICAgIH0pO1xuXG4gICAgbGV0IHRvZG9EYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b2RvRGF0ZS5jbGFzc0xpc3QuYWRkKFwidG9kby1kYXRlXCIpO1xuICAgIHRvZG9EYXRlLnRleHRDb250ZW50ID0gZHVlRGF0ZTtcbiAgICB0b2RvSXRlbS5hcHBlbmRDaGlsZCh0b2RvRGF0ZSk7XG5cbiAgICBsZXQgdG9kb0VkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGxldCBlZGl0SWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIGVkaXRJY29uLnNyYyA9IGVkaXQ7XG4gICAgdG9kb0VkaXRCdXR0b24uYXBwZW5kQ2hpbGQoZWRpdEljb24pO1xuICAgIHRvZG9JdGVtLmFwcGVuZENoaWxkKHRvZG9FZGl0QnV0dG9uKTtcblxuICAgIGxldCB0b2RvRGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBsZXQgZWRpdFRyYXNoID0gbmV3IEltYWdlKCk7XG4gICAgZWRpdFRyYXNoLnNyYyA9IHRyYXNoO1xuICAgIHRvZG9EZWxldGVCdXR0b24uYXBwZW5kQ2hpbGQoZWRpdFRyYXNoKTtcbiAgICB0b2RvSXRlbS5hcHBlbmRDaGlsZCh0b2RvRGVsZXRlQnV0dG9uKTtcbiAgICB0b2RvRGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBsZXQgaSA9IHRvZG9JdGVtLmlkO1xuICAgICAgICB3aGlsZSAodG9kb0l0ZW0uZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgdG9kb0l0ZW0ucmVtb3ZlQ2hpbGQodG9kb0l0ZW0uZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgdG9kb0l0ZW0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0b2RvSXRlbSk7XG4gICAgICAgIHRvZG9BcnIuc3BsaWNlKGksIDEpO1xuICAgICAgICB3aGlsZSAodG9kb0FycltpXSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coaSk7XG4gICAgICAgICAgICAodG9kb0FycltpXSkuaWQgLT0gMTtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRvZG9JdGVtO1xufVxuXG5mdW5jdGlvbiB0b2RvRGlzcGxheSAocHJvamVjdCkge1xuICAgIHdoaWxlIChjb250ZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBpZiAocHJvamVjdCkge1xuICAgICAgICBmb3IgKGxldCBpIG9mIHRvZG9BcnIpIHtcbiAgICAgICAgICAgIGlmIChpLmdldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdFwiKSA9PT0gcHJvamVjdClcbiAgICAgICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGxldCBpIG9mIHRvZG9BcnIpIHtcbiAgICAgICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIHRvZG9BZGQgKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QpIHtcbiAgICB0b2RvQXJyLnB1c2godG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KSk7XG4gICAgdG9kb0Rpc3BsYXkoKTtcbn1cblxuZXhwb3J0IHsgdG9kbywgdG9kb0Rpc3BsYXksIHRvZG9BZGQgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9