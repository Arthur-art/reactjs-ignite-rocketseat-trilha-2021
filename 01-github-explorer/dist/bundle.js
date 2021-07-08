"use strict";

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var App = function App() {
  var user = {
    name: {
      primary: "Arthur"
    }
  };
  return /*#__PURE__*/_react["default"].createElement("h1", null, "Hello World", user.name.primary);
};
