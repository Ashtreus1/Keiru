"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"ee92301af5ac\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/ODQ3ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcImVlOTIzMDFhZjVhY1wiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/component/NavBar.js":
/*!*************************************!*\
  !*** ./src/app/component/NavBar.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst NavBar = (param)=>{\n    let { menus, onMenuClick } = param;\n    _s();\n    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const handleMenuClick = (index)=>{\n        setActive(index);\n        onMenuClick(index);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed bottom-0 left-0 right-0 bg-white bg-opacity-70 px-6 py-2 mb-5 z-50 max-w-md mx-auto border border-transparent rounded-full\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            className: \"flex justify-center items-center relative\",\n            children: menus && menus.map((menu, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    className: \"mx-2 mt-5\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"flex flex-col text-center cursor-pointer transition-opacity \".concat(index === active ? \"text-black\" : \"text-black\"),\n                        onClick: ()=>handleMenuClick(index),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-xl\".concat(index === active ? \" text-cyan-400\" : \"\"),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ion-icon\", {\n                                    name: menu.icon\n                                }, void 0, false, {\n                                    fileName: \"/home/yukanashi15/Keiru/src/app/component/NavBar.js\",\n                                    lineNumber: 24,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/yukanashi15/Keiru/src/app/component/NavBar.js\",\n                                lineNumber: 23,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"\".concat(index === active ? \"opacity-100 duration-700\" : \"opacity-0\", \" text-xs\"),\n                                children: menu.name\n                            }, void 0, false, {\n                                fileName: \"/home/yukanashi15/Keiru/src/app/component/NavBar.js\",\n                                lineNumber: 26,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/yukanashi15/Keiru/src/app/component/NavBar.js\",\n                        lineNumber: 17,\n                        columnNumber: 13\n                    }, undefined)\n                }, index, false, {\n                    fileName: \"/home/yukanashi15/Keiru/src/app/component/NavBar.js\",\n                    lineNumber: 16,\n                    columnNumber: 11\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"/home/yukanashi15/Keiru/src/app/component/NavBar.js\",\n            lineNumber: 14,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/yukanashi15/Keiru/src/app/component/NavBar.js\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, undefined);\n};\n_s(NavBar, \"LYMHw6xE17pbh6ai9qaw76OM0Ms=\");\n_c = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\nvar _c;\n$RefreshReg$(_c, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50L05hdkJhci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDd0M7QUFFeEMsTUFBTUUsU0FBUztRQUFDLEVBQUVDLEtBQUssRUFBRUMsV0FBVyxFQUFFOztJQUNwQyxNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR0wsK0NBQVFBLENBQUM7SUFFckMsTUFBTU0sa0JBQWtCLENBQUNDO1FBQ3ZCRixVQUFVRTtRQUNWSixZQUFZSTtJQUNkO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNDO1lBQUdELFdBQVU7c0JBQ1hQLFNBQVNBLE1BQU1TLEdBQUcsQ0FBQyxDQUFDQyxNQUFNTCxzQkFDekIsOERBQUNNO29CQUFlSixXQUFVOzhCQUN4Qiw0RUFBQ0s7d0JBQ0NMLFdBQVcsK0RBRVYsT0FEQ0YsVUFBVUgsU0FBUyxlQUFlO3dCQUVwQ1csU0FBUyxJQUFNVCxnQkFBZ0JDOzswQ0FFL0IsOERBQUNTO2dDQUFLUCxXQUFXLFVBQW1ELE9BQXpDRixVQUFVSCxTQUFTLG1CQUFtQjswQ0FDL0QsNEVBQUNhO29DQUFTQyxNQUFNTixLQUFLTyxJQUFJOzs7Ozs7Ozs7OzswQ0FFM0IsOERBQUNIO2dDQUNDUCxXQUFXLEdBRVYsT0FEQ0YsVUFBVUgsU0FBUyw2QkFBNkIsYUFDakQ7MENBRUFRLEtBQUtNLElBQUk7Ozs7Ozs7Ozs7OzttQkFmUFg7Ozs7Ozs7Ozs7Ozs7OztBQXVCbkI7R0FuQ01OO0tBQUFBO0FBcUNOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50L05hdkJhci5qcz8zZjQwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgTmF2QmFyID0gKHsgbWVudXMsIG9uTWVudUNsaWNrIH0pID0+IHtcbiAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKDApO1xuXG4gIGNvbnN0IGhhbmRsZU1lbnVDbGljayA9IChpbmRleCkgPT4ge1xuICAgIHNldEFjdGl2ZShpbmRleCk7XG4gICAgb25NZW51Q2xpY2soaW5kZXgpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBib3R0b20tMCBsZWZ0LTAgcmlnaHQtMCBiZy13aGl0ZSBiZy1vcGFjaXR5LTcwIHB4LTYgcHktMiBtYi01IHotNTAgbWF4LXctbWQgbXgtYXV0byBib3JkZXIgYm9yZGVyLXRyYW5zcGFyZW50IHJvdW5kZWQtZnVsbFwiPlxuICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHJlbGF0aXZlXCI+XG4gICAgICAgIHttZW51cyAmJiBtZW51cy5tYXAoKG1lbnUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPGxpIGtleT17aW5kZXh9IGNsYXNzTmFtZT1cIm14LTIgbXQtNVwiPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxleCBmbGV4LWNvbCB0ZXh0LWNlbnRlciBjdXJzb3ItcG9pbnRlciB0cmFuc2l0aW9uLW9wYWNpdHkgJHtcbiAgICAgICAgICAgICAgICBpbmRleCA9PT0gYWN0aXZlID8gXCJ0ZXh0LWJsYWNrXCIgOiBcInRleHQtYmxhY2tcIlxuICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlTWVudUNsaWNrKGluZGV4KX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgdGV4dC14bCR7aW5kZXggPT09IGFjdGl2ZSA/IFwiIHRleHQtY3lhbi00MDBcIiA6IFwiXCJ9YH0+XG4gICAgICAgICAgICAgICAgPGlvbi1pY29uIG5hbWU9e21lbnUuaWNvbn0+PC9pb24taWNvbj5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7XG4gICAgICAgICAgICAgICAgICBpbmRleCA9PT0gYWN0aXZlID8gXCJvcGFjaXR5LTEwMCBkdXJhdGlvbi03MDBcIiA6IFwib3BhY2l0eS0wXCJcbiAgICAgICAgICAgICAgICB9IHRleHQteHNgfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge21lbnUubmFtZX1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdkJhcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTmF2QmFyIiwibWVudXMiLCJvbk1lbnVDbGljayIsImFjdGl2ZSIsInNldEFjdGl2ZSIsImhhbmRsZU1lbnVDbGljayIsImluZGV4IiwiZGl2IiwiY2xhc3NOYW1lIiwidWwiLCJtYXAiLCJtZW51IiwibGkiLCJhIiwib25DbGljayIsInNwYW4iLCJpb24taWNvbiIsIm5hbWUiLCJpY29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/component/NavBar.js\n"));

/***/ })

});