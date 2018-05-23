/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/common/Root/components/Header/index.tsx":
/*!*****************************************************!*\
  !*** ./src/common/Root/components/Header/index.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styledComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styledComponents */ "./src/common/styledComponents.ts");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_3__);




const H = styledComponents__WEBPACK_IMPORTED_MODULE_2__["default"].header`
  display: flex;
  flex: 0 0 ${({
  theme
}) => theme.scale.second};
  justify-content: center;
  align-items: center;
  background-color: white;
  box-shadow: 0 4px 16px ${({
  theme
}) => Object(polished__WEBPACK_IMPORTED_MODULE_3__["rgba"])(theme.colors.quaternary, 0.54)};
`;
const UserInfo = styledComponents__WEBPACK_IMPORTED_MODULE_2__["default"].section``;
const Nav = styledComponents__WEBPACK_IMPORTED_MODULE_2__["default"].nav`
  margin: 0 ${({
  theme
}) => theme.scale.first} 0 auto;
`;
const StyledLink = Object(styledComponents__WEBPACK_IMPORTED_MODULE_2__["default"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"])`
  text-decoration: none;
  color: rgba(0, 0, 0, 0.54);
  :hover {
    color: rgba(0, 0, 0, 0.87);
  }
`;

const Header = props => {
  if (["/login", "/registration"].includes(props.location.pathname)) return null;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(H, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserInfo, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Nav, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLink, {
    to: "/logout"
  }, "Logout")));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/common/Root/index.tsx":
/*!***********************************!*\
  !*** ./src/common/Root/index.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-loader */ "react-hot-loader");
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styledComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styledComponents */ "./src/common/styledComponents.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _screens_UserList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./screens/UserList */ "./src/common/Root/screens/UserList/index.tsx");
/* harmony import */ var _screens_SingleUser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./screens/SingleUser */ "./src/common/Root/screens/SingleUser/index.tsx");
/* harmony import */ var _screens_Login__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./screens/Login */ "./src/common/Root/screens/Login/index.tsx");
/* harmony import */ var _screens_Registration__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./screens/Registration */ "./src/common/Root/screens/Registration/index.tsx");
/* harmony import */ var _screens_Logout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./screens/Logout */ "./src/common/Root/screens/Logout/index.tsx");
/* harmony import */ var _screens_EditProfile__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./screens/EditProfile */ "./src/common/Root/screens/EditProfile/index.tsx");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../theme */ "./src/common/theme.ts");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/Header */ "./src/common/Root/components/Header/index.tsx");














const Main = Object(styledComponents__WEBPACK_IMPORTED_MODULE_3__["default"])("main")`
padding-top: ${({
  theme
}) => theme.scale.second}
  flex-grow: 1;
  background-color: ${({
  theme,
  location
}) => {
  return !["/login", "/registration"].includes(location.pathname) ? Object(polished__WEBPACK_IMPORTED_MODULE_5__["rgba"])(theme.colors.quaternary, 0.12) : "white";
}};
  border-top: 1px solid transparent;
`;
const MainInner = styledComponents__WEBPACK_IMPORTED_MODULE_3__["default"].div`
  max-width: 630px;
  margin: 0 auto;
`;

const Root = props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styledComponents__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
  theme: _theme__WEBPACK_IMPORTED_MODULE_12__["default"]
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_13__["default"], {
  loggedInUser: props.loggedInUser,
  location: props.location
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Main, {
  location: props.location
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MainInner, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  exact: true,
  path: "/registration",
  component: _screens_Registration__WEBPACK_IMPORTED_MODULE_9__["default"]
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  exact: true,
  path: "/login",
  component: _screens_Login__WEBPACK_IMPORTED_MODULE_8__["default"]
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  exact: true,
  path: "/logout",
  component: _screens_Logout__WEBPACK_IMPORTED_MODULE_10__["default"]
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  exact: true,
  path: "/",
  component: _screens_UserList__WEBPACK_IMPORTED_MODULE_6__["default"]
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  exact: true,
  path: "/:id",
  component: _screens_SingleUser__WEBPACK_IMPORTED_MODULE_7__["default"]
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  exact: true,
  path: "/:id/edit",
  component: _screens_EditProfile__WEBPACK_IMPORTED_MODULE_11__["default"]
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  render: props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "404 Not Found")
}))))));

function mapStateToProps(state) {
  return {
    loggedInUser: state.loggedInUser
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__["hot"])(module)(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps)(Root))));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/common/Root/screens/EditProfile/actionCreators.ts":
/*!***************************************************************!*\
  !*** ./src/common/Root/screens/EditProfile/actionCreators.ts ***!
  \***************************************************************/
/*! exports provided: userFetchRequested, userFetchSucceeded, userFetchFailed, userUpdateSucceeded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userFetchRequested", function() { return userFetchRequested; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userFetchSucceeded", function() { return userFetchSucceeded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userFetchFailed", function() { return userFetchFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userUpdateSucceeded", function() { return userUpdateSucceeded; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/common/Root/screens/EditProfile/types.ts");

const userFetchRequested = id => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["userFetchTypes"].USER_FETCH_REQUESTED,
    id
  };
};
const userFetchSucceeded = user => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["userFetchTypes"].USER_FETCH_SUCCEEDED,
    user
  };
};
const userFetchFailed = error => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["userFetchTypes"].USER_FETCH_FAILED,
    error
  };
};
const userUpdateSucceeded = user => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["userUpdateTypes"].USER_UPDATE_SUCCEEDED,
    user
  };
};

/***/ }),

/***/ "./src/common/Root/screens/EditProfile/apiService.ts":
/*!***********************************************************!*\
  !*** ./src/common/Root/screens/EditProfile/apiService.ts ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const fetchUserService = id => {
  if (true) {
    const User = __webpack_require__(/*! ../../../../server/models/User */ "./src/server/models/User/index.ts").default;

    return User.findById(id, User.publicFields).lean().then(user => {
      user._id = user._id.toString();
      return user;
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (fetchUserService);

/***/ }),

/***/ "./src/common/Root/screens/EditProfile/components/styled.ts":
/*!******************************************************************!*\
  !*** ./src/common/Root/screens/EditProfile/components/styled.ts ***!
  \******************************************************************/
/*! exports provided: CancelButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancelButton", function() { return CancelButton; });
/* harmony import */ var Components_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Components/styled */ "./src/common/shared/components/styled.ts");

const CancelButton = Components_styled__WEBPACK_IMPORTED_MODULE_0__["BaseButton"].extend`
  background-color: ${({
  theme
}) => theme.colors.secondary};
  margin-right: ${({
  theme
}) => theme.scale.base};
`;

/***/ }),

/***/ "./src/common/Root/screens/EditProfile/index.tsx":
/*!*******************************************************!*\
  !*** ./src/common/Root/screens/EditProfile/index.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var Components_styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Components/styled */ "./src/common/shared/components/styled.ts");
/* harmony import */ var _components_styled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/styled */ "./src/common/Root/screens/EditProfile/components/styled.ts");
/* harmony import */ var _validationSchema__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./validationSchema */ "./src/common/Root/screens/EditProfile/validationSchema.ts");
/* harmony import */ var _actionCreators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./actionCreators */ "./src/common/Root/screens/EditProfile/actionCreators.ts");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











function onSubmit(props, values, actions) {
  const {
    match: {
      params: {
        id
      }
    }
  } = props;
  actions.setSubmitting(true);
  delete values.serverErrorMessage;
  axios__WEBPACK_IMPORTED_MODULE_4___default.a.post(`/api/${id}/edit`, values).then(res => {
    actions.setSubmitting(false);
    props.userUpdateSucceeded(res.data);
    props.history.push(`/${id}`);
  }).catch(err => {
    actions.setSubmitting(false);
    actions.setErrors({
      serverErrorMessage: err.response.data
    });
  });
}

const EditProfile = props => {
  const {
    id: idUrlParam
  } = props.match.params;
  if (!props.users.length) props.userFetchRequested(idUrlParam);

  const initialValues = _objectSpread({
    serverErrorMessage: null,
    password: ""
  }, props.loggedInUser);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
    initialValues: initialValues,
    validationSchema: _validationSchema__WEBPACK_IMPORTED_MODULE_7__["default"],
    onSubmit: onSubmit.bind(null, props),
    render: ({
      errors,
      touched,
      isSubmitting
    }) => {
      return !props.loggedInUser ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Redirect"], {
        to: "/login"
      }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_styled__WEBPACK_IMPORTED_MODULE_5__["Title"], null, "Edit profile"), errors.serverErrorMessage && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_styled__WEBPACK_IMPORTED_MODULE_5__["ServerErrorMessage"], null, "Server error: ", errors.serverErrorMessage), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_styled__WEBPACK_IMPORTED_MODULE_5__["StyledForm"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_styled__WEBPACK_IMPORTED_MODULE_5__["InputBlock"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_styled__WEBPACK_IMPORTED_MODULE_5__["Label"], {
        htmlFor: "username"
      }, "Username ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "*")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_styled__WEBPACK_IMPORTED_MODULE_5__["StyledField"], {
        type: "text",
        name: "username",
        id: "username"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_styled__WEBPACK_IMPORTED_MODULE_5__["ErrorMessage"], null, touched.username && errors.username && errors.username)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_styled__WEBPACK_IMPORTED_MODULE_5__["InputBlock"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_styled__WEBPACK_IMPORTED_MODULE_5__["Label"], {
        htmlFor: "email"
      }, "Email ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "*")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_styled__WEBPACK_IMPORTED_MODULE_5__["StyledField"], {
        type: "email",
        name: "email",
        id: "email"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_styled__WEBPACK_IMPORTED_MODULE_5__["ErrorMessage"], null, touched.email && errors.email && errors.email)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_styled__WEBPACK_IMPORTED_MODULE_5__["InputBlock"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_styled__WEBPACK_IMPORTED_MODULE_5__["Label"], {
        htmlFor: "firstName"
      }, "First Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_styled__WEBPACK_IMPORTED_MODULE_5__["StyledField"], {
        type: "text",
        name: "firstName",
        id: "firstName"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_styled__WEBPACK_IMPORTED_MODULE_5__["ErrorMessage"], null, touched.firstName && errors.firstName && errors.firstName)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_styled__WEBPACK_IMPORTED_MODULE_5__["InputBlock"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_styled__WEBPACK_IMPORTED_MODULE_5__["Label"], {
        htmlFor: "lastName"
      }, "Last Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_styled__WEBPACK_IMPORTED_MODULE_5__["StyledField"], {
        type: "text",
        name: "lastName",
        id: "lastName"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_styled__WEBPACK_IMPORTED_MODULE_5__["ErrorMessage"], null, touched.lastName && errors.lastName && errors.lastName)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_styled__WEBPACK_IMPORTED_MODULE_5__["BlockWrapper"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_styled__WEBPACK_IMPORTED_MODULE_5__["InputBlock"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_styled__WEBPACK_IMPORTED_MODULE_5__["Label"], {
        htmlFor: "password"
      }, "Password ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "*")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_styled__WEBPACK_IMPORTED_MODULE_5__["StyledField"], {
        type: "password",
        name: "password",
        id: "password"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_styled__WEBPACK_IMPORTED_MODULE_5__["ErrorMessage"], null, touched.password && errors.password && errors.password))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_styled__WEBPACK_IMPORTED_MODULE_5__["BlockWrapper"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styled__WEBPACK_IMPORTED_MODULE_6__["CancelButton"], {
        onClick: () => {
          props.history.goBack();
        }
      }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_styled__WEBPACK_IMPORTED_MODULE_5__["SubmitButton"], {
        type: "submit",
        disabled: isSubmitting
      }, "Submit"))));
    }
  });
};

const actions = {
  userFetchRequested: _actionCreators__WEBPACK_IMPORTED_MODULE_8__["userFetchRequested"],
  userUpdateSucceeded: _actionCreators__WEBPACK_IMPORTED_MODULE_8__["userUpdateSucceeded"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(state => state, actions)(EditProfile));

/***/ }),

/***/ "./src/common/Root/screens/EditProfile/reducers.ts":
/*!*********************************************************!*\
  !*** ./src/common/Root/screens/EditProfile/reducers.ts ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return editPropfileReducer; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/common/Root/screens/EditProfile/types.ts");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function editPropfileReducer(state, action) {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__["userFetchTypes"].USER_FETCH_REQUESTED:
      return _objectSpread({}, state, {
        requestInProgress: true
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["userFetchTypes"].USER_FETCH_SUCCEEDED:
      return _objectSpread({}, state, {
        requestInProgress: false,
        users: [...state.users, action.user]
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["userFetchTypes"].USER_FETCH_FAILED:
      return _objectSpread({}, state, {
        requestInProgress: false,
        error: action.error
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["userUpdateTypes"].USER_UPDATE_SUCCEEDED:
      const {
        users
      } = state;
      let idx = users.findIndex(user => user._id === action.user._id);
      return _objectSpread({}, state, {
        requestInProgress: false,
        users: [...users.slice(0, idx), action.user, ...users.slice(++idx)],
        loggedInUser: action.user
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/common/Root/screens/EditProfile/sagas.ts":
/*!******************************************************!*\
  !*** ./src/common/Root/screens/EditProfile/sagas.ts ***!
  \******************************************************/
/*! exports provided: fetchUserWorker, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUserWorker", function() { return fetchUserWorker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return fetchUserWatcher; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apiService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apiService */ "./src/common/Root/screens/EditProfile/apiService.ts");
/* harmony import */ var _actionCreators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actionCreators */ "./src/common/Root/screens/EditProfile/actionCreators.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types */ "./src/common/Root/screens/EditProfile/types.ts");




function* fetchUserWorker({
  id
}) {
  try {
    const user = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_apiService__WEBPACK_IMPORTED_MODULE_1__["default"], id);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actionCreators__WEBPACK_IMPORTED_MODULE_2__["userFetchSucceeded"])(user));
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actionCreators__WEBPACK_IMPORTED_MODULE_2__["userFetchFailed"])(error));
  }
}
function* fetchUserWatcher() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_types__WEBPACK_IMPORTED_MODULE_3__["userFetchTypes"].USER_FETCH_REQUESTED, fetchUserWorker);
}

/***/ }),

/***/ "./src/common/Root/screens/EditProfile/types.ts":
/*!******************************************************!*\
  !*** ./src/common/Root/screens/EditProfile/types.ts ***!
  \******************************************************/
/*! exports provided: userFetchTypes, userUpdateTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userFetchTypes", function() { return userFetchTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userUpdateTypes", function() { return userUpdateTypes; });
/**
 * USER FETCH
 */
let userFetchTypes;

(function (userFetchTypes) {
  userFetchTypes["USER_FETCH_REQUESTED"] = "USER_FETCH_REQUESTED";
  userFetchTypes["USER_FETCH_SUCCEEDED"] = "USER_FETCH_SUCCEEDED";
  userFetchTypes["USER_FETCH_FAILED"] = "USER_FETCH_FAILED";
})(userFetchTypes || (userFetchTypes = {}));

/**
 * UPDATE USER
 */
let userUpdateTypes;

(function (userUpdateTypes) {
  userUpdateTypes["USER_UPDATE_SUCCEEDED"] = "USER_UPDATE_SUCCEEDED";
})(userUpdateTypes || (userUpdateTypes = {}));

/***/ }),

/***/ "./src/common/Root/screens/EditProfile/validationSchema.ts":
/*!*****************************************************************!*\
  !*** ./src/common/Root/screens/EditProfile/validationSchema.ts ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (Object(yup__WEBPACK_IMPORTED_MODULE_0__["object"])().shape({
  username: Object(yup__WEBPACK_IMPORTED_MODULE_0__["string"])().min(3).max(30).required(),
  email: Object(yup__WEBPACK_IMPORTED_MODULE_0__["string"])().email().max(60).required(),
  firstName: Object(yup__WEBPACK_IMPORTED_MODULE_0__["string"])().min(2).max(30),
  lastName: Object(yup__WEBPACK_IMPORTED_MODULE_0__["string"])().min(2).max(30),
  password: Object(yup__WEBPACK_IMPORTED_MODULE_0__["string"])().min(6).max(30)
}));

/***/ }),

/***/ "./src/common/Root/screens/Login/components.ts":
/*!*****************************************************!*\
  !*** ./src/common/Root/screens/Login/components.ts ***!
  \*****************************************************/
/*! exports provided: StyledForm, InputBlock, DefaultUserMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledForm", function() { return StyledForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputBlock", function() { return InputBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultUserMessage", function() { return DefaultUserMessage; });
/* harmony import */ var styledComponents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styledComponents */ "./src/common/styledComponents.ts");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_1__);


const StyledForm = Object(styledComponents__WEBPACK_IMPORTED_MODULE_0__["default"])(formik__WEBPACK_IMPORTED_MODULE_1__["Form"])`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin: 0 auto;
`;
const InputBlock = styledComponents__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  width: 300px;
`;
const DefaultUserMessage = styledComponents__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  margin-top: ${({
  theme
}) => theme.scale.base};
  padding: ${({
  theme
}) => theme.scale.base};
  color: rgba(0, 0, 0, 0.38);
  font-weight: 100;
  font-style: italic;
  text-align: center;
  > span {
    font-weight: bold;
  }
`;

/***/ }),

/***/ "./src/common/Root/screens/Login/index.tsx":
/*!*************************************************!*\
  !*** ./src/common/Root/screens/Login/index.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var Components_styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Components/styled */ "./src/common/shared/components/styled.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components */ "./src/common/Root/screens/Login/components.ts");
/* harmony import */ var _validationSchema__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./validationSchema */ "./src/common/Root/screens/Login/validationSchema.ts");
/* harmony import */ var _actionCreators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../actionCreators */ "./src/common/actionCreators.ts");









let initialValues = {
  username: "",
  password: "",
  serverErrorMessage: ""
};

if (false) {}

function onSubmit(props, values, formikBag) {
  formikBag.setSubmitting(true);
  delete values.serverErrorMessage;
  axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/api/login", values).then(res => {
    formikBag.setSubmitting(false);
    props.addLoggedInUser(res.data);
    props.history.replace("/");
  }).catch(err => {
    formikBag.setSubmitting(false);
    formikBag.setErrors({
      serverErrorMessage: err.response.data
    });
  });
}

const Login = props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Formik"], {
  initialValues: initialValues,
  validationSchema: _validationSchema__WEBPACK_IMPORTED_MODULE_7__["default"],
  onSubmit: onSubmit.bind(null, props),
  render: ({
    touched,
    errors,
    isSubmitting
  }) => {
    return props.loggedInUser ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Redirect"], {
      to: "/"
    }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_styled__WEBPACK_IMPORTED_MODULE_5__["Title"], null, "Login"), errors.serverErrorMessage && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_styled__WEBPACK_IMPORTED_MODULE_5__["ServerErrorMessage"], null, "Server error: ", errors.serverErrorMessage), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["StyledForm"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["InputBlock"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_styled__WEBPACK_IMPORTED_MODULE_5__["Label"], {
      htmlFor: "username"
    }, "Username ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "*")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_styled__WEBPACK_IMPORTED_MODULE_5__["StyledField"], {
      type: "text",
      name: "username",
      id: "username"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_styled__WEBPACK_IMPORTED_MODULE_5__["ErrorMessage"], null, touched.username && errors.username && errors.username)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["InputBlock"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_styled__WEBPACK_IMPORTED_MODULE_5__["Label"], {
      htmlFor: "password"
    }, "Password ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "*")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_styled__WEBPACK_IMPORTED_MODULE_5__["StyledField"], {
      type: "password",
      name: "password",
      id: "password"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_styled__WEBPACK_IMPORTED_MODULE_5__["ErrorMessage"], null, touched.password && errors.password && errors.password)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_styled__WEBPACK_IMPORTED_MODULE_5__["SubmitButton"], null, "Log in"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_styled__WEBPACK_IMPORTED_MODULE_5__["BottomLink"], {
      to: "/registration"
    }, "...or register a new account if you don't have one."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["DefaultUserMessage"], null, "The default profile username is ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "elon"), " and the password is ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "123123"))));
  }
});

function mapStateToProps(state) {
  return {
    loggedInUser: state.loggedInUser
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, _actionCreators__WEBPACK_IMPORTED_MODULE_8__)(Login));

/***/ }),

/***/ "./src/common/Root/screens/Login/validationSchema.ts":
/*!***********************************************************!*\
  !*** ./src/common/Root/screens/Login/validationSchema.ts ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (Object(yup__WEBPACK_IMPORTED_MODULE_0__["object"])().shape({
  username: Object(yup__WEBPACK_IMPORTED_MODULE_0__["string"])().min(3).max(30).required(),
  password: Object(yup__WEBPACK_IMPORTED_MODULE_0__["string"])().min(6).max(30).required()
}));

/***/ }),

/***/ "./src/common/Root/screens/Logout/index.tsx":
/*!**************************************************!*\
  !*** ./src/common/Root/screens/Logout/index.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actionCreators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../actionCreators */ "./src/common/actionCreators.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class Logout extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), _defineProperty(this, "state", {
      loggedOut: false
    }), _temp;
  }

  componentDidMount() {
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/api/logout").then(() => {
      this.props.removeLoggedInUser();
      this.setState({
        loggedOut: true
      });
    }).catch(err => {
      console.error(err);
    });
  }

  render() {
    return this.state.loggedOut ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
      to: "/login"
    }) : "Redirecting...";
  }

}

function mapStateToProps(state) {
  return {
    loggedInUser: state.loggedInUser
  };
}

function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_4__["bindActionCreators"])({
    removeLoggedInUser: _actionCreators__WEBPACK_IMPORTED_MODULE_5__["removeLoggedInUser"]
  }, dispatch);
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(Logout));

/***/ }),

/***/ "./src/common/Root/screens/Registration/index.tsx":
/*!********************************************************!*\
  !*** ./src/common/Root/screens/Registration/index.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var Components_styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Components/styled */ "./src/common/shared/components/styled.ts");
/* harmony import */ var _validationSchema__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./validationSchema */ "./src/common/Root/screens/Registration/validationSchema.ts");
/* harmony import */ var _actionCreators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../actionCreators */ "./src/common/actionCreators.ts");








const initialValues = {
  username: "",
  email: "",
  firstName: "",
  lastName: "",
  password: "",
  serverErrorMessage: ""
};

function onSubmit(props, values, formikBag) {
  formikBag.setSubmitting(true);
  axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/api/registration", values).then(res => {
    formikBag.setSubmitting(false);
    props.addLoggedInUser(res.data);
    props.history.replace("/");
  }).catch(err => {
    formikBag.setSubmitting(false);
    formikBag.setErrors({
      serverErrorMessage: err.response.data
    });
  });
}

const Registration = props => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Formik"], {
    initialValues: initialValues,
    validationSchema: _validationSchema__WEBPACK_IMPORTED_MODULE_6__["default"],
    onSubmit: onSubmit.bind(null, props),
    render: ({
      touched,
      errors,
      isSubmitting
    }) => {
      return props.loggedInUser ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Redirect"], {
        to: "/"
      }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_styled__WEBPACK_IMPORTED_MODULE_5__["Title"], null, " Registration "), errors.serverErrorMessage && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_styled__WEBPACK_IMPORTED_MODULE_5__["ServerErrorMessage"], null, "Server error: ", errors.serverErrorMessage), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_styled__WEBPACK_IMPORTED_MODULE_5__["StyledForm"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_styled__WEBPACK_IMPORTED_MODULE_5__["InputBlock"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_styled__WEBPACK_IMPORTED_MODULE_5__["Label"], {
        htmlFor: "username"
      }, "Username ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "*")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_styled__WEBPACK_IMPORTED_MODULE_5__["StyledField"], {
        type: "text",
        name: "username",
        id: "username"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_styled__WEBPACK_IMPORTED_MODULE_5__["ErrorMessage"], null, touched.username && errors.username && errors.username)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_styled__WEBPACK_IMPORTED_MODULE_5__["InputBlock"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_styled__WEBPACK_IMPORTED_MODULE_5__["Label"], {
        htmlFor: "email"
      }, "Email ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "*")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_styled__WEBPACK_IMPORTED_MODULE_5__["StyledField"], {
        type: "email",
        name: "email",
        id: "email"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_styled__WEBPACK_IMPORTED_MODULE_5__["ErrorMessage"], null, touched.email && errors.email && errors.email)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_styled__WEBPACK_IMPORTED_MODULE_5__["InputBlock"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_styled__WEBPACK_IMPORTED_MODULE_5__["Label"], {
        htmlFor: "firstName"
      }, "First Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_styled__WEBPACK_IMPORTED_MODULE_5__["StyledField"], {
        type: "text",
        name: "firstName",
        id: "firstName"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_styled__WEBPACK_IMPORTED_MODULE_5__["ErrorMessage"], null, touched.firstName && errors.firstName && errors.firstName)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_styled__WEBPACK_IMPORTED_MODULE_5__["InputBlock"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_styled__WEBPACK_IMPORTED_MODULE_5__["Label"], {
        htmlFor: "lastName"
      }, "Last Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_styled__WEBPACK_IMPORTED_MODULE_5__["StyledField"], {
        type: "text",
        name: "lastName",
        id: "lastName"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_styled__WEBPACK_IMPORTED_MODULE_5__["ErrorMessage"], null, touched.lastName && errors.lastName && errors.lastName)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_styled__WEBPACK_IMPORTED_MODULE_5__["BlockWrapper"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_styled__WEBPACK_IMPORTED_MODULE_5__["InputBlock"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_styled__WEBPACK_IMPORTED_MODULE_5__["Label"], {
        htmlFor: "password"
      }, "Password ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "*")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_styled__WEBPACK_IMPORTED_MODULE_5__["StyledField"], {
        type: "password",
        name: "password",
        id: "password"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_styled__WEBPACK_IMPORTED_MODULE_5__["ErrorMessage"], null, touched.password && errors.password && errors.password))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_styled__WEBPACK_IMPORTED_MODULE_5__["BlockWrapper"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_styled__WEBPACK_IMPORTED_MODULE_5__["SubmitButton"], {
        type: "submit",
        disabled: isSubmitting
      }, "Submit")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_styled__WEBPACK_IMPORTED_MODULE_5__["BlockWrapper"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_styled__WEBPACK_IMPORTED_MODULE_5__["BottomLink"], {
        to: "/login"
      }, "\u2026or log in if you have an account."))));
    }
  });
};

function mapStateToProps(state) {
  return {
    loggedInUser: state.loggedInUser
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, {
  addLoggedInUser: _actionCreators__WEBPACK_IMPORTED_MODULE_7__["addLoggedInUser"]
})(Registration));

/***/ }),

/***/ "./src/common/Root/screens/Registration/validationSchema.ts":
/*!******************************************************************!*\
  !*** ./src/common/Root/screens/Registration/validationSchema.ts ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (Object(yup__WEBPACK_IMPORTED_MODULE_0__["object"])().shape({
  username: Object(yup__WEBPACK_IMPORTED_MODULE_0__["string"])().min(3).max(30).required(),
  email: Object(yup__WEBPACK_IMPORTED_MODULE_0__["string"])().email().max(60).required(),
  firstName: Object(yup__WEBPACK_IMPORTED_MODULE_0__["string"])().min(2).max(30),
  lastName: Object(yup__WEBPACK_IMPORTED_MODULE_0__["string"])().min(2).max(30),
  password: Object(yup__WEBPACK_IMPORTED_MODULE_0__["string"])().min(6).max(30).required()
}));

/***/ }),

/***/ "./src/common/Root/screens/SingleUser/actionCreators.ts":
/*!**************************************************************!*\
  !*** ./src/common/Root/screens/SingleUser/actionCreators.ts ***!
  \**************************************************************/
/*! exports provided: fetchSingleUserRequested, fetchSingleUserSucceeded, fetchSingleUserFailed, removeUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSingleUserRequested", function() { return fetchSingleUserRequested; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSingleUserSucceeded", function() { return fetchSingleUserSucceeded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSingleUserFailed", function() { return fetchSingleUserFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeUser", function() { return removeUser; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/common/Root/screens/SingleUser/types.ts");

const fetchSingleUserRequested = id => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["fetchSingleUserTypes"].FETCH_SINGLE_USER_REQUESTED,
    id
  };
};
const fetchSingleUserSucceeded = user => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["fetchSingleUserTypes"].FETCH_SINGLE_USER_SUCCEEDED,
    user
  };
};
const fetchSingleUserFailed = error => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["fetchSingleUserTypes"].FETCH_SINGLE_USER_FAILED,
    error
  };
};
const removeUser = id => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["removeUserTypes"].REMOVE_USER,
    id
  };
};

/***/ }),

/***/ "./src/common/Root/screens/SingleUser/apiService.ts":
/*!**********************************************************!*\
  !*** ./src/common/Root/screens/SingleUser/apiService.ts ***!
  \**********************************************************/
/*! exports provided: fetchSingleUser, removeUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSingleUser", function() { return fetchSingleUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeUser", function() { return removeUser; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const fetchSingleUser = id => {
  if (false) {} else if (true) {
    const User = __webpack_require__(/*! ../../../../server/models/User */ "./src/server/models/User/index.ts").default;

    return User.findById(id, User.publicFields).lean().then(user => {
      user._id = user._id.toString();
      return user;
    });
  }
};
const removeUser = id => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`/api/delete/${id}`);
};

/***/ }),

/***/ "./src/common/Root/screens/SingleUser/components/ArrowBack/index.tsx":
/*!***************************************************************************!*\
  !*** ./src/common/Root/screens/SingleUser/components/ArrowBack/index.tsx ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styledComponents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styledComponents */ "./src/common/styledComponents.ts");



const ArrowBack = ({
  theme,
  width = 18,
  height = 18
}) => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: width,
    height: height,
    xmlns: "http://www.w3.org/2000/svg"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M18 7.895v2.21H4.311l6.279 6.305L9 18 0 9l9-9 1.59 1.59L4.31 7.895z",
    fill: theme.colors.tertiary,
    fillRule: "evenodd"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(styledComponents__WEBPACK_IMPORTED_MODULE_1__["withTheme"])(ArrowBack));

/***/ }),

/***/ "./src/common/Root/screens/SingleUser/components/styled.ts":
/*!*****************************************************************!*\
  !*** ./src/common/Root/screens/SingleUser/components/styled.ts ***!
  \*****************************************************************/
/*! exports provided: Card, FullName, Username, Email, RegisteredSince, Buttons, BaseButton, EditButton, DeleteButton, BackButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullName", function() { return FullName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Username", function() { return Username; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Email", function() { return Email; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisteredSince", function() { return RegisteredSince; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Buttons", function() { return Buttons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseButton", function() { return BaseButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditButton", function() { return EditButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteButton", function() { return DeleteButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackButton", function() { return BackButton; });
/* harmony import */ var styledComponents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styledComponents */ "./src/common/styledComponents.ts");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);



const Card = styledComponents__WEBPACK_IMPORTED_MODULE_0__["default"].article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: ${({
  theme
}) => theme.scale.first};
  padding: ${({
  theme
}) => theme.scale.first};
  box-shadow: 0 4px 16px ${({
  theme
}) => Object(polished__WEBPACK_IMPORTED_MODULE_1__["rgba"])(theme.colors.quaternary, 0.54)};
`;
const FullName = styledComponents__WEBPACK_IMPORTED_MODULE_0__["default"].h2`
  margin: 0;
  font-size: ${({
  theme
}) => theme.scale.second};
  color: rgba(0, 0, 0 0.87);
  font-weight: normal;
`;
const Username = styledComponents__WEBPACK_IMPORTED_MODULE_0__["default"].h3`
  margin: 0;
  color: rgba(0, 0, 0, 0.54);
  font-weight: normal;
`;
const Email = styledComponents__WEBPACK_IMPORTED_MODULE_0__["default"].p`
  margin: ${({
  theme
}) => theme.scale.second} 0 0 0;
  color: rgba(0, 0, 0, 0.54);
  span {
    font-weight: bold;
  }
`;
const RegisteredSince = styledComponents__WEBPACK_IMPORTED_MODULE_0__["default"].p`
  margin: ${({
  theme
}) => theme.scale.first} 0 0 0;
  color: rgba(0, 0, 0, 0.54);
  span {
    font-weight: bold;
  }
`;
const Buttons = styledComponents__WEBPACK_IMPORTED_MODULE_0__["default"].section`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: ${({
  theme
}) => theme.scale.third};
`;
const BaseButton = Object(styledComponents__WEBPACK_IMPORTED_MODULE_0__["default"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"])`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: ${({
  theme
}) => theme.scale.fifth};
  height: ${({
  theme
}) => theme.scale.second};
  border: none;
  border-radius: ${({
  theme
}) => theme.scale.second};
  color: white;
  font-size: ${({
  theme
}) => theme.scale.base};
  text-decoration: none;
  :last-child {
    margin-left: ${({
  theme
}) => theme.scale.second};
  }
  padding: 0;
`;
const EditButton = BaseButton.extend`
  background-color: ${({
  theme
}) => theme.colors.tertiary};
`;
const DeleteButton = BaseButton.withComponent("button").extend`
  background-color: ${({
  theme
}) => theme.colors.secondary};
  cursor: pointer;
`;
const BackButton = Object(styledComponents__WEBPACK_IMPORTED_MODULE_0__["default"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"])`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: ${({
  theme
}) => theme.scale.first};
  width: ${({
  theme
}) => theme.scale.fourth};
  height: ${({
  theme
}) => theme.scale.second};
  border: 2px solid ${({
  theme
}) => theme.colors.tertiary};
  border-radius: ${({
  theme
}) => theme.scale.second};
  text-decoration: none;
  color: ${({
  theme
}) => theme.colors.tertiary};
  opacity: 0.6;
  transition: opacity 100ms;
  :hover {
    opacity: 1;
    background-color: rgba(255, 255, 255, 0.6);
  }
`;

/***/ }),

/***/ "./src/common/Root/screens/SingleUser/index.tsx":
/*!******************************************************!*\
  !*** ./src/common/Root/screens/SingleUser/index.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/styled */ "./src/common/Root/screens/SingleUser/components/styled.ts");
/* harmony import */ var _components_ArrowBack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/ArrowBack */ "./src/common/Root/screens/SingleUser/components/ArrowBack/index.tsx");
/* harmony import */ var _actionCreators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actionCreators */ "./src/common/Root/screens/SingleUser/actionCreators.ts");
/* harmony import */ var _actionCreators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../actionCreators */ "./src/common/actionCreators.ts");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









class SingleUser extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "removeUser", () => {
      const {
        history,
        match: {
          params: {
            id
          }
        },
        removeUser,
        removeLoggedInUser
      } = this.props;
      removeUser(id);
      removeLoggedInUser();
      history.push("/login");
    });

    if (true) props.fetchSingleUserRequested(this.props.match.params.id);
  }

  render() {
    const {
      users,
      match: {
        params: {
          id: idUrlParam
        }
      }
    } = this.props;

    if (!/^[0-9a-fA-F]{24}$/.test(idUrlParam) || !users.length) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
        to: "/"
      });
    }

    const {
      firstName,
      lastName,
      username,
      email,
      createdAt
    } = users.find(user => user._id === idUrlParam);
    const {
      _id: loggedInUserId
    } = this.props.loggedInUser;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styled__WEBPACK_IMPORTED_MODULE_3__["BackButton"], {
      to: "/"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ArrowBack__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Back")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styled__WEBPACK_IMPORTED_MODULE_3__["Card"], null, firstName || lastName ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styled__WEBPACK_IMPORTED_MODULE_3__["FullName"], null, firstName, " ", lastName), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styled__WEBPACK_IMPORTED_MODULE_3__["Username"], null, "@", username)) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styled__WEBPACK_IMPORTED_MODULE_3__["FullName"], null, "@", username), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styled__WEBPACK_IMPORTED_MODULE_3__["Email"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Email:"), " ", email), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styled__WEBPACK_IMPORTED_MODULE_3__["RegisteredSince"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Registered since: "), new Date(createdAt).toDateString()), loggedInUserId === idUrlParam && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styled__WEBPACK_IMPORTED_MODULE_3__["Buttons"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styled__WEBPACK_IMPORTED_MODULE_3__["EditButton"], {
      to: `/${idUrlParam}/edit`
    }, "Edit profile"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styled__WEBPACK_IMPORTED_MODULE_3__["DeleteButton"], {
      to: "",
      onClick: this.removeUser
    }, "Delete account"))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(state => state, _objectSpread({}, _actionCreators__WEBPACK_IMPORTED_MODULE_5__, {
  removeLoggedInUser: _actionCreators__WEBPACK_IMPORTED_MODULE_6__["removeLoggedInUser"]
}))(SingleUser));

/***/ }),

/***/ "./src/common/Root/screens/SingleUser/reducers.ts":
/*!********************************************************!*\
  !*** ./src/common/Root/screens/SingleUser/reducers.ts ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return singleUserReducer; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/common/Root/screens/SingleUser/types.ts");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function singleUserReducer(state, action) {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__["fetchSingleUserTypes"].FETCH_SINGLE_USER_REQUESTED:
      return _objectSpread({}, state, {
        requestInProgress: true
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["fetchSingleUserTypes"].FETCH_SINGLE_USER_SUCCEEDED:
      return _objectSpread({}, state, {
        users: [...state.users, _objectSpread({}, action.user)],
        requestInProgress: false
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["fetchSingleUserTypes"].FETCH_SINGLE_USER_FAILED:
      return _objectSpread({}, state, {
        error: action.error,
        requestInProgress: false
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["removeUserTypes"].REMOVE_USER:
      const {
        users
      } = state;
      const idx = users.findIndex(user => user._id === action.id);
      return _objectSpread({}, state, {
        users: [...users.slice(0, idx), ...users.slice(idx + 1)]
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/common/Root/screens/SingleUser/sagas.ts":
/*!*****************************************************!*\
  !*** ./src/common/Root/screens/SingleUser/sagas.ts ***!
  \*****************************************************/
/*! exports provided: fetchSingleUserWorker, removeUserWorker, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSingleUserWorker", function() { return fetchSingleUserWorker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeUserWorker", function() { return removeUserWorker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return watchFetchSingleUser; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apiService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apiService */ "./src/common/Root/screens/SingleUser/apiService.ts");
/* harmony import */ var _actionCreators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actionCreators */ "./src/common/Root/screens/SingleUser/actionCreators.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types */ "./src/common/Root/screens/SingleUser/types.ts");




function* fetchSingleUserWorker(action) {
  if (action.type === _types__WEBPACK_IMPORTED_MODULE_3__["fetchSingleUserTypes"].FETCH_SINGLE_USER_REQUESTED) {
    try {
      const user = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_apiService__WEBPACK_IMPORTED_MODULE_1__["fetchSingleUser"], action.id);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actionCreators__WEBPACK_IMPORTED_MODULE_2__["fetchSingleUserSucceeded"])(user));
    } catch (error) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actionCreators__WEBPACK_IMPORTED_MODULE_2__["fetchSingleUserFailed"])(error));
    }
  }
}
function* removeUserWorker(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_apiService__WEBPACK_IMPORTED_MODULE_1__["removeUser"], action.id);
  } catch (e) {
    console.error(e);
  }
}
function* watchFetchSingleUser() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_types__WEBPACK_IMPORTED_MODULE_3__["fetchSingleUserTypes"].FETCH_SINGLE_USER_REQUESTED, fetchSingleUserWorker), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_types__WEBPACK_IMPORTED_MODULE_3__["removeUserTypes"].REMOVE_USER, removeUserWorker)]);
}

/***/ }),

/***/ "./src/common/Root/screens/SingleUser/types.ts":
/*!*****************************************************!*\
  !*** ./src/common/Root/screens/SingleUser/types.ts ***!
  \*****************************************************/
/*! exports provided: fetchSingleUserTypes, removeUserTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSingleUserTypes", function() { return fetchSingleUserTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeUserTypes", function() { return removeUserTypes; });
let fetchSingleUserTypes;

(function (fetchSingleUserTypes) {
  fetchSingleUserTypes["FETCH_SINGLE_USER_REQUESTED"] = "FETCH_SINGLE_USER_REQUESTED";
  fetchSingleUserTypes["FETCH_SINGLE_USER_SUCCEEDED"] = "FETCH_SINGLE_USER_SUCCEEDED";
  fetchSingleUserTypes["FETCH_SINGLE_USER_FAILED"] = "FETCH_SINGLE_USER_FAILED";
})(fetchSingleUserTypes || (fetchSingleUserTypes = {}));

/**
 * REMOVE USER
 */
let removeUserTypes;

(function (removeUserTypes) {
  removeUserTypes["REMOVE_USER"] = "REMOVE_USER";
})(removeUserTypes || (removeUserTypes = {}));

/***/ }),

/***/ "./src/common/Root/screens/UserList/actionCreators.ts":
/*!************************************************************!*\
  !*** ./src/common/Root/screens/UserList/actionCreators.ts ***!
  \************************************************************/
/*! exports provided: usersFetchRequested, usersFetchSucceeded, usersFetchFailed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usersFetchRequested", function() { return usersFetchRequested; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usersFetchSucceeded", function() { return usersFetchSucceeded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usersFetchFailed", function() { return usersFetchFailed; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/common/Root/screens/UserList/types.ts");

const usersFetchRequested = () => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["UsersFetchActionTypes"].USERS_FETCH_REQUESTED
  };
};
const usersFetchSucceeded = users => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["UsersFetchActionTypes"].USERS_FETCH_SUCCEEDED,
    users
  };
};
const usersFetchFailed = error => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["UsersFetchActionTypes"].USERS_FETCH_FAILED,
    error
  };
};

/***/ }),

/***/ "./src/common/Root/screens/UserList/apiService.ts":
/*!********************************************************!*\
  !*** ./src/common/Root/screens/UserList/apiService.ts ***!
  \********************************************************/
/*! exports provided: fetchUsers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUsers", function() { return fetchUsers; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const fetchUsers = () => {
  if (false) {} else if (true) {
    const User = __webpack_require__(/*! ../../../../server/models/User */ "./src/server/models/User/index.ts").default;

    return User.find({}, User.publicFields).lean().then(users => {
      return users.map(user => {
        user._id = user._id.toString();
        return user;
      });
    });
  }
};

/***/ }),

/***/ "./src/common/Root/screens/UserList/components/IsLoggedInUser/index.tsx":
/*!******************************************************************************!*\
  !*** ./src/common/Root/screens/UserList/components/IsLoggedInUser/index.tsx ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styledComponents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styledComponents */ "./src/common/styledComponents.ts");


const ThisIsYou = styledComponents__WEBPACK_IMPORTED_MODULE_1__["default"].p`
  display: inline-block;
  margin: 0;
  font-size: ${({
  theme
}) => theme.scale.base};
  font-style: italic;
  font-weight: normal;
  color: ${({
  theme
}) => theme.colors.quaternary};
`;

const IsLoggedInUser = ({
  loggedInUserId,
  userId
}) => {
  return loggedInUserId === userId ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThisIsYou, null, " \xA0 \u2014 this is you") : null;
};

/* harmony default export */ __webpack_exports__["default"] = (IsLoggedInUser);

/***/ }),

/***/ "./src/common/Root/screens/UserList/components/styled/index.ts":
/*!*********************************************************************!*\
  !*** ./src/common/Root/screens/UserList/components/styled/index.ts ***!
  \*********************************************************************/
/*! exports provided: Card, FullName, Username */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullName", function() { return FullName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Username", function() { return Username; });
/* harmony import */ var styledComponents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styledComponents */ "./src/common/styledComponents.ts");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);



const Card = Object(styledComponents__WEBPACK_IMPORTED_MODULE_0__["default"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"])`
  flex-basis: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${({
  theme
}) => theme.scale.third};
  padding: 0 ${({
  theme
}) => theme.scale.first} 0;
  :not(:first-child) {
    margin-top: ${({
  theme
}) => theme.scale.first};
  }
  box-shadow: 0 4px 16px ${({
  theme
}) => Object(polished__WEBPACK_IMPORTED_MODULE_1__["rgba"])(theme.colors.quaternary, 0.54)};
  text-decoration: none;
  border: 2px solid transparent;
  :hover {
    border: 2px solid ${({
  theme
}) => theme.colors.primary};
  }
  background-color: white;
  border-radius: ${({
  theme
}) => theme.scale.mFirst};
`;
const FullName = Object(styledComponents__WEBPACK_IMPORTED_MODULE_0__["default"])("h2")`
  display: block;
  margin: 0;
  font-size: ${({
  theme
}) => theme.scale.base};
  font-weight: ${({
  bold
}) => bold ? "bold" : "normal"}
  color: rgba(0, 0, 0, 0.87);
`;
const Username = styledComponents__WEBPACK_IMPORTED_MODULE_0__["default"].h3`
  display: block;
  margin: 0;
  font-size: ${({
  theme
}) => theme.scale.base};
  font-weight: 100;
  color: rgba(0, 0, 0, 0.54);
`;

/***/ }),

/***/ "./src/common/Root/screens/UserList/index.tsx":
/*!****************************************************!*\
  !*** ./src/common/Root/screens/UserList/index.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actionCreators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actionCreators */ "./src/common/Root/screens/UserList/actionCreators.ts");
/* harmony import */ var _components_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/styled */ "./src/common/Root/screens/UserList/components/styled/index.ts");
/* harmony import */ var _components_IsLoggedInUser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/IsLoggedInUser */ "./src/common/Root/screens/UserList/components/IsLoggedInUser/index.tsx");







class UserList extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    if (this.props.loggedInUser) this.props.usersFetchRequested();
  }

  render() {
    if (this.props.loggedInUser) {
      const {
        loggedInUser,
        users
      } = this.props;
      const loggedInUserId = loggedInUser._id;
      return users.map(user => {
        const {
          firstName,
          lastName,
          username
        } = user;
        let userId = user._id;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styled__WEBPACK_IMPORTED_MODULE_4__["Card"], {
          key: userId,
          to: `/${userId}`
        }, firstName || lastName ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styled__WEBPACK_IMPORTED_MODULE_4__["FullName"], {
          bold: loggedInUserId === userId
        }, firstName, " ", lastName, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_IsLoggedInUser__WEBPACK_IMPORTED_MODULE_5__["default"], {
          loggedInUserId: loggedInUserId,
          userId: userId
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styled__WEBPACK_IMPORTED_MODULE_4__["Username"], null, "@", username)) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styled__WEBPACK_IMPORTED_MODULE_4__["FullName"], {
          bold: loggedInUserId === userId
        }, "@", username, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_IsLoggedInUser__WEBPACK_IMPORTED_MODULE_5__["default"], {
          loggedInUserId: loggedInUserId,
          userId: userId
        })));
      });
    } else {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
        to: "/login"
      });
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(state => state, _actionCreators__WEBPACK_IMPORTED_MODULE_3__)(UserList));

/***/ }),

/***/ "./src/common/Root/screens/UserList/reducers.ts":
/*!******************************************************!*\
  !*** ./src/common/Root/screens/UserList/reducers.ts ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userList; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/common/Root/screens/UserList/types.ts");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function userList(state, action) {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__["UsersFetchActionTypes"].USERS_FETCH_REQUESTED:
      return _objectSpread({}, state, {
        requestInProgress: true
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["UsersFetchActionTypes"].USERS_FETCH_SUCCEEDED:
      return _objectSpread({}, state, {
        users: action.users,
        requestInProgress: false
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["UsersFetchActionTypes"].USERS_FETCH_FAILED:
      return _objectSpread({}, state, {
        error: action.error,
        requestInProgress: false
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/common/Root/screens/UserList/sagas.ts":
/*!***************************************************!*\
  !*** ./src/common/Root/screens/UserList/sagas.ts ***!
  \***************************************************/
/*! exports provided: fetchUsers, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUsers", function() { return fetchUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userListSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apiService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apiService */ "./src/common/Root/screens/UserList/apiService.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./src/common/Root/screens/UserList/types.ts");



function* fetchUsers() {
  try {
    const users = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_apiService__WEBPACK_IMPORTED_MODULE_1__["fetchUsers"]);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _types__WEBPACK_IMPORTED_MODULE_2__["UsersFetchActionTypes"].USERS_FETCH_SUCCEEDED,
      users
    });
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _types__WEBPACK_IMPORTED_MODULE_2__["UsersFetchActionTypes"].USERS_FETCH_FAILED,
      error
    });
  }
}
function* userListSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_types__WEBPACK_IMPORTED_MODULE_2__["UsersFetchActionTypes"].USERS_FETCH_REQUESTED, fetchUsers);
}

/***/ }),

/***/ "./src/common/Root/screens/UserList/types.ts":
/*!***************************************************!*\
  !*** ./src/common/Root/screens/UserList/types.ts ***!
  \***************************************************/
/*! exports provided: UsersFetchActionTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersFetchActionTypes", function() { return UsersFetchActionTypes; });
let UsersFetchActionTypes;

(function (UsersFetchActionTypes) {
  UsersFetchActionTypes["USERS_FETCH_REQUESTED"] = "USERS_FETCH_REQUESTED";
  UsersFetchActionTypes["USERS_FETCH_SUCCEEDED"] = "USERS_FETCH_SUCCEEDED";
  UsersFetchActionTypes["USERS_FETCH_FAILED"] = "USERS_FETCH_FAILED";
})(UsersFetchActionTypes || (UsersFetchActionTypes = {}));

/***/ }),

/***/ "./src/common/actionCreators.ts":
/*!**************************************!*\
  !*** ./src/common/actionCreators.ts ***!
  \**************************************/
/*! exports provided: addLoggedInUser, removeLoggedInUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addLoggedInUser", function() { return addLoggedInUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeLoggedInUser", function() { return removeLoggedInUser; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/common/types.ts");

const addLoggedInUser = user => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["loggedInUserTypes"].ADD_LOGGED_IN_USER,
    user
  };
};
const removeLoggedInUser = () => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["loggedInUserTypes"].REMOVE_LOGGED_IN_USER
  };
};

/***/ }),

/***/ "./src/common/configureStore.ts":
/*!**************************************!*\
  !*** ./src/common/configureStore.ts ***!
  \**************************************/
/*! exports provided: defaultState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultState", function() { return defaultState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return configureStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _rootReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rootReducer */ "./src/common/rootReducer.ts");



const defaultState = {
  users: [],
  loggedInUser: null,
  requestInProgress: false,
  error: null
};
function configureStore(preloadedState = defaultState) {
  const enhancers = [];
  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_1___default()();
  enhancers.push(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(sagaMiddleware));

  if ("development" === "development" && typeof window === "object" && typeof window.__REDUX_DEVTOOLS_EXTENSION__ === "function") {
    enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__());
  }

  const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_rootReducer__WEBPACK_IMPORTED_MODULE_2__["default"], preloadedState, Object(redux__WEBPACK_IMPORTED_MODULE_0__["compose"])(...enhancers));
  store.runSaga = sagaMiddleware.run;

  store.close = () => store.dispatch(redux_saga__WEBPACK_IMPORTED_MODULE_1__["END"]);

  return store;
}

/***/ }),

/***/ "./src/common/globalStyles.ts":
/*!************************************!*\
  !*** ./src/common/globalStyles.ts ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styledComponents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styledComponents */ "./src/common/styledComponents.ts");

styledComponents__WEBPACK_IMPORTED_MODULE_0__["injectGlobal"]`
  * {
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    margin: 0;
    font-family: "Inter UI", sans-serif;
  }
  
  #root {
    display: flex;
    height: 100%;
    flex-direction: column;
  }
