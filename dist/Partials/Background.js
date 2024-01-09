"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _react2 = _interopRequireDefault(_react);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
  exports["default"] = function (_ref) {
    var _onClick = _ref.onClick;
    return /*#__PURE__*/_react2["default"].createElement("div", {
      style: {
        position: "fixed",
        height: "100%",
        width: "100%",
        backgroundColor: "rgba(0,0,0,.3)",
        top: "0",
        left: "0"
      },
      className: "JDBackground",
      onClick: function onClick() {
        _onClick();
      }
    });
  };
});