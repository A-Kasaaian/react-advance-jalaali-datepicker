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
  function _typeof(o) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
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
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
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
  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : String(i);
  }
  function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != _typeof(i)) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  var mapObj = {
    1: "۱",
    2: "۲",
    3: "۳",
    4: "۴",
    5: "۵",
    6: "۶",
    7: "۷",
    8: "۸",
    9: "۹",
    0: "۰"
  };
  var Years = function (_React$Component) {
    _inherits(Years, _React$Component);
    function Years(props) {
      var _this;
      _classCallCheck(this, Years);
      _this = _callSuper(this, Years, [props]);
      _defineProperty(_assertThisInitialized(_this), "yearChanged", function () {
        var value = _this.yearRef.current.value;
        var changeEvent = _this.props.changeEvent;
        _this.setState({
          year: value
        });
        if (value.length == 4 && value > 1300 && value < 1500) {
          _this.setState({
            editable: false,
            error: ""
          });
          if (!!changeEvent) changeEvent(parseInt(value));
        } else _this.setState({
          error: "سال ۴ رقم و درفاصله ۱۳۰۰ تا ۱۵۰۰ باشد"
        });
      });
      _this.yearRef = /*#__PURE__*/_react2["default"].createRef();
      _this.state = {
        year: _this.props.year,
        error: ""
      };
      return _this;
    }
    _createClass(Years, [{
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(nextprops) {
        this.setState({
          year: nextprops.year
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;
        var _this$state = this.state,
          error = _this$state.error,
          year = _this$state.year,
          editable = _this$state.editable;
        var yearString = year.toString().replace(/1|2|3|4|5|6|7|8|9|0/gi, function (e) {
          return mapObj[e];
        });
        return /*#__PURE__*/_react2["default"].createElement("div", {
          className: "JC-years"
        }, /*#__PURE__*/_react2["default"].createElement("span", null, "\u0633\u0627\u0644: "), !editable && /*#__PURE__*/_react2["default"].createElement("span", {
          className: "number",
          style: {
            cursor: "pointer"
          },
          onClick: function onClick() {
            return _this2.setState({
              editable: true
            });
          }
        }, yearString), editable && /*#__PURE__*/_react2["default"].createElement("input", {
          type: "tel",
          ref: this.yearRef,
          placeholder: "\u0633\u0627\u0644",
          onChange: this.yearChanged,
          onBlur: this.yearChanged,
          value: year
        }), editable && /*#__PURE__*/_react2["default"].createElement("div", {
          onClick: this.yearChanged,
          style: {
            content: "&quot;&quot",
            position: "absolute",
            width: "100%",
            height: "100%",
            top: "0px",
            zIndex: "1",
            left: "0px"
          }
        }), error && /*#__PURE__*/_react2["default"].createElement("div", {
          className: "JC-tooltip"
        }, /*#__PURE__*/_react2["default"].createElement("p", {
          style: {
            color: "red"
          }
        }, error)));
      }
    }]);
    return Years;
  }(_react2["default"].Component);
  exports["default"] = Years;
});