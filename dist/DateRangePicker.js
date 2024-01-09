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
    global.DateRangePicker = mod.exports;
  }
})(this, function (exports, _react, _index) {
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

  var _extends = Object.assign || function (target) {
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

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  function _objectWithoutProperties(obj, keys) {
    var target = {};

    for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
      target[i] = obj[i];
    }

    return target;
  }

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
        renderPointer = _props$renderPointer === undefined ? true : _props$renderPointer,
        pointer = props.pointer,
        rest = _objectWithoutProperties(props, ["placeholderEnd", "placeholderStart", "idStart", "idEnd", "format", "customClassEnd", "customClassStart", "containerClass", "inputTextAlign", "monthTitleEnable", "cancelOnBackgroundClick", "preSelectedStart", "onChangeStart", "onChangeEnd", "renderPointer", "pointer"]);

    var _React$useState = _react2.default.useState(""),
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

    return _react2.default.createElement(
      "div",
      { className: "jdtrp", style: { textAlign: "initial" } },
      _react2.default.createElement(_index2.default, _extends({
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
      }, rest)),
      renderPointer && _react2.default.createElement(
        "div",
        null,
        pointer || "->"
      ),
      !disableFromUnix && _react2.default.createElement(
        "div",
        null,
        placeholderEndValue
      ),
      !!disableFromUnix && _react2.default.createElement(_index2.default, _extends({
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
      }, rest))
    );
  };

  exports.default = DateRangePicker;
});