`;

/***/ }),

/***/ "./src/common/rootReducer.ts":
/*!***********************************!*\
  !*** ./src/common/rootReducer.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootReducer; });
/* harmony import */ var _Root_screens_UserList_reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Root/screens/UserList/reducers */ "./src/common/Root/screens/UserList/reducers.ts");
/* harmony import */ var _Root_screens_SingleUser_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Root/screens/SingleUser/reducers */ "./src/common/Root/screens/SingleUser/reducers.ts");
/* harmony import */ var _Root_screens_EditProfile_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Root/screens/EditProfile/reducers */ "./src/common/Root/screens/EditProfile/reducers.ts");
/* harmony import */ var _Root_screens_UserList_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Root/screens/UserList/types */ "./src/common/Root/screens/UserList/types.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types */ "./src/common/types.ts");
/* harmony import */ var _Root_screens_SingleUser_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Root/screens/SingleUser/types */ "./src/common/Root/screens/SingleUser/types.ts");
/* harmony import */ var _Root_screens_EditProfile_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Root/screens/EditProfile/types */ "./src/common/Root/screens/EditProfile/types.ts");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function rootReducer(state, action) {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_4__["loggedInUserTypes"].ADD_LOGGED_IN_USER:
      return _objectSpread({}, state, {
        loggedInUser: action.user
      });

    case _types__WEBPACK_IMPORTED_MODULE_4__["loggedInUserTypes"].REMOVE_LOGGED_IN_USER:
      return _objectSpread({}, state, {
        loggedInUser: null
      });

    case _Root_screens_UserList_types__WEBPACK_IMPORTED_MODULE_3__["UsersFetchActionTypes"].USERS_FETCH_REQUESTED:
    case _Root_screens_UserList_types__WEBPACK_IMPORTED_MODULE_3__["UsersFetchActionTypes"].USERS_FETCH_SUCCEEDED:
    case _Root_screens_UserList_types__WEBPACK_IMPORTED_MODULE_3__["UsersFetchActionTypes"].USERS_FETCH_FAILED:
      return Object(_Root_screens_UserList_reducers__WEBPACK_IMPORTED_MODULE_0__["default"])(state, action);

    case _Root_screens_SingleUser_types__WEBPACK_IMPORTED_MODULE_5__["fetchSingleUserTypes"].FETCH_SINGLE_USER_REQUESTED:
    case _Root_screens_SingleUser_types__WEBPACK_IMPORTED_MODULE_5__["fetchSingleUserTypes"].FETCH_SINGLE_USER_SUCCEEDED:
    case _Root_screens_SingleUser_types__WEBPACK_IMPORTED_MODULE_5__["fetchSingleUserTypes"].FETCH_SINGLE_USER_FAILED:
      return Object(_Root_screens_SingleUser_reducers__WEBPACK_IMPORTED_MODULE_1__["default"])(state, action);

    case _Root_screens_EditProfile_types__WEBPACK_IMPORTED_MODULE_6__["userUpdateTypes"].USER_UPDATE_SUCCEEDED:
      return Object(_Root_screens_EditProfile_reducers__WEBPACK_IMPORTED_MODULE_2__["default"])(state, action);

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/common/rootSaga.ts":
/*!********************************!*\
  !*** ./src/common/rootSaga.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Root_screens_UserList_sagas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Root/screens/UserList/sagas */ "./src/common/Root/screens/UserList/sagas.ts");
/* harmony import */ var _Root_screens_SingleUser_sagas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Root/screens/SingleUser/sagas */ "./src/common/Root/screens/SingleUser/sagas.ts");
/* harmony import */ var _Root_screens_EditProfile_sagas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Root/screens/EditProfile/sagas */ "./src/common/Root/screens/EditProfile/sagas.ts");




function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_Root_screens_UserList_sagas__WEBPACK_IMPORTED_MODULE_1__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_Root_screens_SingleUser_sagas__WEBPACK_IMPORTED_MODULE_2__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_Root_screens_EditProfile_sagas__WEBPACK_IMPORTED_MODULE_3__["default"])]);
}

/***/ }),

/***/ "./src/common/shared/components/styled.ts":
/*!************************************************!*\
  !*** ./src/common/shared/components/styled.ts ***!
  \************************************************/
/*! exports provided: Title, ServerErrorMessage, BaseButton, SubmitButton, ErrorMessage, Label, StyledField, BottomLink, InputBlock, BlockWrapper, StyledForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerErrorMessage", function() { return ServerErrorMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseButton", function() { return BaseButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmitButton", function() { return SubmitButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorMessage", function() { return ErrorMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return Label; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledField", function() { return StyledField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomLink", function() { return BottomLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputBlock", function() { return InputBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockWrapper", function() { return BlockWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledForm", function() { return StyledForm; });
/* harmony import */ var styledComponents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styledComponents */ "./src/common/styledComponents.ts");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);



const Title = styledComponents__WEBPACK_IMPORTED_MODULE_0__["default"].h1`
  font-size: ${({
  theme
}) => theme.scale.second};
  font-weight: 100;
  color: rgba(0, 0, 0, 0.54);
  text-align: center;
  padding: 0 0 ${({
  theme
}) => theme.scale.base} 0;
  margin: 0;
