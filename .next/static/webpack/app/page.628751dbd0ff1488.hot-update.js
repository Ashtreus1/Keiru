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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"c3f471fd91db\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/ODQ3ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcImMzZjQ3MWZkOTFkYlwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/component/HeroSection.js":
/*!******************************************!*\
  !*** ./src/app/component/HeroSection.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_type_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-type-animation */ \"(app-pages-browser)/./node_modules/react-type-animation/dist/esm/index.es.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/animation/hooks/use-animation.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _SpotlightButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SpotlightButton */ \"(app-pages-browser)/./src/app/component/SpotlightButton.js\");\n/* harmony import */ var _AboutSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AboutSection */ \"(app-pages-browser)/./src/app/component/AboutSection.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst HeroSection = ()=>{\n    _s();\n    var _s1 = $RefreshSig$();\n    const [currentName, setCurrentName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Jameson\");\n    const [buttonClick, setButtonClick] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const controls = (0,framer_motion__WEBPACK_IMPORTED_MODULE_6__.useAnimation)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        controls.start({\n            opacity: 1,\n            scale: 1\n        });\n    }, [\n        currentName,\n        controls\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            controls.start({\n                opacity: 0,\n                scale: 0.5\n            }).then(()=>{\n                setCurrentName((prevName)=>prevName === \"Jameson\" ? \"Junell\" : \"Jameson\");\n                controls.start({\n                    opacity: 1,\n                    scale: 1\n                });\n            });\n        }, 4000);\n        return ()=>clearInterval(interval);\n    }, [\n        controls\n    ]);\n    const handleNameChange = ()=>{\n        _s1();\n        (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n            controls.start({\n                opacity: 0,\n                scale: 0.5\n            }).then(()=>{\n                setCurrentName((prevName)=>prevName === \"Jameson\" ? \"Junell\" : \"Jameson\");\n                controls.start({\n                    opacity: 1,\n                    scale: 1\n                });\n            });\n        });\n    };\n    _s1(handleNameChange, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n    const handleClick = ()=>{\n        setButtonClick(1);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"lg:py-16 min-h-screen p-20\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"grid grid-cols sm:grid-cols-12\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {\n                    initial: {\n                        opacity: 0,\n                        scale: 0.5\n                    },\n                    animate: {\n                        opacity: 1,\n                        scale: 1\n                    },\n                    transition: {\n                        duration: 0.5\n                    },\n                    whileHover: {\n                        scale: 1.05,\n                        border: \"1px solid cyan\"\n                    },\n                    className: \"col-span-8 place-self-center text-center mt-10 sm:text-left justify-self-start bg-black bg-opacity-70 p-10 rounded-md cursor-pointer\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-white mb-4 text-6xl lg:text-6xl font-extrabold\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-white bg-clip-text\",\n                                    children: [\n                                        \"Hello, I'm\",\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/yukanashi15/Keiru/src/app/component/HeroSection.js\",\n                                    lineNumber: 55,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_type_animation__WEBPACK_IMPORTED_MODULE_2__.TypeAnimation, {\n                                    sequence: [\n                                        currentName,\n                                        3000,\n                                        \"Junell\",\n                                        4000\n                                    ],\n                                    wrapper: \"span\",\n                                    style: {\n                                        color: \"cyan\"\n                                    },\n                                    speed: 50,\n                                    repeat: Infinity,\n                                    onComplete: handleNameChange\n                                }, void 0, false, {\n                                    fileName: \"/home/yukanashi15/Keiru/src/app/component/HeroSection.js\",\n                                    lineNumber: 56,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/yukanashi15/Keiru/src/app/component/HeroSection.js\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-cyan text-4xl lg:text-2xl max-w-lg\",\n                            children: \"We are passionate aspiring IT professionals in various fields, like full-stack development, graphic design, and many more. Explore our website to know us more. Let's collaborate on our works!\"\n                        }, void 0, false, {\n                            fileName: \"/home/yukanashi15/Keiru/src/app/component/HeroSection.js\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"col-span-5\"\n                        }, void 0, false, {\n                            fileName: \"/home/yukanashi15/Keiru/src/app/component/HeroSection.js\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SpotlightButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            buttonClick: handleCLick\n                        }, void 0, false, {\n                            fileName: \"/home/yukanashi15/Keiru/src/app/component/HeroSection.js\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/yukanashi15/Keiru/src/app/component/HeroSection.js\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {\n                    initial: {\n                        opacity: 0,\n                        scale: 0.5\n                    },\n                    animate: controls,\n                    transition: {\n                        duration: 0.5\n                    },\n                    className: \"col-span-4 place-self-center lg:mt-0\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"rounded-full bg-[#303333] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative bg-opacity-50\",\n                        children: [\n                            currentName === \"Jameson\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                src: \"/images/jameson.png\",\n                                alt: \"Jameson's photo\",\n                                className: \"absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full h-80\",\n                                width: 300,\n                                height: 300\n                            }, void 0, false, {\n                                fileName: \"/home/yukanashi15/Keiru/src/app/component/HeroSection.js\",\n                                lineNumber: 83,\n                                columnNumber: 15\n                            }, undefined),\n                            currentName === \"Junell\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                src: \"/images/junell.jpeg\",\n                                alt: \"Junell's photo\",\n                                className: \"absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full h-80\",\n                                width: 300,\n                                height: 300\n                            }, void 0, false, {\n                                fileName: \"/home/yukanashi15/Keiru/src/app/component/HeroSection.js\",\n                                lineNumber: 92,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/yukanashi15/Keiru/src/app/component/HeroSection.js\",\n                        lineNumber: 81,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/yukanashi15/Keiru/src/app/component/HeroSection.js\",\n                    lineNumber: 75,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/yukanashi15/Keiru/src/app/component/HeroSection.js\",\n            lineNumber: 46,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/yukanashi15/Keiru/src/app/component/HeroSection.js\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, undefined);\n};\n_s(HeroSection, \"PIe4vz4e/docmjCbnDXyiAF4C2I=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_6__.useAnimation\n    ];\n});\n_c = HeroSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeroSection);\nvar _c;\n$RefreshReg$(_c, \"HeroSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50L0hlcm9TZWN0aW9uLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNFO0FBQ0E7QUFDTDtBQUNQO0FBQ1Y7QUFHL0IsTUFBTVMsY0FBYzs7O0lBQ2xCLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHViwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNXLGFBQWFDLGVBQWUsR0FBR1osK0NBQVFBLENBQUM7SUFDL0MsTUFBTWEsV0FBV1QsMkRBQVlBO0lBSTdCSCxnREFBU0EsQ0FBQztRQUNSWSxTQUFTQyxLQUFLLENBQUM7WUFBRUMsU0FBUztZQUFHQyxPQUFPO1FBQUU7SUFDeEMsR0FBRztRQUFDUDtRQUFhSTtLQUFTO0lBRTFCWixnREFBU0EsQ0FBQztRQUNSLE1BQU1nQixXQUFXQyxZQUFZO1lBQzNCTCxTQUFTQyxLQUFLLENBQUM7Z0JBQUVDLFNBQVM7Z0JBQUdDLE9BQU87WUFBSSxHQUFHRyxJQUFJLENBQUM7Z0JBQzlDVCxlQUFlLENBQUNVLFdBQWNBLGFBQWEsWUFBWSxXQUFXO2dCQUNsRVAsU0FBU0MsS0FBSyxDQUFDO29CQUFFQyxTQUFTO29CQUFHQyxPQUFPO2dCQUFFO1lBQ3hDO1FBQ0YsR0FBRztRQUVILE9BQU8sSUFBTUssY0FBY0o7SUFDN0IsR0FBRztRQUFDSjtLQUFTO0lBRWIsTUFBTVMsbUJBQW1COztRQUN2QnJCLGdEQUFTQSxDQUFFO1lBQ1RZLFNBQVNDLEtBQUssQ0FBQztnQkFBRUMsU0FBUztnQkFBR0MsT0FBTztZQUFJLEdBQUdHLElBQUksQ0FBQztnQkFDOUNULGVBQWUsQ0FBQ1UsV0FBY0EsYUFBYSxZQUFZLFdBQVc7Z0JBQ2xFUCxTQUFTQyxLQUFLLENBQUM7b0JBQUVDLFNBQVM7b0JBQUdDLE9BQU87Z0JBQUU7WUFDeEM7UUFDRjtJQUNGO1FBUE1NO0lBU04sTUFBTUMsY0FBYztRQUNsQlgsZUFBZTtJQUNqQjtJQUVBLHFCQUNFLDhEQUFDWTtRQUFRQyxXQUFVO2tCQUNqQiw0RUFBQ0M7WUFBSUQsV0FBVTs7OEJBQ2IsOERBQUN0QixpREFBTUEsQ0FBQ3VCLEdBQUc7b0JBQ1RDLFNBQVM7d0JBQUVaLFNBQVM7d0JBQUdDLE9BQU87b0JBQUk7b0JBQ2xDWSxTQUFTO3dCQUFFYixTQUFTO3dCQUFHQyxPQUFPO29CQUFFO29CQUNoQ2EsWUFBWTt3QkFBRUMsVUFBVTtvQkFBSTtvQkFDNUJDLFlBQVk7d0JBQUVmLE9BQU87d0JBQU1nQixRQUFRO29CQUFpQjtvQkFDcERQLFdBQVU7O3NDQUVWLDhEQUFDUTs0QkFBR1IsV0FBVTs7OENBQ1osOERBQUNTO29DQUFLVCxXQUFVOzt3Q0FBMEI7d0NBQWdCOzs7Ozs7OzhDQUMxRCw4REFBQ3ZCLCtEQUFhQTtvQ0FDWmlDLFVBQVU7d0NBQUMxQjt3Q0FBYTt3Q0FBTTt3Q0FBVTtxQ0FBSztvQ0FDN0MyQixTQUFRO29DQUNSQyxPQUFPO3dDQUFFQyxPQUFPO29DQUFPO29DQUN2QkMsT0FBTztvQ0FDUEMsUUFBUUM7b0NBQ1JDLFlBQVlwQjs7Ozs7Ozs7Ozs7O3NDQUloQiw4REFBQ3FCOzRCQUFFbEIsV0FBVTtzQ0FBMEM7Ozs7OztzQ0FLdkQsOERBQUNDOzRCQUFJRCxXQUFVOzs7Ozs7c0NBQ2YsOERBQUNwQix3REFBZUE7NEJBQUNNLGFBQWFpQzs7Ozs7Ozs7Ozs7OzhCQUdoQyw4REFBQ3pDLGlEQUFNQSxDQUFDdUIsR0FBRztvQkFDVEMsU0FBUzt3QkFBRVosU0FBUzt3QkFBR0MsT0FBTztvQkFBSTtvQkFDbENZLFNBQVNmO29CQUNUZ0IsWUFBWTt3QkFBRUMsVUFBVTtvQkFBSTtvQkFDNUJMLFdBQVU7OEJBRVYsNEVBQUNDO3dCQUFJRCxXQUFVOzs0QkFDWmhCLGdCQUFnQiwyQkFDZiw4REFBQ0Ysa0RBQUtBO2dDQUNKc0MsS0FBSTtnQ0FDSkMsS0FBSTtnQ0FDSnJCLFdBQVU7Z0NBQ1ZzQixPQUFPO2dDQUNQQyxRQUFROzs7Ozs7NEJBR1h2QyxnQkFBZ0IsMEJBQ2YsOERBQUNGLGtEQUFLQTtnQ0FDSnNDLEtBQUk7Z0NBQ0pDLEtBQUk7Z0NBQ0pyQixXQUFVO2dDQUNWc0IsT0FBTztnQ0FDUEMsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVF4QjtHQWhHTXhDOztRQUdhSix1REFBWUE7OztLQUh6Qkk7QUFrR04sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnQvSGVyb1NlY3Rpb24uanM/YzFmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFR5cGVBbmltYXRpb24gfSBmcm9tICdyZWFjdC10eXBlLWFuaW1hdGlvbic7XG5pbXBvcnQgeyBtb3Rpb24sIHVzZUFuaW1hdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IFNwb3RsaWdodEJ1dHRvbiBmcm9tICcuL1Nwb3RsaWdodEJ1dHRvbic7XG5pbXBvcnQgQWJvdXRTZWN0aW9uIGZyb20gJy4vQWJvdXRTZWN0aW9uJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuXG5cbmNvbnN0IEhlcm9TZWN0aW9uID0gKCkgPT4ge1xuICBjb25zdCBbY3VycmVudE5hbWUsIHNldEN1cnJlbnROYW1lXSA9IHVzZVN0YXRlKCdKYW1lc29uJyk7XG4gIGNvbnN0IFtidXR0b25DbGljaywgc2V0QnV0dG9uQ2xpY2tdID0gdXNlU3RhdGUoMClcbiAgY29uc3QgY29udHJvbHMgPSB1c2VBbmltYXRpb24oKTtcblxuICBcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnRyb2xzLnN0YXJ0KHsgb3BhY2l0eTogMSwgc2NhbGU6IDEgfSk7XG4gIH0sIFtjdXJyZW50TmFtZSwgY29udHJvbHNdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgY29udHJvbHMuc3RhcnQoeyBvcGFjaXR5OiAwLCBzY2FsZTogMC41IH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICBzZXRDdXJyZW50TmFtZSgocHJldk5hbWUpID0+IChwcmV2TmFtZSA9PT0gJ0phbWVzb24nID8gJ0p1bmVsbCcgOiAnSmFtZXNvbicpKTtcbiAgICAgICAgY29udHJvbHMuc3RhcnQoeyBvcGFjaXR5OiAxLCBzY2FsZTogMSB9KTtcbiAgICAgIH0pO1xuICAgIH0sIDQwMDApO1xuXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICB9LCBbY29udHJvbHNdKTtcblxuICBjb25zdCBoYW5kbGVOYW1lQ2hhbmdlID0gKCkgPT4ge1xuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xuICAgICAgY29udHJvbHMuc3RhcnQoeyBvcGFjaXR5OiAwLCBzY2FsZTogMC41IH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICBzZXRDdXJyZW50TmFtZSgocHJldk5hbWUpID0+IChwcmV2TmFtZSA9PT0gJ0phbWVzb24nID8gJ0p1bmVsbCcgOiAnSmFtZXNvbicpKTtcbiAgICAgICAgY29udHJvbHMuc3RhcnQoeyBvcGFjaXR5OiAxLCBzY2FsZTogMSB9KTtcbiAgICAgIH0pO1xuICAgIH0pXG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgc2V0QnV0dG9uQ2xpY2soMSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibGc6cHktMTYgbWluLWgtc2NyZWVuIHAtMjBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMgc206Z3JpZC1jb2xzLTEyXCI+XG4gICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCBzY2FsZTogMC41IH19XG4gICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCBzY2FsZTogMSB9fVxuICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNSB9fVxuICAgICAgICAgIHdoaWxlSG92ZXI9e3sgc2NhbGU6IDEuMDUsIGJvcmRlcjogXCIxcHggc29saWQgY3lhblwiIH19XG4gICAgICAgICAgY2xhc3NOYW1lPVwiY29sLXNwYW4tOCBwbGFjZS1zZWxmLWNlbnRlciB0ZXh0LWNlbnRlciBtdC0xMCBzbTp0ZXh0LWxlZnQganVzdGlmeS1zZWxmLXN0YXJ0IGJnLWJsYWNrIGJnLW9wYWNpdHktNzAgcC0xMCByb3VuZGVkLW1kIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIG1iLTQgdGV4dC02eGwgbGc6dGV4dC02eGwgZm9udC1leHRyYWJvbGRcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgYmctY2xpcC10ZXh0XCI+SGVsbG8sIEkmYXBvcztteycgJ308L3NwYW4+XG4gICAgICAgICAgICA8VHlwZUFuaW1hdGlvblxuICAgICAgICAgICAgICBzZXF1ZW5jZT17W2N1cnJlbnROYW1lLCAzMDAwLCAnSnVuZWxsJywgNDAwMF19XG4gICAgICAgICAgICAgIHdyYXBwZXI9XCJzcGFuXCJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiY3lhblwiIH19XG4gICAgICAgICAgICAgIHNwZWVkPXs1MH1cbiAgICAgICAgICAgICAgcmVwZWF0PXtJbmZpbml0eX1cbiAgICAgICAgICAgICAgb25Db21wbGV0ZT17aGFuZGxlTmFtZUNoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9oMT5cblxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY3lhbiB0ZXh0LTR4bCBsZzp0ZXh0LTJ4bCBtYXgtdy1sZ1wiPlxuICAgICAgICAgICAgV2UgYXJlIHBhc3Npb25hdGUgYXNwaXJpbmcgSVQgcHJvZmVzc2lvbmFscyBpbiB2YXJpb3VzIGZpZWxkcywgbGlrZVxuICAgICAgICAgICAgZnVsbC1zdGFjayBkZXZlbG9wbWVudCwgZ3JhcGhpYyBkZXNpZ24sIGFuZCBtYW55IG1vcmUuIEV4cGxvcmUgb3VyIHdlYnNpdGUgdG9cbiAgICAgICAgICAgIGtub3cgdXMgbW9yZS4gTGV0J3MgY29sbGFib3JhdGUgb24gb3VyIHdvcmtzIVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTVcIj48L2Rpdj5cbiAgICAgICAgICA8U3BvdGxpZ2h0QnV0dG9uIGJ1dHRvbkNsaWNrPXtoYW5kbGVDTGlja30vPlxuICAgICAgICA8L21vdGlvbi5kaXY+XG5cbiAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHNjYWxlOiAwLjUgfX1cbiAgICAgICAgICBhbmltYXRlPXtjb250cm9sc31cbiAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjUgfX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtc3Bhbi00IHBsYWNlLXNlbGYtY2VudGVyIGxnOm10LTBcIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgYmctWyMzMDMzMzNdIHctWzI1MHB4XSBoLVsyNTBweF0gbGc6dy1bNDAwcHhdIGxnOmgtWzQwMHB4XSByZWxhdGl2ZSBiZy1vcGFjaXR5LTUwXCI+XG4gICAgICAgICAgICB7Y3VycmVudE5hbWUgPT09ICdKYW1lc29uJyAmJiAoXG4gICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvamFtZXNvbi5wbmdcIlxuICAgICAgICAgICAgICAgIGFsdD1cIkphbWVzb24ncyBwaG90b1wiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdHJhbnNmb3JtIC10cmFuc2xhdGUteC0xLzIgLXRyYW5zbGF0ZS15LTEvMiB0b3AtMS8yIGxlZnQtMS8yIHJvdW5kZWQtZnVsbCBoLTgwXCJcbiAgICAgICAgICAgICAgICB3aWR0aD17MzAwfVxuICAgICAgICAgICAgICAgIGhlaWdodD17MzAwfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtjdXJyZW50TmFtZSA9PT0gJ0p1bmVsbCcgJiYgKFxuICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL2p1bmVsbC5qcGVnXCJcbiAgICAgICAgICAgICAgICBhbHQ9XCJKdW5lbGwncyBwaG90b1wiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdHJhbnNmb3JtIC10cmFuc2xhdGUteC0xLzIgLXRyYW5zbGF0ZS15LTEvMiB0b3AtMS8yIGxlZnQtMS8yIHJvdW5kZWQtZnVsbCBoLTgwXCJcbiAgICAgICAgICAgICAgICB3aWR0aD17MzAwfVxuICAgICAgICAgICAgICAgIGhlaWdodD17MzAwfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVyb1NlY3Rpb247XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlR5cGVBbmltYXRpb24iLCJtb3Rpb24iLCJ1c2VBbmltYXRpb24iLCJTcG90bGlnaHRCdXR0b24iLCJBYm91dFNlY3Rpb24iLCJJbWFnZSIsIkhlcm9TZWN0aW9uIiwiY3VycmVudE5hbWUiLCJzZXRDdXJyZW50TmFtZSIsImJ1dHRvbkNsaWNrIiwic2V0QnV0dG9uQ2xpY2siLCJjb250cm9scyIsInN0YXJ0Iiwib3BhY2l0eSIsInNjYWxlIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInRoZW4iLCJwcmV2TmFtZSIsImNsZWFySW50ZXJ2YWwiLCJoYW5kbGVOYW1lQ2hhbmdlIiwiaGFuZGxlQ2xpY2siLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2IiwiaW5pdGlhbCIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJ3aGlsZUhvdmVyIiwiYm9yZGVyIiwiaDEiLCJzcGFuIiwic2VxdWVuY2UiLCJ3cmFwcGVyIiwic3R5bGUiLCJjb2xvciIsInNwZWVkIiwicmVwZWF0IiwiSW5maW5pdHkiLCJvbkNvbXBsZXRlIiwicCIsImhhbmRsZUNMaWNrIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/component/HeroSection.js\n"));

/***/ })

});