"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "moment-jalaali"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("moment-jalaali"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.momentJalaali);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _momentJalaali) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _react2 = _interopRequireDefault(_react);
  var _momentJalaali2 = _interopRequireDefault(_momentJalaali);
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
  var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
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
  _momentJalaali2["default"].loadPersian([]);
  var Days = function (_React$Component) {
    _inherits(Days, _React$Component);
    function Days(props) {
      var _this;
      _classCallCheck(this, Days);
      _this = _callSuper(this, Days, [props]);
      _this.state = {
        selectedDay: "",
        daysCount: _this.props.daysCount,
        selectedYear: _this.props.selectedYear
      };
      var unix = "";
      if (!!_this.props.disableFromUnix) unix = _this.props.disableFromUnix;
      if (!!unix) {
        _this.state.disableFromYear = (0, _momentJalaali2["default"])(unix * 1000).format("jYYYY");
        _this.state.disableFromMonth = (0, _momentJalaali2["default"])(unix * 1000).format("jMM");
        _this.state.disableFromDay = (0, _momentJalaali2["default"])(unix * 1000).format("jDD");
      }
      return _this;
    }
    _createClass(Days, [{
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(nextProps) {
        var _this2 = this;
        if (canUseDOM) {
          this.setState({
            daysCount: 0
          });
          window.setTimeout(function () {
            _this2.setState({
              daysCount: nextProps.daysCount,
              selectedYear: nextProps.selectedYear
            });
          }, 10);
        }
      }
    }, {
      key: "dayClicked",
      value: function dayClicked(i, date) {
        var clickEvent = this.props.clickEvent;
        if (clickEvent) clickEvent(i, date);
        this.setState({
          selectedDay: date
        });
      }
    }, {
      key: "renderDays",
      value: function renderDays() {
        var _this3 = this;
        var _this$props = this.props,
          firstDay = _this$props.firstDay,
          currentMonth = _this$props.currentMonth,
          selectedDay = _this$props.selectedDay;
        var _this$state = this.state,
          daysCount = _this$state.daysCount,
          disableFromYear = _this$state.disableFromYear,
          disableFromMonth = _this$state.disableFromMonth,
          disableFromDay = _this$state.disableFromDay,
          selectedYear = _this$state.selectedYear;
        var year = selectedYear.toString();
        var month = currentMonth.toString();
        if (month.length == 1) month = "0" + month;
        var enable = true;
        var check = false;
        if (disableFromYear > year) enable = false;else if (disableFromYear == year && disableFromMonth > month) enable = false;else if (disableFromYear == year && disableFromMonth == month) check = true;
        var result = [];
        var _loop = function _loop() {
          var addedClass = "";
          var marginRight = "0%";
          var date;
          var number = i.toString().replace(/1|2|3|4|5|6|7|8|9|0/gi, function (e) {
            return mapObj[e];
          });
          if (i == 1) marginRight = firstDay * 14.28 + "%";
          if (i < 10) date = year + month + "0" + i.toString();else date = year + month + i.toString();
          if (date == selectedDay) addedClass = " selected";
          var today = (0, _momentJalaali2["default"])().format("jYYYYjMMjDD");
          if (date == today) addedClass += " current-date";
          if (check) {
            if (i < disableFromDay) enable = false;else enable = true;
          }
          result.push( /*#__PURE__*/_react2["default"].createElement("div", {
            className: "day-items" + addedClass,
            key: i,
            id: date,
            style: enable ? {
              marginRight: marginRight
            } : {
              background: "#ccc",
              cursor: "default",
              marginRight: marginRight
            },
            onClick: enable ? function () {
              return _this3.dayClicked(1, date);
            } : null
          }, number));
        };
        for (var i = 1; daysCount >= i; i++) {
          _loop();
        }
        return result;
      }
    }, {
      key: "render",
      value: function render() {
        return /*#__PURE__*/_react2["default"].createElement("div", {
          className: "JC-days"
        }, /*#__PURE__*/_react2["default"].createElement("div", {
          className: "holder"
        }, !!this.state.daysCount && this.renderDays()));
      }
    }]);
    return Days;
  }(_react2["default"].Component);
  exports["default"] = Days;
});