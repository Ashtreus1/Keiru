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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"8782aba961ed\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/ODQ3ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjg3ODJhYmE5NjFlZFwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/component/SpotlightButton.js":
/*!**********************************************!*\
  !*** ./src/app/component/SpotlightButton.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _AboutSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AboutSection */ \"(app-pages-browser)/./src/app/component/AboutSection.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst SpotlightButton = (param)=>{\n    let { buttonClick } = param;\n    _s();\n    const btnRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const spanRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const get_started = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AboutSection__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n        fileName: \"/home/yukanashi15/Keiru/src/app/component/SpotlightButton.js\",\n        lineNumber: 9,\n        columnNumber: 23\n    }, undefined);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleMouseMove = (e)=>{\n            const { width } = e.target.getBoundingClientRect();\n            const offset = e.offsetX;\n            const left = \"\".concat(offset / width * 100, \"%\");\n            spanRef.current.animate({\n                left\n            }, {\n                duration: 250,\n                fill: \"forwards\"\n            });\n        };\n        const handleMouseLeave = ()=>{\n            spanRef.current.animate({\n                left: \"50%\"\n            }, {\n                duration: 100,\n                fill: \"forwards\"\n            });\n        };\n        const btnElement = btnRef.current;\n        if (btnElement) {\n            btnElement.addEventListener(\"mousemove\", handleMouseMove);\n            btnElement.addEventListener(\"mouseleave\", handleMouseLeave);\n        }\n        return ()=>{\n            if (btnElement) {\n                btnElement.removeEventListener(\"mousemove\", handleMouseMove);\n                btnElement.removeEventListener(\"mouseleave\", handleMouseLeave);\n            }\n        };\n    }, []);\n    const clickButton = ()=>{\n        buttonClick();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.button, {\n        onClick: ()=>{\n            clickButton(clickButton);\n        },\n        whileTap: {\n            scale: 0.985\n        },\n        ref: btnRef,\n        className: \"relative w-full mt-5 max-w-xs overflow-hidden rounded-lg bg-slate-950 px-4 py-3 text-lg font-medium text-white\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"pointer-events-none relative z-10 mix-blend-difference\",\n                children: \"Get Started\"\n            }, void 0, false, {\n                fileName: \"/home/yukanashi15/Keiru/src/app/component/SpotlightButton.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                ref: spanRef,\n                className: \"pointer-events-none absolute left-[50%] top-[50%] h-32 w-32 -translate-x-[50%] -translate-y-[50%] rounded-full bg-slate-100\"\n            }, void 0, false, {\n                fileName: \"/home/yukanashi15/Keiru/src/app/component/SpotlightButton.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/yukanashi15/Keiru/src/app/component/SpotlightButton.js\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SpotlightButton, \"R+UEgmnW4zyn63opOQRbLMKhaEo=\");\n_c = SpotlightButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpotlightButton);\nvar _c;\n$RefreshReg$(_c, \"SpotlightButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50L1Nwb3RsaWdodEJ1dHRvbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF1QztBQUNHO0FBQ0E7QUFFMUMsTUFBTUksa0JBQWtCO1FBQUMsRUFBRUMsV0FBVyxFQUFFOztJQUV0QyxNQUFNQyxTQUFTSiw2Q0FBTUEsQ0FBQztJQUN0QixNQUFNSyxVQUFVTCw2Q0FBTUEsQ0FBQztJQUN2QixNQUFNTSw0QkFBYyw4REFBQ0wscURBQVlBOzs7OztJQUVqQ0YsZ0RBQVNBLENBQUM7UUFDUixNQUFNUSxrQkFBa0IsQ0FBQ0M7WUFDdkIsTUFBTSxFQUFFQyxLQUFLLEVBQUUsR0FBR0QsRUFBRUUsTUFBTSxDQUFDQyxxQkFBcUI7WUFDaEQsTUFBTUMsU0FBU0osRUFBRUssT0FBTztZQUN4QixNQUFNQyxPQUFPLEdBQTBCLE9BQXZCLFNBQVVMLFFBQVMsS0FBSTtZQUV2Q0osUUFBUVUsT0FBTyxDQUFDQyxPQUFPLENBQUM7Z0JBQUVGO1lBQUssR0FBRztnQkFBRUcsVUFBVTtnQkFBS0MsTUFBTTtZQUFXO1FBQ3RFO1FBRUEsTUFBTUMsbUJBQW1CO1lBQ3ZCZCxRQUFRVSxPQUFPLENBQUNDLE9BQU8sQ0FDckI7Z0JBQUVGLE1BQU07WUFBTSxHQUNkO2dCQUFFRyxVQUFVO2dCQUFLQyxNQUFNO1lBQVc7UUFFdEM7UUFFQSxNQUFNRSxhQUFhaEIsT0FBT1csT0FBTztRQUVqQyxJQUFJSyxZQUFZO1lBQ2RBLFdBQVdDLGdCQUFnQixDQUFDLGFBQWFkO1lBQ3pDYSxXQUFXQyxnQkFBZ0IsQ0FBQyxjQUFjRjtRQUM1QztRQUVBLE9BQU87WUFDTCxJQUFJQyxZQUFZO2dCQUNkQSxXQUFXRSxtQkFBbUIsQ0FBQyxhQUFhZjtnQkFDNUNhLFdBQVdFLG1CQUFtQixDQUFDLGNBQWNIO1lBQy9DO1FBQ0Y7SUFDRixHQUFHLEVBQUU7SUFFTCxNQUFNSSxjQUFjO1FBQ2xCcEI7SUFDRjtJQUVBLHFCQUNFLDhEQUFDTCxpREFBTUEsQ0FBQzBCLE1BQU07UUFDWkMsU0FBUztZQUFRRixZQUFZQTtRQUFZO1FBQ3pDRyxVQUFVO1lBQUVDLE9BQU87UUFBTTtRQUN6QkMsS0FBS3hCO1FBQ0x5QixXQUFVOzswQkFFViw4REFBQ0M7Z0JBQUtELFdBQVU7MEJBQXlEOzs7Ozs7MEJBR3pFLDhEQUFDQztnQkFDQ0YsS0FBS3ZCO2dCQUNMd0IsV0FBVTs7Ozs7Ozs7Ozs7O0FBSWxCO0dBekRNM0I7S0FBQUE7QUEyRE4sK0RBQWVBLGVBQWVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnQvU3BvdGxpZ2h0QnV0dG9uLmpzPzlmMDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQWJvdXRTZWN0aW9uIGZyb20gXCIuL0Fib3V0U2VjdGlvblwiO1xuXG5jb25zdCBTcG90bGlnaHRCdXR0b24gPSAoeyBidXR0b25DbGljayB9KSA9PiB7XG5cbiAgY29uc3QgYnRuUmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBzcGFuUmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBnZXRfc3RhcnRlZCA9IDxBYm91dFNlY3Rpb24vPlxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlTW91c2VNb3ZlID0gKGUpID0+IHtcbiAgICAgIGNvbnN0IHsgd2lkdGggfSA9IGUudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgY29uc3Qgb2Zmc2V0ID0gZS5vZmZzZXRYO1xuICAgICAgY29uc3QgbGVmdCA9IGAkeyhvZmZzZXQgLyB3aWR0aCkgKiAxMDB9JWA7XG5cbiAgICAgIHNwYW5SZWYuY3VycmVudC5hbmltYXRlKHsgbGVmdCB9LCB7IGR1cmF0aW9uOiAyNTAsIGZpbGw6IFwiZm9yd2FyZHNcIiB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlTW91c2VMZWF2ZSA9ICgpID0+IHtcbiAgICAgIHNwYW5SZWYuY3VycmVudC5hbmltYXRlKFxuICAgICAgICB7IGxlZnQ6IFwiNTAlXCIgfSxcbiAgICAgICAgeyBkdXJhdGlvbjogMTAwLCBmaWxsOiBcImZvcndhcmRzXCIgfVxuICAgICAgKTtcbiAgICB9O1xuXG4gICAgY29uc3QgYnRuRWxlbWVudCA9IGJ0blJlZi5jdXJyZW50O1xuXG4gICAgaWYgKGJ0bkVsZW1lbnQpIHtcbiAgICAgIGJ0bkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBoYW5kbGVNb3VzZU1vdmUpO1xuICAgICAgYnRuRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBoYW5kbGVNb3VzZUxlYXZlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaWYgKGJ0bkVsZW1lbnQpIHtcbiAgICAgICAgYnRuRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGhhbmRsZU1vdXNlTW92ZSk7XG4gICAgICAgIGJ0bkVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgaGFuZGxlTW91c2VMZWF2ZSk7XG4gICAgICB9XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGNsaWNrQnV0dG9uID0gKCkgPT4ge1xuICAgIGJ1dHRvbkNsaWNrKClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPG1vdGlvbi5idXR0b25cbiAgICAgIG9uQ2xpY2s9eygpID0+IHsgY2xpY2tCdXR0b24oY2xpY2tCdXR0b24pfX1cbiAgICAgIHdoaWxlVGFwPXt7IHNjYWxlOiAwLjk4NSB9fVxuICAgICAgcmVmPXtidG5SZWZ9XG4gICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGwgbXQtNSBtYXgtdy14cyBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC1sZyBiZy1zbGF0ZS05NTAgcHgtNCBweS0zIHRleHQtbGcgZm9udC1tZWRpdW0gdGV4dC13aGl0ZVwiXG4gICAgPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicG9pbnRlci1ldmVudHMtbm9uZSByZWxhdGl2ZSB6LTEwIG1peC1ibGVuZC1kaWZmZXJlbmNlXCI+XG4gICAgICAgIEdldCBTdGFydGVkXG4gICAgICA8L3NwYW4+XG4gICAgICA8c3BhblxuICAgICAgICByZWY9e3NwYW5SZWZ9XG4gICAgICAgIGNsYXNzTmFtZT1cInBvaW50ZXItZXZlbnRzLW5vbmUgYWJzb2x1dGUgbGVmdC1bNTAlXSB0b3AtWzUwJV0gaC0zMiB3LTMyIC10cmFuc2xhdGUteC1bNTAlXSAtdHJhbnNsYXRlLXktWzUwJV0gcm91bmRlZC1mdWxsIGJnLXNsYXRlLTEwMFwiXG4gICAgICAvPlxuICAgIDwvbW90aW9uLmJ1dHRvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNwb3RsaWdodEJ1dHRvbjtcbiJdLCJuYW1lcyI6WyJtb3Rpb24iLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJBYm91dFNlY3Rpb24iLCJTcG90bGlnaHRCdXR0b24iLCJidXR0b25DbGljayIsImJ0blJlZiIsInNwYW5SZWYiLCJnZXRfc3RhcnRlZCIsImhhbmRsZU1vdXNlTW92ZSIsImUiLCJ3aWR0aCIsInRhcmdldCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIm9mZnNldCIsIm9mZnNldFgiLCJsZWZ0IiwiY3VycmVudCIsImFuaW1hdGUiLCJkdXJhdGlvbiIsImZpbGwiLCJoYW5kbGVNb3VzZUxlYXZlIiwiYnRuRWxlbWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2xpY2tCdXR0b24iLCJidXR0b24iLCJvbkNsaWNrIiwid2hpbGVUYXAiLCJzY2FsZSIsInJlZiIsImNsYXNzTmFtZSIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/component/SpotlightButton.js\n"));

/***/ })

});