`;
const ServerErrorMessage = styledComponents__WEBPACK_IMPORTED_MODULE_0__["default"].p`
  color: ${({
  theme
}) => theme.colors.secondary};
  text-align: center;
`;
const BaseButton = styledComponents__WEBPACK_IMPORTED_MODULE_0__["default"].button`
  display: block;
  height: 40px;
  width: 150px;
  font-size: ${({
  theme
}) => theme.scale.base};
  background-color: ${({
  theme
}) => theme.colors.primary};
  color: white;
  border-radius: 40px;
  font-weight: 100;
  border: none;
  :disabled {
    opacity: 0.5;
  }
`;
const SubmitButton = BaseButton.extend``;
const ErrorMessage = styledComponents__WEBPACK_IMPORTED_MODULE_0__["default"].p`
  min-height: 40px;
  max-width: 280px;
  padding: 0 0 0 10px;
  font-style: italic;
  color: ${({
  theme
}) => theme.colors.secondary};
  margin: 6px 20px 6px 0px;
`;
const Label = styledComponents__WEBPACK_IMPORTED_MODULE_0__["default"].label`
  font-style: italic;
  color: rgba(0, 0, 0, 0.54);
  margin-left: 20px;
  span {
    color: ${({
  theme
}) => theme.colors.secondary};
  }
