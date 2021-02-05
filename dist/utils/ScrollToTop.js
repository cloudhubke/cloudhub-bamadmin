"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _reactRouterDom = require("react-router-dom");

var ScrollToTop = function ScrollToTop(_ref) {
  var children = _ref.children,
      pathname = _ref.location.pathname;
  (0, _react.useEffect)(function () {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);
  return children || null;
};

var _default = (0, _reactRouterDom.withRouter)(ScrollToTop);

exports.default = _default;