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
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : String(i);
  }
  function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function _callSuper(t, o, e) {
    return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
  }
  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized(self);
  }
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _isNativeReflectConstruct() {
    try {
      var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (t) {}
    return (_isNativeReflectConstruct = function () {
      return !!t;
    })();
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }
  var Months = function (_React$Component) {
    _inherits(Months, _React$Component);
    function Months(props) {
      var _this;
      _classCallCheck(this, Months);
      _this = _callSuper(this, Months, [props]);
      _this.state = {
        months: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"],
        monthPickerView: false,
        selectedMonth: _this.props.month
      };
      return _this;
    }
    _createClass(Months, [{
      key: "monthClicked",
      value: function monthClicked(i, e) {
        var clickEvent = this.props.clickEvent;
        if (clickEvent) clickEvent(i);
        this.setState({
          monthPickerView: false,
          selectedMonth: i
        });
      }
    }, {
      key: "renderMonths",
      value: function renderMonths() {
        var _this2 = this;
        var _this$state = this.state,
          months = _this$state.months,
          selectedMonth = _this$state.selectedMonth;
        var result = [];
        var _loop = function _loop(i) {
          if (selectedMonth == i) result.push( /*#__PURE__*/_react2["default"].createElement("div", {
            key: i,
            className: "month-items selected"
          }, months[i - 1]));else result.push( /*#__PURE__*/_react2["default"].createElement("div", {
            key: i,
            className: "month-items",
            onClick: function onClick(e) {
              return _this2.monthClicked(i, e);
            }
          }, months[i - 1]));
        };
        for (var i = 1; months.length >= i; i++) {
          _loop(i);
        }
        return result;
      }
    }, {
      key: "render",
      value: function render() {
        var _this3 = this;
        var _this$props = this.props,
          month = _this$props.month,
          monthTitleEnable = _this$props.monthTitleEnable;
        var _this$state2 = this.state,
          months = _this$state2.months,
          monthPickerView = _this$state2.monthPickerView;
        return /*#__PURE__*/_react2["default"].createElement("div", {
          className: "JC-months"
        }, monthTitleEnable && /*#__PURE__*/_react2["default"].createElement("span", null, "\u0645\u0627\u0647: "), /*#__PURE__*/_react2["default"].createElement("div", {
          className: "holder"
        }, /*#__PURE__*/_react2["default"].createElement("div", {
          onClick: function onClick() {
            return _this3.monthClicked(month - 1);
          },
          className: "prev"
        }, ">"), /*#__PURE__*/_react2["default"].createElement("div", {
          onClick: function onClick() {
            _this3.setState({
              monthPickerView: !monthPickerView
            });
          },
          className: "print-month"
        }, months[month - 1]), /*#__PURE__*/_react2["default"].createElement("div", {
          onClick: function onClick() {
            return _this3.monthClicked(month + 1);
          },
          className: "next"
        }, "<"), monthPickerView && /*#__PURE__*/_react2["default"].createElement("div", {
          className: "monthPicker"
        }, this.renderMonths())));
      }
    }]);
    return Months;
  }(_react2["default"].Component);
  exports["default"] = Months;
});