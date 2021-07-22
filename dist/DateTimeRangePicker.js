(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "./DateTimePicker.js"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("./DateTimePicker.js"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.DateTimePicker);
    global.DateTimeRangePicker = mod.exports;
  }
})(this, function (exports, _react, _DateTimePicker) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _DateTimePicker2 = _interopRequireDefault(_DateTimePicker);

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

  function _objectWithoutProperties(obj, keys) {
    var target = {};

    for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
      target[i] = obj[i];
    }

    return target;
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var DateTimeRangePicker = function (_React$Component) {
    _inherits(DateTimeRangePicker, _React$Component);

    function DateTimeRangePicker(props) {
      _classCallCheck(this, DateTimeRangePicker);

      var _this = _possibleConstructorReturn(this, (DateTimeRangePicker.__proto__ || Object.getPrototypeOf(DateTimeRangePicker)).call(this, props));

      _this.change = function (unix, formatted) {
        var onChangeStart = _this.props.onChangeStart;

        _this.setState({ disableFromUnix: unix });
        if (!!onChangeStart) onChangeStart(unix, formatted);
      };

      _this.secondchange = function (unix, formatted) {
        var onChangeEnd = _this.props.onChangeEnd;

        if (!!onChangeEnd) onChangeEnd(unix, formatted);
      };

      _this.state = { disableFromUnix: "" };
      return _this;
    }

    _createClass(DateTimeRangePicker, [{
      key: "render",
      value: function render() {
        var _props = this.props,
            placeholderEnd = _props.placeholderEnd,
            placeholderStart = _props.placeholderStart,
            idStart = _props.idStart,
            idEnd = _props.idEnd,
            format = _props.format,
            customClassStart = _props.customClassStart,
            customClassEnd = _props.customClassEnd,
            containerClass = _props.containerClass,
            inputTextAlign = _props.inputTextAlign,
            monthTitleEnable = _props.monthTitleEnable,
            cancelOnBackgroundClick = _props.cancelOnBackgroundClick,
            preSelectedStart = _props.preSelectedStart,
            _props$renderPointer = _props.renderPointer,
            renderPointer = _props$renderPointer === undefined ? true : _props$renderPointer,
            pointer = _props.pointer,
            rest = _objectWithoutProperties(_props, ["placeholderEnd", "placeholderStart", "idStart", "idEnd", "format", "customClassStart", "customClassEnd", "containerClass", "inputTextAlign", "monthTitleEnable", "cancelOnBackgroundClick", "preSelectedStart", "renderPointer", "pointer"]);

        var disableFromUnix = this.state.disableFromUnix;

        if (!placeholderStart) placeholderStart = "";
        if (!placeholderEnd) placeholderEnd = "";
        if (!idStart) idStart = "";
        if (!idEnd) idEnd = "";
        return _react2.default.createElement(
          "div",
          { className: "jdtrp", style: { textAlign: "initial" } },
          _react2.default.createElement(_DateTimePicker2.default, _extends({
            monthTitleEnable: monthTitleEnable,
            containerClass: containerClass,
            inputTextAlign: inputTextAlign,
            customClass: customClassStart,
            placeholder: placeholderStart,
            format: format,
            onChange: this.change,
            cancelOnBackgroundClick: cancelOnBackgroundClick,
            id: idStart,
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
            placeholderEnd
          ),
          !!disableFromUnix && _react2.default.createElement(_DateTimePicker2.default, _extends({
            monthTitleEnable: monthTitleEnable,
            containerClass: containerClass,
            inputTextAlign: inputTextAlign,
            customClass: customClassEnd,
            placeholder: placeholderEnd,
            disableFromUnix: disableFromUnix,
            format: format,
            cancelOnBackgroundClick: cancelOnBackgroundClick,
            onChange: this.secondchange,
            id: "datePicker",
            preSelected: preSelectedStart
          }, rest))
        );
      }
    }]);

    return DateTimeRangePicker;
  }(_react2.default.Component);

  exports.default = DateTimeRangePicker;
});