`;
const StyledField = Object(styledComponents__WEBPACK_IMPORTED_MODULE_0__["default"])(formik__WEBPACK_IMPORTED_MODULE_1__["Field"])`
  border: 2px solid ${({
  theme
}) => theme.colors.quaternary};
  height: 40px;
  width: 300px;
  border-radius: 30px;
  font-size: ${({
  theme
}) => theme.scale.base};
  color: rgba(0, 0, 0, 0.87);
  padding-left: 16px;
`;
const BottomLink = Object(styledComponents__WEBPACK_IMPORTED_MODULE_0__["default"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"])`
  margin-top: ${({
  theme
}) => theme.scale.first};
  font-style: italic;
  color: ${({
  theme
}) => theme.colors.quaternary};
  text-align: center;
  :hover {
    color: ${({
  theme
}) => theme.colors.tertiary};
  }
  align-self: stretch;
`;
const InputBlock = styledComponents__WEBPACK_IMPORTED_MODULE_0__["default"].div``;
const BlockWrapper = styledComponents__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  flex-basis: 100%;
  display: flex;
  justify-content: center;
`;
const StyledForm = Object(styledComponents__WEBPACK_IMPORTED_MODULE_0__["default"])(formik__WEBPACK_IMPORTED_MODULE_1__["Form"])`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 600px) {
    justify-content: center;
  }
`;

