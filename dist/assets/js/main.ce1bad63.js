(self["webpackChunkanime_tokopedia"] = self["webpackChunkanime_tokopedia"] || []).push([["main"],{

/***/ "./src/config/GraphQl/index.jsx":
/*!**************************************!*\
  !*** ./src/config/GraphQl/index.jsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "query": function() { return /* binding */ query; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "./node_modules/graphql-tag/lib/index.js");


var _templateObject, _templateObject2;


var ANIME_LIST = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql)(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    query ( $page: Int, $perPage: Int) {\n        Page (page: $page, perPage: $perPage) {\n            pageInfo {\n                total\n                currentPage\n                lastPage\n                hasNextPage\n                perPage\n            }\n            media {\n                id\n                coverImage {\n                  extraLarge\n                }\n                description\n                bannerImage\n                duration\n                favourites\n                trending\n                countryOfOrigin\n                type\n                episodes\n                season\n                isAdult\n                genres\n                seasonYear\n                title {\n                  userPreferred\n                }\n            }\n        }\n    }\n"])));
var ANIME_DETAILS = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql)(_templateObject2 || (_templateObject2 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    query ($id: Int) {\n        Media(id: $id) {\n            id\n            coverImage {\n              extraLarge\n            }\n            description\n            bannerImage\n            duration\n            favourites\n            trending\n            countryOfOrigin\n            type\n            episodes\n            season\n            isAdult\n            genres\n            seasonYear\n            title {\n              userPreferred\n            }\n        }\n    }\n"])));
var query = {
  ANIME_LIST: ANIME_LIST,
  ANIME_DETAILS: ANIME_DETAILS
};
/* harmony default export */ __webpack_exports__["default"] = (query);

/***/ }),

/***/ "./src/config/Router/index.jsx":
/*!*************************************!*\
  !*** ./src/config/Router/index.jsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages */ "./src/pages/index.jsx");




var Router = function Router() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, {
    exact: true,
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages__WEBPACK_IMPORTED_MODULE_1__.Anime, null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, {
    path: "/collection",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages__WEBPACK_IMPORTED_MODULE_1__.Collection, null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, {
    path: "/collection-detail/:id",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages__WEBPACK_IMPORTED_MODULE_1__.CollectionDetail, null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, {
    path: "/detail/:id",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages__WEBPACK_IMPORTED_MODULE_1__.Detail, null)
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Router);

/***/ }),

/***/ "./src/config/fontAwesome/index.jsx":
/*!******************************************!*\
  !*** ./src/config/fontAwesome/index.jsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.mjs");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.mjs");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.mjs");



_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__.library.add(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faInstagram, _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faGithub, _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faWhatsapp, _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faLinkedin, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faCheckSquare, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faCheck, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faCoffee, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faFilm, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faClapperboard, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faClock, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faCalendar, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faFlag, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faHeart, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faTrash, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faPen, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faArrowRight, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faTimes);

/***/ }),

/***/ "./src/config/index.jsx":
/*!******************************!*\
  !*** ./src/config/index.jsx ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Router": function() { return /* reexport safe */ _Router__WEBPACK_IMPORTED_MODULE_0__["default"]; },
/* harmony export */   "query": function() { return /* reexport safe */ _GraphQl__WEBPACK_IMPORTED_MODULE_1__["default"]; }
/* harmony export */ });
/* harmony import */ var _Router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Router */ "./src/config/Router/index.jsx");
/* harmony import */ var _GraphQl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GraphQl */ "./src/config/GraphQl/index.jsx");




/***/ }),

/***/ "./src/index.jsx":
/*!***********************!*\
  !*** ./src/index.jsx ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _pages_App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/App */ "./src/pages/App.jsx");
/* harmony import */ var _reportWebVitals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reportWebVitals */ "./src/reportWebVitals.js");





var root = react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(document.getElementById('root'));
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().StrictMode), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_App__WEBPACK_IMPORTED_MODULE_3__["default"], null))); // If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

(0,_reportWebVitals__WEBPACK_IMPORTED_MODULE_4__["default"])();

/***/ }),

/***/ "./src/pages/Anime/index.jsx":
/*!***********************************!*\
  !*** ./src/pages/Anime/index.jsx ***!
  \***********************************/
