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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"cfc3ffffbd15\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/ODQ3ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcImNmYzNmZmZmYmQxNVwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/component/HeroSection.js":
/*!******************************************!*\
  !*** ./src/app/component/HeroSection.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_type_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-type-animation */ \"(app-pages-browser)/./node_modules/react-type-animation/dist/esm/index.es.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/animation/hooks/use-animation.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _SpotlightButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SpotlightButton */ \"(app-pages-browser)/./src/app/component/SpotlightButton.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst HeroSection = ()=>{\n    _s();\n    var _s1 = $RefreshSig$();\n    const [currentName, setCurrentName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Jameson\");\n    const [handleClick, setHandleClick] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const controls = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useAnimation)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        controls.start({\n            opacity: 1,\n            scale: 1\n        });\n    }, [\n        currentName,\n        controls\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            controls.start({\n                opacity: 0,\n                scale: 0.5\n            }).then(()=>{\n                setCurrentName((prevName)=>prevName === \"Jameson\" ? \"Junell\" : \"Jameson\");\n                controls.start({\n                    opacity: 1,\n                    scale: 1\n                });\n            });\n        }, 4000);\n        return ()=>clearInterval(interval);\n    }, [\n        controls\n    ]);\n    const handleNameChange = ()=>{\n        _s1();\n        (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n            controls.start({\n                opacity: 0,\n                scale: 0.5\n            }).then(()=>{\n                setCurrentName((prevName)=>prevName === \"Jameson\" ? \"Junell\" : \"Jameson\");\n                controls.start({\n                    opacity: 1,\n                    scale: 1\n                });\n            });\n        });\n    };\n    _s1(handleNameChange, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"lg:py-16 min-h-screen p-20\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"grid grid-cols sm:grid-cols-12\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                    initial: {\n                        opacity: 0,\n                        scale: 0.5\n                    },\n                    animate: {\n                        opacity: 1,\n                        scale: 1\n                    },\n                    transition: {\n                        duration: 0.5\n                    },\n                    whileHover: {\n                        scale: 1.05,\n                        border: \"1px solid cyan\"\n                    },\n                    className: \"col-span-8 place-self-center text-center mt-10 sm:text-left justify-self-start bg-black bg-opacity-70 p-10 rounded-md cursor-pointer\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-white mb-4 text-6xl lg:text-6xl font-extrabold\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-white bg-clip-text\",\n                                    children: [\n                                        \"Hello, I'm\",\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/yukanashi15/Keiru/src/app/component/HeroSection.js\",\n                                    lineNumber: 48,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_type_animation__WEBPACK_IMPORTED_MODULE_2__.TypeAnimation, {\n                                    sequence: [\n                                        currentName,\n                                        3000,\n                                        \"Junell\",\n                                        4000\n                                    ],\n                                    wrapper: \"span\",\n                                    style: {\n                                        color: \"cyan\"\n                                    },\n                                    speed: 50,\n                                    repeat: Infinity,\n                                    onComplete: handleNameChange\n                                }, void 0, false, {\n                                    fileName: \"/home/yukanashi15/Keiru/src/app/component/HeroSection.js\",\n                                    lineNumber: 49,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/yukanashi15/Keiru/src/app/component/HeroSection.js\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-cyan text-4xl lg:text-2xl max-w-lg\",\n                            children: \"We are passionate aspiring IT professionals in various fields, like full-stack development, graphic design, and many more. Explore our website to know us more. Let's collaborate on our works!\"\n                        }, void 0, false, {\n                            fileName: \"/home/yukanashi15/Keiru/src/app/component/HeroSection.js\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"col-span-5\"\n                        }, void 0, false, {\n                            fileName: \"/home/yukanashi15/Keiru/src/app/component/HeroSection.js\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SpotlightButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                            fileName: \"/home/yukanashi15/Keiru/src/app/component/HeroSection.js\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/yukanashi15/Keiru/src/app/component/HeroSection.js\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                    initial: {\n                        opacity: 0,\n                        scale: 0.5\n                    },\n                    animate: controls,\n                    transition: {\n                        duration: 0.5\n                    },\n                    className: \"col-span-4 place-self-center lg:mt-0\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"rounded-full bg-[#303333] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative bg-opacity-50\",\n                        children: [\n                            currentName === \"Jameson\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                src: \"/images/jameson.png\",\n                                alt: \"Jameson's photo\",\n                                className: \"absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full h-80\",\n                                width: 300,\n                                height: 300\n                            }, void 0, false, {\n                                fileName: \"/home/yukanashi15/Keiru/src/app/component/HeroSection.js\",\n                                lineNumber: 76,\n                                columnNumber: 15\n                            }, undefined),\n                            currentName === \"Junell\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                src: \"/images/junell.jpeg\",\n                                alt: \"Junell's photo\",\n                                className: \"absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full h-80\",\n                                width: 300,\n                                height: 300\n                            }, void 0, false, {\n                                fileName: \"/home/yukanashi15/Keiru/src/app/component/HeroSection.js\",\n                                lineNumber: 85,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/yukanashi15/Keiru/src/app/component/HeroSection.js\",\n                        lineNumber: 74,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/yukanashi15/Keiru/src/app/component/HeroSection.js\",\n                    lineNumber: 68,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/yukanashi15/Keiru/src/app/component/HeroSection.js\",\n            lineNumber: 39,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/yukanashi15/Keiru/src/app/component/HeroSection.js\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, undefined);\n};\n_s(HeroSection, \"cFXBP5BCr5u1qk7EuZDHOdtA5rE=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_5__.useAnimation\n    ];\n});\n_c = HeroSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeroSection);\nvar _c;\n$RefreshReg$(_c, \"HeroSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50L0hlcm9TZWN0aW9uLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ0U7QUFDQTtBQUNQO0FBQ2Y7QUFDaUI7QUFFaEQsTUFBTVMsY0FBYzs7O0lBQ2xCLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHViwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNXLGFBQWFDLGVBQWUsR0FBR1osK0NBQVFBLENBQUM7SUFDL0MsTUFBTWEsV0FBV1QsMkRBQVlBO0lBRTdCSCxnREFBU0EsQ0FBQztRQUNSWSxTQUFTQyxLQUFLLENBQUM7WUFBRUMsU0FBUztZQUFHQyxPQUFPO1FBQUU7SUFDeEMsR0FBRztRQUFDUDtRQUFhSTtLQUFTO0lBRTFCWixnREFBU0EsQ0FBQztRQUNSLE1BQU1nQixXQUFXQyxZQUFZO1lBQzNCTCxTQUFTQyxLQUFLLENBQUM7Z0JBQUVDLFNBQVM7Z0JBQUdDLE9BQU87WUFBSSxHQUFHRyxJQUFJLENBQUM7Z0JBQzlDVCxlQUFlLENBQUNVLFdBQWNBLGFBQWEsWUFBWSxXQUFXO2dCQUNsRVAsU0FBU0MsS0FBSyxDQUFDO29CQUFFQyxTQUFTO29CQUFHQyxPQUFPO2dCQUFFO1lBQ3hDO1FBQ0YsR0FBRztRQUVILE9BQU8sSUFBTUssY0FBY0o7SUFDN0IsR0FBRztRQUFDSjtLQUFTO0lBRWIsTUFBTVMsbUJBQW1COztRQUN2QnJCLGdEQUFTQSxDQUFFO1lBQ1RZLFNBQVNDLEtBQUssQ0FBQztnQkFBRUMsU0FBUztnQkFBR0MsT0FBTztZQUFJLEdBQUdHLElBQUksQ0FBQztnQkFDOUNULGVBQWUsQ0FBQ1UsV0FBY0EsYUFBYSxZQUFZLFdBQVc7Z0JBQ2xFUCxTQUFTQyxLQUFLLENBQUM7b0JBQUVDLFNBQVM7b0JBQUdDLE9BQU87Z0JBQUU7WUFDeEM7UUFDRjtJQUNGO1FBUE1NO0lBU04scUJBQ0UsOERBQUNDO1FBQVFDLFdBQVU7a0JBQ2pCLDRFQUFDQztZQUFJRCxXQUFVOzs4QkFDYiw4REFBQ3JCLGlEQUFNQSxDQUFDc0IsR0FBRztvQkFDVEMsU0FBUzt3QkFBRVgsU0FBUzt3QkFBR0MsT0FBTztvQkFBSTtvQkFDbENXLFNBQVM7d0JBQUVaLFNBQVM7d0JBQUdDLE9BQU87b0JBQUU7b0JBQ2hDWSxZQUFZO3dCQUFFQyxVQUFVO29CQUFJO29CQUM1QkMsWUFBWTt3QkFBRWQsT0FBTzt3QkFBTWUsUUFBUTtvQkFBaUI7b0JBQ3BEUCxXQUFVOztzQ0FFViw4REFBQ1E7NEJBQUdSLFdBQVU7OzhDQUNaLDhEQUFDUztvQ0FBS1QsV0FBVTs7d0NBQTBCO3dDQUFnQjs7Ozs7Ozs4Q0FDMUQsOERBQUN0QiwrREFBYUE7b0NBQ1pnQyxVQUFVO3dDQUFDekI7d0NBQWE7d0NBQU07d0NBQVU7cUNBQUs7b0NBQzdDMEIsU0FBUTtvQ0FDUkMsT0FBTzt3Q0FBRUMsT0FBTztvQ0FBTztvQ0FDdkJDLE9BQU87b0NBQ1BDLFFBQVFDO29DQUNSQyxZQUFZbkI7Ozs7Ozs7Ozs7OztzQ0FJaEIsOERBQUNvQjs0QkFBRWxCLFdBQVU7c0NBQTBDOzs7Ozs7c0NBS3ZELDhEQUFDQzs0QkFBSUQsV0FBVTs7Ozs7O3NDQUNmLDhEQUFDakIsd0RBQWVBOzs7Ozs7Ozs7Ozs4QkFHbEIsOERBQUNKLGlEQUFNQSxDQUFDc0IsR0FBRztvQkFDVEMsU0FBUzt3QkFBRVgsU0FBUzt3QkFBR0MsT0FBTztvQkFBSTtvQkFDbENXLFNBQVNkO29CQUNUZSxZQUFZO3dCQUFFQyxVQUFVO29CQUFJO29CQUM1QkwsV0FBVTs4QkFFViw0RUFBQ0M7d0JBQUlELFdBQVU7OzRCQUNaZixnQkFBZ0IsMkJBQ2YsOERBQUNILGtEQUFLQTtnQ0FDSnFDLEtBQUk7Z0NBQ0pDLEtBQUk7Z0NBQ0pwQixXQUFVO2dDQUNWcUIsT0FBTztnQ0FDUEMsUUFBUTs7Ozs7OzRCQUdYckMsZ0JBQWdCLDBCQUNmLDhEQUFDSCxrREFBS0E7Z0NBQ0pxQyxLQUFJO2dDQUNKQyxLQUFJO2dDQUNKcEIsV0FBVTtnQ0FDVnFCLE9BQU87Z0NBQ1BDLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFReEI7R0ExRk10Qzs7UUFHYUosdURBQVlBOzs7S0FIekJJO0FBNEZOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50L0hlcm9TZWN0aW9uLmpzP2MxZjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUeXBlQW5pbWF0aW9uIH0gZnJvbSAncmVhY3QtdHlwZS1hbmltYXRpb24nO1xuaW1wb3J0IHsgbW90aW9uLCB1c2VBbmltYXRpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCBCdXR0b25XcmFwcGVyIGZyb20gJy4vU3BvdGxpZ2h0QnV0dG9uJztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBTcG90bGlnaHRCdXR0b24gZnJvbSAnLi9TcG90bGlnaHRCdXR0b24nO1xuXG5jb25zdCBIZXJvU2VjdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgW2N1cnJlbnROYW1lLCBzZXRDdXJyZW50TmFtZV0gPSB1c2VTdGF0ZSgnSmFtZXNvbicpO1xuICBjb25zdCBbaGFuZGxlQ2xpY2ssIHNldEhhbmRsZUNsaWNrXSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IGNvbnRyb2xzID0gdXNlQW5pbWF0aW9uKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb250cm9scy5zdGFydCh7IG9wYWNpdHk6IDEsIHNjYWxlOiAxIH0pO1xuICB9LCBbY3VycmVudE5hbWUsIGNvbnRyb2xzXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGNvbnRyb2xzLnN0YXJ0KHsgb3BhY2l0eTogMCwgc2NhbGU6IDAuNSB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgc2V0Q3VycmVudE5hbWUoKHByZXZOYW1lKSA9PiAocHJldk5hbWUgPT09ICdKYW1lc29uJyA/ICdKdW5lbGwnIDogJ0phbWVzb24nKSk7XG4gICAgICAgIGNvbnRyb2xzLnN0YXJ0KHsgb3BhY2l0eTogMSwgc2NhbGU6IDEgfSk7XG4gICAgICB9KTtcbiAgICB9LCA0MDAwKTtcblxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgfSwgW2NvbnRyb2xzXSk7XG5cbiAgY29uc3QgaGFuZGxlTmFtZUNoYW5nZSA9ICgpID0+IHtcbiAgICB1c2VFZmZlY3QoICgpID0+IHtcbiAgICAgIGNvbnRyb2xzLnN0YXJ0KHsgb3BhY2l0eTogMCwgc2NhbGU6IDAuNSB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgc2V0Q3VycmVudE5hbWUoKHByZXZOYW1lKSA9PiAocHJldk5hbWUgPT09ICdKYW1lc29uJyA/ICdKdW5lbGwnIDogJ0phbWVzb24nKSk7XG4gICAgICAgIGNvbnRyb2xzLnN0YXJ0KHsgb3BhY2l0eTogMSwgc2NhbGU6IDEgfSk7XG4gICAgICB9KTtcbiAgICB9KVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibGc6cHktMTYgbWluLWgtc2NyZWVuIHAtMjBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMgc206Z3JpZC1jb2xzLTEyXCI+XG4gICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCBzY2FsZTogMC41IH19XG4gICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCBzY2FsZTogMSB9fVxuICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNSB9fVxuICAgICAgICAgIHdoaWxlSG92ZXI9e3sgc2NhbGU6IDEuMDUsIGJvcmRlcjogXCIxcHggc29saWQgY3lhblwiIH19XG4gICAgICAgICAgY2xhc3NOYW1lPVwiY29sLXNwYW4tOCBwbGFjZS1zZWxmLWNlbnRlciB0ZXh0LWNlbnRlciBtdC0xMCBzbTp0ZXh0LWxlZnQganVzdGlmeS1zZWxmLXN0YXJ0IGJnLWJsYWNrIGJnLW9wYWNpdHktNzAgcC0xMCByb3VuZGVkLW1kIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIG1iLTQgdGV4dC02eGwgbGc6dGV4dC02eGwgZm9udC1leHRyYWJvbGRcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgYmctY2xpcC10ZXh0XCI+SGVsbG8sIEkmYXBvcztteycgJ308L3NwYW4+XG4gICAgICAgICAgICA8VHlwZUFuaW1hdGlvblxuICAgICAgICAgICAgICBzZXF1ZW5jZT17W2N1cnJlbnROYW1lLCAzMDAwLCAnSnVuZWxsJywgNDAwMF19XG4gICAgICAgICAgICAgIHdyYXBwZXI9XCJzcGFuXCJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiY3lhblwiIH19XG4gICAgICAgICAgICAgIHNwZWVkPXs1MH1cbiAgICAgICAgICAgICAgcmVwZWF0PXtJbmZpbml0eX1cbiAgICAgICAgICAgICAgb25Db21wbGV0ZT17aGFuZGxlTmFtZUNoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9oMT5cblxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY3lhbiB0ZXh0LTR4bCBsZzp0ZXh0LTJ4bCBtYXgtdy1sZ1wiPlxuICAgICAgICAgICAgV2UgYXJlIHBhc3Npb25hdGUgYXNwaXJpbmcgSVQgcHJvZmVzc2lvbmFscyBpbiB2YXJpb3VzIGZpZWxkcywgbGlrZVxuICAgICAgICAgICAgZnVsbC1zdGFjayBkZXZlbG9wbWVudCwgZ3JhcGhpYyBkZXNpZ24sIGFuZCBtYW55IG1vcmUuIEV4cGxvcmUgb3VyIHdlYnNpdGUgdG9cbiAgICAgICAgICAgIGtub3cgdXMgbW9yZS4gTGV0J3MgY29sbGFib3JhdGUgb24gb3VyIHdvcmtzIVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTVcIj48L2Rpdj5cbiAgICAgICAgICA8U3BvdGxpZ2h0QnV0dG9uIC8+XG4gICAgICAgIDwvbW90aW9uLmRpdj5cblxuICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgc2NhbGU6IDAuNSB9fVxuICAgICAgICAgIGFuaW1hdGU9e2NvbnRyb2xzfVxuICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNSB9fVxuICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC1zcGFuLTQgcGxhY2Utc2VsZi1jZW50ZXIgbGc6bXQtMFwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBiZy1bIzMwMzMzM10gdy1bMjUwcHhdIGgtWzI1MHB4XSBsZzp3LVs0MDBweF0gbGc6aC1bNDAwcHhdIHJlbGF0aXZlIGJnLW9wYWNpdHktNTBcIj5cbiAgICAgICAgICAgIHtjdXJyZW50TmFtZSA9PT0gJ0phbWVzb24nICYmIChcbiAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9qYW1lc29uLnBuZ1wiXG4gICAgICAgICAgICAgICAgYWx0PVwiSmFtZXNvbidzIHBob3RvXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS14LTEvMiAtdHJhbnNsYXRlLXktMS8yIHRvcC0xLzIgbGVmdC0xLzIgcm91bmRlZC1mdWxsIGgtODBcIlxuICAgICAgICAgICAgICAgIHdpZHRoPXszMDB9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PXszMDB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge2N1cnJlbnROYW1lID09PSAnSnVuZWxsJyAmJiAoXG4gICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvanVuZWxsLmpwZWdcIlxuICAgICAgICAgICAgICAgIGFsdD1cIkp1bmVsbCdzIHBob3RvXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS14LTEvMiAtdHJhbnNsYXRlLXktMS8yIHRvcC0xLzIgbGVmdC0xLzIgcm91bmRlZC1mdWxsIGgtODBcIlxuICAgICAgICAgICAgICAgIHdpZHRoPXszMDB9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PXszMDB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZXJvU2VjdGlvbjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiVHlwZUFuaW1hdGlvbiIsIm1vdGlvbiIsInVzZUFuaW1hdGlvbiIsIkJ1dHRvbldyYXBwZXIiLCJJbWFnZSIsIlNwb3RsaWdodEJ1dHRvbiIsIkhlcm9TZWN0aW9uIiwiY3VycmVudE5hbWUiLCJzZXRDdXJyZW50TmFtZSIsImhhbmRsZUNsaWNrIiwic2V0SGFuZGxlQ2xpY2siLCJjb250cm9scyIsInN0YXJ0Iiwib3BhY2l0eSIsInNjYWxlIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInRoZW4iLCJwcmV2TmFtZSIsImNsZWFySW50ZXJ2YWwiLCJoYW5kbGVOYW1lQ2hhbmdlIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsImluaXRpYWwiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwid2hpbGVIb3ZlciIsImJvcmRlciIsImgxIiwic3BhbiIsInNlcXVlbmNlIiwid3JhcHBlciIsInN0eWxlIiwiY29sb3IiLCJzcGVlZCIsInJlcGVhdCIsIkluZmluaXR5Iiwib25Db21wbGV0ZSIsInAiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/component/HeroSection.js\n"));

/***/ })

});