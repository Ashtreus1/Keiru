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

/***/ "(app-pages-browser)/./src/app/component/NavBar.js":
/*!*************************************!*\
  !*** ./src/app/component/NavBar.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst NavBar = ()=>{\n    _s();\n    const Menus = [\n        {\n            name: \"Home\",\n            icon: \"home-outline\",\n            dis: \"translate-x-0\"\n        },\n        {\n            name: \"Profile\",\n            icon: \"person-outline\",\n            dis: \"translate-x-16\"\n        },\n        {\n            name: \"Message\",\n            icon: \"chatbubble-outline\",\n            dis: \"translate-x-32\"\n        },\n        {\n            name: \"Photos\",\n            icon: \"camera-outline\",\n            dis: \"translate-x-48\"\n        },\n        {\n            name: \"Settings\",\n            icon: \"settings-outline\",\n            dis: \"translate-x-64\"\n        }\n    ];\n    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const handleMenuClick = (index)=>{\n        setActive(index);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed bottom-0 left-0 right-0 bg-black bg-opacity-50 px-6 py-2 mb-5 z-50 max-w-md mx-auto border border-transparent rounded-full\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            className: \"flex justify-center items-center relative\",\n            children: Menus.map((menu, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    className: \"mx-2 mt-5\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"flex flex-col text-center cursor-pointer \".concat(i === active ? \"text-white\" : \"text-gray-300\"),\n                        onClick: ()=>handleMenuClick(i),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-xl\".concat(i === active && \"text-cyan-400\"),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ion-icon\", {\n                                    name: menu.icon\n                                }, void 0, false, {\n                                    fileName: \"/home/yukanashi15/Keiru/src/app/component/NavBar.js\",\n                                    lineNumber: 29,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/yukanashi15/Keiru/src/app/component/NavBar.js\",\n                                lineNumber: 28,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"\".concat(active === i ? \"opacity-100\" : \"opacity-0\", \" text-xs\"),\n                                children: menu.name\n                            }, void 0, false, {\n                                fileName: \"/home/yukanashi15/Keiru/src/app/component/NavBar.js\",\n                                lineNumber: 31,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/yukanashi15/Keiru/src/app/component/NavBar.js\",\n                        lineNumber: 22,\n                        columnNumber: 13\n                    }, undefined)\n                }, i, false, {\n                    fileName: \"/home/yukanashi15/Keiru/src/app/component/NavBar.js\",\n                    lineNumber: 21,\n                    columnNumber: 11\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"/home/yukanashi15/Keiru/src/app/component/NavBar.js\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/yukanashi15/Keiru/src/app/component/NavBar.js\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, undefined);\n};\n_s(NavBar, \"LYMHw6xE17pbh6ai9qaw76OM0Ms=\");\n_c = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\nvar _c;\n$RefreshReg$(_c, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50L05hdkJhci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBd0M7QUFFeEMsTUFBTUUsU0FBUzs7SUFDYixNQUFNQyxRQUFRO1FBQ1o7WUFBRUMsTUFBTTtZQUFRQyxNQUFNO1lBQWdCQyxLQUFLO1FBQWdCO1FBQzNEO1lBQUVGLE1BQU07WUFBV0MsTUFBTTtZQUFrQkMsS0FBSztRQUFpQjtRQUNqRTtZQUFFRixNQUFNO1lBQVdDLE1BQU07WUFBc0JDLEtBQUs7UUFBaUI7UUFDckU7WUFBRUYsTUFBTTtZQUFVQyxNQUFNO1lBQWtCQyxLQUFLO1FBQWlCO1FBQ2hFO1lBQUVGLE1BQU07WUFBWUMsTUFBTTtZQUFvQkMsS0FBSztRQUFpQjtLQUNyRTtJQUNELE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUVyQyxNQUFNUSxrQkFBa0IsQ0FBQ0M7UUFDdkJGLFVBQVVFO0lBQ1o7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0M7WUFBR0QsV0FBVTtzQkFDWFQsTUFBTVcsR0FBRyxDQUFDLENBQUNDLE1BQU1DLGtCQUNoQiw4REFBQ0M7b0JBQVdMLFdBQVU7OEJBQ3BCLDRFQUFDTTt3QkFDQ04sV0FBVyw0Q0FFVixPQURDSSxNQUFNVCxTQUFTLGVBQWU7d0JBRWhDWSxTQUFTLElBQU1WLGdCQUFnQk87OzBDQUUvQiw4REFBQ0k7Z0NBQUtSLFdBQVcsVUFBMEMsT0FBaENJLE1BQU1ULFVBQVU7MENBQ3pDLDRFQUFDYztvQ0FBU2pCLE1BQU1XLEtBQUtWLElBQUk7Ozs7Ozs7Ozs7OzBDQUUzQiw4REFBQ2U7Z0NBQ0NSLFdBQVcsR0FJVixPQUhDTCxXQUFXUyxJQUNQLGdCQUNBLGFBQ0w7MENBRUFELEtBQUtYLElBQUk7Ozs7Ozs7Ozs7OzttQkFqQlBZOzs7Ozs7Ozs7Ozs7Ozs7QUF5Qm5CO0dBM0NNZDtLQUFBQTtBQTZDTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudC9OYXZCYXIuanM/M2Y0MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgTmF2QmFyID0gKCkgPT4ge1xuICBjb25zdCBNZW51cyA9IFtcbiAgICB7IG5hbWU6IFwiSG9tZVwiLCBpY29uOiBcImhvbWUtb3V0bGluZVwiLCBkaXM6IFwidHJhbnNsYXRlLXgtMFwiIH0sXG4gICAgeyBuYW1lOiBcIlByb2ZpbGVcIiwgaWNvbjogXCJwZXJzb24tb3V0bGluZVwiLCBkaXM6IFwidHJhbnNsYXRlLXgtMTZcIiB9LFxuICAgIHsgbmFtZTogXCJNZXNzYWdlXCIsIGljb246IFwiY2hhdGJ1YmJsZS1vdXRsaW5lXCIsIGRpczogXCJ0cmFuc2xhdGUteC0zMlwiIH0sXG4gICAgeyBuYW1lOiBcIlBob3Rvc1wiLCBpY29uOiBcImNhbWVyYS1vdXRsaW5lXCIsIGRpczogXCJ0cmFuc2xhdGUteC00OFwiIH0sXG4gICAgeyBuYW1lOiBcIlNldHRpbmdzXCIsIGljb246IFwic2V0dGluZ3Mtb3V0bGluZVwiLCBkaXM6IFwidHJhbnNsYXRlLXgtNjRcIiB9LFxuICBdO1xuICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoMCk7XG5cbiAgY29uc3QgaGFuZGxlTWVudUNsaWNrID0gKGluZGV4KSA9PiB7XG4gICAgc2V0QWN0aXZlKGluZGV4KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgYm90dG9tLTAgbGVmdC0wIHJpZ2h0LTAgYmctYmxhY2sgYmctb3BhY2l0eS01MCBweC02IHB5LTIgbWItNSB6LTUwIG1heC13LW1kIG14LWF1dG8gYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCByb3VuZGVkLWZ1bGxcIj5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciByZWxhdGl2ZVwiPlxuICAgICAgICB7TWVudXMubWFwKChtZW51LCBpKSA9PiAoXG4gICAgICAgICAgPGxpIGtleT17aX0gY2xhc3NOYW1lPVwibXgtMiBtdC01XCI+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4IGZsZXgtY29sIHRleHQtY2VudGVyIGN1cnNvci1wb2ludGVyICR7XG4gICAgICAgICAgICAgICAgaSA9PT0gYWN0aXZlID8gXCJ0ZXh0LXdoaXRlXCIgOiBcInRleHQtZ3JheS0zMDBcIlxuICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlTWVudUNsaWNrKGkpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2B0ZXh0LXhsJHtpID09PSBhY3RpdmUgJiYgXCJ0ZXh0LWN5YW4tNDAwXCJ9YH0+XG4gICAgICAgICAgICAgICAgPGlvbi1pY29uIG5hbWU9e21lbnUuaWNvbn0+PC9pb24taWNvbj5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7XG4gICAgICAgICAgICAgICAgICBhY3RpdmUgPT09IGlcbiAgICAgICAgICAgICAgICAgICAgPyBcIm9wYWNpdHktMTAwXCJcbiAgICAgICAgICAgICAgICAgICAgOiBcIm9wYWNpdHktMFwiXG4gICAgICAgICAgICAgICAgfSB0ZXh0LXhzYH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHttZW51Lm5hbWV9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZCYXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIk5hdkJhciIsIk1lbnVzIiwibmFtZSIsImljb24iLCJkaXMiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJoYW5kbGVNZW51Q2xpY2siLCJpbmRleCIsImRpdiIsImNsYXNzTmFtZSIsInVsIiwibWFwIiwibWVudSIsImkiLCJsaSIsImEiLCJvbkNsaWNrIiwic3BhbiIsImlvbi1pY29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/component/NavBar.js\n"));

/***/ })

});