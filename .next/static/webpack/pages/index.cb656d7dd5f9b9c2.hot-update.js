"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/preview.js":
/*!***********************************!*\
  !*** ./src/components/preview.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Preview; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button */ \"./src/components/button.js\");\n/* harmony import */ var _css_preview_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/preview.module.scss */ \"./src/css/preview.module.scss\");\n/* harmony import */ var _css_preview_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_preview_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nfunction Preview(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_css_preview_module_scss__WEBPACK_IMPORTED_MODULE_4___default().preview),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                layout: \"intrinsic\",\n                src: props.image,\n                alt: \"\"\n            }, void 0, false, {\n                fileName: \"/Users/mitch/code/vbvf/src/components/preview.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                children: props.title\n            }, void 0, false, {\n                fileName: \"/Users/mitch/code/vbvf/src/components/preview.js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: props.body\n            }, void 0, false, {\n                fileName: \"/Users/mitch/code/vbvf/src/components/preview.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                size: \"medium\",\n                color: props.color ? props.color : \"green\",\n                link: props.link,\n                title: props.buttonTitle\n            }, void 0, false, {\n                fileName: \"/Users/mitch/code/vbvf/src/components/preview.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mitch/code/vbvf/src/components/preview.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n};\n_c = Preview;\nvar _c;\n$RefreshReg$(_c, \"Preview\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9wcmV2aWV3LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUEwQjtBQUNJO0FBQ2tCO0FBQ2pCO0FBRWhCLFNBQVNJLE9BQU8sQ0FBQ0MsS0FBSyxFQUFFO0lBQ3JDLHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBRUwseUVBQWM7OzBCQUM1Qiw4REFBQ0MsbURBQUs7Z0JBQUNNLE1BQU0sRUFBQyxXQUFXO2dCQUFDQyxHQUFHLEVBQUVMLEtBQUssQ0FBQ00sS0FBSztnQkFBRUMsR0FBRyxFQUFDLEVBQUU7Ozs7O29CQUFHOzBCQUNyRCw4REFBQ0MsSUFBRTswQkFBRVIsS0FBSyxDQUFDUyxLQUFLOzs7OztvQkFBTTswQkFDdEIsOERBQUNDLEdBQUM7MEJBQUVWLEtBQUssQ0FBQ1csSUFBSTs7Ozs7b0JBQUs7MEJBQ25CLDhEQUFDZiwrQ0FBTTtnQkFDTGdCLElBQUksRUFBQyxRQUFRO2dCQUNiQyxLQUFLLEVBQUViLEtBQUssQ0FBQ2EsS0FBSyxHQUFHYixLQUFLLENBQUNhLEtBQUssR0FBRyxPQUFPO2dCQUMxQ0MsSUFBSSxFQUFFZCxLQUFLLENBQUNjLElBQUk7Z0JBQ2hCTCxLQUFLLEVBQUVULEtBQUssQ0FBQ2UsV0FBVzs7Ozs7b0JBQ3hCOzs7Ozs7WUFDRSxDQUNOO0NBQ0g7QUFkdUJoQixLQUFBQSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3ByZXZpZXcuanM/NmI5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuL2J1dHRvblwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vY3NzL3ByZXZpZXcubW9kdWxlLnNjc3NcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcmV2aWV3KHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcmV2aWV3fT5cbiAgICAgIDxJbWFnZSBsYXlvdXQ9XCJpbnRyaW5zaWNcIiBzcmM9e3Byb3BzLmltYWdlfSBhbHQ9XCJcIiAvPlxuICAgICAgPGg0Pntwcm9wcy50aXRsZX08L2g0PlxuICAgICAgPHA+e3Byb3BzLmJvZHl9PC9wPlxuICAgICAgPEJ1dHRvblxuICAgICAgICBzaXplPVwibWVkaXVtXCJcbiAgICAgICAgY29sb3I9e3Byb3BzLmNvbG9yID8gcHJvcHMuY29sb3IgOiBcImdyZWVuXCJ9XG4gICAgICAgIGxpbms9e3Byb3BzLmxpbmt9XG4gICAgICAgIHRpdGxlPXtwcm9wcy5idXR0b25UaXRsZX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJCdXR0b24iLCJzdHlsZXMiLCJJbWFnZSIsIlByZXZpZXciLCJwcm9wcyIsImRpdiIsImNsYXNzTmFtZSIsInByZXZpZXciLCJsYXlvdXQiLCJzcmMiLCJpbWFnZSIsImFsdCIsImg0IiwidGl0bGUiLCJwIiwiYm9keSIsInNpemUiLCJjb2xvciIsImxpbmsiLCJidXR0b25UaXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/preview.js\n"));

/***/ })

});