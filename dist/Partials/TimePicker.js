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
  _momentJalaali2["default"].loadPersian([]);
  var mapObj = {
    1: '۱',
    2: '۲',
    3: '۳',
    4: '۴',
    5: '۵',
    6: '۶',
    7: '۷',
    8: '۸',
    9: '۹',
    0: '۰'
  };
  function TimePicker(props) {
    var hourRef = (0, _react.useRef)();
    var minuteRef = (0, _react.useRef)();
    var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      editable = _useState2[0],
      setEditable = _useState2[1];
    var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      minuteDisabled = _useState4[0],
      setMinuteDisabled = _useState4[1];
    var _useState5 = (0, _react.useState)(props.selectedTime),
      _useState6 = _slicedToArray(_useState5, 2),
      time = _useState6[0],
      setTime = _useState6[1];
    var _useState7 = (0, _react.useState)(""),
      _useState8 = _slicedToArray(_useState7, 2),
      error = _useState8[0],
      setError = _useState8[1];
    var _useState9 = (0, _react.useState)(Math.floor(parseInt(props.selectedTime.substring(3, 5)) / 5) * 5),
      _useState10 = _slicedToArray(_useState9, 2),
      minute = _useState10[0],
      setMinute = _useState10[1];
    var _useState11 = (0, _react.useState)(props.selectedTime.substring(0, 2)),
      _useState12 = _slicedToArray(_useState11, 2),
      hour = _useState12[0],
      setHour = _useState12[1];
    var _useState13 = (0, _react.useState)(""),
      _useState14 = _slicedToArray(_useState13, 2),
      disableFromYear = _useState14[0],
      setDisableFromYear = _useState14[1];
    var _useState15 = (0, _react.useState)(""),
      _useState16 = _slicedToArray(_useState15, 2),
      disableFromMonth = _useState16[0],
      setDisableFromMonth = _useState16[1];
    var _useState17 = (0, _react.useState)(""),
      _useState18 = _slicedToArray(_useState17, 2),
      disableFromDay = _useState18[0],
      setDisableFromDay = _useState18[1];
    var _useState19 = (0, _react.useState)(""),
      _useState20 = _slicedToArray(_useState19, 2),
      disableFromHour = _useState20[0],
      setDisableFromHour = _useState20[1];
    (0, _react.useEffect)(function () {
      setTime(props.selectedTime);
    }, [props.selectedTime]);
    (0, _react.useEffect)(function () {
      var unix = props.disableFromUnix ? props.disableFromUnix : "";
      if (unix) {
        setDisableFromYear((0, _momentJalaali2["default"])(unix * 1000).format("jYYYY"));
        setDisableFromMonth((0, _momentJalaali2["default"])(unix * 1000).format("jMM"));
        setDisableFromDay((0, _momentJalaali2["default"])(unix * 1000).format("jDD"));
        setDisableFromHour((0, _momentJalaali2["default"])(unix * 1000).format("HH"));
        setMinute(Math.floor(parseInt(props.selectedTime.substring(3, 5)) / 5) * 5);
        setHour(props.selectedTime.substring(0, 2));
      }
    }, [props.disableFromUnix]);
    var minuteChanged = function minuteChanged() {
      var minuteValue = minuteRef.current.value;
      var hourValue = hourRef.current.value;
      var minuteInt = parseInt(minuteValue);
      var hourInt = parseInt(hourValue);
      if (hourInt >= 0 && hourInt < 24) {
        if (minuteInt >= 0 && minuteInt < 60) {
          setEditable(false);
          setError("");
          if (props.changeEvent) props.changeEvent(hourValue + ":" + minuteValue);
        } else {
          setError("دقیقه حداکثر ۶۰ باشد");
        }
      } else {
        setError("ساعت حداکثر ۲۴ باشد");
      }
    };
    var hourChanged = function hourChanged() {
      var minuteValue = minuteRef.current.value;
      var hourValue = hourRef.current.value;
      var hourInt = parseInt(hourValue);
      if (hourInt >= 0 && hourInt < 24) {
        if (props.changeEvent) props.changeEvent(hourValue + ":" + minuteValue);
        setError("");
        setMinuteDisabled(false);
        setHour(hourValue);
      } else {
        setError("ساعت حداکثر ۲۴ باشد");
        setMinuteDisabled(true);
      }
    };
    var TimePicker = function TimePicker() {
      var currentMonth = props.currentMonth;
      var selectedDay = props.selectedDay;
      var hourOptions = [];
      var initCheck = false;
      if (currentMonth < 10) currentMonth = "0" + currentMonth;
      if (selectedDay) selectedDay = (0, _momentJalaali2["default"])(selectedDay, "jYYYYjMMjDD").format("jDD");
      if (props.selectedYear == disableFromYear && currentMonth == disableFromMonth && selectedDay == disableFromDay) initCheck = true;
      for (var i = 0; i <= 23; i++) {
        var number = i.toString();
        var enable = true;
        if (i < 10) number = "0" + number;
        var persianNumber = number.replace(/1|2|3|4|5|6|7|8|9|0/gi, function (e) {
          return mapObj[e];
        });
        if (initCheck && number <= disableFromHour) enable = false;
        if (enable) hourOptions.push( /*#__PURE__*/_react2["default"].createElement("option", {
          key: i,
          value: number
        }, persianNumber));
      }
      var hourElement = /*#__PURE__*/_react2["default"].createElement("select", {
        onChange: hourChanged,
        value: hour,
        ref: hourRef
      }, hourOptions);
      var minuteOptions = [];
      for (var _i = 0; _i <= 11; _i++) {
        var min = 5 * _i;
        var _number = min.toString();
        if (min < 10) _number = "0" + _number;
        var _persianNumber = _number.replace(/1|2|3|4|5|6|7|8|9|0/gi, function (e) {
          return mapObj[e];
        });
        minuteOptions.push( /*#__PURE__*/_react2["default"].createElement("option", {
          key: _i,
          value: _number
        }, _persianNumber));
      }
      var minuteElement = /*#__PURE__*/_react2["default"].createElement("select", {
        disabled: minuteDisabled,
        value: minute,
        onChange: minuteChanged,
        ref: minuteRef
      }, minuteOptions);
      return /*#__PURE__*/_react2["default"].createElement("div", null, /*#__PURE__*/_react2["default"].createElement("div", {
        className: "right"
      }, minuteElement, ":"), /*#__PURE__*/_react2["default"].createElement("div", {
        className: "left"
      }, hourElement));
    };
    var timeString = time.toString().replace(/1|2|3|4|5|6|7|8|9|0/gi, function (e) {
      return mapObj[e];
    });
    return /*#__PURE__*/_react2["default"].createElement("div", {
      className: "JC-years"
    }, !editable && /*#__PURE__*/_react2["default"].createElement("div", {
      className: "number",
      style: {
        cursor: "pointer"
      },
      onClick: function onClick() {
        return setEditable(true);
      }
    }, timeString), !!props.selectedDay && editable && TimePicker(), editable && !props.selectedDay && /*#__PURE__*/_react2["default"].createElement("p", {
      style: {
        color: "darkorange",
        fontSize: "12px"
      }
    }, "\u0627\u0628\u062A\u062F\u0627 \u06CC\u06A9 \u062A\u0627\u0631\u06CC\u062E \u0627\u0646\u062A\u062E\u0627\u0628 \u0646\u0645\u0627\u06CC\u06CC\u062F"), error && /*#__PURE__*/_react2["default"].createElement("div", {
      className: "JC-tooltip"
    }, /*#__PURE__*/_react2["default"].createElement("p", {
      style: {
        color: "red"
      }
    }, error)));
  }
  exports["default"] = TimePicker;
});