/***/ (function() {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: D:\\anime-tokopedia\\src\\pages\\Anime\\index.jsx: importSource cannot be set when runtime is classic.\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 1 |\u001b[39m \u001b[90m/** @jsxImportSource @emotion/react */\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m   |\u001b[39m \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 2 |\u001b[39m \u001b[36mimport\u001b[39m { useState } \u001b[36mfrom\u001b[39m \u001b[32m'react'\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 3 |\u001b[39m \u001b[36mimport\u001b[39m { useLazyQuery\u001b[33m,\u001b[39m useQuery } \u001b[36mfrom\u001b[39m \u001b[32m\"@apollo/client\"\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 4 |\u001b[39m \u001b[36mimport\u001b[39m { query } \u001b[36mfrom\u001b[39m \u001b[32m'../../config'\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n    at File.buildCodeFrameError (D:\\anime-tokopedia\\node_modules\\@babel\\core\\lib\\transformation\\file\\file.js:249:12)\n    at NodePath.buildCodeFrameError (D:\\anime-tokopedia\\node_modules\\@babel\\traverse\\lib\\path\\index.js:145:21)\n    at PluginPass.enter (D:\\anime-tokopedia\\node_modules\\@babel\\plugin-transform-react-jsx\\lib\\create-plugin.js:154:28)\n    at newFn (D:\\anime-tokopedia\\node_modules\\@babel\\traverse\\lib\\visitors.js:181:21)\n    at NodePath._call (D:\\anime-tokopedia\\node_modules\\@babel\\traverse\\lib\\path\\context.js:53:20)\n    at NodePath.call (D:\\anime-tokopedia\\node_modules\\@babel\\traverse\\lib\\path\\context.js:40:17)\n    at NodePath.visit (D:\\anime-tokopedia\\node_modules\\@babel\\traverse\\lib\\path\\context.js:100:31)\n    at TraversalContext.visitQueue (D:\\anime-tokopedia\\node_modules\\@babel\\traverse\\lib\\context.js:105:16)\n    at TraversalContext.visitSingle (D:\\anime-tokopedia\\node_modules\\@babel\\traverse\\lib\\context.js:79:19)\n    at TraversalContext.visit (D:\\anime-tokopedia\\node_modules\\@babel\\traverse\\lib\\context.js:133:19)");

/***/ }),

/***/ "./src/pages/App.jsx":
/*!***************************!*\
  !*** ./src/pages/App.jsx ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./src/config/index.jsx");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/core/ApolloClient.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/cache/inmemory/inMemoryCache.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/link/http/HttpLink.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/react/context/ApolloProvider.js");
/* harmony import */ var _config_fontAwesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/fontAwesome */ "./src/config/fontAwesome/index.jsx");




var uri = 'https://graphql.anilist.co';
var client = new _apollo_client__WEBPACK_IMPORTED_MODULE_3__.ApolloClient({
  cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_4__.InMemoryCache(),
  link: new _apollo_client__WEBPACK_IMPORTED_MODULE_5__.HttpLink({
    uri: uri,
    fetchOptions: {
      method: "POST"
    },
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  })
});

var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_apollo_client__WEBPACK_IMPORTED_MODULE_6__.ApolloProvider, {
    client: client
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_config__WEBPACK_IMPORTED_MODULE_1__.Router, null));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/pages/CollectionDetail/index.jsx":
/*!**********************************************!*\
  !*** ./src/pages/CollectionDetail/index.jsx ***!
  \**********************************************/
/***/ (function() {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: D:\\anime-tokopedia\\src\\pages\\CollectionDetail\\index.jsx: importSource cannot be set when runtime is classic.\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 1 |\u001b[39m \u001b[90m/** @jsxImportSource @emotion/react */\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m   |\u001b[39m \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 2 |\u001b[39m \u001b[36mimport\u001b[39m { \u001b[33mFontAwesomeIcon\u001b[39m } \u001b[36mfrom\u001b[39m \u001b[32m'@fortawesome/react-fontawesome'\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 3 |\u001b[39m \u001b[36mimport\u001b[39m { useEffect\u001b[33m,\u001b[39m useState } \u001b[36mfrom\u001b[39m \u001b[32m'react'\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 4 |\u001b[39m \u001b[36mimport\u001b[39m { \u001b[33mGap\u001b[39m\u001b[33m,\u001b[39m \u001b[33mSeparator\u001b[39m } \u001b[36mfrom\u001b[39m \u001b[32m'../../components/atoms'\u001b[39m\u001b[0m\n    at File.buildCodeFrameError (D:\\anime-tokopedia\\node_modules\\@babel\\core\\lib\\transformation\\file\\file.js:249:12)\n    at NodePath.buildCodeFrameError (D:\\anime-tokopedia\\node_modules\\@babel\\traverse\\lib\\path\\index.js:145:21)\n    at PluginPass.enter (D:\\anime-tokopedia\\node_modules\\@babel\\plugin-transform-react-jsx\\lib\\create-plugin.js:154:28)\n    at newFn (D:\\anime-tokopedia\\node_modules\\@babel\\traverse\\lib\\visitors.js:181:21)\n    at NodePath._call (D:\\anime-tokopedia\\node_modules\\@babel\\traverse\\lib\\path\\context.js:53:20)\n    at NodePath.call (D:\\anime-tokopedia\\node_modules\\@babel\\traverse\\lib\\path\\context.js:40:17)\n    at NodePath.visit (D:\\anime-tokopedia\\node_modules\\@babel\\traverse\\lib\\path\\context.js:100:31)\n    at TraversalContext.visitQueue (D:\\anime-tokopedia\\node_modules\\@babel\\traverse\\lib\\context.js:105:16)\n    at TraversalContext.visitSingle (D:\\anime-tokopedia\\node_modules\\@babel\\traverse\\lib\\context.js:79:19)\n    at TraversalContext.visit (D:\\anime-tokopedia\\node_modules\\@babel\\traverse\\lib\\context.js:133:19)");

/***/ }),

/***/ "./src/pages/Collection/index.jsx":
/*!****************************************!*\
  !*** ./src/pages/Collection/index.jsx ***!
  \****************************************/
/***/ (function() {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: D:\\anime-tokopedia\\src\\pages\\Collection\\index.jsx: importSource cannot be set when runtime is classic.\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 1 |\u001b[39m \u001b[90m/** @jsxImportSource @emotion/react */\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m   |\u001b[39m \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 2 |\u001b[39m \u001b[36mimport\u001b[39m { \u001b[33mGap\u001b[39m } \u001b[36mfrom\u001b[39m \u001b[32m'../../components/atoms'\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 3 |\u001b[39m \u001b[36mimport\u001b[39m { \u001b[33mTopTrending\u001b[39m\u001b[33m,\u001b[39m \u001b[33mCarouselCollectionPage\u001b[39m\u001b[33m,\u001b[39m \u001b[33mHeader\u001b[39m\u001b[33m,\u001b[39m \u001b[33mModalInput\u001b[39m\u001b[33m,\u001b[39m \u001b[33mFooter\u001b[39m\u001b[33m,\u001b[39m \u001b[33mError\u001b[39m\u001b[33m,\u001b[39m \u001b[33mModalConfirmation\u001b[39m } \u001b[36mfrom\u001b[39m \u001b[32m'../../components/molecules'\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 4 |\u001b[39m \u001b[36mimport\u001b[39m { styles } \u001b[36mfrom\u001b[39m \u001b[32m'./styles'\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n    at File.buildCodeFrameError (D:\\anime-tokopedia\\node_modules\\@babel\\core\\lib\\transformation\\file\\file.js:249:12)\n    at NodePath.buildCodeFrameError (D:\\anime-tokopedia\\node_modules\\@babel\\traverse\\lib\\path\\index.js:145:21)\n    at PluginPass.enter (D:\\anime-tokopedia\\node_modules\\@babel\\plugin-transform-react-jsx\\lib\\create-plugin.js:154:28)\n    at newFn (D:\\anime-tokopedia\\node_modules\\@babel\\traverse\\lib\\visitors.js:181:21)\n    at NodePath._call (D:\\anime-tokopedia\\node_modules\\@babel\\traverse\\lib\\path\\context.js:53:20)\n    at NodePath.call (D:\\anime-tokopedia\\node_modules\\@babel\\traverse\\lib\\path\\context.js:40:17)\n    at NodePath.visit (D:\\anime-tokopedia\\node_modules\\@babel\\traverse\\lib\\path\\context.js:100:31)\n    at TraversalContext.visitQueue (D:\\anime-tokopedia\\node_modules\\@babel\\traverse\\lib\\context.js:105:16)\n    at TraversalContext.visitSingle (D:\\anime-tokopedia\\node_modules\\@babel\\traverse\\lib\\context.js:79:19)\n    at TraversalContext.visit (D:\\anime-tokopedia\\node_modules\\@babel\\traverse\\lib\\context.js:133:19)");

/***/ }),

/***/ "./src/pages/Detail/index.jsx":
/*!************************************!*\
  !*** ./src/pages/Detail/index.jsx ***!
  \************************************/
/***/ (function() {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: D:\\anime-tokopedia\\src\\pages\\Detail\\index.jsx: importSource cannot be set when runtime is classic.\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 1 |\u001b[39m \u001b[90m/** @jsxImportSource @emotion/react */\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m   |\u001b[39m \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 2 |\u001b[39m \u001b[36mimport\u001b[39m { useQuery } \u001b[36mfrom\u001b[39m \u001b[32m'@apollo/client'\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 3 |\u001b[39m \u001b[36mimport\u001b[39m { useEffect\u001b[33m,\u001b[39m useState } \u001b[36mfrom\u001b[39m \u001b[32m'react'\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 4 |\u001b[39m \u001b[36mimport\u001b[39m { useParams\u001b[33m,\u001b[39m useNavigate } \u001b[36mfrom\u001b[39m \u001b[32m'react-router-dom'\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n    at File.buildCodeFrameError (D:\\anime-tokopedia\\node_modules\\@babel\\core\\lib\\transformation\\file\\file.js:249:12)\n    at NodePath.buildCodeFrameError (D:\\anime-tokopedia\\node_modules\\@babel\\traverse\\lib\\path\\index.js:145:21)\n    at PluginPass.enter (D:\\anime-tokopedia\\node_modules\\@babel\\plugin-transform-react-jsx\\lib\\create-plugin.js:154:28)\n    at newFn (D:\\anime-tokopedia\\node_modules\\@babel\\traverse\\lib\\visitors.js:181:21)\n    at NodePath._call (D:\\anime-tokopedia\\node_modules\\@babel\\traverse\\lib\\path\\context.js:53:20)\n    at NodePath.call (D:\\anime-tokopedia\\node_modules\\@babel\\traverse\\lib\\path\\context.js:40:17)\n    at NodePath.visit (D:\\anime-tokopedia\\node_modules\\@babel\\traverse\\lib\\path\\context.js:100:31)\n    at TraversalContext.visitQueue (D:\\anime-tokopedia\\node_modules\\@babel\\traverse\\lib\\context.js:105:16)\n    at TraversalContext.visitSingle (D:\\anime-tokopedia\\node_modules\\@babel\\traverse\\lib\\context.js:79:19)\n    at TraversalContext.visit (D:\\anime-tokopedia\\node_modules\\@babel\\traverse\\lib\\context.js:133:19)");

/***/ }),

/***/ "./src/pages/index.jsx":
/*!*****************************!*\
  !*** ./src/pages/index.jsx ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Anime": function() { return /* reexport default from dynamic */ _Anime__WEBPACK_IMPORTED_MODULE_0___default.a; },
/* harmony export */   "Collection": function() { return /* reexport default from dynamic */ _Collection__WEBPACK_IMPORTED_MODULE_1___default.a; },
/* harmony export */   "CollectionDetail": function() { return /* reexport default from dynamic */ _CollectionDetail__WEBPACK_IMPORTED_MODULE_2___default.a; },
/* harmony export */   "Detail": function() { return /* reexport default from dynamic */ _Detail__WEBPACK_IMPORTED_MODULE_3___default.a; }
/* harmony export */ });
/* harmony import */ var _Anime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Anime */ "./src/pages/Anime/index.jsx");
/* harmony import */ var _Anime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Anime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Collection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Collection */ "./src/pages/Collection/index.jsx");
/* harmony import */ var _Collection__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Collection__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CollectionDetail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CollectionDetail */ "./src/pages/CollectionDetail/index.jsx");
/* harmony import */ var _CollectionDetail__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_CollectionDetail__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Detail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Detail */ "./src/pages/Detail/index.jsx");
/* harmony import */ var _Detail__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Detail__WEBPACK_IMPORTED_MODULE_3__);






/***/ }),

/***/ "./src/reportWebVitals.js":
/*!********************************!*\
  !*** ./src/reportWebVitals.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var reportWebVitals = function reportWebVitals(onPerfEntry) {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    __webpack_require__.e(/*! import() */ "vendors.web-vitals").then(__webpack_require__.bind(__webpack_require__, /*! web-vitals */ "./node_modules/web-vitals/dist/web-vitals.js")).then(function (_ref) {
      var getCLS = _ref.getCLS,
          getFID = _ref.getFID,
          getFCP = _ref.getFCP,
          getLCP = _ref.getLCP,
          getTTFB = _ref.getTTFB;
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reportWebVitals);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT;;cAEY;EACZ,mCAAmC;EACnC,kCAAkC;AACpC;;AAEA;EACE;aACW;AACb","sourcesContent":["body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors.apollo","vendors.graphql","vendors.style-loader","vendors.fortawesome","vendors.react-dom","vendors.wry","vendors.ts-invariant","vendors.scheduler","vendors.react","vendors.css-loader","vendors.zen-observable-ts","vendors.babel","vendors.tslib","vendors.react-router","vendors.react-router-dom","vendors.optimism","vendors.graphql-tag","vendors.remix-run"], function() { return __webpack_exec__("./src/index.jsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.ce1bad63.js.map