/***/ }),

/***/ "./src/common/styledComponents.ts":
/*!****************************************!*\
  !*** ./src/common/styledComponents.ts ***!
  \****************************************/
/*! exports provided: css, injectGlobal, keyframes, ThemeProvider, withTheme, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "injectGlobal", function() { return injectGlobal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return keyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return ThemeProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withTheme", function() { return withTheme; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider,
  withTheme
} = styled_components__WEBPACK_IMPORTED_MODULE_0__;

/* harmony default export */ __webpack_exports__["default"] = (styled);

/***/ }),

/***/ "./src/common/theme.ts":
/*!*****************************!*\
  !*** ./src/common/theme.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_0__);

const theme = {
  colors: {
    primary: "#58CDF7",
    secondary: "#FD739F",
    tertiary: "#84F4E1",
    quaternary: "#D3C4D1"
  },
  scale: {
    sixth: Object(polished__WEBPACK_IMPORTED_MODULE_0__["modularScale"])(6, 1, "goldenSection"),
    fifth: Object(polished__WEBPACK_IMPORTED_MODULE_0__["modularScale"])(5, 1, "goldenSection"),
    fourth: Object(polished__WEBPACK_IMPORTED_MODULE_0__["modularScale"])(4, 1, "goldenSection"),
    third: Object(polished__WEBPACK_IMPORTED_MODULE_0__["modularScale"])(3, 1, "goldenSection"),
    second: Object(polished__WEBPACK_IMPORTED_MODULE_0__["modularScale"])(2, 1, "goldenSection"),
    first: Object(polished__WEBPACK_IMPORTED_MODULE_0__["modularScale"])(1, 1, "goldenSection"),
    base: Object(polished__WEBPACK_IMPORTED_MODULE_0__["modularScale"])(0, 1, "goldenSection"),
    mFirst: Object(polished__WEBPACK_IMPORTED_MODULE_0__["modularScale"])(-1, 1, "goldenSection"),
    mSecond: Object(polished__WEBPACK_IMPORTED_MODULE_0__["modularScale"])(-2, 1, "goldenSection")
  }
};
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ "./src/common/types.ts":
/*!*****************************!*\
  !*** ./src/common/types.ts ***!
  \*****************************/
