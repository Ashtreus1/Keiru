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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"9441b7dae030\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/ODQ3ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjk0NDFiN2RhZTAzMFwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/component/HeroSection.js":
/*!******************************************!*\
  !*** ./src/app/component/HeroSection.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _AboutSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AboutSection */ \"(app-pages-browser)/./src/app/component/AboutSection.js\");\n/* harmony import */ var react_type_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-type-animation */ \"(app-pages-browser)/./node_modules/react-type-animation/dist/esm/index.es.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/animation/hooks/use-animation.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _SpotlightButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SpotlightButton */ \"(app-pages-browser)/./src/app/component/SpotlightButton.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst HeroSection = ()=>{\n    _s();\n    const [currentName, setCurrentName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Jameson\");\n    const controls = (0,framer_motion__WEBPACK_IMPORTED_MODULE_7__.useAnimation)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        controls.start({\n            opacity: 1,\n            scale: 1\n        });\n    }, [\n        currentName,\n        controls\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            controls.start({\n                opacity: 0,\n                scale: 0.5\n            }).then(()=>{\n                setCurrentName((prevName)=>prevName === \"Jameson\" ? \"Junell\" : \"Jameson\");\n                controls.start({\n                    opacity: 1,\n                    scale: 1\n                });\n            });\n        }, 4000);\n        return ()=>clearInterval(interval);\n    }, [\n        controls\n    ]);\n    const handleNameChange = ()=>{\n        controls.start({\n            opacity: 0,\n            scale: 0.5\n        }).then(()=>{\n            setCurrentName((prevName)=>prevName === \"Jameson\" ? \"Junell\" : \"Jameson\");\n            controls.start({\n                opacity: 1,\n                scale: 1\n            });\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"lg:py-16 min-h-screen p-20\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"grid grid-cols sm:grid-cols-12\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {\n                    initial: {\n                        opacity: 0,\n                        scale: 0.5\n                    },\n                    animate: {\n                        opacity: 1,\n                        scale: 1\n                    },\n                    transition: {\n                        duration: 0.5\n                    },\n                    whileHover: {\n                        scale: 1.05,\n                        transition: {\n                            duration: 0.3\n                        },\n                        border: \"1px solid cyan\"\n                    },\n                    className: \"col-span-8 place-self-center text-center mt-10 sm:text-left justify-self-start bg-black bg-opacity-70 p-10 rounded-md cursor-pointer\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-white mb-4 text-6xl lg:text-6xl font-extrabold\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-white bg-clip-text\",\n                                    children: [\n                                        \"Hello, I'm\",\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/yukanashi15/Keiru/src/app/component/HeroSection.js\",\n                                    lineNumber: 48,\n                                    columnNumber: 11\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_type_animation__WEBPACK_IMPORTED_MODULE_3__.TypeAnimation, {\n                                    sequence: [\n                                        currentName,\n                                        3000,\n                                        \"Junell\",\n                                        4000\n                                    ],\n                                    wrapper: \"span\",\n                                    style: {\n                                        color: \"cyan\"\n                                    },\n                                    speed: 50,\n                                    repeat: Infinity,\n                                    onComplete: handleNameChange\n                                }, void 0, false, {\n                                    fileName: \"/home/yukanashi15/Keiru/src/app/component/HeroSection.js\",\n                                    lineNumber: 49,\n                                    columnNumber: 11\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/yukanashi15/Keiru/src/app/component/HeroSection.js\",\n                            lineNumber: 47,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-cyan text-4xl lg:text-2xl max-w-lg\",\n                            children: \"We are passionate aspiring IT professionals in various fields, like full-stack development, graphic design, and many more. Explore our website to know us more. Let's collaborate on our works!\"\n                        }, void 0, false, {\n                            fileName: \"/home/yukanashi15/Keiru/src/app/component/HeroSection.js\",\n                            lineNumber: 59,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"col-span-5\"\n                        }, void 0, false, {\n                            fileName: \"/home/yukanashi15/Keiru/src/app/component/HeroSection.js\",\n                            lineNumber: 64,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            href: \"#about\",\n                            onClick: ()=>{},\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SpotlightButton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                fileName: \"/home/yukanashi15/Keiru/src/app/component/HeroSection.js\",\n                                lineNumber: 67,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/yukanashi15/Keiru/src/app/component/HeroSection.js\",\n                            lineNumber: 65,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/yukanashi15/Keiru/src/app/component/HeroSection.js\",\n                    lineNumber: 39,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {\n                    initial: {\n                        opacity: 0,\n                        scale: 0.5\n                    },\n                    animate: controls,\n                    transition: {\n                        duration: 0.5\n                    },\n                    className: \"col-span-4 place-self-center lg:mt-0\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"rounded-full bg-[#303333] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative bg-opacity-50\",\n                        children: [\n                            currentName === \"Jameson\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                src: \"/images/jameson.png\",\n                                alt: \"hero image\",\n                                className: \"absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full h-80\",\n                                width: 300,\n                                height: 300\n                            }, void 0, false, {\n                                fileName: \"/home/yukanashi15/Keiru/src/app/component/HeroSection.js\",\n                                lineNumber: 79,\n                                columnNumber: 15\n                            }, undefined),\n                            currentName === \"Junell\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                src: \"/images/junell.jpg\",\n                                alt: \"hero image\",\n                                className: \"absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full h-80\",\n                                width: 300,\n                                height: 300\n                            }, void 0, false, {\n                                fileName: \"/home/yukanashi15/Keiru/src/app/component/HeroSection.js\",\n                                lineNumber: 88,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/yukanashi15/Keiru/src/app/component/HeroSection.js\",\n                        lineNumber: 77,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/yukanashi15/Keiru/src/app/component/HeroSection.js\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/yukanashi15/Keiru/src/app/component/HeroSection.js\",\n            lineNumber: 38,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/yukanashi15/Keiru/src/app/component/HeroSection.js\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, undefined);\n};\n_s(HeroSection, \"A+3hzps53MqyXMMT6xUQ147FZg0=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_7__.useAnimation\n    ];\n});\n_c = HeroSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeroSection);\nvar _c;\n$RefreshReg$(_c, \"HeroSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50L0hlcm9TZWN0aW9uLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDbUQ7QUFDVjtBQUNZO0FBQ0E7QUFDekI7QUFDbUI7QUFDaEI7QUFFL0IsTUFBTVUsY0FBYzs7SUFDbEIsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdYLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU1ZLFdBQVdQLDJEQUFZQTtJQUU3QkosZ0RBQVNBLENBQUM7UUFDUlcsU0FBU0MsS0FBSyxDQUFDO1lBQUVDLFNBQVM7WUFBR0MsT0FBTztRQUFFO0lBQ3hDLEdBQUc7UUFBQ0w7UUFBYUU7S0FBUztJQUUxQlgsZ0RBQVNBLENBQUM7UUFDUixNQUFNZSxXQUFXQyxZQUFZO1lBQzNCTCxTQUFTQyxLQUFLLENBQUM7Z0JBQUVDLFNBQVM7Z0JBQUdDLE9BQU87WUFBSSxHQUFHRyxJQUFJLENBQUM7Z0JBQzlDUCxlQUFlLENBQUNRLFdBQWNBLGFBQWEsWUFBWSxXQUFXO2dCQUNsRVAsU0FBU0MsS0FBSyxDQUFDO29CQUFFQyxTQUFTO29CQUFHQyxPQUFPO2dCQUFFO1lBQ3hDO1FBQ0YsR0FBRztRQUVILE9BQU8sSUFBTUssY0FBY0o7SUFDN0IsR0FBRztRQUFDSjtLQUFTO0lBRWIsTUFBTVMsbUJBQW1CO1FBQ3ZCVCxTQUFTQyxLQUFLLENBQUM7WUFBRUMsU0FBUztZQUFHQyxPQUFPO1FBQUksR0FBR0csSUFBSSxDQUFDO1lBQzlDUCxlQUFlLENBQUNRLFdBQWNBLGFBQWEsWUFBWSxXQUFXO1lBQ2xFUCxTQUFTQyxLQUFLLENBQUM7Z0JBQUVDLFNBQVM7Z0JBQUdDLE9BQU87WUFBRTtRQUN4QztJQUNGO0lBRUEscUJBQ0UsOERBQUNPO1FBQVFDLFdBQVU7a0JBQ2pCLDRFQUFDQztZQUFJRCxXQUFVOzs4QkFDZiw4REFBQ25CLGlEQUFNQSxDQUFDb0IsR0FBRztvQkFDVEMsU0FBUzt3QkFBRVgsU0FBUzt3QkFBR0MsT0FBTztvQkFBSTtvQkFDbENXLFNBQVM7d0JBQUVaLFNBQVM7d0JBQUdDLE9BQU87b0JBQUU7b0JBQ2hDWSxZQUFZO3dCQUFFQyxVQUFVO29CQUFJO29CQUM1QkMsWUFBWTt3QkFBRWQsT0FBTzt3QkFBTVksWUFBWTs0QkFBRUMsVUFBVTt3QkFBSTt3QkFBR0UsUUFBUTtvQkFBaUI7b0JBQ25GUCxXQUFVOztzQ0FHViw4REFBQ1E7NEJBQUdSLFdBQVU7OzhDQUNaLDhEQUFDUztvQ0FBS1QsV0FBVTs7d0NBQTBCO3dDQUFnQjs7Ozs7Ozs4Q0FDMUQsOERBQUNwQiwrREFBYUE7b0NBQ1o4QixVQUFVO3dDQUFDdkI7d0NBQWE7d0NBQU07d0NBQVU7cUNBQUs7b0NBQzdDd0IsU0FBUTtvQ0FDUkMsT0FBTzt3Q0FBRUMsT0FBTztvQ0FBTztvQ0FDdkJDLE9BQU87b0NBQ1BDLFFBQVFDO29DQUNSQyxZQUFZbkI7Ozs7Ozs7Ozs7OztzQ0FJaEIsOERBQUNvQjs0QkFBRWxCLFdBQVU7c0NBQTBDOzs7Ozs7c0NBS3ZELDhEQUFDQzs0QkFBSUQsV0FBVTs7Ozs7O3NDQUNmLDhEQUFDakIsaURBQUlBOzRCQUFDb0MsTUFBSzs0QkFBU0MsU0FBUyxLQUU3QjtzQ0FBSSw0RUFBQ3BDLHdEQUFhQTs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFJbEIsOERBQUNILGlEQUFNQSxDQUFDb0IsR0FBRztvQkFDVEMsU0FBUzt3QkFBRVgsU0FBUzt3QkFBR0MsT0FBTztvQkFBSTtvQkFDbENXLFNBQVNkO29CQUNUZSxZQUFZO3dCQUFFQyxVQUFVO29CQUFJO29CQUM1QkwsV0FBVTs4QkFFViw0RUFBQ0M7d0JBQUlELFdBQVU7OzRCQUNaYixnQkFBZ0IsMkJBQ2YsOERBQUNGLGtEQUFLQTtnQ0FDSm9DLEtBQUk7Z0NBQ0pDLEtBQUk7Z0NBQ0p0QixXQUFVO2dDQUNWdUIsT0FBTztnQ0FDUEMsUUFBUTs7Ozs7OzRCQUdYckMsZ0JBQWdCLDBCQUNmLDhEQUFDRixrREFBS0E7Z0NBQ0pvQyxLQUFJO2dDQUNKQyxLQUFJO2dDQUNKdEIsV0FBVTtnQ0FDVnVCLE9BQU87Z0NBQ1BDLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFReEI7R0EzRk10Qzs7UUFFYUosdURBQVlBOzs7S0FGekJJO0FBNkZOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50L0hlcm9TZWN0aW9uLmpzP2MxZjAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFib3V0U2VjdGlvbiBmcm9tICcuL0Fib3V0U2VjdGlvbidcbmltcG9ydCB7IFR5cGVBbmltYXRpb24gfSBmcm9tICdyZWFjdC10eXBlLWFuaW1hdGlvbic7XG5pbXBvcnQgeyBtb3Rpb24sIHVzZUFuaW1hdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEJ1dHRvbldyYXBwZXIgIGZyb20gJy4vU3BvdGxpZ2h0QnV0dG9uJztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcblxuY29uc3QgSGVyb1NlY3Rpb24gPSAoKSA9PiB7XG4gIGNvbnN0IFtjdXJyZW50TmFtZSwgc2V0Q3VycmVudE5hbWVdID0gdXNlU3RhdGUoJ0phbWVzb24nKTtcbiAgY29uc3QgY29udHJvbHMgPSB1c2VBbmltYXRpb24oKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnRyb2xzLnN0YXJ0KHsgb3BhY2l0eTogMSwgc2NhbGU6IDEgfSk7XG4gIH0sIFtjdXJyZW50TmFtZSwgY29udHJvbHNdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgY29udHJvbHMuc3RhcnQoeyBvcGFjaXR5OiAwLCBzY2FsZTogMC41IH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICBzZXRDdXJyZW50TmFtZSgocHJldk5hbWUpID0+IChwcmV2TmFtZSA9PT0gJ0phbWVzb24nID8gJ0p1bmVsbCcgOiAnSmFtZXNvbicpKTtcbiAgICAgICAgY29udHJvbHMuc3RhcnQoeyBvcGFjaXR5OiAxLCBzY2FsZTogMSB9KTtcbiAgICAgIH0pO1xuICAgIH0sIDQwMDApO1xuXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICB9LCBbY29udHJvbHNdKTtcblxuICBjb25zdCBoYW5kbGVOYW1lQ2hhbmdlID0gKCkgPT4ge1xuICAgIGNvbnRyb2xzLnN0YXJ0KHsgb3BhY2l0eTogMCwgc2NhbGU6IDAuNSB9KS50aGVuKCgpID0+IHtcbiAgICAgIHNldEN1cnJlbnROYW1lKChwcmV2TmFtZSkgPT4gKHByZXZOYW1lID09PSAnSmFtZXNvbicgPyAnSnVuZWxsJyA6ICdKYW1lc29uJykpO1xuICAgICAgY29udHJvbHMuc3RhcnQoeyBvcGFjaXR5OiAxLCBzY2FsZTogMSB9KTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImxnOnB5LTE2IG1pbi1oLXNjcmVlbiBwLTIwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzIHNtOmdyaWQtY29scy0xMlwiPlxuICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCBzY2FsZTogMC41IH19XG4gICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgc2NhbGU6IDEgfX1cbiAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC41IH19XG4gICAgICAgIHdoaWxlSG92ZXI9e3sgc2NhbGU6IDEuMDUsIHRyYW5zaXRpb246IHsgZHVyYXRpb246IDAuMyB9LCBib3JkZXI6IFwiMXB4IHNvbGlkIGN5YW5cIiB9fVxuICAgICAgICBjbGFzc05hbWU9XCJjb2wtc3Bhbi04IHBsYWNlLXNlbGYtY2VudGVyIHRleHQtY2VudGVyIG10LTEwIHNtOnRleHQtbGVmdCBqdXN0aWZ5LXNlbGYtc3RhcnQgYmctYmxhY2sgYmctb3BhY2l0eS03MCBwLTEwIHJvdW5kZWQtbWQgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgPlxuXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIG1iLTQgdGV4dC02eGwgbGc6dGV4dC02eGwgZm9udC1leHRyYWJvbGRcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGJnLWNsaXAtdGV4dFwiPkhlbGxvLCBJJmFwb3M7bXsnICd9PC9zcGFuPlxuICAgICAgICAgIDxUeXBlQW5pbWF0aW9uXG4gICAgICAgICAgICBzZXF1ZW5jZT17W2N1cnJlbnROYW1lLCAzMDAwLCAnSnVuZWxsJywgNDAwMF19XG4gICAgICAgICAgICB3cmFwcGVyPVwic3BhblwiXG4gICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCJjeWFuXCIgfX1cbiAgICAgICAgICAgIHNwZWVkPXs1MH1cbiAgICAgICAgICAgIHJlcGVhdD17SW5maW5pdHl9XG4gICAgICAgICAgICBvbkNvbXBsZXRlPXtoYW5kbGVOYW1lQ2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvaDE+XG5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jeWFuIHRleHQtNHhsIGxnOnRleHQtMnhsIG1heC13LWxnXCI+XG4gICAgICAgICAgV2UgYXJlIHBhc3Npb25hdGUgYXNwaXJpbmcgSVQgcHJvZmVzc2lvbmFscyBpbiB2YXJpb3VzIGZpZWxkcywgbGlrZVxuICAgICAgICAgIGZ1bGwtc3RhY2sgZGV2ZWxvcG1lbnQsIGdyYXBoaWMgZGVzaWduLCBhbmQgbWFueSBtb3JlLiBFeHBsb3JlIG91ciB3ZWJzaXRlIHRvXG4gICAgICAgICAga25vdyB1cyBtb3JlLiBMZXQncyBjb2xsYWJvcmF0ZSBvbiBvdXIgd29ya3MhXG4gICAgICAgIDwvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi01XCI+PC9kaXY+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIjYWJvdXRcIiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgXG4gICAgICAgIH19Pns8QnV0dG9uV3JhcHBlciAvPn08L0xpbms+XG4gICAgICA8L21vdGlvbi5kaXY+XG5cblxuICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgc2NhbGU6IDAuNSB9fVxuICAgICAgICAgIGFuaW1hdGU9e2NvbnRyb2xzfVxuICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNSB9fVxuICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC1zcGFuLTQgcGxhY2Utc2VsZi1jZW50ZXIgbGc6bXQtMFwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBiZy1bIzMwMzMzM10gdy1bMjUwcHhdIGgtWzI1MHB4XSBsZzp3LVs0MDBweF0gbGc6aC1bNDAwcHhdIHJlbGF0aXZlIGJnLW9wYWNpdHktNTBcIj5cbiAgICAgICAgICAgIHtjdXJyZW50TmFtZSA9PT0gJ0phbWVzb24nICYmIChcbiAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9qYW1lc29uLnBuZ1wiXG4gICAgICAgICAgICAgICAgYWx0PVwiaGVybyBpbWFnZVwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdHJhbnNmb3JtIC10cmFuc2xhdGUteC0xLzIgLXRyYW5zbGF0ZS15LTEvMiB0b3AtMS8yIGxlZnQtMS8yIHJvdW5kZWQtZnVsbCBoLTgwXCJcbiAgICAgICAgICAgICAgICB3aWR0aD17MzAwfVxuICAgICAgICAgICAgICAgIGhlaWdodD17MzAwfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtjdXJyZW50TmFtZSA9PT0gJ0p1bmVsbCcgJiYgKFxuICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL2p1bmVsbC5qcGdcIlxuICAgICAgICAgICAgICAgIGFsdD1cImhlcm8gaW1hZ2VcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXgtMS8yIC10cmFuc2xhdGUteS0xLzIgdG9wLTEvMiBsZWZ0LTEvMiByb3VuZGVkLWZ1bGwgaC04MFwiXG4gICAgICAgICAgICAgICAgd2lkdGg9ezMwMH1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezMwMH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlcm9TZWN0aW9uOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQWJvdXRTZWN0aW9uIiwiVHlwZUFuaW1hdGlvbiIsIm1vdGlvbiIsInVzZUFuaW1hdGlvbiIsIkxpbmsiLCJCdXR0b25XcmFwcGVyIiwiSW1hZ2UiLCJIZXJvU2VjdGlvbiIsImN1cnJlbnROYW1lIiwic2V0Q3VycmVudE5hbWUiLCJjb250cm9scyIsInN0YXJ0Iiwib3BhY2l0eSIsInNjYWxlIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInRoZW4iLCJwcmV2TmFtZSIsImNsZWFySW50ZXJ2YWwiLCJoYW5kbGVOYW1lQ2hhbmdlIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsImluaXRpYWwiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwid2hpbGVIb3ZlciIsImJvcmRlciIsImgxIiwic3BhbiIsInNlcXVlbmNlIiwid3JhcHBlciIsInN0eWxlIiwiY29sb3IiLCJzcGVlZCIsInJlcGVhdCIsIkluZmluaXR5Iiwib25Db21wbGV0ZSIsInAiLCJocmVmIiwib25DbGljayIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/component/HeroSection.js\n"));

/***/ })

});