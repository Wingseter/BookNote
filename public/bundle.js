/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! superagent */ "superagent");
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(superagent__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! webpack */ "webpack");
/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }







var BookNoteForm = /*#__PURE__*/function (_React$Component) {
  _inherits(BookNoteForm, _React$Component);

  var _super = _createSuper(BookNoteForm);

  function BookNoteForm(props) {
    var _this;

    _classCallCheck(this, BookNoteForm);

    _this = _super.call(this, props);
    _this.state = {
      book: '',
      note: ''
    };
    return _this;
  }

  _createClass(BookNoteForm, [{
    key: "bookChanged",
    value: function bookChanged(e) {
      this.setState({
        book: e.target.value
      });
    }
  }, {
    key: "noteChanged",
    value: function noteChanged(e) {
      this.setState({
        note: e.target.value
      });
    } // 웹 서버에 글 작성

  }, {
    key: "post",
    value: function post() {
      var _this2 = this;

      superagent__WEBPACK_IMPORTED_MODULE_3___default().get('/api/write').query({
        book: this.state.book,
        note: this.state.note
      }).end(function (err, data) {
        if (err) {
          console.error(err);
        }

        _this2.setState({
          note: ''
        });

        if (_this2.props.onPost) {
          _this2.props.onPost();
        }
      });
    } // 입력 창 표시

  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        style: StyleSheet.form
      }, "\uCC45 \uC81C\uBAA9: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
        type: "text",
        value: this.state.book,
        onChange: function onChange(e) {
          return _this3.bookChanged(e);
        }
      }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("br", null), "\uB178\uD2B8: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
        type: "text",
        value: this.state.note,
        size: "60",
        onChange: function onChange(e) {
          return _this3.noteChanged(e);
        }
      }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button", {
        onClick: function onClick(e) {
          return _this3.post();
        }
      }, "\uC800\uC7A5"));
    }
  }]);

  return BookNoteForm;
}((react__WEBPACK_IMPORTED_MODULE_1___default().Component));

var BookNoteApp = /*#__PURE__*/function (_React$Component2) {
  _inherits(BookNoteApp, _React$Component2);

  var _super2 = _createSuper(BookNoteApp);

  function BookNoteApp(props) {
    var _this4;

    _classCallCheck(this, BookNoteApp);

    _this4 = _super2.call(this, props);
    _this4.state = {
      item: []
    };
    return _this4;
  }

  _createClass(BookNoteApp, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.loadLogs();
    } // API를 통해 노트들을 가져온다.

  }, {
    key: "loadLogs",
    value: function loadLogs() {
      var _this5 = this;

      superagent__WEBPACK_IMPORTED_MODULE_3___default().get('/api/getItems').end(function (err, data) {
        if (err) {
          console.error(err);
          return;
        }

        _this5.setState({
          items: data.body.logs
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this6 = this;

      var itemsHtml = this.state.items.map(function (e) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", {
          key: e._id
        }, e.book, " - ", e.note);
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h1", {
        style: StyleSheet.h1
      }, "\uB3C5\uC11C\uB178\uD2B8"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(BookNoteForm, {
        onPost: function onPost(e) {
          return _this6.loadLogs();
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
        style: StyleSheet.right
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button", {
        onClick: function onClick(e) {
          return _this6.loadLogs();
        }
      }, "\uC0C8\uB85C\uACE0\uCE68")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("ul", null, itemsHtml));
    }
  }]);

  return BookNoteApp;
}((react__WEBPACK_IMPORTED_MODULE_1___default().Component));

var styles = {
  h1: {
    backgroundColor: 'blue',
    color: 'white',
    fortSize: 24,
    padding: 12
  },
  form: {
    padding: 12,
    border: '1px solid silver',
    backgroundColor: '#F0F0F0'
  },
  right: {
    textAlign: 'right'
  }
};
react_dom__WEBPACK_IMPORTED_MODULE_2___default().render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(BookNoteApp, null), document.getElementById('root'));

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");;

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("react-dom");;

/***/ }),