/*! exports provided: loggedInUserTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loggedInUserTypes", function() { return loggedInUserTypes; });
// action types
let loggedInUserTypes;

(function (loggedInUserTypes) {
  loggedInUserTypes["ADD_LOGGED_IN_USER"] = "ADD_AUTHED_USER";
  loggedInUserTypes["REMOVE_LOGGED_IN_USER"] = "REMOVE_AUTHED_USER";
})(loggedInUserTypes || (loggedInUserTypes = {}));

/***/ }),

/***/ "./src/server/index.ts":
/*!*****************************!*\
  !*** ./src/server/index.ts ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! config */ "config");
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(config__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./server */ "./src/server/server.ts");


_server__WEBPACK_IMPORTED_MODULE_1__["default"].listen(config__WEBPACK_IMPORTED_MODULE_0___default.a.get("serverPort"));

/***/ }),

/***/ "./src/server/libConfig/index.ts":
/*!***************************************!*\
  !*** ./src/server/libConfig/index.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mongoose */ "./src/server/libConfig/mongoose.ts");
/* harmony import */ var _passport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./passport */ "./src/server/libConfig/passport.ts");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (app => {
  Object(_passport__WEBPACK_IMPORTED_MODULE_1__["default"])(app);
});

/***/ }),

/***/ "./src/server/libConfig/mongoose.ts":
/*!******************************************!*\
  !*** ./src/server/libConfig/mongoose.ts ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! config */ "config");
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(config__WEBPACK_IMPORTED_MODULE_1__);


