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
    global.TimePicker = mod.exports;
  }
})(this, function (exports, _react, _momentJalaali) {
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

  var TimePicker = function (_React$Component) {
    _inherits(TimePicker, _React$Component);

    function TimePicker(props) {
      _classCallCheck(this, TimePicker);

      var _this = _possibleConstructorReturn(this, (TimePicker.__proto__ || Object.getPrototypeOf(TimePicker)).call(this, props));

      _this.minuteChanged = function () {
        var _this$refs = _this.refs,
            minute = _this$refs.minute,
            hour = _this$refs.hour;
        var changeEvent = _this.props.changeEvent;

        var minuteInt = parseInt(minute.value);
        var houraInt = parseInt(hour.value);
        if (houraInt >= 0 && houraInt < 24) {
          if (minuteInt >= 0 && minuteInt < 60) {
            _this.setState({ editable: false, error: "" });
            if (!!changeEvent) changeEvent(hour.value + ":" + minute.value);
          } else {
            _this.setState({ error: "دقیقه حداکثر ۶۰ باشد" });
          }
        } else {
          _this.setState({ error: "ساعت حداکثر ۲۴ باشد" });
        }
      };

      _this.hourChanged = function () {
        var _this$refs2 = _this.refs,
            minute = _this$refs2.minute,
            hour = _this$refs2.hour;
        var changeEvent = _this.props.changeEvent;

        var minuteInt = parseInt(minute.value);
        var houraInt = parseInt(hour.value);
        if (houraInt >= 0 && houraInt < 24) {
          if (!!changeEvent) changeEvent(hour.value + ":" + minute.value);
          _this.setState({ error: "", minuteDisabled: false, hour: hour.value });
        } else {
          _this.setState({ error: "ساعت حداکثر ۲۴ باشد", minuteDisabled: true });
        }
      };

      _this.TimePicker = function () {
        var _this$state = _this.state,
            minute = _this$state.minute,
            hour = _this$state.hour,
            minuteDisabled = _this$state.minuteDisabled,
            disableFromMinute = _this$state.disableFromMinute,
            disableFromHour = _this$state.disableFromHour,
            disableFromYear = _this$state.disableFromYear,
            disableFromMonth = _this$state.disableFromMonth,
            disableFromDay = _this$state.disableFromDay;
        var _this$props = _this.props,
            selectedYear = _this$props.selectedYear,
            currentMonth = _this$props.currentMonth,
            selectedDay = _this$props.selectedDay;

        var hourOptions = [];
        var initCheck = false;
        if (currentMonth < 10) currentMonth = "0" + currentMonth;
        if (!!selectedDay) selectedDay = (0, _momentJalaali2.default)(selectedDay, "jYYYYjMMjDD").format("jDD");
        if (selectedYear == disableFromYear && currentMonth == disableFromMonth && selectedDay == disableFromDay) initCheck = true;
        for (var i = 0; i <= 23; i++) {
          var number = i.toString();
          var enable = true;
          if (i < 10) number = "0" + number;
          var persianNumber = number.replace(/1|2|3|4|5|6|7|8|9|0/gi, function (e) {
            return mapObj[e];
          });
          if (initCheck && number <= disableFromHour) enable = false;
          if (enable) hourOptions.push(_react2.default.createElement(
            "option",
            { key: i, value: number },
            persianNumber
          ));
        }
        var hourElement = _react2.default.createElement(
          "select",
          { onChange: _this.hourChanged, value: hour, ref: "hour" },
          hourOptions
        );

        var minuteOptions = [];
        for (var _i = 0; _i <= 11; _i++) {
          var min = 5 * _i;
          var _number = min.toString();
          if (min < 10) _number = "0" + _number;
          var _persianNumber = _number.replace(/1|2|3|4|5|6|7|8|9|0/gi, function (e) {
            return mapObj[e];
          });
          minuteOptions.push(_react2.default.createElement(
            "option",
            { key: _i, value: _number },
            _persianNumber
          ));
        }
        var minuteElement = _react2.default.createElement(
          "select",
          {
            disabled: minuteDisabled,
            value: minute,
            onChange: _this.minuteChanged,
            ref: "minute"
          },
          minuteOptions
        );

        return _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement(
            "div",
            { className: "right" },
            minuteElement,
            ":"
          ),
          _react2.default.createElement(
            "div",
            { className: "left" },
            hourElement
          )
        );
      };

      _this.state = {
        editable: false,
        minuteDisabled: false,
        time: _this.props.selectedTime,
        error: "",
        minute: Math.floor(parseInt(_this.props.selectedTime.substring(3, 5)) / 5) * 5,
        hour: _this.props.selectedTime.substring(0, 2)
      };
      var unix = "";
      if (!!_this.props.disableFromUnix) unix = _this.props.disableFromUnix;
      if (!!unix) {
        _this.state.disableFromYear = (0, _momentJalaali2.default)(unix * 1000).format("jYYYY");
        _this.state.disableFromMonth = (0, _momentJalaali2.default)(unix * 1000).format("jMM");
        _this.state.disableFromDay = (0, _momentJalaali2.default)(unix * 1000).format("jDD");
        _this.state.disableFromHour = (0, _momentJalaali2.default)(unix * 1000).format("HH");
        _this.state.disableFromMinute = (0, _momentJalaali2.default)(unix * 1000).format("mm");
      }
      return _this;
    }

    _createClass(TimePicker, [{
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(nextprops) {
        this.setState({ time: nextprops.selectedTime });
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _state = this.state,
            error = _state.error,
            time = _state.time,
            editable = _state.editable;
        var selectedDay = this.props.selectedDay;

        var timeString = time.toString().replace(/1|2|3|4|5|6|7|8|9|0/gi, function (e) {
          return mapObj[e];
        });
        return _react2.default.createElement(
          "div",
          { className: "JC-years" },
          !editable && _react2.default.createElement(
            "div",
            {
              className: "number",
              style: { cursor: "pointer" },
              onClick: function onClick() {
                return _this2.setState({ editable: true });
              }
            },
            timeString
          ),
          !!selectedDay && editable && this.TimePicker(),
          editable && !selectedDay && _react2.default.createElement(
            "p",
            { style: { color: "darkorange", fontSize: "12px" } },
            "\u0627\u0628\u062A\u062F\u0627 \u06CC\u06A9 \u062A\u0627\u0631\u06CC\u062E \u0627\u0646\u062A\u062E\u0627\u0628 \u0646\u0645\u0627\u06CC\u06CC\u062F"
          ),
          error && _react2.default.createElement(
            "div",
            { className: "JC-tooltip" },
            _react2.default.createElement(
              "p",
              { style: { color: "red" } },
              error
            )
          )
        );
      }
    }]);

    return TimePicker;
  }(_react2.default.Component);

  exports.default = TimePicker;
});