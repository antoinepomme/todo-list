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

.todo-dialog-edit {
    width: 50vw;
    height: 35vh;
    position: absolute;
    top: 50vh;
    left: 50vw;
    margin-left: -25vw;
    margin-top: -17.5vh;
    display: grid;
    grid-template: max-content max-content max-content / 1fr;
    box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.6);
    border: none;
    outline: none;
    border-radius: 10px;
    padding: 1rem;
}

.todo-dialog-edit > button {
    width: fit-content;
    justify-self: end;
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
}`, "",{"version":3,"sources":["webpack://./src/styles/todo.css"],"names":[],"mappings":"AAAA;IACI,0BAA0B;IAC1B,4CAAmD;EACrD;;AAEF;IACI,WAAW;IACX,aAAa;IACb,kBAAkB;IAClB,WAAW;IACX,oBAAoB;IACpB,mBAAmB;IACnB,4BAA4B;AAChC;;AAEA;IACI,uBAAuB;IACvB,8CAA8C;IAC9C,4BAA4B;AAChC;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,cAAc;IACd,yBAAyB;IACzB,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,yBAAyB;IACzB,yDAAqD;IACrD,qBAAqB;AACzB;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,oBAAoB;IACpB,iBAAiB;IACjB,gBAAgB;IAChB,yBAAyB;IACzB,cAAc;IACd,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,yBAAyB;IACzB,YAAY;AAChB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,uBAAuB;AAC3B;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,SAAS;IACT,UAAU;IACV,kBAAkB;IAClB,mBAAmB;IACnB,aAAa;IACb,wDAAwD;IACxD,0CAA0C;IAC1C,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,SAAS;IACT,UAAU;IACV,kBAAkB;IAClB,iBAAiB;IACjB,aAAa;IACb,wDAAwD;IACxD,0CAA0C;IAC1C,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,sBAAsB;AAC1B;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,+DAA+D;AACnE;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;AACpB","sourcesContent":["@font-face {\n    font-family: Poppins-light;\n    src: url(../assets/fonts/poppins/Poppins-Light.ttf);\n  }\n\n.todo {\n    width: 60vw;\n    display: flex;\n    align-self: center;\n    gap: 1.5rem;\n    padding: 0.5rem 2rem;\n    transition: all .2s;\n    font-family: 'Poppins-light';\n}\n\n.todo:hover {\n    transform: scale(1.003);\n    box-shadow: 3px 3px 5px 2px rgba(0, 0, 0, 0.2);\n    transition: all .2s ease-out;\n}\n\n.todo > div {\n    display: flex;\n    align-items: center;\n}\n\n.todo-check {\n    appearance: none;\n    width: 1.2rem;\n    height: 1.2rem;\n    border: solid #3ba395 2px;\n    border-radius: 25%;\n    align-self: center;\n}\n\n.todo-check:hover {\n    cursor: pointer;\n}\n\n.todo-check:checked {\n    background-color: #3ba395;\n    background-image: url(../assets/icons/check-mark.svg);\n    background-size: 1rem;\n}\n\n.todo-title {\n    margin-right: auto;\n    font-size: 1.5rem;\n}\n\n.todo-details {\n    font-family: inherit;\n    font-size: 0.8rem;\n    font-weight: 600;\n    border: solid #3ba395 1px;\n    color: #3ba395;\n    padding: 0 1rem;\n    border-radius: 5px;\n}\n\n.todo-details:hover {\n    background-color: #3ba395;\n    color: white;\n}\n\n.todo-details:focus {\n    border: solid #3ba395 1px;\n}\n\n.todo-date {\n    font-weight: 600;\n    font-size: 0.7rem;\n}\n\n.done {\n    color: grey;\n    filter: grayscale(100%);\n}\n\n.done > .todo-title{\n    text-decoration-line: line-through;\n}\n\n.todo-dialog-edit {\n    width: 50vw;\n    height: 35vh;\n    position: absolute;\n    top: 50vh;\n    left: 50vw;\n    margin-left: -25vw;\n    margin-top: -17.5vh;\n    display: grid;\n    grid-template: max-content max-content max-content / 1fr;\n    box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.6);\n    border: none;\n    outline: none;\n    border-radius: 10px;\n    padding: 1rem;\n}\n\n.todo-dialog-edit > button {\n    width: fit-content;\n    justify-self: end;\n}\n\n.todo-dialog {\n    width: 30vw;\n    height: 26vh;\n    position: absolute;\n    top: 50vh;\n    left: 50vw;\n    margin-left: -15vw;\n    margin-top: -13vh;\n    display: grid;\n    grid-template: max-content max-content max-content / 1fr;\n    box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.6);\n    border: none;\n    outline: none;\n    border-radius: 10px;\n    padding: 1rem;\n}\n\n.todo-dialog > button > img {\n    width: 1.3rem;\n}\n\n.todo-dialog > button {\n    width: fit-content;\n    justify-self: flex-end;\n}\n\n.todo-dialog-title {\n    font-size: 2rem;\n    font-style: italic;\n    margin-bottom: 1rem;\n}\n\n.todo-dialog-container {\n    display: grid;\n    grid-template: repeat(4, max-content) / max-content max-content;\n}\n\n.todo-dialog-container > div {\n    margin-right: 1rem;\n}\n\n.bold {\n    font-weight: 600;\n}"],"sourceRoot":""}]);
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




function todoForm(title, description, dueDate, priority, project, i) {
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
    if (title) {
        submitButton.value = "EDIT TO DO";
    } else {
        submitButton.value = "ADD TO DO";
    }
    formDateContainer.appendChild(submitButton);

    if (title) {
        formTitle.value = title;
        formDescription.value = description;
        formDate.value = dueDate;
        formProjects.value = project;
    }
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (title) {
            (0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.todoEdit)(formTitle.value, formDescription.value, formDate.value, document.querySelector('input[name="todo-form-priority"]:checked').value, formProjects.value, i);
        } else {
            (0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.todoAdd)(formTitle.value, formDescription.value, formDate.value, document.querySelector('input[name="todo-form-priority"]:checked').value, formProjects.value);
        }
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
/* harmony export */   todoDisplay: () => (/* binding */ todoDisplay),
/* harmony export */   todoEdit: () => (/* binding */ todoEdit)
/* harmony export */ });
/* harmony import */ var _assets_icons_trash_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/icons/trash.svg */ "./src/assets/icons/trash.svg");
/* harmony import */ var _assets_icons_edit_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/icons/edit.svg */ "./src/assets/icons/edit.svg");
/* harmony import */ var _assets_icons_cross_black_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/icons/cross-black.svg */ "./src/assets/icons/cross-black.svg");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../index.js */ "./src/index.js");
/* harmony import */ var _forms_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forms.js */ "./src/modules/forms.js");






const mainContainerForTodo = document.getElementById("main-container");
let content = document.getElementById("content");

function todo(title, description, dueDate, priority, project, oldId) {
    let todoItem = document.createElement("div");
    todoItem.classList.add("todo");
    todoItem.id = (oldId) ? oldId : _index_js__WEBPACK_IMPORTED_MODULE_3__.todoArr.length;
    todoItem.setAttribute("data-title", title);
    if (project) {
        todoItem.setAttribute("data-project", project);
    } else {
        todoItem.setAttribute("data-project", "None");
    }
    todoItem.setAttribute("data-priority", priority);
    todoItem.setAttribute("data-date", dueDate);
    todoItem.setAttribute("data-description", description);

    function editTodo(title, description, dueDate, priority, project, i) {
        let todoDialog = document.createElement("dialog");
        todoDialog.classList.add("todo-dialog-edit");

        let closeDialog = document.createElement("button");
        let crossIcon = new Image();
        crossIcon.src = _assets_icons_cross_black_svg__WEBPACK_IMPORTED_MODULE_2__;
        closeDialog.appendChild(crossIcon);
        todoDialog.appendChild(closeDialog);

        let form = (0,_forms_js__WEBPACK_IMPORTED_MODULE_4__.todoForm)(title, description, dueDate, priority, project, i)
        todoDialog.appendChild(form);
        form.addEventListener('submit', () => {
            while (todoDialog.firstChild) {
                todoDialog.removeChild(todoDialog.firstChild);
            }
            todoDialog.close();
            document.body.removeChild(todoDialog);
            mainContainerForTodo.style.filter = "blur(0px)";
        })

        document.body.appendChild(todoDialog);
        todoDialog.addEventListener('cancel', () => {
            while (todoDialog.firstChild) {
                todoDialog.removeChild(todoDialog.firstChild);
            }
            todoDialog.close();
            document.body.removeChild(todoDialog);
            mainContainerForTodo.style.filter = "blur(0px)";
        });

        closeDialog.addEventListener('click', () => {
            while (todoDialog.firstChild) {
                todoDialog.removeChild(todoDialog.firstChild);
            }
            todoDialog.close();
            document.body.removeChild(todoDialog);
            mainContainerForTodo.style.filter = "blur(0px)";
        });

        todoDialog.showModal();
        mainContainerForTodo.style.filter = "blur(3px)";
    }

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
    todoEditButton.addEventListener('click', () => {
        editTodo(todoTitle.textContent, todoItem.getAttribute("data-description"), todoItem.getAttribute("data-date"), "", todoItem.getAttribute("data-project"), todoItem.id);
    });

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

function todoEdit (title, description, dueDate, priority, project, i) {
    _index_js__WEBPACK_IMPORTED_MODULE_3__.todoArr[i] = todo(title, description, dueDate, priority, project, i);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHVGQUF1RixZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sTUFBTSxV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InNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvZm9ybXMuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvdG9kby5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvZm9ybXMuY3NzP2ZjNWEiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/ZmY5NCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL3RvZG8uY3NzPzU0ZWUiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvZm9ybXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnRvZG8tZm9ybSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlOiBtYXgtY29udGVudCAxZnIgbWF4LWNvbnRlbnQgbWF4LWNvbnRlbnQgLyAxZnI7XG4gICAgZ2FwOiAxcmVtO1xufVxuXG4udG9kby1mb3JtLXRpdGxlLFxuLnByb2plY3QtZm9ybS10aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG4udG9kby1mb3JtLXRpdGxlOmZvY3VzLFxuLnByb2plY3QtZm9ybS10aXRsZTpmb2N1cyB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbi50b2RvLWZvcm0tZGVzY3JpcHRpb24ge1xuICAgIHJlc2l6ZTogbm9uZTtcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG4udG9kby1mb3JtLWRlc2NyaXB0aW9uOmZvY3VzIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuLmZvcm0tZGF0ZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZTogbWF4LWNvbnRlbnQgbWF4LWNvbnRlbnQgbWF4LWNvbnRlbnQgLyBtYXgtY29udGVudCBtYXgtY29udGVudCAxZnI7XG4gICAgZ2FwOiAxcmVtO1xufVxuXG4udG9kby1mb3JtLWRhdGUsXG4udG9kby1mb3JtLXByb2plY3RzIHtcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICBwYWRkaW5nOiAwLjNyZW0gMC41cmVtO1xuICAgIGJvcmRlcjogc29saWQgIzNiYTM5NSAxcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGNvbG9yOiAjM2JhMzk1O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi50b2RvLWZvcm0tZGF0ZTpmb2N1cyxcbi50b2RvLWZvcm0tcHJvamVjdHM6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbi50b2RvLWZvcm0tZGF0ZSArIGxhYmVsIHtcbiAgICBncmlkLXJvdzogMiAvIDM7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xufVxuXG4ucmFkaW8tY29udGFpbmVyIHtcbiAgICBncmlkLXJvdzogMiAvIDM7XG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAwLjhyZW07XG59XG5cbi50b2RvLWZvcm0tcHJpb3JpdHkge1xuICAgIHdpZHRoOiAzcmVtO1xufVxuXG4ucmFkaW8gPiBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGxlZnQ6IDEuNXJlbTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICB3aWR0aDogMXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuXG4ucmFkaW8gPiBsYWJlbCB7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBwYWRkaW5nOiAwLjNyZW0gMC41cmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmxvdyB7XG4gICAgYm9yZGVyOiBzb2xpZCBncmVlbiAxcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGNvbG9yOiBncmVlbjtcbn1cblxuLm1lZGl1bSB7XG4gICAgYm9yZGVyOiBzb2xpZCBvcmFuZ2UgMXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBjb2xvcjogb3JhbmdlO1xufVxuXG4uaGlnaCB7XG4gICAgYm9yZGVyOiBzb2xpZCByZWQgMXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBjb2xvcjogcmVkO1xufVxuXG4ubG93OmhvdmVyLFxuLnJhZGlvID4gaW5wdXQ6Y2hlY2tlZCArIC5sb3csXG4ucmFkaW8gPiBpbnB1dFt0eXBlPVwicmFkaW9cIl06aG92ZXIgKyAubG93IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5tZWRpdW06aG92ZXIsXG4ucmFkaW8gPiBpbnB1dDpjaGVja2VkICsgLm1lZGl1bSxcbi5yYWRpbyA+IGlucHV0W3R5cGU9XCJyYWRpb1wiXTpob3ZlciArIC5tZWRpdW0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5oaWdoOmhvdmVyLFxuLnJhZGlvID4gaW5wdXQ6Y2hlY2tlZCArIC5oaWdoLFxuLnJhZGlvID4gaW5wdXRbdHlwZT1cInJhZGlvXCJdOmhvdmVyICsgLmhpZ2gge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5mb3JtLXByb2plY3RzLXRpdGxlIHtcbiAgICBncmlkLXJvdzogMyAvIDQ7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xufVxuXG4udG9kby1mb3JtLXByb2plY3RzIHtcbiAgICBncmlkLXJvdzogMyAvIDQ7XG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xufVxuXG4uc3VibWl0LWJ1dHRvbiB7ICAgIFxuICAgIHBhZGRpbmc6IDAuM3JlbSAwLjVyZW07XG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xuICAgIGdyaWQtY29sdW1uOiAzIC8gNDtcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgYm9yZGVyOiBzb2xpZCAjM2JhMzk1IDFweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgY29sb3I6ICMzYmEzOTU7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zdWJtaXQtYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2JhMzk1O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnByb2plY3QtZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvZm9ybXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLDREQUE0RDtJQUM1RCxTQUFTO0FBQ2I7O0FBRUE7O0lBRUksb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOztBQUVBOztJQUVJLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdGQUFnRjtJQUNoRixTQUFTO0FBQ2I7O0FBRUE7O0lBRUksb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFlBQVk7SUFDWixXQUFXO0lBQ1gsVUFBVTtJQUNWLGVBQWU7QUFDbkI7OztBQUdBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsVUFBVTtBQUNkOztBQUVBOzs7SUFHSSx1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjs7QUFFQTs7O0lBR0ksd0JBQXdCO0lBQ3hCLFlBQVk7QUFDaEI7O0FBRUE7OztJQUdJLHFCQUFxQjtJQUNyQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5QixvQkFBb0I7QUFDeEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnRvZG8tZm9ybSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IG1heC1jb250ZW50IDFmciBtYXgtY29udGVudCBtYXgtY29udGVudCAvIDFmcjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4udG9kby1mb3JtLXRpdGxlLFxcbi5wcm9qZWN0LWZvcm0tdGl0bGUge1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnRvZG8tZm9ybS10aXRsZTpmb2N1cyxcXG4ucHJvamVjdC1mb3JtLXRpdGxlOmZvY3VzIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4udG9kby1mb3JtLWRlc2NyaXB0aW9uIHtcXG4gICAgcmVzaXplOiBub25lO1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi50b2RvLWZvcm0tZGVzY3JpcHRpb246Zm9jdXMge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5mb3JtLWRhdGUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogbWF4LWNvbnRlbnQgbWF4LWNvbnRlbnQgbWF4LWNvbnRlbnQgLyBtYXgtY29udGVudCBtYXgtY29udGVudCAxZnI7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLnRvZG8tZm9ybS1kYXRlLFxcbi50b2RvLWZvcm0tcHJvamVjdHMge1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgcGFkZGluZzogMC4zcmVtIDAuNXJlbTtcXG4gICAgYm9yZGVyOiBzb2xpZCAjM2JhMzk1IDFweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBjb2xvcjogIzNiYTM5NTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLnRvZG8tZm9ybS1kYXRlOmZvY3VzLFxcbi50b2RvLWZvcm0tcHJvamVjdHM6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4udG9kby1mb3JtLWRhdGUgKyBsYWJlbCB7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbn1cXG5cXG4ucmFkaW8tY29udGFpbmVyIHtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMC44cmVtO1xcbn1cXG5cXG4udG9kby1mb3JtLXByaW9yaXR5IHtcXG4gICAgd2lkdGg6IDNyZW07XFxufVxcblxcbi5yYWRpbyA+IGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGxlZnQ6IDEuNXJlbTtcXG4gICAgaGVpZ2h0OiAxcHg7XFxuICAgIHdpZHRoOiAxcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuXFxuLnJhZGlvID4gbGFiZWwge1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgcGFkZGluZzogMC4zcmVtIDAuNXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubG93IHtcXG4gICAgYm9yZGVyOiBzb2xpZCBncmVlbiAxcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4ubWVkaXVtIHtcXG4gICAgYm9yZGVyOiBzb2xpZCBvcmFuZ2UgMXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGNvbG9yOiBvcmFuZ2U7XFxufVxcblxcbi5oaWdoIHtcXG4gICAgYm9yZGVyOiBzb2xpZCByZWQgMXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGNvbG9yOiByZWQ7XFxufVxcblxcbi5sb3c6aG92ZXIsXFxuLnJhZGlvID4gaW5wdXQ6Y2hlY2tlZCArIC5sb3csXFxuLnJhZGlvID4gaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXTpob3ZlciArIC5sb3cge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubWVkaXVtOmhvdmVyLFxcbi5yYWRpbyA+IGlucHV0OmNoZWNrZWQgKyAubWVkaXVtLFxcbi5yYWRpbyA+IGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl06aG92ZXIgKyAubWVkaXVtIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5oaWdoOmhvdmVyLFxcbi5yYWRpbyA+IGlucHV0OmNoZWNrZWQgKyAuaGlnaCxcXG4ucmFkaW8gPiBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdOmhvdmVyICsgLmhpZ2gge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmZvcm0tcHJvamVjdHMtdGl0bGUge1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG59XFxuXFxuLnRvZG8tZm9ybS1wcm9qZWN0cyB7XFxuICAgIGdyaWQtcm93OiAzIC8gNDtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbn1cXG5cXG4uc3VibWl0LWJ1dHRvbiB7ICAgIFxcbiAgICBwYWRkaW5nOiAwLjNyZW0gMC41cmVtO1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxuICAgIGdyaWQtY29sdW1uOiAzIC8gNDtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgYm9yZGVyOiBzb2xpZCAjM2JhMzk1IDFweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBjb2xvcjogIzNiYTM5NTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc3VibWl0LWJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYmEzOTU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnByb2plY3QtZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ZvbnRzL3BvcHBpbnMvUG9wcGlucy1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zLXJlZ3VsYXI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuXG4qIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xufVxuXG5ib2R5IHtcbiAgICBmb250LWZhbWlseTogUG9wcGlucy1yZWd1bGFyLCBzYW5zLXNlcmlmO1xufSAgIFxuXG4ubWFpbi1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZTogbWF4LWNvbnRlbnQgMWZyIC8gMWZyO1xuICAgIC8qZmlsdGVyOiBibHVyKDhweCk7Ki9cbn1cblxuLmhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOSwgMTA3LCAyKTtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMnJlbTtcbn1cblxubmF2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmltZyB7XG4gICAgd2lkdGg6IDEuOHJlbTtcbn1cblxudWwge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmJ1dHRvbjpmb2N1cyB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbi5oZWFkZXIgPiBuYXYgPiB1bCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDFyZW07XG59XG5cbi5sZWZ0ID4gdWwgPiBsaSwgXG4ucmlnaHQgPiB1bCA+IGxpIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6IGluaGVyaXQ7XG59XG5cbi51c2VyID4gaW1nIHtcbiAgICB3aWR0aDogMi4ycmVtO1xufVxuXG4uc2VhcmNoIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM1LCAxNzUsIDEyMCk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAxLjZyZW07XG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XG59XG5cbi5zZWFyY2g6Zm9jdXMge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4uY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGU6IDFmciAvIG1heC1jb250ZW50IDFmcjtcbiAgICBwYWRkaW5nLXRvcDogM3JlbTtcbn1cblxuLnNpZGViYXIge1xuICAgIHBhZGRpbmc6IDAgMnJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5vcHRpb25zIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xufVxuXG4ub3B0aW9ucyA+IHVsLFxuLnByb2plY3RzID4gdWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDAuOHJlbTtcbn1cblxuLm9wdGlvbnMgPiB1bCA+IGxpID4gYnV0dG9uLFxuLnByb2plY3RzID4gdWwgPiBsaSA+IGJ1dHRvbiB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIgLyBtYXgtY29udGVudCAxZnI7XG4gICAgZ2FwOiAwLjdyZW07XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbnNwYW4ge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuaDQge1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuXG4ucHJvamVjdHMge1xuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xufVxuXG4uY29udGVudCB7XG4gICAgcGFkZGluZzogMCAxMHZ3O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDFyZW07XG59XG5cbiNkaWFsb2dbb3Blbl0ge1xuICAgIHdpZHRoOiA1MHZ3O1xuICAgIGhlaWdodDogNTB2aDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MHZoO1xuICAgIGxlZnQ6IDUwdnc7XG4gICAgbWFyZ2luLWxlZnQ6IC0yNXZ3O1xuICAgIG1hcmdpbi10b3A6IC0yNXZoO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZTogbWF4LWNvbnRlbnQgMWZyIC8gMWZyO1xuICAgIGJveC1zaGFkb3c6IDAgMnJlbSA0cmVtIHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uZGlhbG9nLWhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOSwgMTA3LCAyKTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMDtcbn1cblxuLmRpYWxvZy1oZWFkZXIgPiBidXR0b24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDAuN3JlbTtcbiAgICByaWdodDogMC41cmVtO1xufVxuXG4uZGlhbG9nLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIgLyBtYXgtY29udGVudCAxZnI7XG59XG5cbi5kaWFsb2ctc2lkZWJhciB7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cmVtO1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgIGJvcmRlci1yaWdodDogc29saWQgcmdiKDE1NiwgMTUwLCAxNTApIDFweDtcbn1cblxuLmRpYWxvZy1zaWRlYmFyID4gdWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDFyZW07XG59XG5cbi5kaWFsb2ctY29udGVudCB7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBkaXNwbGF5OiBncmlkO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSw0QkFBNEI7RUFDNUIsNENBQXFEO0FBQ3ZEOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FBRUE7SUFDSSx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYixvQ0FBb0M7SUFDcEMscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixrQ0FBa0M7SUFDbEMsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBOztJQUVJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osY0FBYztJQUNkLG9CQUFvQjtJQUNwQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixvQ0FBb0M7SUFDcEMsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixXQUFXO0FBQ2Y7O0FBRUE7O0lBRUksYUFBYTtJQUNiLG9DQUFvQztJQUNwQyxXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixvQ0FBb0M7SUFDcEMsMENBQTBDO0lBQzFDLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQiwwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsYUFBYTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zLXJlZ3VsYXI7XFxuICBzcmM6IHVybCguLi9hc3NldHMvZm9udHMvcG9wcGlucy9Qb3BwaW5zLVJlZ3VsYXIudHRmKTtcXG59XFxuXFxuKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zLXJlZ3VsYXIsIHNhbnMtc2VyaWY7XFxufSAgIFxcblxcbi5tYWluLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogbWF4LWNvbnRlbnQgMWZyIC8gMWZyO1xcbiAgICAvKmZpbHRlcjogYmx1cig4cHgpOyovXFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTksIDEwNywgMik7XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAycmVtO1xcbn1cXG5cXG5uYXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaW1nIHtcXG4gICAgd2lkdGg6IDEuOHJlbTtcXG59XFxuXFxudWwge1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5idXR0b246Zm9jdXMge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5oZWFkZXIgPiBuYXYgPiB1bCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLmxlZnQgPiB1bCA+IGxpLCBcXG4ucmlnaHQgPiB1bCA+IGxpIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4udXNlciA+IGltZyB7XFxuICAgIHdpZHRoOiAyLjJyZW07XFxufVxcblxcbi5zZWFyY2gge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM1LCAxNzUsIDEyMCk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGhlaWdodDogMS42cmVtO1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxufVxcblxcbi5zZWFyY2g6Zm9jdXMge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIgLyBtYXgtY29udGVudCAxZnI7XFxuICAgIHBhZGRpbmctdG9wOiAzcmVtO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICAgIHBhZGRpbmc6IDAgMnJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm9wdGlvbnMge1xcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcbn1cXG5cXG4ub3B0aW9ucyA+IHVsLFxcbi5wcm9qZWN0cyA+IHVsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAwLjhyZW07XFxufVxcblxcbi5vcHRpb25zID4gdWwgPiBsaSA+IGJ1dHRvbixcXG4ucHJvamVjdHMgPiB1bCA+IGxpID4gYnV0dG9uIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIC8gbWF4LWNvbnRlbnQgMWZyO1xcbiAgICBnYXA6IDAuN3JlbTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbnNwYW4ge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbmg0IHtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbi5wcm9qZWN0cyB7XFxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIHBhZGRpbmc6IDAgMTB2dztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4jZGlhbG9nW29wZW5dIHtcXG4gICAgd2lkdGg6IDUwdnc7XFxuICAgIGhlaWdodDogNTB2aDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwdmg7XFxuICAgIGxlZnQ6IDUwdnc7XFxuICAgIG1hcmdpbi1sZWZ0OiAtMjV2dztcXG4gICAgbWFyZ2luLXRvcDogLTI1dmg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IG1heC1jb250ZW50IDFmciAvIDFmcjtcXG4gICAgYm94LXNoYWRvdzogMCAycmVtIDRyZW0gcmdiYSgwLCAwLCAwLCAwLjYpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5kaWFsb2ctaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOSwgMTA3LCAyKTtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgcGFkZGluZzogMC41cmVtIDA7XFxufVxcblxcbi5kaWFsb2ctaGVhZGVyID4gYnV0dG9uIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDAuN3JlbTtcXG4gICAgcmlnaHQ6IDAuNXJlbTtcXG59XFxuXFxuLmRpYWxvZy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIgLyBtYXgtY29udGVudCAxZnI7XFxufVxcblxcbi5kaWFsb2ctc2lkZWJhciB7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIHBhZGRpbmctcmlnaHQ6IDVyZW07XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIHJnYigxNTYsIDE1MCwgMTUwKSAxcHg7XFxufVxcblxcbi5kaWFsb2ctc2lkZWJhciA+IHVsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uZGlhbG9nLWNvbnRlbnQge1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvZm9udHMvcG9wcGlucy9Qb3BwaW5zLUxpZ2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pY29ucy9jaGVjay1tYXJrLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zLWxpZ2h0O1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICB9XG5cbi50b2RvIHtcbiAgICB3aWR0aDogNjB2dztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBnYXA6IDEuNXJlbTtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMnJlbTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucy1saWdodCc7XG59XG5cbi50b2RvOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDAzKTtcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDVweCAycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1vdXQ7XG59XG5cbi50b2RvID4gZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50b2RvLWNoZWNrIHtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIHdpZHRoOiAxLjJyZW07XG4gICAgaGVpZ2h0OiAxLjJyZW07XG4gICAgYm9yZGVyOiBzb2xpZCAjM2JhMzk1IDJweDtcbiAgICBib3JkZXItcmFkaXVzOiAyNSU7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4udG9kby1jaGVjazpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udG9kby1jaGVjazpjaGVja2VkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2JhMzk1O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDFyZW07XG59XG5cbi50b2RvLXRpdGxlIHtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi50b2RvLWRldGFpbHMge1xuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgYm9yZGVyOiBzb2xpZCAjM2JhMzk1IDFweDtcbiAgICBjb2xvcjogIzNiYTM5NTtcbiAgICBwYWRkaW5nOiAwIDFyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4udG9kby1kZXRhaWxzOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2JhMzk1O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRvZG8tZGV0YWlsczpmb2N1cyB7XG4gICAgYm9yZGVyOiBzb2xpZCAjM2JhMzk1IDFweDtcbn1cblxuLnRvZG8tZGF0ZSB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDAuN3JlbTtcbn1cblxuLmRvbmUge1xuICAgIGNvbG9yOiBncmV5O1xuICAgIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xufVxuXG4uZG9uZSA+IC50b2RvLXRpdGxle1xuICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiBsaW5lLXRocm91Z2g7XG59XG5cbi50b2RvLWRpYWxvZy1lZGl0IHtcbiAgICB3aWR0aDogNTB2dztcbiAgICBoZWlnaHQ6IDM1dmg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTB2aDtcbiAgICBsZWZ0OiA1MHZ3O1xuICAgIG1hcmdpbi1sZWZ0OiAtMjV2dztcbiAgICBtYXJnaW4tdG9wOiAtMTcuNXZoO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZTogbWF4LWNvbnRlbnQgbWF4LWNvbnRlbnQgbWF4LWNvbnRlbnQgLyAxZnI7XG4gICAgYm94LXNoYWRvdzogMCAycmVtIDRyZW0gcmdiYSgwLCAwLCAwLCAwLjYpO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgcGFkZGluZzogMXJlbTtcbn1cblxuLnRvZG8tZGlhbG9nLWVkaXQgPiBidXR0b24ge1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcbn1cblxuLnRvZG8tZGlhbG9nIHtcbiAgICB3aWR0aDogMzB2dztcbiAgICBoZWlnaHQ6IDI2dmg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTB2aDtcbiAgICBsZWZ0OiA1MHZ3O1xuICAgIG1hcmdpbi1sZWZ0OiAtMTV2dztcbiAgICBtYXJnaW4tdG9wOiAtMTN2aDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGU6IG1heC1jb250ZW50IG1heC1jb250ZW50IG1heC1jb250ZW50IC8gMWZyO1xuICAgIGJveC1zaGFkb3c6IDAgMnJlbSA0cmVtIHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmc6IDFyZW07XG59XG5cbi50b2RvLWRpYWxvZyA+IGJ1dHRvbiA+IGltZyB7XG4gICAgd2lkdGg6IDEuM3JlbTtcbn1cblxuLnRvZG8tZGlhbG9nID4gYnV0dG9uIHtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcbn1cblxuLnRvZG8tZGlhbG9nLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi50b2RvLWRpYWxvZy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDQsIG1heC1jb250ZW50KSAvIG1heC1jb250ZW50IG1heC1jb250ZW50O1xufVxuXG4udG9kby1kaWFsb2ctY29udGFpbmVyID4gZGl2IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG59XG5cbi5ib2xkIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy90b2RvLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDBCQUEwQjtJQUMxQiw0Q0FBbUQ7RUFDckQ7O0FBRUY7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsOENBQThDO0lBQzlDLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIseURBQXFEO0lBQ3JELHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsY0FBYztJQUNkLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYix3REFBd0Q7SUFDeEQsMENBQTBDO0lBQzFDLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYix3REFBd0Q7SUFDeEQsMENBQTBDO0lBQzFDLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLCtEQUErRDtBQUNuRTs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnMtbGlnaHQ7XFxuICAgIHNyYzogdXJsKC4uL2Fzc2V0cy9mb250cy9wb3BwaW5zL1BvcHBpbnMtTGlnaHQudHRmKTtcXG4gIH1cXG5cXG4udG9kbyB7XFxuICAgIHdpZHRoOiA2MHZ3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGdhcDogMS41cmVtO1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMnJlbTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycztcXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zLWxpZ2h0JztcXG59XFxuXFxuLnRvZG86aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDAzKTtcXG4gICAgYm94LXNoYWRvdzogM3B4IDNweCA1cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLW91dDtcXG59XFxuXFxuLnRvZG8gPiBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udG9kby1jaGVjayB7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIHdpZHRoOiAxLjJyZW07XFxuICAgIGhlaWdodDogMS4ycmVtO1xcbiAgICBib3JkZXI6IHNvbGlkICMzYmEzOTUgMnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyNSU7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnRvZG8tY2hlY2s6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b2RvLWNoZWNrOmNoZWNrZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2JhMzk1O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vYXNzZXRzL2ljb25zL2NoZWNrLW1hcmsuc3ZnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxcmVtO1xcbn1cXG5cXG4udG9kby10aXRsZSB7XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi50b2RvLWRldGFpbHMge1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGJvcmRlcjogc29saWQgIzNiYTM5NSAxcHg7XFxuICAgIGNvbG9yOiAjM2JhMzk1O1xcbiAgICBwYWRkaW5nOiAwIDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnRvZG8tZGV0YWlsczpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYmEzOTU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnRvZG8tZGV0YWlsczpmb2N1cyB7XFxuICAgIGJvcmRlcjogc29saWQgIzNiYTM5NSAxcHg7XFxufVxcblxcbi50b2RvLWRhdGUge1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXNpemU6IDAuN3JlbTtcXG59XFxuXFxuLmRvbmUge1xcbiAgICBjb2xvcjogZ3JleTtcXG4gICAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XFxufVxcblxcbi5kb25lID4gLnRvZG8tdGl0bGV7XFxuICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi50b2RvLWRpYWxvZy1lZGl0IHtcXG4gICAgd2lkdGg6IDUwdnc7XFxuICAgIGhlaWdodDogMzV2aDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwdmg7XFxuICAgIGxlZnQ6IDUwdnc7XFxuICAgIG1hcmdpbi1sZWZ0OiAtMjV2dztcXG4gICAgbWFyZ2luLXRvcDogLTE3LjV2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogbWF4LWNvbnRlbnQgbWF4LWNvbnRlbnQgbWF4LWNvbnRlbnQgLyAxZnI7XFxuICAgIGJveC1zaGFkb3c6IDAgMnJlbSA0cmVtIHJnYmEoMCwgMCwgMCwgMC42KTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4udG9kby1kaWFsb2ctZWRpdCA+IGJ1dHRvbiB7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbi50b2RvLWRpYWxvZyB7XFxuICAgIHdpZHRoOiAzMHZ3O1xcbiAgICBoZWlnaHQ6IDI2dmg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MHZoO1xcbiAgICBsZWZ0OiA1MHZ3O1xcbiAgICBtYXJnaW4tbGVmdDogLTE1dnc7XFxuICAgIG1hcmdpbi10b3A6IC0xM3ZoO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiBtYXgtY29udGVudCBtYXgtY29udGVudCBtYXgtY29udGVudCAvIDFmcjtcXG4gICAgYm94LXNoYWRvdzogMCAycmVtIDRyZW0gcmdiYSgwLCAwLCAwLCAwLjYpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi50b2RvLWRpYWxvZyA+IGJ1dHRvbiA+IGltZyB7XFxuICAgIHdpZHRoOiAxLjNyZW07XFxufVxcblxcbi50b2RvLWRpYWxvZyA+IGJ1dHRvbiB7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXG59XFxuXFxuLnRvZG8tZGlhbG9nLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi50b2RvLWRpYWxvZy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiByZXBlYXQoNCwgbWF4LWNvbnRlbnQpIC8gbWF4LWNvbnRlbnQgbWF4LWNvbnRlbnQ7XFxufVxcblxcbi50b2RvLWRpYWxvZy1jb250YWluZXIgPiBkaXYge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcblxcbi5ib2xkIHtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Zvcm1zLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZm9ybXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RvZG8uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90b2RvLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlcy9zdHlsZS5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy90b2RvLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL2Zvcm1zLmNzcyc7XG5pbXBvcnQgeyBmb3JtYXQsIGNvbXBhcmVBc2MgfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgeyB0b2RvRGlzcGxheSwgdG9kb0FkZCB9IGZyb20gJy4vbW9kdWxlcy90b2RvLmpzJztcbmltcG9ydCB7IHRvZG9Gb3JtLCBwcm9qZWN0Rm9ybSB9IGZyb20gJy4vbW9kdWxlcy9mb3Jtcy5qcyc7XG5pbXBvcnQgeyBwcm9qZWN0c0Rpc3BsYXksIHByb2plY3RzQWRkIH0gZnJvbSAnLi9tb2R1bGVzL3Byb2plY3RzLmpzJztcblxuLy9tYWluIGRpYWxvZ1xuY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbi1jb250YWluZXJcIik7XG5jb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFwiKTtcbmxldCBkaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpYWxvZ1wiKTtcbmNvbnN0IGRpYWxvZ0NvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpYWxvZy1jb250ZW50XCIpO1xuY29uc3QgdG9kb0Zvcm1CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tZm9ybS1idXR0b25cIik7XG5jb25zdCBwcm9qZWN0Rm9ybUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1mb3JtLWJ1dHRvblwiKTtcbmNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaWFsb2ctY2xvc2VcIik7XG5cbmV4cG9ydCBsZXQgcHJvamVjdEFyciA9IFtdO1xuZXhwb3J0IGxldCB0b2RvQXJyID0gW107XG5cbnRvZG9Gb3JtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHdoaWxlIChkaWFsb2dDb250ZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgZGlhbG9nQ29udGVudC5yZW1vdmVDaGlsZChkaWFsb2dDb250ZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBkaWFsb2dDb250ZW50LmFwcGVuZENoaWxkKHRvZG9Gb3JtKCkpO1xufSk7XG5wcm9qZWN0Rm9ybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB3aGlsZSAoZGlhbG9nQ29udGVudC5maXJzdENoaWxkKSB7XG4gICAgICAgIGRpYWxvZ0NvbnRlbnQucmVtb3ZlQ2hpbGQoZGlhbG9nQ29udGVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgZGlhbG9nQ29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0Rm9ybSgpKTtcbn0pO1xuXG5cbmFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBkaWFsb2cuc2hvd01vZGFsKCk7XG4gICAgbWFpbkNvbnRhaW5lci5zdHlsZS5maWx0ZXIgPSBcImJsdXIoM3B4KVwiO1xuICAgIGRpYWxvZ0NvbnRlbnQuYXBwZW5kQ2hpbGQodG9kb0Zvcm0oKSk7XG59KTtcbmNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGRpYWxvZy5jbG9zZSgpO1xuICAgIG1haW5Db250YWluZXIuc3R5bGUuZmlsdGVyID0gXCJibHVyKDBweClcIjtcbiAgICB3aGlsZSAoZGlhbG9nQ29udGVudC5maXJzdENoaWxkKSB7XG4gICAgICAgIGRpYWxvZ0NvbnRlbnQucmVtb3ZlQ2hpbGQoZGlhbG9nQ29udGVudC5maXJzdENoaWxkKTtcbiAgICB9XG59KTtcbmRpYWxvZy5hZGRFdmVudExpc3RlbmVyKCdjYW5jZWwnLCAoKSA9PiB7XG4gICAgbWFpbkNvbnRhaW5lci5zdHlsZS5maWx0ZXIgPSBcImJsdXIoMHB4KVwiO1xuICAgIHdoaWxlIChkaWFsb2dDb250ZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgZGlhbG9nQ29udGVudC5yZW1vdmVDaGlsZChkaWFsb2dDb250ZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbn0pO1xuXG5cbmNvbnN0IGFsbEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWxsLWJ1dHRvblwiKTtcbmFsbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB0b2RvRGlzcGxheSgpO1xufSk7XG5cblxuLy9cblxuXG4vL2V4YW1wbGVzXG4odG9kb0FkZChcImFiY1wiLCBcIjFcIiwgXCJEQVRFVEVTVFwiLCBcIkhpZ2hcIiwgXCJ0ZXN0XCIpKTtcbih0b2RvQWRkKFwiYlwiLCBcIjJcIiwgXCJEQVRFVEVTVFwiLCBcIk1lZGl1bVwiKSk7XG4odG9kb0FkZChcImNcIiwgXCIzXCIsIFwiREFURVRFU1RcIiwgXCJIaWdoXCIpKTtcbih0b2RvQWRkKFwiZFwiLCBcIjRcIiwgXCJEQVRFVEVTVFwiLCBcIkxvd1wiLCBcInRlc3RcIikpO1xuXG5wcm9qZWN0c0FkZChcInRlc3RcIik7XG5wcm9qZWN0c0FkZChcInRlc3QyXCIpO1xucHJvamVjdHNBZGQoXCJ0ZXN0M1wiKTsiLCJpbXBvcnQgeyB0b2RvQWRkLCB0b2RvRWRpdCB9IGZyb20gJy4vdG9kby5qcyc7XG5pbXBvcnQgeyBwcm9qZWN0c0Rpc3BsYXksIHByb2plY3RzQWRkIH0gZnJvbSAnLi9wcm9qZWN0cy5qcyc7XG5pbXBvcnQgeyBwcm9qZWN0QXJyIH0gZnJvbSAnLi4vaW5kZXguanMnO1xuXG5mdW5jdGlvbiB0b2RvRm9ybSh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0LCBpKSB7XG4gICAgbGV0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW4tY29udGFpbmVyXCIpO1xuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICAgIGxldCBkaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpYWxvZ1wiKTtcbiAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIGZvcm0uY2xhc3NMaXN0LmFkZChcInRvZG8tZm9ybVwiKTtcbiAgICBmb3JtLmF1dG9jb21wbGV0ZSA9IFwib2ZmXCI7XG5cbiAgICBsZXQgZm9ybVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGZvcm1UaXRsZS50eXBlID0gXCJ0ZXh0XCI7XG4gICAgZm9ybVRpdGxlLm5hbWUgPSBcInRvZG8tZm9ybS10aXRsZVwiO1xuICAgIGZvcm1UaXRsZS5pZCA9IFwidG9kby1mb3JtLXRpdGxlXCI7XG4gICAgZm9ybVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWZvcm0tdGl0bGVcIik7XG4gICAgZm9ybVRpdGxlLnBsYWNlaG9sZGVyID0gXCJUaXRsZTogUGF5IGJpbGxzXCJcbiAgICBmb3JtVGl0bGUucmVxdWlyZWQgPSB0cnVlO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZm9ybVRpdGxlKTtcblxuICAgIGxldCBmb3JtRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgZm9ybURlc2NyaXB0aW9uLm5hbWUgPSBcInRvZG8tZm9ybS1kZXNjcmlwdGlvblwiO1xuICAgIGZvcm1EZXNjcmlwdGlvbi5pZCA9IFwidG9kby1mb3JtLWRlc2NyaXB0aW9uXCI7XG4gICAgZm9ybURlc2NyaXB0aW9uLmNsYXNzTGlzdCA9IFwidG9kby1mb3JtLWRlc2NyaXB0aW9uXCI7XG4gICAgZm9ybURlc2NyaXB0aW9uLnBsYWNlaG9sZGVyID0gXCJEZXRhaWxzOiBlZyBpbnRlcm5ldCwgcGhvbmUsIHJlbnQuXCI7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChmb3JtRGVzY3JpcHRpb24pO1xuXG4gICAgbGV0IGZvcm1EYXRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb3JtRGF0ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZm9ybS1kYXRlLWNvbnRhaW5lclwiKTtcbiAgICBsZXQgZm9ybURhdGVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBmb3JtRGF0ZVRpdGxlLnRleHRDb250ZW50ID0gXCJEdWUgRGF0ZSA6XCI7XG4gICAgZm9ybURhdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybURhdGVUaXRsZSk7XG4gICAgbGV0IGZvcm1EYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXG4gICAgZm9ybURhdGUudHlwZSA9IFwiZGF0ZVwiO1xuICAgIGZvcm1EYXRlLm5hbWUgPSBcInRvZG8tZm9ybS1kYXRlXCI7XG4gICAgZm9ybURhdGUuaWQgPSBcInRvZG8tZm9ybS1kYXRlXCI7XG4gICAgZm9ybURhdGUuY2xhc3NMaXN0ID0gXCJ0b2RvLWZvcm0tZGF0ZVwiO1xuICAgIGZvcm1EYXRlLnJlcXVpcmVkID0gdHJ1ZTtcbiAgICBmb3JtRGF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtRGF0ZSk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChmb3JtRGF0ZUNvbnRhaW5lcik7XG5cbiAgICBsZXQgZm9ybVByaW9yaXR5VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgZm9ybVByaW9yaXR5VGl0bGUudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5IDpcIjtcbiAgICBmb3JtRGF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtUHJpb3JpdHlUaXRsZSk7XG4gICAgbGV0IGZvcm1SYWRpb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9ybVJhZGlvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJyYWRpby1jb250YWluZXJcIik7XG4gICAgbGV0IGZvcm1Qcmlvcml0eUxvd0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9ybVByaW9yaXR5TG93Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJyYWRpb1wiKTtcbiAgICBsZXQgZm9ybVByaW9yaXR5TWVkaXVtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb3JtUHJpb3JpdHlNZWRpdW1Db250YWluZXIuY2xhc3NMaXN0LmFkZChcInJhZGlvXCIpO1xuICAgIGxldCBmb3JtUHJpb3JpdHlIaWdoQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb3JtUHJpb3JpdHlIaWdoQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJyYWRpb1wiKTtcbiAgICBsZXQgZm9ybVByaW9yaXR5TG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGZvcm1Qcmlvcml0eUxvdy50eXBlID0gXCJyYWRpb1wiO1xuICAgIGZvcm1Qcmlvcml0eUxvdy5uYW1lID0gXCJ0b2RvLWZvcm0tcHJpb3JpdHlcIjtcbiAgICBmb3JtUHJpb3JpdHlMb3cuaWQgPSBcInRvZG8tZm9ybS1wcmlvcml0eS1sb3dcIjtcbiAgICBmb3JtUHJpb3JpdHlMb3cuY2xhc3NMaXN0ID0gXCJ0b2RvLWZvcm0tcHJpb3JpdHlcIjtcbiAgICBmb3JtUHJpb3JpdHlMb3cudmFsdWUgPSBcIkxvd1wiO1xuICAgIGZvcm1Qcmlvcml0eUxvdy5yZXF1aXJlZCA9IHRydWU7XG4gICAgbGV0IGZvcm1Qcmlvcml0eUxvd0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGZvcm1Qcmlvcml0eUxvd0xhYmVsLmNsYXNzTGlzdC5hZGQoXCJsb3dcIik7XG4gICAgZm9ybVByaW9yaXR5TG93TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidG9kby1mb3JtLXByaW9yaXR5LWxvd1wiKTtcbiAgICBmb3JtUHJpb3JpdHlMb3dMYWJlbC50ZXh0Q29udGVudCA9IFwiTE9XXCI7XG4gICAgbGV0IGZvcm1Qcmlvcml0eU1lZGl1bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBmb3JtUHJpb3JpdHlNZWRpdW0udHlwZSA9IFwicmFkaW9cIjtcbiAgICBmb3JtUHJpb3JpdHlNZWRpdW0ubmFtZSA9IFwidG9kby1mb3JtLXByaW9yaXR5XCI7XG4gICAgZm9ybVByaW9yaXR5TWVkaXVtLmlkID0gXCJ0b2RvLWZvcm0tcHJpb3JpdHktbWVkaXVtXCI7XG4gICAgZm9ybVByaW9yaXR5TWVkaXVtLmNsYXNzTGlzdCA9IFwidG9kby1mb3JtLXByaW9yaXR5XCI7XG4gICAgZm9ybVByaW9yaXR5TWVkaXVtLnZhbHVlID0gXCJNZWRpdW1cIjtcbiAgICBmb3JtUHJpb3JpdHlNZWRpdW0ucmVxdWlyZWQgPSB0cnVlO1xuICAgIGxldCBmb3JtUHJpb3JpdHlNZWRpdW1MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBmb3JtUHJpb3JpdHlNZWRpdW1MYWJlbC5jbGFzc0xpc3QuYWRkKFwibWVkaXVtXCIpO1xuICAgIGZvcm1Qcmlvcml0eU1lZGl1bUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRvZG8tZm9ybS1wcmlvcml0eS1tZWRpdW1cIik7XG4gICAgZm9ybVByaW9yaXR5TWVkaXVtTGFiZWwudGV4dENvbnRlbnQgPSBcIk1FRElVTVwiO1xuICAgIGxldCBmb3JtUHJpb3JpdHlIaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGZvcm1Qcmlvcml0eUhpZ2gudHlwZSA9IFwicmFkaW9cIjtcbiAgICBmb3JtUHJpb3JpdHlIaWdoLm5hbWUgPSBcInRvZG8tZm9ybS1wcmlvcml0eVwiO1xuICAgIGZvcm1Qcmlvcml0eUhpZ2guaWQgPSBcInRvZG8tZm9ybS1wcmlvcml0eS1oaWdoXCI7XG4gICAgZm9ybVByaW9yaXR5SGlnaC5jbGFzc0xpc3QgPSBcInRvZG8tZm9ybS1wcmlvcml0eVwiO1xuICAgIGZvcm1Qcmlvcml0eUhpZ2gudmFsdWUgPSBcIkhpZ2hcIjtcbiAgICBmb3JtUHJpb3JpdHlIaWdoLnJlcXVpcmVkID0gdHJ1ZTtcbiAgICBsZXQgZm9ybVByaW9yaXR5SGlnaExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGZvcm1Qcmlvcml0eUhpZ2hMYWJlbC5jbGFzc0xpc3QuYWRkKFwiaGlnaFwiKTtcbiAgICBmb3JtUHJpb3JpdHlIaWdoTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidG9kby1mb3JtLXByaW9yaXR5LWhpZ2hcIik7XG4gICAgZm9ybVByaW9yaXR5SGlnaExhYmVsLnRleHRDb250ZW50ID0gXCJISUdIXCI7XG4gICAgZm9ybVByaW9yaXR5TG93Q29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1Qcmlvcml0eUxvdyk7XG4gICAgZm9ybVByaW9yaXR5TG93Q29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1Qcmlvcml0eUxvd0xhYmVsKTtcbiAgICBmb3JtUHJpb3JpdHlNZWRpdW1Db250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybVByaW9yaXR5TWVkaXVtKTtcbiAgICBmb3JtUHJpb3JpdHlNZWRpdW1Db250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybVByaW9yaXR5TWVkaXVtTGFiZWwpO1xuICAgIGZvcm1Qcmlvcml0eUhpZ2hDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybVByaW9yaXR5SGlnaCk7XG4gICAgZm9ybVByaW9yaXR5SGlnaENvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtUHJpb3JpdHlIaWdoTGFiZWwpO1xuICAgIGZvcm1SYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtUHJpb3JpdHlMb3dDb250YWluZXIpO1xuICAgIGZvcm1SYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtUHJpb3JpdHlNZWRpdW1Db250YWluZXIpO1xuICAgIGZvcm1SYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtUHJpb3JpdHlIaWdoQ29udGFpbmVyKTtcbiAgICBmb3JtRGF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtUmFkaW9Db250YWluZXIpO1xuXG4gICAgbGV0IGZvcm1Qcm9qZWN0c1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGZvcm1Qcm9qZWN0c1RpdGxlLnRleHRDb250ZW50ID0gXCJQcm9qZWN0IDpcIjtcbiAgICBmb3JtUHJvamVjdHNUaXRsZS5jbGFzc0xpc3QuYWRkKFwiZm9ybS1wcm9qZWN0cy10aXRsZVwiKTtcbiAgICBmb3JtRGF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtUHJvamVjdHNUaXRsZSk7XG4gICAgbGV0IGZvcm1Qcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIilcbiAgICBmb3JtUHJvamVjdHMubmFtZSA9IFwidG9kby1mb3JtLXByb2plY3RzXCI7XG4gICAgZm9ybVByb2plY3RzLmlkID0gXCJ0b2RvLWZvcm0tcHJvamVjdHNcIjtcbiAgICBmb3JtUHJvamVjdHMuY2xhc3NMaXN0ID0gXCJ0b2RvLWZvcm0tcHJvamVjdHNcIjtcbiAgICBsZXQgZGVmYXVsdE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgZGVmYXVsdE9wdGlvbi52YWx1ZSA9IFwiXCI7XG4gICAgZGVmYXVsdE9wdGlvbi50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgZm9ybVByb2plY3RzLmFwcGVuZENoaWxkKGRlZmF1bHRPcHRpb24pO1xuICAgIGZvciAobGV0IGkgb2YgcHJvamVjdEFycikge1xuICAgICAgICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gaTtcbiAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gaTtcbiAgICAgICAgZm9ybVByb2plY3RzLmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgfVxuICAgIGZvcm1EYXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1Qcm9qZWN0cyk7XG5cbiAgICBsZXQgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHN1Ym1pdEJ1dHRvbi50eXBlID0gXCJzdWJtaXRcIjtcbiAgICBzdWJtaXRCdXR0b24uY2xhc3NMaXN0LmFkZChcInN1Ym1pdC1idXR0b25cIik7XG4gICAgaWYgKHRpdGxlKSB7XG4gICAgICAgIHN1Ym1pdEJ1dHRvbi52YWx1ZSA9IFwiRURJVCBUTyBET1wiO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHN1Ym1pdEJ1dHRvbi52YWx1ZSA9IFwiQUREIFRPIERPXCI7XG4gICAgfVxuICAgIGZvcm1EYXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XG5cbiAgICBpZiAodGl0bGUpIHtcbiAgICAgICAgZm9ybVRpdGxlLnZhbHVlID0gdGl0bGU7XG4gICAgICAgIGZvcm1EZXNjcmlwdGlvbi52YWx1ZSA9IGRlc2NyaXB0aW9uO1xuICAgICAgICBmb3JtRGF0ZS52YWx1ZSA9IGR1ZURhdGU7XG4gICAgICAgIGZvcm1Qcm9qZWN0cy52YWx1ZSA9IHByb2plY3Q7XG4gICAgfVxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAodGl0bGUpIHtcbiAgICAgICAgICAgIHRvZG9FZGl0KGZvcm1UaXRsZS52YWx1ZSwgZm9ybURlc2NyaXB0aW9uLnZhbHVlLCBmb3JtRGF0ZS52YWx1ZSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInRvZG8tZm9ybS1wcmlvcml0eVwiXTpjaGVja2VkJykudmFsdWUsIGZvcm1Qcm9qZWN0cy52YWx1ZSwgaSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0b2RvQWRkKGZvcm1UaXRsZS52YWx1ZSwgZm9ybURlc2NyaXB0aW9uLnZhbHVlLCBmb3JtRGF0ZS52YWx1ZSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInRvZG8tZm9ybS1wcmlvcml0eVwiXTpjaGVja2VkJykudmFsdWUsIGZvcm1Qcm9qZWN0cy52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgd2hpbGUgKGZvcm0uZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgZm9ybS5yZW1vdmVDaGlsZChmb3JtLmZpcnN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIGRpYWxvZy5jbG9zZSgpO1xuICAgICAgICBtYWluQ29udGFpbmVyLnN0eWxlLmZpbHRlciA9IFwiYmx1cigwcHgpXCI7XG4gICAgICAgIGZvcm0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChmb3JtKTtcbiAgICB9KVxuXG4gICAgcmV0dXJuIGZvcm07XG59XG5cbmZ1bmN0aW9uIHByb2plY3RGb3JtKCkge1xuICAgIGxldCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLWNvbnRhaW5lclwiKTtcbiAgICBsZXQgZGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaWFsb2dcIik7XG4gICAgbGV0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWZvcm1cIik7XG4gICAgZm9ybS5hdXRvY29tcGxldGUgPSBcIm9mZlwiO1xuXG4gICAgbGV0IGZvcm1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBmb3JtVGl0bGUudHlwZSA9IFwidGV4dFwiO1xuICAgIGZvcm1UaXRsZS5uYW1lID0gXCJwcm9qZWN0LWZvcm0tdGl0bGVcIjtcbiAgICBmb3JtVGl0bGUuaWQgPSBcInByb2plY3QtZm9ybS10aXRsZVwiO1xuICAgIGZvcm1UaXRsZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1mb3JtLXRpdGxlXCIpO1xuICAgIGZvcm1UaXRsZS5wbGFjZWhvbGRlciA9IFwiVGl0bGU6IEhvdXNlIFJlbm92YXRpb25cIlxuICAgIGZvcm1UaXRsZS5yZXF1aXJlZCA9IHRydWU7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChmb3JtVGl0bGUpO1xuXG4gICAgbGV0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBzdWJtaXRCdXR0b24udHlwZSA9IFwic3VibWl0XCI7XG4gICAgc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJzdWJtaXQtYnV0dG9uXCIpO1xuICAgIHN1Ym1pdEJ1dHRvbi52YWx1ZSA9IFwiQ1JFQVRFIFBST0pFQ1RcIjtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHByb2plY3RzQWRkKGZvcm1UaXRsZS52YWx1ZSk7XG4gICAgICAgIHdoaWxlIChmb3JtLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIGZvcm0ucmVtb3ZlQ2hpbGQoZm9ybS5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICBkaWFsb2cuY2xvc2UoKTtcbiAgICAgICAgbWFpbkNvbnRhaW5lci5zdHlsZS5maWx0ZXIgPSBcImJsdXIoMHB4KVwiO1xuICAgICAgICBmb3JtLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZm9ybSk7XG4gICAgfSlcblxuICAgIHJldHVybiBmb3JtO1xufVxuXG5leHBvcnQgeyB0b2RvRm9ybSwgcHJvamVjdEZvcm0gfSIsImltcG9ydCBpY29uIGZyb20gXCIuLi9hc3NldHMvaWNvbnMvcHJvamVjdC5zdmdcIjtcbmltcG9ydCB7IHByb2plY3RBcnIgfSBmcm9tICcuLi9pbmRleC5qcyc7XG5pbXBvcnQgeyB0b2RvRGlzcGxheSB9IGZyb20gXCIuL3RvZG8uanNcIjtcblxuZnVuY3Rpb24gcHJvamVjdHNEaXNwbGF5ICgpIHtcbiAgICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHMtdWxcIik7XG4gICAgd2hpbGUgKHByb2plY3RzQ29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgcHJvamVjdHNDb250YWluZXIucmVtb3ZlQ2hpbGQocHJvamVjdHNDb250YWluZXIuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIGZvciAobGV0IGkgb2YgcHJvamVjdEFycikge1xuICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChpKTtcbiAgICAgICAgYnV0dG9uLmlkID0gaTtcbiAgICAgICAgbGV0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltYWdlLnNyYyA9IGljb247XG4gICAgICAgIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIHNwYW4udGV4dENvbnRlbnQgPSBpO1xuICAgICAgICBidXR0b24uYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICAgICAgICBidXR0b24uYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgICAgIGxpLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgICAgIHByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKGxpKTtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coaSk7XG4gICAgICAgICAgICB0b2RvRGlzcGxheShpKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBwcm9qZWN0c0FkZCAocHJvamVjdCkge1xuICAgIHByb2plY3RBcnIucHVzaChwcm9qZWN0KTtcbiAgICBwcm9qZWN0c0Rpc3BsYXkoKTtcbn1cblxuZXhwb3J0IHsgcHJvamVjdHNEaXNwbGF5LCBwcm9qZWN0c0FkZCB9OyIsImltcG9ydCB0cmFzaCBmcm9tICcuLi9hc3NldHMvaWNvbnMvdHJhc2guc3ZnJztcbmltcG9ydCBlZGl0IGZyb20gJy4uL2Fzc2V0cy9pY29ucy9lZGl0LnN2Zyc7XG5pbXBvcnQgY3Jvc3MgZnJvbSAnLi4vYXNzZXRzL2ljb25zL2Nyb3NzLWJsYWNrLnN2Zyc7XG5pbXBvcnQgeyB0b2RvQXJyIH0gZnJvbSAnLi4vaW5kZXguanMnO1xuaW1wb3J0IHsgdG9kb0Zvcm0sIHByb2plY3RGb3JtIH0gZnJvbSAnLi9mb3Jtcy5qcyc7XG5cbmNvbnN0IG1haW5Db250YWluZXJGb3JUb2RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLWNvbnRhaW5lclwiKTtcbmxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG5mdW5jdGlvbiB0b2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QsIG9sZElkKSB7XG4gICAgbGV0IHRvZG9JdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b2RvSXRlbS5jbGFzc0xpc3QuYWRkKFwidG9kb1wiKTtcbiAgICB0b2RvSXRlbS5pZCA9IChvbGRJZCkgPyBvbGRJZCA6IHRvZG9BcnIubGVuZ3RoO1xuICAgIHRvZG9JdGVtLnNldEF0dHJpYnV0ZShcImRhdGEtdGl0bGVcIiwgdGl0bGUpO1xuICAgIGlmIChwcm9qZWN0KSB7XG4gICAgICAgIHRvZG9JdGVtLnNldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdFwiLCBwcm9qZWN0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0b2RvSXRlbS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3RcIiwgXCJOb25lXCIpO1xuICAgIH1cbiAgICB0b2RvSXRlbS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByaW9yaXR5XCIsIHByaW9yaXR5KTtcbiAgICB0b2RvSXRlbS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWRhdGVcIiwgZHVlRGF0ZSk7XG4gICAgdG9kb0l0ZW0uc2V0QXR0cmlidXRlKFwiZGF0YS1kZXNjcmlwdGlvblwiLCBkZXNjcmlwdGlvbik7XG5cbiAgICBmdW5jdGlvbiBlZGl0VG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0LCBpKSB7XG4gICAgICAgIGxldCB0b2RvRGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpYWxvZ1wiKTtcbiAgICAgICAgdG9kb0RpYWxvZy5jbGFzc0xpc3QuYWRkKFwidG9kby1kaWFsb2ctZWRpdFwiKTtcblxuICAgICAgICBsZXQgY2xvc2VEaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBsZXQgY3Jvc3NJY29uID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGNyb3NzSWNvbi5zcmMgPSBjcm9zcztcbiAgICAgICAgY2xvc2VEaWFsb2cuYXBwZW5kQ2hpbGQoY3Jvc3NJY29uKTtcbiAgICAgICAgdG9kb0RpYWxvZy5hcHBlbmRDaGlsZChjbG9zZURpYWxvZyk7XG5cbiAgICAgICAgbGV0IGZvcm0gPSB0b2RvRm9ybSh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0LCBpKVxuICAgICAgICB0b2RvRGlhbG9nLmFwcGVuZENoaWxkKGZvcm0pO1xuICAgICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsICgpID0+IHtcbiAgICAgICAgICAgIHdoaWxlICh0b2RvRGlhbG9nLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICB0b2RvRGlhbG9nLnJlbW92ZUNoaWxkKHRvZG9EaWFsb2cuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0b2RvRGlhbG9nLmNsb3NlKCk7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRvZG9EaWFsb2cpO1xuICAgICAgICAgICAgbWFpbkNvbnRhaW5lckZvclRvZG8uc3R5bGUuZmlsdGVyID0gXCJibHVyKDBweClcIjtcbiAgICAgICAgfSlcblxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRvZG9EaWFsb2cpO1xuICAgICAgICB0b2RvRGlhbG9nLmFkZEV2ZW50TGlzdGVuZXIoJ2NhbmNlbCcsICgpID0+IHtcbiAgICAgICAgICAgIHdoaWxlICh0b2RvRGlhbG9nLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICB0b2RvRGlhbG9nLnJlbW92ZUNoaWxkKHRvZG9EaWFsb2cuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0b2RvRGlhbG9nLmNsb3NlKCk7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRvZG9EaWFsb2cpO1xuICAgICAgICAgICAgbWFpbkNvbnRhaW5lckZvclRvZG8uc3R5bGUuZmlsdGVyID0gXCJibHVyKDBweClcIjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY2xvc2VEaWFsb2cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB3aGlsZSAodG9kb0RpYWxvZy5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgdG9kb0RpYWxvZy5yZW1vdmVDaGlsZCh0b2RvRGlhbG9nLmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdG9kb0RpYWxvZy5jbG9zZSgpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0b2RvRGlhbG9nKTtcbiAgICAgICAgICAgIG1haW5Db250YWluZXJGb3JUb2RvLnN0eWxlLmZpbHRlciA9IFwiYmx1cigwcHgpXCI7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRvZG9EaWFsb2cuc2hvd01vZGFsKCk7XG4gICAgICAgIG1haW5Db250YWluZXJGb3JUb2RvLnN0eWxlLmZpbHRlciA9IFwiYmx1cigzcHgpXCI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hvd0RldGFpbHMoZWxlbWVudCkge1xuICAgICAgICBsZXQgdG9kb0RpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaWFsb2dcIik7XG4gICAgICAgIHRvZG9EaWFsb2cuY2xhc3NMaXN0LmFkZChcInRvZG8tZGlhbG9nXCIpO1xuXG4gICAgICAgIGxldCBjbG9zZURpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGxldCBjcm9zc0ljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgY3Jvc3NJY29uLnNyYyA9IGNyb3NzO1xuICAgICAgICBjbG9zZURpYWxvZy5hcHBlbmRDaGlsZChjcm9zc0ljb24pO1xuICAgICAgICB0b2RvRGlhbG9nLmFwcGVuZENoaWxkKGNsb3NlRGlhbG9nKTtcblxuICAgICAgICBsZXQgdGl0bGVEaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aXRsZURpYWxvZy5jbGFzc0xpc3QuYWRkKFwidG9kby1kaWFsb2ctdGl0bGVcIik7XG4gICAgICAgIHRpdGxlRGlhbG9nLnRleHRDb250ZW50ID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRpdGxlXCIpO1xuICAgICAgICB0b2RvRGlhbG9nLmFwcGVuZENoaWxkKHRpdGxlRGlhbG9nKTtcblxuICAgICAgICBsZXQgdG9kb0RpYWxvZ0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgdG9kb0RpYWxvZ0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidG9kby1kaWFsb2ctY29udGFpbmVyXCIpXG5cbiAgICAgICAgbGV0IHByb2plY3REaWFsb2dUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHByb2plY3REaWFsb2dUaXRsZS5jbGFzc0xpc3QuYWRkKFwiYm9sZFwiKTtcbiAgICAgICAgcHJvamVjdERpYWxvZ1RpdGxlLnRleHRDb250ZW50ID0gXCJQcm9qZWN0IDpcIjtcbiAgICAgICAgdG9kb0RpYWxvZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0RGlhbG9nVGl0bGUpO1xuICAgICAgICBsZXQgcHJvamVjdERpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHByb2plY3REaWFsb2cudGV4dENvbnRlbnQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdFwiKTtcbiAgICAgICAgdG9kb0RpYWxvZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0RGlhbG9nKTtcblxuICAgICAgICBsZXQgcHJpb3JpdHlEaWFsb2dUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHByaW9yaXR5RGlhbG9nVGl0bGUuY2xhc3NMaXN0LmFkZChcImJvbGRcIik7XG4gICAgICAgIHByaW9yaXR5RGlhbG9nVGl0bGUudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5IDpcIjtcbiAgICAgICAgdG9kb0RpYWxvZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eURpYWxvZ1RpdGxlKTtcbiAgICAgICAgbGV0IHByaW9yaXR5RGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcHJpb3JpdHlEaWFsb2cudGV4dENvbnRlbnQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtcHJpb3JpdHlcIik7XG4gICAgICAgIHRvZG9EaWFsb2dDb250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHlEaWFsb2cpO1xuXG4gICAgICAgIGxldCBkYXRlRGlhbG9nVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkYXRlRGlhbG9nVGl0bGUuY2xhc3NMaXN0LmFkZChcImJvbGRcIik7XG4gICAgICAgIGRhdGVEaWFsb2dUaXRsZS50ZXh0Q29udGVudCA9IFwiRHVlIERhdGUgOlwiO1xuICAgICAgICB0b2RvRGlhbG9nQ29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGVEaWFsb2dUaXRsZSk7XG4gICAgICAgIGxldCBkYXRlRGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZGF0ZURpYWxvZy50ZXh0Q29udGVudCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1kYXRlXCIpO1xuICAgICAgICB0b2RvRGlhbG9nQ29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGVEaWFsb2cpO1xuXG4gICAgICAgIGxldCBkZXRhaWxzRGlhbG9nVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkZXRhaWxzRGlhbG9nVGl0bGUuY2xhc3NMaXN0LmFkZChcImJvbGRcIik7XG4gICAgICAgIGRldGFpbHNEaWFsb2dUaXRsZS50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb24gOlwiO1xuICAgICAgICB0b2RvRGlhbG9nQ29udGFpbmVyLmFwcGVuZENoaWxkKGRldGFpbHNEaWFsb2dUaXRsZSk7XG4gICAgICAgIGxldCBkZXRhaWxzRGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZGV0YWlsc0RpYWxvZy50ZXh0Q29udGVudCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1kZXNjcmlwdGlvblwiKTtcbiAgICAgICAgdG9kb0RpYWxvZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChkZXRhaWxzRGlhbG9nKTtcblxuICAgICAgICB0b2RvRGlhbG9nLmFwcGVuZENoaWxkKHRvZG9EaWFsb2dDb250YWluZXIpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRvZG9EaWFsb2cpO1xuXG4gICAgICAgIHRvZG9EaWFsb2cuYWRkRXZlbnRMaXN0ZW5lcignY2FuY2VsJywgKCkgPT4ge1xuICAgICAgICAgICAgd2hpbGUgKHRvZG9EaWFsb2cuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgIGlmIChjbG9zZURpYWxvZy5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsb3NlRGlhbG9nLnJlbW92ZUNoaWxkKGNsb3NlRGlhbG9nLmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB3aGlsZSAodG9kb0RpYWxvZ0NvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9EaWFsb2dDb250YWluZXIucmVtb3ZlQ2hpbGQodG9kb0RpYWxvZ0NvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdG9kb0RpYWxvZy5yZW1vdmVDaGlsZCh0b2RvRGlhbG9nLmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdG9kb0RpYWxvZy5jbG9zZSgpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0b2RvRGlhbG9nKTtcbiAgICAgICAgICAgIG1haW5Db250YWluZXJGb3JUb2RvLnN0eWxlLmZpbHRlciA9IFwiYmx1cigwcHgpXCI7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNsb3NlRGlhbG9nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgd2hpbGUgKHRvZG9EaWFsb2cuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgIGlmIChjbG9zZURpYWxvZy5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsb3NlRGlhbG9nLnJlbW92ZUNoaWxkKGNsb3NlRGlhbG9nLmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB3aGlsZSAodG9kb0RpYWxvZ0NvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9EaWFsb2dDb250YWluZXIucmVtb3ZlQ2hpbGQodG9kb0RpYWxvZ0NvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdG9kb0RpYWxvZy5yZW1vdmVDaGlsZCh0b2RvRGlhbG9nLmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdG9kb0RpYWxvZy5jbG9zZSgpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0b2RvRGlhbG9nKTtcbiAgICAgICAgICAgIG1haW5Db250YWluZXJGb3JUb2RvLnN0eWxlLmZpbHRlciA9IFwiYmx1cigwcHgpXCI7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRvZG9EaWFsb2cuc2hvd01vZGFsKCk7XG4gICAgICAgIG1haW5Db250YWluZXJGb3JUb2RvLnN0eWxlLmZpbHRlciA9IFwiYmx1cigzcHgpXCI7XG4gICAgfVxuXG4gICAgbGV0IHByaW9yaXR5Q29sb3IgPSBcImdyZWVuXCI7XG4gICAgaWYgKHByaW9yaXR5ID09PSBcIk1lZGl1bVwiKSB7XG4gICAgICAgIHByaW9yaXR5Q29sb3IgPSBcIm9yYW5nZVwiO1xuICAgIH0gZWxzZSBpZiAocHJpb3JpdHkgPT09IFwiSGlnaFwiKSB7XG4gICAgICAgIHByaW9yaXR5Q29sb3IgPSBcInJlZFwiO1xuICAgIH1cbiAgICB0b2RvSXRlbS5zdHlsZS5ib3JkZXJMZWZ0ID0gXCJzb2xpZCBcIiArIHByaW9yaXR5Q29sb3IgKyBcIiAzcHhcIjtcblxuICAgIGxldCB0b2RvQ2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgdG9kb0NoZWNrQm94LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgdG9kb0NoZWNrQm94LmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWNoZWNrXCIpO1xuICAgIHRvZG9JdGVtLmFwcGVuZENoaWxkKHRvZG9DaGVja0JveCk7XG4gICAgdG9kb0NoZWNrQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgdG9kb0l0ZW0uY2xhc3NMaXN0LnRvZ2dsZShcImRvbmVcIik7XG4gICAgfSk7XG5cbiAgICBsZXQgdG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b2RvVGl0bGUuY2xhc3NMaXN0LmFkZChcInRvZG8tdGl0bGVcIilcbiAgICB0b2RvVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgICB0b2RvSXRlbS5hcHBlbmRDaGlsZCh0b2RvVGl0bGUpO1xuXG4gICAgbGV0IHRvZG9EZXRhaWxzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICB0b2RvRGV0YWlsc0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwidG9kby1kZXRhaWxzXCIpXG4gICAgdG9kb0RldGFpbHNCdXR0b24udGV4dENvbnRlbnQgPSBcIkRFVEFJTFNcIjtcbiAgICB0b2RvSXRlbS5hcHBlbmRDaGlsZCh0b2RvRGV0YWlsc0J1dHRvbik7XG4gICAgdG9kb0RldGFpbHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHNob3dEZXRhaWxzKHRvZG9JdGVtKTtcbiAgICB9KTtcblxuICAgIGxldCB0b2RvRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9kb0RhdGUuY2xhc3NMaXN0LmFkZChcInRvZG8tZGF0ZVwiKTtcbiAgICB0b2RvRGF0ZS50ZXh0Q29udGVudCA9IGR1ZURhdGU7XG4gICAgdG9kb0l0ZW0uYXBwZW5kQ2hpbGQodG9kb0RhdGUpO1xuXG4gICAgbGV0IHRvZG9FZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBsZXQgZWRpdEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICBlZGl0SWNvbi5zcmMgPSBlZGl0O1xuICAgIHRvZG9FZGl0QnV0dG9uLmFwcGVuZENoaWxkKGVkaXRJY29uKTtcbiAgICB0b2RvSXRlbS5hcHBlbmRDaGlsZCh0b2RvRWRpdEJ1dHRvbik7XG4gICAgdG9kb0VkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGVkaXRUb2RvKHRvZG9UaXRsZS50ZXh0Q29udGVudCwgdG9kb0l0ZW0uZ2V0QXR0cmlidXRlKFwiZGF0YS1kZXNjcmlwdGlvblwiKSwgdG9kb0l0ZW0uZ2V0QXR0cmlidXRlKFwiZGF0YS1kYXRlXCIpLCBcIlwiLCB0b2RvSXRlbS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3RcIiksIHRvZG9JdGVtLmlkKTtcbiAgICB9KTtcblxuICAgIGxldCB0b2RvRGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBsZXQgZWRpdFRyYXNoID0gbmV3IEltYWdlKCk7XG4gICAgZWRpdFRyYXNoLnNyYyA9IHRyYXNoO1xuICAgIHRvZG9EZWxldGVCdXR0b24uYXBwZW5kQ2hpbGQoZWRpdFRyYXNoKTtcbiAgICB0b2RvSXRlbS5hcHBlbmRDaGlsZCh0b2RvRGVsZXRlQnV0dG9uKTtcbiAgICB0b2RvRGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBsZXQgaSA9IHRvZG9JdGVtLmlkO1xuICAgICAgICB3aGlsZSAodG9kb0l0ZW0uZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgdG9kb0l0ZW0ucmVtb3ZlQ2hpbGQodG9kb0l0ZW0uZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgdG9kb0l0ZW0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0b2RvSXRlbSk7XG4gICAgICAgIHRvZG9BcnIuc3BsaWNlKGksIDEpO1xuICAgICAgICB3aGlsZSAodG9kb0FycltpXSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coaSk7XG4gICAgICAgICAgICAodG9kb0FycltpXSkuaWQgLT0gMTtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRvZG9JdGVtO1xufVxuXG5mdW5jdGlvbiB0b2RvRGlzcGxheSAocHJvamVjdCkge1xuICAgIHdoaWxlIChjb250ZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBpZiAocHJvamVjdCkge1xuICAgICAgICBmb3IgKGxldCBpIG9mIHRvZG9BcnIpIHtcbiAgICAgICAgICAgIGlmIChpLmdldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdFwiKSA9PT0gcHJvamVjdClcbiAgICAgICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGxldCBpIG9mIHRvZG9BcnIpIHtcbiAgICAgICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIHRvZG9BZGQgKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QpIHtcbiAgICB0b2RvQXJyLnB1c2godG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KSk7XG4gICAgdG9kb0Rpc3BsYXkoKTtcbn1cblxuZnVuY3Rpb24gdG9kb0VkaXQgKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QsIGkpIHtcbiAgICB0b2RvQXJyW2ldID0gdG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0LCBpKTtcbiAgICB0b2RvRGlzcGxheSgpO1xufVxuXG5leHBvcnQgeyB0b2RvLCB0b2RvRGlzcGxheSwgdG9kb0FkZCwgdG9kb0VkaXQgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9