const isDev = "development" === "development"; // if (isDev) mongoose.set("debug", true);

mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect(config__WEBPACK_IMPORTED_MODULE_1___default.a.get("dbUrl"));
mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connection.on("error", err => {
  console.error("Connection error: ", err);
});

/***/ }),

/***/ "./src/server/libConfig/passport.ts":
/*!******************************************!*\
  !*** ./src/server/libConfig/passport.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! passport */ "passport");
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var passport_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! passport-jwt */ "passport-jwt");
/* harmony import */ var passport_jwt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(passport_jwt__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! config */ "config");
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(config__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/pick */ "lodash/pick");
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_pick__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/User */ "./src/server/models/User/index.ts");





/* harmony default export */ __webpack_exports__["default"] = (app => {
  app.use(passport__WEBPACK_IMPORTED_MODULE_0___default.a.initialize());
  const options = {
    jwtFromRequest(req) {
      let token = null;

      if (req && req.signedCookies) {
        token = req.signedCookies["access_token"];
      }

      return token;
    },

    secretOrKey: config__WEBPACK_IMPORTED_MODULE_2___default.a.get("jwt.secret")
  };
  passport__WEBPACK_IMPORTED_MODULE_0___default.a.use(new passport_jwt__WEBPACK_IMPORTED_MODULE_1__["Strategy"](options, (payload, done) => {
    _models_User__WEBPACK_IMPORTED_MODULE_4__["default"].findById(payload.id, (err, user) => {
      if (err) return done(err);
      if (!user) return done(null, false);
      return done(null, lodash_pick__WEBPACK_IMPORTED_MODULE_3___default()(user, _models_User__WEBPACK_IMPORTED_MODULE_4__["default"].publicFields));
    });
  }));
});

/***/ }),

/***/ "./src/server/models/User/index.ts":
/*!*****************************************!*\
  !*** ./src/server/models/User/index.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto */ "crypto");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! config */ "config");
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(config__WEBPACK_IMPORTED_MODULE_2__);



const userSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({
  username: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 30,
    trim: true,
    lowercase: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    maxlength: 60,
    trim: true,
    unique: true
  },
  firstName: {
    type: String,
    trim: true,
    maxlength: 30
  },
  lastName: {
    type: String,
    trim: true,
    maxlength: 30
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 30
  },
  salt: {
    type: String
  }
});
userSchema.set("timestamps", true);
userSchema.statics = {
  publicFields: ["_id", "username", "firstName", "lastName", "email", "createdAt", "updatedAt"],
  updateFields: ["username", "firstName", "lastName", "email", "password"],

  filterPublicFields(userOrUsers) {
    if (Array.isArray(userOrUsers)) {
      return userOrUsers.map(rawUser => {
        return this.publicFields.reduce((acc, field) => {
          acc[field] = rawUser[field];
          return acc;
        }, {});
      });
    } else {
      return userSchema.statics.publicFields.reduce((acc, field) => {
        acc[field] = userOrUsers[field];
        return acc;
      }, {});
    }
  },

  filterUpdateFields(user) {
    return userSchema.statics.updateFields.reduce((acc, field) => {
      acc[field] = user[field];
      return acc;
    }, {});
  }

};
const {
  length,
  iterations,
  algorithm
} = config__WEBPACK_IMPORTED_MODULE_2___default.a.get("crypto");
userSchema.pre("save", function (next) {
  crypto__WEBPACK_IMPORTED_MODULE_1___default.a.randomBytes(length, (err, randB) => {
    if (err) return next(err);
    const salt = this.salt = randB.toString("base64");
    crypto__WEBPACK_IMPORTED_MODULE_1___default.a.pbkdf2(this.password, salt, iterations, length, algorithm, (err, derivedKey) => {
      if (err) return next(err);
      this.password = derivedKey.toString("base64");
      next();
    });
  });
});

userSchema.methods.checkPassword = function (password) {
  return new Promise((resolve, reject) => {
    password = password.trim();
    if (!password) return reject(new Error("You must provide a password to check."));
    crypto__WEBPACK_IMPORTED_MODULE_1___default.a.pbkdf2(password, this.salt, iterations, length, algorithm, (err, derivedKey) => {
      if (err) return reject(err);
      resolve(this.password === derivedKey.toString("base64"));
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model("User", userSchema));

/***/ }),

/***/ "./src/server/routes/index.ts":
/*!************************************!*\
  !*** ./src/server/routes/index.ts ***!
  \************************************/
/*! exports provided: usersApi, ssr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users */ "./src/server/routes/users/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usersApi", function() { return _users__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _ssr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ssr */ "./src/server/routes/ssr/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ssr", function() { return _ssr__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./src/server/routes/ssr/index.tsx":
/*!*****************************************!*\
  !*** ./src/server/routes/ssr/index.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "react-router");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! passport */ "passport");
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_Root__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/Root */ "./src/common/Root/index.tsx");
/* harmony import */ var _common_configureStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/configureStore */ "./src/common/configureStore.ts");
/* harmony import */ var _common_globalStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/globalStyles */ "./src/common/globalStyles.ts");
/* harmony import */ var _common_rootSaga__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/rootSaga */ "./src/common/rootSaga.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./types */ "./src/server/routes/ssr/types.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _common_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/types */ "./src/common/types.ts");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













