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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"9e87e8225eff\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/ODQ3ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjllODdlODIyNWVmZlwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/page.js":
/*!*************************!*\
  !*** ./src/app/page.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _Background__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Background */ \"(app-pages-browser)/./src/app/Background.js\");\n/* harmony import */ var _component_HeroSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/HeroSection */ \"(app-pages-browser)/./src/app/component/HeroSection.js\");\n/* harmony import */ var _component_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/Footer */ \"(app-pages-browser)/./src/app/component/Footer.js\");\n/* harmony import */ var _component_ProjectSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/ProjectSection */ \"(app-pages-browser)/./src/app/component/ProjectSection.js\");\n/* harmony import */ var _component_NavBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/NavBar */ \"(app-pages-browser)/./src/app/component/NavBar.js\");\n/* harmony import */ var _component_AboutSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/AboutSection */ \"(app-pages-browser)/./src/app/component/AboutSection.js\");\n/* harmony import */ var _component_AvatarSwitch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/AvatarSwitch */ \"(app-pages-browser)/./src/app/component/AvatarSwitch.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n// ... (import statements)\nconst Home = ()=>{\n    _s();\n    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(0);\n    const [selectedAvatar, setSelectedAvatar] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(\"default\");\n    const menus = [\n        {\n            name: \"Home\",\n            icon: \"home-outline\",\n            dis: \"translate-x-0\",\n            component: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_HeroSection__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/yukanashi15/Keiru/src/app/page.js\",\n                lineNumber: 18,\n                columnNumber: 76\n            }, undefined)\n        },\n        {\n            name: \"Abouts\",\n            icon: \"people-outline\",\n            dis: \"translate-x-16\",\n            component: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_AboutSection__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                avatar: selectedAvatar\n            }, void 0, false, {\n                fileName: \"/home/yukanashi15/Keiru/src/app/page.js\",\n                lineNumber: 19,\n                columnNumber: 81\n            }, undefined)\n        },\n        {\n            name: \"Projects\",\n            icon: \"code-working-outline\",\n            dis: \"translate-x-32\",\n            component: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_ProjectSection__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/yukanashi15/Keiru/src/app/page.js\",\n                lineNumber: 20,\n                columnNumber: 89\n            }, undefined)\n        },\n        {\n            name: \"Contacts\",\n            icon: \"call-outline\",\n            dis: \"translate-x-48\"\n        }\n    ];\n    const renderComponent = ()=>{\n        const selectedMenu = menus[active];\n        return selectedMenu.component || null;\n    };\n    const handleAvatarSelection = (avatar)=>{\n        setSelectedAvatar(avatar);\n        setActive(1);\n    };\n    const handleMenuClick = (index)=>{\n        if (index === 0) {\n            setSelectedAvatar(\"default\");\n        }\n        setActive(index);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Background__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"h-screen overflow-y-auto\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_AvatarSwitch__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    onSelectAvatar: handleAvatarSelection\n                }, void 0, false, {\n                    fileName: \"/home/yukanashi15/Keiru/src/app/page.js\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_NavBar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    menus: menus,\n                    onMenuClick: handleMenuClick\n                }, void 0, false, {\n                    fileName: \"/home/yukanashi15/Keiru/src/app/page.js\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, undefined),\n                renderComponent(),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/yukanashi15/Keiru/src/app/page.js\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/yukanashi15/Keiru/src/app/page.js\",\n            lineNumber: 43,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/yukanashi15/Keiru/src/app/page.js\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"Xa8UV4bgSpVxn3SaiFnNC0qQDCI=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ3FDO0FBQ1k7QUFDVjtBQUNpQjtBQUNqQjtBQUNhO0FBQ0Q7QUFDWDtBQUV4QywwQkFBMEI7QUFFMUIsTUFBTVMsT0FBTzs7SUFDWCxNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR0gsK0NBQVFBLENBQUM7SUFDckMsTUFBTSxDQUFDSSxnQkFBZ0JDLGtCQUFrQixHQUFHTCwrQ0FBUUEsQ0FBQztJQUVyRCxNQUFNTSxRQUFRO1FBQ1o7WUFBRUMsTUFBTTtZQUFRQyxNQUFNO1lBQWdCQyxLQUFLO1lBQWlCQyx5QkFBVyw4REFBQ2pCLDhEQUFXQTs7Ozs7UUFBSTtRQUN2RjtZQUFFYyxNQUFNO1lBQVVDLE1BQU07WUFBa0JDLEtBQUs7WUFBa0JDLHlCQUFXLDhEQUFDYiwrREFBWUE7Z0JBQUNjLFFBQVFQOzs7Ozs7UUFBbUI7UUFDckg7WUFBRUcsTUFBTTtZQUFZQyxNQUFNO1lBQXdCQyxLQUFLO1lBQWtCQyx5QkFBVyw4REFBQ2YsaUVBQWVBOzs7OztRQUFJO1FBQ3hHO1lBQUVZLE1BQU07WUFBWUMsTUFBTTtZQUFnQkMsS0FBSztRQUFpQjtLQUNqRTtJQUVELE1BQU1HLGtCQUFrQjtRQUN0QixNQUFNQyxlQUFlUCxLQUFLLENBQUNKLE9BQU87UUFDbEMsT0FBT1csYUFBYUgsU0FBUyxJQUFJO0lBQ25DO0lBRUEsTUFBTUksd0JBQXdCLENBQUNIO1FBQzdCTixrQkFBa0JNO1FBQ2xCUixVQUFVO0lBQ1o7SUFFQSxNQUFNWSxrQkFBa0IsQ0FBQ0M7UUFDdkIsSUFBSUEsVUFBVSxHQUFHO1lBQ2ZYLGtCQUFrQjtRQUNwQjtRQUNBRixVQUFVYTtJQUNaO0lBRUEscUJBQ0UsOERBQUN4QixtREFBVUE7a0JBQ1QsNEVBQUN5QjtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ3BCLCtEQUFZQTtvQkFBQ3FCLGdCQUFnQkw7Ozs7Ozs4QkFDOUIsOERBQUNsQix5REFBTUE7b0JBQUNVLE9BQU9BO29CQUFPYyxhQUFhTDs7Ozs7O2dCQUNsQ0g7OEJBQ0QsOERBQUNsQix5REFBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJZjtHQXRDTU87S0FBQUE7QUF3Q04sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLmpzPzJiM2QiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCBCYWNrZ3JvdW5kIGZyb20gJy4vQmFja2dyb3VuZCdcbmltcG9ydCBIZXJvU2VjdGlvbiBmcm9tICcuL2NvbXBvbmVudC9IZXJvU2VjdGlvbidcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9jb21wb25lbnQvRm9vdGVyJ1xuaW1wb3J0IFByb2plY3RzU2VjdGlvbiBmcm9tICcuL2NvbXBvbmVudC9Qcm9qZWN0U2VjdGlvbidcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi9jb21wb25lbnQvTmF2QmFyJ1xuaW1wb3J0IEFib3V0U2VjdGlvbiBmcm9tIFwiLi9jb21wb25lbnQvQWJvdXRTZWN0aW9uXCI7XG5pbXBvcnQgQXZhdGFyU3dpdGNoIGZyb20gJy4vY29tcG9uZW50L0F2YXRhclN3aXRjaCdcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG4vLyAuLi4gKGltcG9ydCBzdGF0ZW1lbnRzKVxuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtzZWxlY3RlZEF2YXRhciwgc2V0U2VsZWN0ZWRBdmF0YXJdID0gdXNlU3RhdGUoXCJkZWZhdWx0XCIpO1xuXG4gIGNvbnN0IG1lbnVzID0gW1xuICAgIHsgbmFtZTogXCJIb21lXCIsIGljb246IFwiaG9tZS1vdXRsaW5lXCIsIGRpczogXCJ0cmFuc2xhdGUteC0wXCIsIGNvbXBvbmVudDogPEhlcm9TZWN0aW9uIC8+IH0sXG4gICAgeyBuYW1lOiBcIkFib3V0c1wiLCBpY29uOiBcInBlb3BsZS1vdXRsaW5lXCIsIGRpczogXCJ0cmFuc2xhdGUteC0xNlwiLCBjb21wb25lbnQ6IDxBYm91dFNlY3Rpb24gYXZhdGFyPXtzZWxlY3RlZEF2YXRhcn0gLz4gfSxcbiAgICB7IG5hbWU6IFwiUHJvamVjdHNcIiwgaWNvbjogXCJjb2RlLXdvcmtpbmctb3V0bGluZVwiLCBkaXM6IFwidHJhbnNsYXRlLXgtMzJcIiwgY29tcG9uZW50OiA8UHJvamVjdHNTZWN0aW9uIC8+IH0sXG4gICAgeyBuYW1lOiBcIkNvbnRhY3RzXCIsIGljb246IFwiY2FsbC1vdXRsaW5lXCIsIGRpczogXCJ0cmFuc2xhdGUteC00OFwiIH0sXG4gIF07XG5cbiAgY29uc3QgcmVuZGVyQ29tcG9uZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHNlbGVjdGVkTWVudSA9IG1lbnVzW2FjdGl2ZV07XG4gICAgcmV0dXJuIHNlbGVjdGVkTWVudS5jb21wb25lbnQgfHwgbnVsbDtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVBdmF0YXJTZWxlY3Rpb24gPSAoYXZhdGFyKSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRBdmF0YXIoYXZhdGFyKTtcbiAgICBzZXRBY3RpdmUoMSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTWVudUNsaWNrID0gKGluZGV4KSA9PiB7XG4gICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICBzZXRTZWxlY3RlZEF2YXRhcihcImRlZmF1bHRcIik7XG4gICAgfVxuICAgIHNldEFjdGl2ZShpbmRleCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8QmFja2dyb3VuZD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1zY3JlZW4gb3ZlcmZsb3cteS1hdXRvXCI+XG4gICAgICAgIDxBdmF0YXJTd2l0Y2ggb25TZWxlY3RBdmF0YXI9e2hhbmRsZUF2YXRhclNlbGVjdGlvbn0gLz5cbiAgICAgICAgPE5hdkJhciBtZW51cz17bWVudXN9IG9uTWVudUNsaWNrPXtoYW5kbGVNZW51Q2xpY2t9IC8+XG4gICAgICAgIHtyZW5kZXJDb21wb25lbnQoKX1cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9CYWNrZ3JvdW5kPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJCYWNrZ3JvdW5kIiwiSGVyb1NlY3Rpb24iLCJGb290ZXIiLCJQcm9qZWN0c1NlY3Rpb24iLCJOYXZCYXIiLCJBYm91dFNlY3Rpb24iLCJBdmF0YXJTd2l0Y2giLCJSZWFjdCIsInVzZVN0YXRlIiwiSG9tZSIsImFjdGl2ZSIsInNldEFjdGl2ZSIsInNlbGVjdGVkQXZhdGFyIiwic2V0U2VsZWN0ZWRBdmF0YXIiLCJtZW51cyIsIm5hbWUiLCJpY29uIiwiZGlzIiwiY29tcG9uZW50IiwiYXZhdGFyIiwicmVuZGVyQ29tcG9uZW50Iiwic2VsZWN0ZWRNZW51IiwiaGFuZGxlQXZhdGFyU2VsZWN0aW9uIiwiaGFuZGxlTWVudUNsaWNrIiwiaW5kZXgiLCJkaXYiLCJjbGFzc05hbWUiLCJvblNlbGVjdEF2YXRhciIsIm9uTWVudUNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});