/***/ "superagent":
/*!*****************************!*\
  !*** external "superagent" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("superagent");;

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("webpack");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Cb29rTm90ZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9Cb29rTm90ZS9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly9Cb29rTm90ZS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vQm9va05vdGUvZXh0ZXJuYWwgXCJyZWFjdC1kb21cIiIsIndlYnBhY2s6Ly9Cb29rTm90ZS9leHRlcm5hbCBcInN1cGVyYWdlbnRcIiIsIndlYnBhY2s6Ly9Cb29rTm90ZS9leHRlcm5hbCBcIndlYnBhY2tcIiIsIndlYnBhY2s6Ly9Cb29rTm90ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9Cb29rTm90ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9Cb29rTm90ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vQm9va05vdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9Cb29rTm90ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0Jvb2tOb3RlL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6WyJCb29rTm90ZUZvcm0iLCJwcm9wcyIsInN0YXRlIiwiYm9vayIsIm5vdGUiLCJlIiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInJlcXVlc3QiLCJxdWVyeSIsImVuZCIsImVyciIsImRhdGEiLCJjb25zb2xlIiwiZXJyb3IiLCJvblBvc3QiLCJTdHlsZVNoZWV0IiwiZm9ybSIsImJvb2tDaGFuZ2VkIiwibm90ZUNoYW5nZWQiLCJwb3N0IiwiUmVhY3QiLCJCb29rTm90ZUFwcCIsIml0ZW0iLCJsb2FkTG9ncyIsIml0ZW1zIiwiYm9keSIsImxvZ3MiLCJpdGVtc0h0bWwiLCJtYXAiLCJfaWQiLCJoMSIsInJpZ2h0Iiwic3R5bGVzIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJmb3J0U2l6ZSIsInBhZGRpbmciLCJib3JkZXIiLCJ0ZXh0QWxpZ24iLCJSZWFjdERPTSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxZOzs7OztBQUNGLHdCQUFhQyxLQUFiLEVBQW9CO0FBQUE7O0FBQUE7O0FBQ2hCLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1RDLFVBQUksRUFBRSxFQURHO0FBRVRDLFVBQUksRUFBRTtBQUZHLEtBQWI7QUFGZ0I7QUFNbkI7Ozs7Z0NBRVdDLEMsRUFBRztBQUNYLFdBQUtDLFFBQUwsQ0FBYztBQUFDSCxZQUFJLEVBQUVFLENBQUMsQ0FBQ0UsTUFBRixDQUFTQztBQUFoQixPQUFkO0FBQ0g7OztnQ0FFV0gsQyxFQUFHO0FBQ1gsV0FBS0MsUUFBTCxDQUFjO0FBQUNGLFlBQUksRUFBRUMsQ0FBQyxDQUFDRSxNQUFGLENBQVNDO0FBQWhCLE9BQWQ7QUFDSCxLLENBR0Q7Ozs7MkJBQ087QUFBQTs7QUFDSEMsMkRBQUEsQ0FDUyxZQURULEVBRUtDLEtBRkwsQ0FFVztBQUNIUCxZQUFJLEVBQUUsS0FBS0QsS0FBTCxDQUFXQyxJQURkO0FBRUhDLFlBQUksRUFBRSxLQUFLRixLQUFMLENBQVdFO0FBRmQsT0FGWCxFQU1LTyxHQU5MLENBTVMsVUFBQ0MsR0FBRCxFQUFNQyxJQUFOLEVBQWU7QUFDaEIsWUFBR0QsR0FBSCxFQUFPO0FBQ0hFLGlCQUFPLENBQUNDLEtBQVIsQ0FBY0gsR0FBZDtBQUNIOztBQUNELGNBQUksQ0FBQ04sUUFBTCxDQUFjO0FBQUNGLGNBQUksRUFBRTtBQUFQLFNBQWQ7O0FBQ0EsWUFBSSxNQUFJLENBQUNILEtBQUwsQ0FBV2UsTUFBZixFQUFzQjtBQUNsQixnQkFBSSxDQUFDZixLQUFMLENBQVdlLE1B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MkRBQUMsV0FBRCxPQURKLEVBRUlDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixDQUZKLEU7Ozs7Ozs7Ozs7QUNySEEscUM7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDckJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxnQ0FBZ0MsWUFBWTtXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHNGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7O1VDTkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGUgZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgcmVxdWVzdCBmcm9tICdzdXBlcmFnZW50JztcclxuaW1wb3J0IHsgUnVudGltZUdsb2JhbHMgfSBmcm9tICd3ZWJwYWNrJztcclxuXHJcbmNsYXNzIEJvb2tOb3RlRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGJvb2s6ICcnLFxyXG4gICAgICAgICAgICBub3RlOiAnJ1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBib29rQ2hhbmdlZChlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Ym9vazogZS50YXJnZXQudmFsdWV9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgbm90ZUNoYW5nZWQoZSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe25vdGU6IGUudGFyZ2V0LnZhbHVlfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgLy8g7Ju5IOyEnOuyhOyXkCDquIAg7J6R7ISxXHJcbiAgICBwb3N0KCkge1xyXG4gICAgICAgIHJlcXVlc3QgXHJcbiAgICAgICAgICAgIC5nZXQoJy9hcGkvd3JpdGUnKVxyXG4gICAgICAgICAgICAucXVlcnkoe1xyXG4gICAgICAgICAgICAgICAgYm9vazogdGhpcy5zdGF0ZS5ib29rLFxyXG4gICAgICAgICAgICAgICAgbm90ZTogdGhpcy5zdGF0ZS5ub3RlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5lbmQoKGVyciwgZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoZXJyKXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtub3RlOiAnJ30pXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5vblBvc3Qpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25Qb3N0KClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyDsnoXroKUg7LC9IO2RnOyLnFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e1N0eWxlU2hlZXQuZm9ybX0+XHJcbiAgICAgICAgICAgICAgICDssYUg7KCc66qpOiA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyB2YWx1ZT17dGhpcy5zdGF0ZS5ib29rfSBvbkNoYW5nZT17ZSA9PiB0aGlzLmJvb2tDaGFuZ2VkKGUpfS8+IDxiciAvPlxyXG4gICAgICAgICAgICAgICAg64W47Yq4OiA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyB2YWx1ZT17dGhpcy5zdGF0ZS5ub3RlfSBzaXplID0gJzYwJyBvbkNoYW5nZT17ZSA9PiB0aGlzLm5vdGVDaGFuZ2VkKGUpfSAvPiA8YnIvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtlPT4gdGhpcy5wb3N0KCl9PuyggOyepTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBCb29rTm90ZUFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBpdGVtOiBbXVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbXBvbmVudFdpbGxNb3VudCAoKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkTG9ncygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFQSeulvCDthrXtlbQg64W47Yq465Ok7J2EIOqwgOyguOyYqOuLpC5cclxuICAgIGxvYWRMb2dzICgpIHtcclxuICAgICAgICByZXF1ZXN0XHJcbiAgICAgICAgICAgIC5nZXQoJy9hcGkvZ2V0SXRlbXMnKVxyXG4gICAgICAgICAgICAuZW5kKChlcnIsIGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXRlbXM6IGRhdGEuYm9keS5sb2dzfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyICgpIHtcclxuICAgICAgICBjb25zdCBpdGVtc0h0bWwgPSB0aGlzLnN0YXRlLml0ZW1zLm1hcChlID0+IChcclxuICAgICAgICAgICAgPGxpIGtleT17ZS5faWR9PntlLmJvb2t9IC0ge2Uubm90ZX08L2xpPlxyXG4gICAgICAgICkpXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17U3R5bGVTaGVldC5oMX0+64+F7ISc64W47Yq4PC9oMT5cclxuICAgICAgICAgICAgICAgIDxCb29rTm90ZUZvcm0gb25Qb3N0PXtlID0+IHRoaXMubG9hZExvZ3MoKX0gLz5cclxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPXtTdHlsZVNoZWV0LnJpZ2h0fT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2UgPT50aGlzLmxvYWRMb2dzKCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDsg4jroZzqs6DsuahcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDx1bD57aXRlbXNIdG1sfTwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkgXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICAgIGgxOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnYmx1ZScsXHJcbiAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgZm9ydFNpemU6IDI0LFxyXG4gICAgICAgIHBhZGRpbmc6IDEyXHJcbiAgICB9LFxyXG4gICAgZm9ybToge1xyXG4gICAgICAgIHBhZGRpbmc6IDEyLFxyXG4gICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCBzaWx2ZXInLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNGMEYwRjAnXHJcbiAgICB9LFxyXG4gICAgcmlnaHQ6IHtcclxuICAgICAgICB0ZXh0QWxpZ246ICdyaWdodCdcclxuICAgIH1cclxufVxyXG5cclxuUmVhY3RET00ucmVuZGVyKFxyXG4gICAgPEJvb2tOb3RlQXBwIC8+LFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxyXG4pO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdXBlcmFnZW50XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ3ZWJwYWNrXCIpOzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IG1vZHVsZVsnZGVmYXVsdCddIDpcblx0XHQoKSA9PiBtb2R1bGU7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwic291cmNlUm9vdCI6IiJ9