const assets = JSON.parse("[\"/assets/main.bundle.js\",\"/assets/vendors~main.chunk.js\"]").filter(asset => /.js$/.test(asset));

const authHandler = (req, res, next) => {
  passport__WEBPACK_IMPORTED_MODULE_5___default.a.authenticate("jwt", {
    session: false
  }, (err, user, info) => {
    if (err) return next(err);

    if (user) {
      req.user = user;
    }

    next();
  })(req, res, next);
};

const SSRHandler = (req, res, next) => {
  const context = {};
  const modules = [];
  const sheet = new styled_components__WEBPACK_IMPORTED_MODULE_4__["ServerStyleSheet"]();

  const localDefaultState = _objectSpread({}, _common_configureStore__WEBPACK_IMPORTED_MODULE_7__["defaultState"]);

  if (req.user) {
    const {
      user
    } = req;
    user._id = user._id.toString();
    localDefaultState.loggedInUser = user;
  }

  const store = Object(_common_configureStore__WEBPACK_IMPORTED_MODULE_7__["default"])(localDefaultState);
  const rootComp = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
    store: store
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_2__["StaticRouter"], {
    location: req.originalUrl,
    context: context
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_Root__WEBPACK_IMPORTED_MODULE_6__["default"], null)));

  if (context.url) {
    res.redirect(context.status || 301, context.url);
  } else {
    store.runSaga(_common_rootSaga__WEBPACK_IMPORTED_MODULE_9__["default"]).done.then(() => {
      const html = `
        <!DOCTYPE html>
        <html lang="en">
        
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <title>User accounts</title>
          ${sheet.getStyleTags()}
          <script>window.__INITIAL_STATE__ = ${JSON.stringify(store.getState())}</script>
        </head>
        
        <body>
          <div id="root">${Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__["renderToString"])(rootComp)}</div>
        
          ${assets.slice().reverse().map(assetPath => {
        return `<script src="${assetPath}"></script>`;
      }).join("\n")}
        </body>
        </html>
      `;
      res.send(html);
    });
    Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__["renderToString"])(rootComp);
    store.close();
  }
};

/* harmony default export */ __webpack_exports__["default"] = ([authHandler, SSRHandler]);

/***/ }),

/***/ "./src/server/routes/ssr/types.ts":
/*!****************************************!*\
  !*** ./src/server/routes/ssr/types.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/server/routes/users/index.ts":
/*!******************************************!*\
  !*** ./src/server/routes/users/index.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! passport */ "passport");
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! config */ "config");
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(config__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/User */ "./src/server/models/User/index.ts");






const router = Object(express__WEBPACK_IMPORTED_MODULE_0__["Router"])();
const jwtAuth = passport__WEBPACK_IMPORTED_MODULE_1___default.a.authenticate("jwt", {
  session: false
});
const cookieOptions = {
  httpOnly: true,
  expires: new Date(Date.now() + Number.parseInt(config__WEBPACK_IMPORTED_MODULE_3___default.a.get("cookies.expires"))),
  signed: true
};
const jwtOptions = {
  expiresIn: config__WEBPACK_IMPORTED_MODULE_3___default.a.get("jwt.expiresIn")
};

const validateUserIdParam = (req, res, next) => {
  if (!mongoose__WEBPACK_IMPORTED_MODULE_4___default.a.Types.ObjectId.isValid(req.params.id)) {
    const err = new Error("User id is invalid.");
    err.statusCode = 400;
    return next(err);
  }

  next();
};

router.get("/", jwtAuth, (req, res, next) => {
  _models_User__WEBPACK_IMPORTED_MODULE_5__["default"].find().lean().then(rawUsers => {
    const filteredUsers = _models_User__WEBPACK_IMPORTED_MODULE_5__["default"].filterPublicFields(rawUsers);
    res.json(filteredUsers);
  }).catch(next);
});
router.get("/:id", jwtAuth, validateUserIdParam, (req, res, next) => {
  const {
    id
  } = req.params;
  _models_User__WEBPACK_IMPORTED_MODULE_5__["default"].findById(id).lean().then(rawUser => {
    const user = _models_User__WEBPACK_IMPORTED_MODULE_5__["default"].filterPublicFields(rawUser);
    res.json(user);
  }).catch(next);
});
router.post("/:id/edit", jwtAuth, validateUserIdParam, (req, res, next) => {
  const {
    id
  } = req.params;
  const body = {};

  for (const key in req.body) {
    if (req.body[key]) body[key] = req.body[key];
  } // if the user changes the password, we need to properly save it, otherwise we simply update document fields


  if (body.password) {
    _models_User__WEBPACK_IMPORTED_MODULE_5__["default"].findById(id).then(userDoc => {
      userDoc.set(body);
      userDoc.save().then(updatedUserDoc => {
        res.send(_models_User__WEBPACK_IMPORTED_MODULE_5__["default"].filterPublicFields(updatedUserDoc));
      }).catch(next);
    }).catch(next);
  } else {
    _models_User__WEBPACK_IMPORTED_MODULE_5__["default"].findByIdAndUpdate(id, body, {
      new: true
    }).then(rawUser => {
      const user = _models_User__WEBPACK_IMPORTED_MODULE_5__["default"].filterPublicFields(rawUser);
      res.json(user);
    }).catch(next);
  }
});
router.post("/registration", (req, res, next) => {
  const newUser = new _models_User__WEBPACK_IMPORTED_MODULE_5__["default"](req.body);
  newUser.save().then(rawUser => {
    const user = _models_User__WEBPACK_IMPORTED_MODULE_5__["default"].filterPublicFields(rawUser);
    const payload = {
      id: user._id
    };
    jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default.a.sign(payload, config__WEBPACK_IMPORTED_MODULE_3___default.a.get("jwt.secret"), jwtOptions, (err, token) => {
      if (err) return next(err);
      res.cookie("access_token", token, cookieOptions);
      res.send(user);
    });
  }).catch(next);
});
router.post("/login", (req, res, next) => {
  const {
    body: {
      username,
      password
    }
  } = req;

  if (!username || !password) {
    const err = new Error("You must provide username and password.");
    err.statusCode = 400;
    return next(err);
  }

  _models_User__WEBPACK_IMPORTED_MODULE_5__["default"].findOne({
    username
  }, (err, rawUser) => {
    if (err) return next(err);

    if (!rawUser) {
      const err = new Error("Incorrect username or password.");
      err.statusCode = 400;
      return next(err);
    }

    rawUser.checkPassword(password).then(isCorrect => {
      if (!isCorrect) {
        const err = new Error("Password is incorrect");
        err.statusCode = 400;
        return next(err);
      }

      const user = _models_User__WEBPACK_IMPORTED_MODULE_5__["default"].filterPublicFields(rawUser.toObject());
      jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default.a.sign({
        id: user._id
      }, config__WEBPACK_IMPORTED_MODULE_3___default.a.get("jwt.secret"), jwtOptions, (err, token) => {
        if (err) return next(err);
        res.cookie("access_token", token, cookieOptions);
        res.json(user);
      });
    }).catch(next);
  });
});
router.post("/logout", (req, res, next) => {
  res.clearCookie("access_token");
  delete req.user;
  res.status(200).send("Logged out");
});
router.delete("/delete/:id", jwtAuth, validateUserIdParam, (req, res, next) => {
  const {
    id
  } = req.params;
  _models_User__WEBPACK_IMPORTED_MODULE_5__["default"].findByIdAndRemove(id).catch(next);
});
/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "./src/server/server.ts":
/*!******************************!*\
  !*** ./src/server/server.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cookie-parser */ "cookie-parser");
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var serve_favicon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! serve-favicon */ "serve-favicon");
/* harmony import */ var serve_favicon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(serve_favicon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! config */ "config");
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(config__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _libConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./libConfig */ "./src/server/libConfig/index.ts");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routes */ "./src/server/routes/index.ts");







const app = express__WEBPACK_IMPORTED_MODULE_4___default()();
app.disable("x-powered-by");

if (false) {}

app.use(serve_favicon__WEBPACK_IMPORTED_MODULE_2___default()(path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve("./public/favicon.ico")));
app.use("/assets", express__WEBPACK_IMPORTED_MODULE_4___default.a.static("public"));
app.use(cookie_parser__WEBPACK_IMPORTED_MODULE_1___default()(config__WEBPACK_IMPORTED_MODULE_3___default.a.get("cookies.secret")));
app.use(express__WEBPACK_IMPORTED_MODULE_4___default.a.json());
app.use(express__WEBPACK_IMPORTED_MODULE_4___default.a.urlencoded({
  extended: false
}));
Object(_libConfig__WEBPACK_IMPORTED_MODULE_5__["default"])(app);
app.use("/api/", _routes__WEBPACK_IMPORTED_MODULE_6__["usersApi"]);
app.use("/*", _routes__WEBPACK_IMPORTED_MODULE_6__["ssr"]);

const errorHandler = (err, req, res, next) => {
  res.status(err.statusCode || 500).send(err.message);
};

app.use(errorHandler);
/* harmony default export */ __webpack_exports__["default"] = (app);

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "config":
/*!*************************!*\
  !*** external "config" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("config");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "lodash/pick":
/*!******************************!*\
  !*** external "lodash/pick" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/pick");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),

/***/ "passport-jwt":
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("passport-jwt");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "polished":
/*!***************************!*\
  !*** external "polished" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("polished");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-hot-loader":
/*!***********************************!*\
  !*** external "react-hot-loader" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "serve-favicon":
/*!********************************!*\
  !*** external "serve-favicon" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("serve-favicon");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "yup":
/*!**********************!*\
  !*** external "yup" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("yup");

/***/ })

/******/ });
//# sourceMappingURL=server.bundle.js.map