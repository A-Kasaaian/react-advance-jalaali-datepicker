"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "./index.js"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("./index.js"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.index);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _index) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _react2 = _interopRequireDefault(_react);
  var _index2 = _interopRequireDefault(_index);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
  function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
      var e,
        n,
        i,
        u,
        a = [],
        f = !0,
        o = !1;
      try {
        if (i = (t = t.call(r)).next, 0 === l) {
          if (Object(t) !== t) return;
          f = !1;
        } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
      } catch (r) {
        o = !0, n = r;
      } finally {
        try {
          if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
        } finally {
          if (o) throw n;
        }
      }
      return a;
    }
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }
    return target;
  }
  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }
    return target;
  }
  var _excluded = ["placeholderEnd", "placeholderStart", "idStart", "idEnd", "format", "customClassEnd", "customClassStart", "containerClass", "inputTextAlign", "monthTitleEnable", "cancelOnBackgroundClick", "preSelectedStart", "onChangeStart", "onChangeEnd", "renderPointer", "pointer"];
  var DateRangePicker = function DateRangePicker(props) {
    var placeholderEnd = props.placeholderEnd,
      placeholderStart = props.placeholderStart,
      idStart = props.idStart,
      idEnd = props.idEnd,
      format = props.format,
      customClassEnd = props.customClassEnd,
      customClassStart = props.customClassStart,
      containerClass = props.containerClass,
      inputTextAlign = props.inputTextAlign,
      monthTitleEnable = props.monthTitleEnable,
      cancelOnBackgroundClick = props.cancelOnBackgroundClick,
      preSelectedStart = props.preSelectedStart,
      onChangeStart = props.onChangeStart,
      onChangeEnd = props.onChangeEnd,
      _props$renderPointer = props.renderPointer,
      renderPointer = _props$renderPointer === void 0 ? true : _props$renderPointer,
      pointer = props.pointer,
      rest = _objectWithoutProperties(props, _excluded);
    var _React$useState = _react2["default"].useState(""),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      disableFromUnix = _React$useState2[0],
      setDisableFromUnix = _React$useState2[1];
    var change = function change(unix, formatted) {
      setDisableFromUnix(unix);
      if (!!onChangeStart) onChangeStart(unix, formatted);
    };
    var secondChange = function secondChange(unix, formatted) {
      if (!!onChangeEnd) onChangeEnd(unix, formatted);
    };
    var placeholderEndValue = placeholderEnd || "";
    return /*#__PURE__*/_react2["default"].createElement("div", {
      className: "jdtrp",
      style: {
        textAlign: "initial"
      }
    }, /*#__PURE__*/_react2["default"].createElement(_index2["default"], _extends({
      monthTitleEnable: monthTitleEnable,
      containerClass: containerClass,
      inputTextAlign: inputTextAlign,
      customClass: customClassStart,
      placeholder: placeholderStart || "",
      format: format,
      onChange: change,
      cancelOnBackgroundClick: cancelOnBackgroundClick,
      id: idStart || "",
      preSelected: preSelectedStart
    }, rest)), renderPointer && /*#__PURE__*/_react2["default"].createElement("div", null, pointer || "->"), !disableFromUnix && /*#__PURE__*/_react2["default"].createElement("div", null, placeholderEndValue), !!disableFromUnix && /*#__PURE__*/_react2["default"].createElement(_index2["default"], _extends({
      containerClass: containerClass,
      inputTextAlign: inputTextAlign,
      customClass: customClassEnd,
      placeholder: placeholderEndValue,
      disableFromUnix: disableFromUnix,
      format: format,
      onChange: secondChange,
      cancelOnBackgroundClick: cancelOnBackgroundClick,
      id: idEnd || "",
      preSelected: preSelectedStart
    }, rest)));
  };
  exports["default"] = DateRangePicker;
});