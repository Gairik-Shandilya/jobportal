/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./Context/Context.js":
/*!****************************!*\
  !*** ./Context/Context.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"IndexContext\": () => (/* binding */ IndexContext),\n/* harmony export */   \"IndexProvider\": () => (/* binding */ IndexProvider),\n/* harmony export */   \"useGlobalContext\": () => (/* binding */ useGlobalContext)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst IndexContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst IndexProvider = ({ children  })=>{\n    // States here\n    const { 0: darkMode , 1: setDarkMode  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const { 0: indexData , 1: setIndexData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const toggleDarkMode = ()=>{\n        setDarkMode(!darkMode);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(IndexContext.Provider, {\n        value: {\n            toggleDarkMode,\n            darkMode,\n            indexData,\n            setIndexData\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Lenovo\\\\Jobportal\\\\Context\\\\Context.js\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, undefined);\n};\nconst useGlobalContext = ()=>{\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(IndexContext);\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db250ZXh0L0NvbnRleHQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQW1FO0FBRTVELE1BQU1JLFlBQVksaUJBQUdELG9EQUFhLEVBQUUsQ0FBQztBQUU1QyxNQUFNRSxhQUFhLEdBQUcsQ0FBQyxFQUFFQyxRQUFRLEdBQUUsR0FBSztJQUN0QyxjQUFjO0lBQ2QsTUFBTSxLQUFDQyxRQUFRLE1BQUVDLFdBQVcsTUFBSVAsK0NBQVEsQ0FBQyxJQUFJLENBQUM7SUFDOUMsTUFBTSxLQUFDUSxTQUFTLE1BQUVDLFlBQVksTUFBSVQsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFDOUMsTUFBTVUsY0FBYyxHQUFHLElBQU07UUFDM0JILFdBQVcsQ0FBQyxDQUFDRCxRQUFRLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBQ0QscUJBQ0UsOERBQUNILFlBQVksQ0FBQ1EsUUFBUTtRQUNwQkMsS0FBSyxFQUFFO1lBQUVGLGNBQWM7WUFBRUosUUFBUTtZQUFFRSxTQUFTO1lBQUVDLFlBQVk7U0FBRTtrQkFFM0RKLFFBQVE7Ozs7O2lCQUNhLENBQ3hCO0FBQ0osQ0FBQztBQUVNLE1BQU1RLGdCQUFnQixHQUFHLElBQU07SUFDcEMsT0FBT1osaURBQVUsQ0FBQ0UsWUFBWSxDQUFDLENBQUM7QUFDbEMsQ0FBQyxDQUFDO0FBRXVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9Db250ZXh0L0NvbnRleHQuanM/YTE5NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQsIGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBJbmRleENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5jb25zdCBJbmRleFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIC8vIFN0YXRlcyBoZXJlXHJcbiAgY29uc3QgW2RhcmtNb2RlLCBzZXREYXJrTW9kZV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbaW5kZXhEYXRhLCBzZXRJbmRleERhdGFdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgdG9nZ2xlRGFya01vZGUgPSAoKSA9PiB7XHJcbiAgICBzZXREYXJrTW9kZSghZGFya01vZGUpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxJbmRleENvbnRleHQuUHJvdmlkZXJcclxuICAgICAgdmFsdWU9e3sgdG9nZ2xlRGFya01vZGUsIGRhcmtNb2RlLCBpbmRleERhdGEsIHNldEluZGV4RGF0YSB9fVxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0luZGV4Q29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUdsb2JhbENvbnRleHQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHVzZUNvbnRleHQoSW5kZXhDb250ZXh0KTtcclxufTtcclxuXHJcbmV4cG9ydCB7IEluZGV4UHJvdmlkZXIgfTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkluZGV4Q29udGV4dCIsIkluZGV4UHJvdmlkZXIiLCJjaGlsZHJlbiIsImRhcmtNb2RlIiwic2V0RGFya01vZGUiLCJpbmRleERhdGEiLCJzZXRJbmRleERhdGEiLCJ0b2dnbGVEYXJrTW9kZSIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VHbG9iYWxDb250ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Context/Context.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var _Context_Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Context/Context */ \"./Context/Context.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"@rainbow-me/rainbowkit\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! wagmi/providers/alchemy */ \"wagmi/providers/alchemy\");\n/* harmony import */ var wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! wagmi/providers/public */ \"wagmi/providers/public\");\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(wagmi_providers_public__WEBPACK_IMPORTED_MODULE_7__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_1__, _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_4__]);\n([react_toastify__WEBPACK_IMPORTED_MODULE_1__, _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n\nconst { chains , provider  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_5__.configureChains)([\n    wagmi__WEBPACK_IMPORTED_MODULE_5__.chain.polygonMumbai\n], [\n    (0,wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_6__.alchemyProvider)({\n        alchemyId: process.env.ALCHEMY_ID\n    }),\n    (0,wagmi_providers_public__WEBPACK_IMPORTED_MODULE_7__.publicProvider)()\n]);\nconst { connectors  } = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_4__.getDefaultWallets)({\n    appName: \"Job Board\",\n    chains\n});\nconst wagmiClient = (0,wagmi__WEBPACK_IMPORTED_MODULE_5__.createClient)({\n    autoConnect: true,\n    connectors,\n    provider\n});\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Context_Context__WEBPACK_IMPORTED_MODULE_2__.IndexProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_5__.WagmiConfig, {\n            client: wagmiClient,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_4__.RainbowKitProvider, {\n                chains: chains,\n                theme: (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_4__.darkTheme)(),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lenovo\\\\Jobportal\\\\pages\\\\_app.js\",\n                        lineNumber: 42,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_1__.ToastContainer, {\n                        theme: \"dark\",\n                        position: \"top-right\",\n                        autoClose: 5000,\n                        hideProgressBar: false,\n                        newestOnTop: false,\n                        closeOnClick: true,\n                        rtl: false,\n                        pauseOnFocusLoss: true,\n                        draggable: true,\n                        pauseOnHover: true\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lenovo\\\\Jobportal\\\\pages\\\\_app.js\",\n                        lineNumber: 43,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Lenovo\\\\Jobportal\\\\pages\\\\_app.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Lenovo\\\\Jobportal\\\\pages\\\\_app.js\",\n            lineNumber: 40,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Lenovo\\\\Jobportal\\\\pages\\\\_app.js\",\n        lineNumber: 39,\n        columnNumber: 9\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBZ0Q7QUFDRztBQUNyQjtBQUNhO0FBS1g7QUFNakI7QUFDMkM7QUFDRjtBQUN4RCxNQUFNLEVBQUVXLE1BQU0sR0FBRUMsUUFBUSxHQUFFLEdBQUdOLHNEQUFlLENBQzFDO0lBQUNELHNEQUFtQjtDQUFDLEVBQ3JCO0lBQ0VJLHdFQUFlLENBQUM7UUFBRUssU0FBUyxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsVUFBVTtLQUFFLENBQUM7SUFDdERQLHNFQUFjLEVBQUU7Q0FDakIsQ0FDRjtBQUVELE1BQU0sRUFBRVEsVUFBVSxHQUFFLEdBQUdoQix5RUFBaUIsQ0FBQztJQUN2Q2lCLE9BQU8sRUFBRSxXQUFXO0lBQ3BCUixNQUFNO0NBQ1AsQ0FBQztBQUVGLE1BQU1TLFdBQVcsR0FBR2IsbURBQVksQ0FBQztJQUMvQmMsV0FBVyxFQUFFLElBQUk7SUFDakJILFVBQVU7SUFDVk4sUUFBUTtDQUNULENBQUM7QUFFRixTQUFTVSxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQUUsRUFBRTtJQUN2QyxxQkFDTSw4REFBQ3ZCLDJEQUFhO2tCQUNsQiw0RUFBQ08sOENBQVc7WUFBQ2lCLE1BQU0sRUFBRUwsV0FBVztzQkFDOUIsNEVBQUNqQixzRUFBa0I7Z0JBQUNRLE1BQU0sRUFBRUEsTUFBTTtnQkFBRWUsS0FBSyxFQUFFdEIsaUVBQVMsRUFBRTs7a0NBQ3RELDhEQUFDbUIsU0FBUzt3QkFBRSxHQUFHQyxTQUFTOzs7Ozs0QkFBSTtrQ0FDNUIsOERBQUN4QiwwREFBYzt3QkFDZjBCLEtBQUssRUFBQyxNQUFNO3dCQUNaQyxRQUFRLEVBQUMsV0FBVzt3QkFDcEJDLFNBQVMsRUFBRSxJQUFJO3dCQUNmQyxlQUFlLEVBQUUsS0FBSzt3QkFDdEJDLFdBQVcsRUFBRSxLQUFLO3dCQUNsQkMsWUFBWTt3QkFDWkMsR0FBRyxFQUFFLEtBQUs7d0JBQ1ZDLGdCQUFnQjt3QkFDaEJDLFNBQVM7d0JBQ1RDLFlBQVk7Ozs7OzRCQUNWOzs7Ozs7b0JBQ21COzs7OztnQkFDVDs7Ozs7WUFDTSxDQUNwQjtBQUNKLENBQUM7QUFFRCxpRUFBZWIsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRvYXN0Q29udGFpbmVyIH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5pbXBvcnQgeyBJbmRleFByb3ZpZGVyIH0gZnJvbSAnLi4vQ29udGV4dC9Db250ZXh0JztcclxuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXHJcbmltcG9ydCAnQHJhaW5ib3ctbWUvcmFpbmJvd2tpdC9zdHlsZXMuY3NzJztcclxuaW1wb3J0IHtcclxuICBnZXREZWZhdWx0V2FsbGV0cyxcclxuICBSYWluYm93S2l0UHJvdmlkZXIsXHJcbiAgZGFya1RoZW1lXHJcbn0gZnJvbSAnQHJhaW5ib3ctbWUvcmFpbmJvd2tpdCc7XHJcbmltcG9ydCB7XHJcbiAgY2hhaW4sXHJcbiAgY29uZmlndXJlQ2hhaW5zLFxyXG4gIGNyZWF0ZUNsaWVudCxcclxuICBXYWdtaUNvbmZpZyxcclxufSBmcm9tICd3YWdtaSc7XHJcbmltcG9ydCB7IGFsY2hlbXlQcm92aWRlciB9IGZyb20gJ3dhZ21pL3Byb3ZpZGVycy9hbGNoZW15JztcclxuaW1wb3J0IHsgcHVibGljUHJvdmlkZXIgfSBmcm9tICd3YWdtaS9wcm92aWRlcnMvcHVibGljJztcclxuY29uc3QgeyBjaGFpbnMsIHByb3ZpZGVyIH0gPSBjb25maWd1cmVDaGFpbnMoXHJcbiAgW2NoYWluLnBvbHlnb25NdW1iYWldLFxyXG4gIFtcclxuICAgIGFsY2hlbXlQcm92aWRlcih7IGFsY2hlbXlJZDogcHJvY2Vzcy5lbnYuQUxDSEVNWV9JRCB9KSxcclxuICAgIHB1YmxpY1Byb3ZpZGVyKClcclxuICBdXHJcbik7XHJcblxyXG5jb25zdCB7IGNvbm5lY3RvcnMgfSA9IGdldERlZmF1bHRXYWxsZXRzKHtcclxuICBhcHBOYW1lOiAnSm9iIEJvYXJkJyxcclxuICBjaGFpbnNcclxufSk7XHJcblxyXG5jb25zdCB3YWdtaUNsaWVudCA9IGNyZWF0ZUNsaWVudCh7XHJcbiAgYXV0b0Nvbm5lY3Q6IHRydWUsXHJcbiAgY29ubmVjdG9ycyxcclxuICBwcm92aWRlclxyXG59KVxyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgICAgICA8SW5kZXhQcm92aWRlcj5cclxuICAgIDxXYWdtaUNvbmZpZyBjbGllbnQ9e3dhZ21pQ2xpZW50fT5cclxuICAgICAgPFJhaW5ib3dLaXRQcm92aWRlciBjaGFpbnM9e2NoYWluc30gdGhlbWU9e2RhcmtUaGVtZSgpfT5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICA8VG9hc3RDb250YWluZXJcclxuICAgICAgdGhlbWU9J2RhcmsnXHJcbiAgICAgIHBvc2l0aW9uPVwidG9wLXJpZ2h0XCJcclxuICAgICAgYXV0b0Nsb3NlPXs1MDAwfVxyXG4gICAgICBoaWRlUHJvZ3Jlc3NCYXI9e2ZhbHNlfVxyXG4gICAgICBuZXdlc3RPblRvcD17ZmFsc2V9XHJcbiAgICAgIGNsb3NlT25DbGlja1xyXG4gICAgICBydGw9e2ZhbHNlfVxyXG4gICAgICBwYXVzZU9uRm9jdXNMb3NzXHJcbiAgICAgIGRyYWdnYWJsZVxyXG4gICAgICBwYXVzZU9uSG92ZXJcclxuICAgICAgLz5cclxuICAgICAgPC9SYWluYm93S2l0UHJvdmlkZXI+XHJcbiAgICA8L1dhZ21pQ29uZmlnPlxyXG4gICAgICAgIDwvSW5kZXhQcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxyXG4iXSwibmFtZXMiOlsiVG9hc3RDb250YWluZXIiLCJJbmRleFByb3ZpZGVyIiwiZ2V0RGVmYXVsdFdhbGxldHMiLCJSYWluYm93S2l0UHJvdmlkZXIiLCJkYXJrVGhlbWUiLCJjaGFpbiIsImNvbmZpZ3VyZUNoYWlucyIsImNyZWF0ZUNsaWVudCIsIldhZ21pQ29uZmlnIiwiYWxjaGVteVByb3ZpZGVyIiwicHVibGljUHJvdmlkZXIiLCJjaGFpbnMiLCJwcm92aWRlciIsInBvbHlnb25NdW1iYWkiLCJhbGNoZW15SWQiLCJwcm9jZXNzIiwiZW52IiwiQUxDSEVNWV9JRCIsImNvbm5lY3RvcnMiLCJhcHBOYW1lIiwid2FnbWlDbGllbnQiLCJhdXRvQ29ubmVjdCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY2xpZW50IiwidGhlbWUiLCJwb3NpdGlvbiIsImF1dG9DbG9zZSIsImhpZGVQcm9ncmVzc0JhciIsIm5ld2VzdE9uVG9wIiwiY2xvc2VPbkNsaWNrIiwicnRsIiwicGF1c2VPbkZvY3VzTG9zcyIsImRyYWdnYWJsZSIsInBhdXNlT25Ib3ZlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi");

/***/ }),

/***/ "wagmi/providers/alchemy":
/*!******************************************!*\
  !*** external "wagmi/providers/alchemy" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi/providers/alchemy");

/***/ }),

/***/ "wagmi/providers/public":
/*!*****************************************!*\
  !*** external "wagmi/providers/public" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi/providers/public");

/***/ }),

/***/ "@rainbow-me/rainbowkit":
/*!*****************************************!*\
  !*** external "@rainbow-me/rainbowkit" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@rainbow-me/rainbowkit");;

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();