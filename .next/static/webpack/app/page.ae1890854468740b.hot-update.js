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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _HeroSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HeroSection */ \"(app-pages-browser)/./src/app/component/HeroSection.js\");\n/* harmony import */ var _AboutSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AboutSection */ \"(app-pages-browser)/./src/app/component/AboutSection.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst NavBar = ()=>{\n    _s();\n    const Menus = [\n        {\n            name: \"Home\",\n            icon: \"home-outline\",\n            dis: \"translate-x-0\",\n            section: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeroSection__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/yukanashi15/Keiru/src/app/component/NavBar.js\",\n                lineNumber: 8,\n                columnNumber: 74\n            }, undefined)\n        },\n        {\n            name: \"Abouts\",\n            icon: \"people-outline\",\n            dis: \"translate-x-16\"\n        },\n        {\n            name: \"Projects\",\n            icon: \"code-working-outline\",\n            dis: \"translate-x-32\"\n        },\n        {\n            name: \"Contacts\",\n            icon: \"call-outline\",\n            dis: \"translate-x-48\"\n        }\n    ];\n    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const handleMenuClick = (index)=>{\n        setActive(index);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed bottom-0 left-0 right-0 bg-black bg-opacity-50 px-6 py-2 mb-5 z-50 max-w-md mx-auto border border-transparent rounded-full\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            className: \"flex justify-center items-center relative\",\n            children: Menus.map((menu, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    className: \"mx-2 mt-5\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"flex flex-col text-center cursor-pointer transition-opacity \".concat(i === active ? \"text-white text-cyan-400\" : \"text-gray-300\"),\n                        onClick: ()=>handleMenuClick(i),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-xl\".concat(i === active ? \" text-cyan-400\" : \"\"),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ion-icon\", {\n                                    name: menu.icon\n                                }, void 0, false, {\n                                    fileName: \"/home/yukanashi15/Keiru/src/app/component/NavBar.js\",\n                                    lineNumber: 31,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/yukanashi15/Keiru/src/app/component/NavBar.js\",\n                                lineNumber: 30,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"\".concat(active === i ? \"opacity-100 duration-700\" : \"opacity-0\", \" text-xs\"),\n                                children: menu.name\n                            }, void 0, false, {\n                                fileName: \"/home/yukanashi15/Keiru/src/app/component/NavBar.js\",\n                                lineNumber: 33,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/yukanashi15/Keiru/src/app/component/NavBar.js\",\n                        lineNumber: 24,\n                        columnNumber: 13\n                    }, undefined)\n                }, i, false, {\n                    fileName: \"/home/yukanashi15/Keiru/src/app/component/NavBar.js\",\n                    lineNumber: 23,\n                    columnNumber: 11\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"/home/yukanashi15/Keiru/src/app/component/NavBar.js\",\n            lineNumber: 21,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/yukanashi15/Keiru/src/app/component/NavBar.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n_s(NavBar, \"LYMHw6xE17pbh6ai9qaw76OM0Ms=\");\n_c = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\nvar _c;\n$RefreshReg$(_c, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50L05hdkJhci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUN3QztBQUNBO0FBQ0U7QUFFMUMsTUFBTUksU0FBUzs7SUFDYixNQUFNQyxRQUFRO1FBQ1o7WUFBRUMsTUFBTTtZQUFRQyxNQUFNO1lBQWdCQyxLQUFLO1lBQWlCQyx1QkFBUyw4REFBQ1Asb0RBQVdBOzs7OztRQUFHO1FBQ3BGO1lBQUVJLE1BQU07WUFBVUMsTUFBTTtZQUFrQkMsS0FBSztRQUFnQjtRQUMvRDtZQUFFRixNQUFNO1lBQVlDLE1BQU07WUFBd0JDLEtBQUs7UUFBaUI7UUFDeEU7WUFBRUYsTUFBTTtZQUFZQyxNQUFNO1lBQWdCQyxLQUFLO1FBQWlCO0tBQ2pFO0lBQ0QsTUFBTSxDQUFDRSxRQUFRQyxVQUFVLEdBQUdWLCtDQUFRQSxDQUFDO0lBRXJDLE1BQU1XLGtCQUFrQixDQUFDQztRQUN2QkYsVUFBVUU7SUFDWjtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDQztZQUFHRCxXQUFVO3NCQUNYVixNQUFNWSxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsa0JBQ2hCLDhEQUFDQztvQkFBV0wsV0FBVTs4QkFDcEIsNEVBQUNNO3dCQUNDTixXQUFXLCtEQUVWLE9BRENJLE1BQU1ULFNBQVMsNkJBQTZCO3dCQUU5Q1ksU0FBUyxJQUFNVixnQkFBZ0JPOzswQ0FFL0IsOERBQUNJO2dDQUFLUixXQUFXLFVBQStDLE9BQXJDSSxNQUFNVCxTQUFTLG1CQUFtQjswQ0FDM0QsNEVBQUNjO29DQUFTbEIsTUFBTVksS0FBS1gsSUFBSTs7Ozs7Ozs7Ozs7MENBRTNCLDhEQUFDZ0I7Z0NBQ0NSLFdBQVcsR0FFVixPQURDTCxXQUFXUyxJQUFJLDZCQUE2QixhQUM3QzswQ0FFQUQsS0FBS1osSUFBSTs7Ozs7Ozs7Ozs7O21CQWZQYTs7Ozs7Ozs7Ozs7Ozs7O0FBdUJuQjtHQXhDTWY7S0FBQUE7QUEwQ04sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnQvTmF2QmFyLmpzPzNmNDAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlcm9TZWN0aW9uIGZyb20gXCIuL0hlcm9TZWN0aW9uXCI7XG5pbXBvcnQgQWJvdXRTZWN0aW9uIGZyb20gXCIuL0Fib3V0U2VjdGlvblwiO1xuXG5jb25zdCBOYXZCYXIgPSAoKSA9PiB7XG4gIGNvbnN0IE1lbnVzID0gW1xuICAgIHsgbmFtZTogXCJIb21lXCIsIGljb246IFwiaG9tZS1vdXRsaW5lXCIsIGRpczogXCJ0cmFuc2xhdGUteC0wXCIsIHNlY3Rpb246IDxIZXJvU2VjdGlvbi8+IH0sXG4gICAgeyBuYW1lOiBcIkFib3V0c1wiLCBpY29uOiBcInBlb3BsZS1vdXRsaW5lXCIsIGRpczogXCJ0cmFuc2xhdGUteC0xNlwifSxcbiAgICB7IG5hbWU6IFwiUHJvamVjdHNcIiwgaWNvbjogXCJjb2RlLXdvcmtpbmctb3V0bGluZVwiLCBkaXM6IFwidHJhbnNsYXRlLXgtMzJcIiB9LFxuICAgIHsgbmFtZTogXCJDb250YWN0c1wiLCBpY29uOiBcImNhbGwtb3V0bGluZVwiLCBkaXM6IFwidHJhbnNsYXRlLXgtNDhcIiB9LFxuICBdO1xuICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoMCk7XG5cbiAgY29uc3QgaGFuZGxlTWVudUNsaWNrID0gKGluZGV4KSA9PiB7XG4gICAgc2V0QWN0aXZlKGluZGV4KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgYm90dG9tLTAgbGVmdC0wIHJpZ2h0LTAgYmctYmxhY2sgYmctb3BhY2l0eS01MCBweC02IHB5LTIgbWItNSB6LTUwIG1heC13LW1kIG14LWF1dG8gYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCByb3VuZGVkLWZ1bGxcIj5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciByZWxhdGl2ZVwiPlxuICAgICAgICB7TWVudXMubWFwKChtZW51LCBpKSA9PiAoXG4gICAgICAgICAgPGxpIGtleT17aX0gY2xhc3NOYW1lPVwibXgtMiBtdC01XCI+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4IGZsZXgtY29sIHRleHQtY2VudGVyIGN1cnNvci1wb2ludGVyIHRyYW5zaXRpb24tb3BhY2l0eSAke1xuICAgICAgICAgICAgICAgIGkgPT09IGFjdGl2ZSA/IFwidGV4dC13aGl0ZSB0ZXh0LWN5YW4tNDAwXCIgOiBcInRleHQtZ3JheS0zMDBcIlxuICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlTWVudUNsaWNrKGkpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2B0ZXh0LXhsJHtpID09PSBhY3RpdmUgPyBcIiB0ZXh0LWN5YW4tNDAwXCIgOiBcIlwifWB9PlxuICAgICAgICAgICAgICAgIDxpb24taWNvbiBuYW1lPXttZW51Lmljb259PjwvaW9uLWljb24+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake1xuICAgICAgICAgICAgICAgICAgYWN0aXZlID09PSBpID8gXCJvcGFjaXR5LTEwMCBkdXJhdGlvbi03MDBcIiA6IFwib3BhY2l0eS0wXCJcbiAgICAgICAgICAgICAgICB9IHRleHQteHNgfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge21lbnUubmFtZX1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdkJhcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiSGVyb1NlY3Rpb24iLCJBYm91dFNlY3Rpb24iLCJOYXZCYXIiLCJNZW51cyIsIm5hbWUiLCJpY29uIiwiZGlzIiwic2VjdGlvbiIsImFjdGl2ZSIsInNldEFjdGl2ZSIsImhhbmRsZU1lbnVDbGljayIsImluZGV4IiwiZGl2IiwiY2xhc3NOYW1lIiwidWwiLCJtYXAiLCJtZW51IiwiaSIsImxpIiwiYSIsIm9uQ2xpY2siLCJzcGFuIiwiaW9uLWljb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/component/NavBar.js\n"));

/***/ })

});