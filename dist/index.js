"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "moment-jalaali", "./Partials/Days", "./Partials/Months", "./Partials/Styles", "./Partials/Years", "./Partials/Input", "./Partials/Background"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("moment-jalaali"), require("./Partials/Days"), require("./Partials/Months"), require("./Partials/Styles"), require("./Partials/Years"), require("./Partials/Input"), require("./Partials/Background"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.momentJalaali, global.Days, global.Months, global.Styles, global.Years, global.Input, global.Background);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _momentJalaali, _Days, _Months, _Styles, _Years, _Input, _Background) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.daysInMonth = undefined;
  var _react2 = _interopRequireDefault(_react);
  var _momentJalaali2 = _interopRequireDefault(_momentJalaali);
  var _Days2 = _interopRequireDefault(_Days);
  var _Months2 = _interopRequireDefault(_Months);
  var _Styles2 = _interopRequireDefault(_Styles);
  var _Years2 = _interopRequireDefault(_Years);
  var _Input2 = _interopRequireDefault(_Input);
  var _Background2 = _interopRequireDefault(_Background);
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
  var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
  _momentJalaali2["default"].loadPersian([]);
  var daysInMonth = exports.daysInMonth = function daysInMonth(month, year) {
    if (month > 0 && month < 7) return 31;
    if (month > 6 && month < 12) return 30;
    if (month == 12 && _momentJalaali2["default"].jIsLeapYear(year)) return 30;
    if (month == 12 && !_momentJalaali2["default"].jIsLeapYear(year)) return 29;
  };
  function JDatePicker(props) {
    var id = props.id,
      placeholder = props.placeholder,
      disableFromUnix = props.disableFromUnix,
      controlValue = props.controlValue,
      customClass = props.customClass,
      containerClass = props.containerClass,
      inputTextAlign = props.inputTextAlign,
      monthTitleEnable = props.monthTitleEnable,
      inputComponent = props.inputComponent,
      cancelOnBackgroundClick = props.cancelOnBackgroundClick,
      onChange = props.onChange,
      _props$preSelected = props.preSelected,
      preSelected = _props$preSelected === void 0 ? "" : _props$preSelected,
      _props$format = props.format,
      format = _props$format === void 0 ? "jYYYY-jMM-jDD" : _props$format;
    var defaultSelected = preSelected.length > 1 ? (0, _momentJalaali2["default"])(preSelected, format).format("jYYYYjMMjDD") : "";
    var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      openPicker = _useState2[0],
      setOpenPicker = _useState2[1];
    var _useState3 = (0, _react.useState)(parseInt((0, _momentJalaali2["default"])().format("jYYYY"))),
      _useState4 = _slicedToArray(_useState3, 2),
      selectedYear = _useState4[0],
      setSelectedYear = _useState4[1];
    var _useState5 = (0, _react.useState)(parseInt((0, _momentJalaali2["default"])().format("jMM"))),
      _useState6 = _slicedToArray(_useState5, 2),
      currentMonth = _useState6[0],
      setCurrentMonth = _useState6[1];
    var _useState7 = (0, _react.useState)((0, _momentJalaali2["default"])("".concat((0, _momentJalaali2["default"])().format("jYYYY"), "/").concat((0, _momentJalaali2["default"])().format("jMM"), "/01"), "jYYYY/jMM/jDD").weekday()),
      _useState8 = _slicedToArray(_useState7, 2),
      selectedMonthFirstDay = _useState8[0],
      setSelectedMonthFirstDay = _useState8[1];
    var _useState9 = (0, _react.useState)(defaultSelected),
      _useState10 = _slicedToArray(_useState9, 2),
      selectedDay = _useState10[0],
      setSelectedDay = _useState10[1];
    var _useState11 = (0, _react.useState)(preSelected),
      _useState12 = _slicedToArray(_useState11, 2),
      inputValue = _useState12[0],
      setInputValue = _useState12[1];
    var _useState13 = (0, _react.useState)(daysInMonth((0, _momentJalaali2["default"])().format("jMM"), (0, _momentJalaali2["default"])().format("jYYYY"))),
      _useState14 = _slicedToArray(_useState13, 2),
      daysCount = _useState14[0],
      setDaysCount = _useState14[1];
    (0, _react.useEffect)(function () {
      if (canUseDOM && !document.getElementById("jdstyle")) {
        var css = (0, _Styles2["default"])(selectedMonthFirstDay);
        var head = document.head || document.getElementsByTagName("head")[0];
        var style = document.createElement("style");
        style.type = "text/css";
        style.id = "jdstyle";
        style.appendChild(document.createTextNode(css));
        head.appendChild(style);
      }
    }, [selectedMonthFirstDay]);
    (0, _react.useEffect)(function () {
      if (controlValue && preSelected !== selectedDay) {
        setSelectedDay(defaultSelected);
        setInputValue(preSelected);
      }
    }, [preSelected, controlValue, selectedDay]);
    (0, _react.useEffect)(function () {
      setSelectedDay(defaultSelected);
      setInputValue(preSelected);
    }, [disableFromUnix]);
    var daysClicked = function daysClicked(day, momentDay) {
      if (selectedDay !== momentDay) {
        setSelectedDay(momentDay);
        setInputValue((0, _momentJalaali2["default"])("".concat(momentDay, " 23:59:59"), "jYYYYjMMjDD HH:mm:ss").format(format));
        setOpenPicker(false);
      }
      if (onChange) onChange((0, _momentJalaali2["default"])("".concat(momentDay, " 23:59:59"), "jYYYYjMMjDD HH:mm:ss").unix(), (0, _momentJalaali2["default"])("".concat(momentDay, " 23:59:59"), "jYYYYjMMjDD HH:mm:ss").format(format));
    };
    var monthsClicked = function monthsClicked(month) {
      var year = selectedYear;
      if (month === 0) {
        setCurrentMonth(12);
        setDaysCount(daysInMonth(12, selectedYear - 1));
        setSelectedYear(selectedYear - 1);
        year = selectedYear - 1;
      } else if (month === 13) {
        setCurrentMonth(1);
        setDaysCount(daysInMonth(1, selectedYear + 1));
        setSelectedYear(selectedYear + 1);
        year = selectedYear + 1;
      } else {
        setCurrentMonth(month);
        setDaysCount(daysInMonth(month, selectedYear));
      }
      firstDayOfMonth(month, year);
    };
    var firstDayOfMonth = function firstDayOfMonth(mo, ye) {
      var month = mo.toString();
      var year = ye.toString();
      if (month.length === 1) month = "0" + month;
      setSelectedMonthFirstDay((0, _momentJalaali2["default"])("".concat(year, "/").concat(month, "/01"), "jYYYY/jMM/jDD").weekday());
    };
    var yearSelected = function yearSelected(year) {
      setSelectedYear(year);
      firstDayOfMonth(currentMonth, year);
    };
    var inputAlign = inputTextAlign ? inputTextAlign : "right";
    return /*#__PURE__*/_react2["default"].createElement("div", {
      style: {
        textAlign: "initial"
      },
      className: containerClass
    }, /*#__PURE__*/_react2["default"].createElement(_Input2["default"], {
      type: "text",
      id: id,
      placeholder: placeholder,
      dir: "ltr",
      style: {
        textAlign: inputAlign
      },
      readOnly: true,
      value: inputValue,
      onClick: function onClick() {
        return setOpenPicker(!openPicker);
      },
      component: inputComponent
    }), cancelOnBackgroundClick && openPicker && /*#__PURE__*/_react2["default"].createElement(_Background2["default"], {
      onClick: function onClick() {
        return setOpenPicker(false);
      }
    }), openPicker && /*#__PURE__*/_react2["default"].createElement("div", {
      className: "JDatePicker ".concat(customClass)
    }, /*#__PURE__*/_react2["default"].createElement("div", {
      className: "JDheader"
    }, /*#__PURE__*/_react2["default"].createElement("div", {
      className: "right"
    }, /*#__PURE__*/_react2["default"].createElement(_Years2["default"], {
      changeEvent: function changeEvent(returnedYear) {
        return yearSelected(returnedYear);
      },
      year: selectedYear
    })), /*#__PURE__*/_react2["default"].createElement("div", {
      className: "left"
    })), /*#__PURE__*/_react2["default"].createElement(_Months2["default"], {
      monthTitleEnable: monthTitleEnable,
      clickEvent: function clickEvent(returnedMonth) {
        return monthsClicked(returnedMonth);
      },
      month: currentMonth
    }), /*#__PURE__*/_react2["default"].createElement("div", {
      className: "days-titles"
    }, /*#__PURE__*/_react2["default"].createElement("div", null, "\u0634"), /*#__PURE__*/_react2["default"].createElement("div", null, "\u06CC"), /*#__PURE__*/_react2["default"].createElement("div", null, "\u062F"), /*#__PURE__*/_react2["default"].createElement("div", null, "\u0633"), /*#__PURE__*/_react2["default"].createElement("div", null, "\u0686"), /*#__PURE__*/_react2["default"].createElement("div", null, "\u067E"), /*#__PURE__*/_react2["default"].createElement("div", null, "\u062C")), /*#__PURE__*/_react2["default"].createElement(_Days2["default"], {
      disableFromUnix: disableFromUnix,
      selectedYear: selectedYear,
      selectedDay: selectedDay,
      currentMonth: currentMonth,
      daysCount: daysCount,
      firstDay: selectedMonthFirstDay,
      clickEvent: function clickEvent(day, momentDay) {
        return daysClicked(day, momentDay);
      }
    })));
  }
  exports["default"] = JDatePicker;
});