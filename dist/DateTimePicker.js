(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'moment-jalaali', './Partials/Days', './Partials/Months', './Partials/Styles', './Partials/Years', './Partials/TimePicker', './Partials/Input', './Partials/Background'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('moment-jalaali'), require('./Partials/Days'), require('./Partials/Months'), require('./Partials/Styles'), require('./Partials/Years'), require('./Partials/TimePicker'), require('./Partials/Input'), require('./Partials/Background'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.momentJalaali, global.Days, global.Months, global.Styles, global.Years, global.TimePicker, global.Input, global.Background);
    global.DateTimePicker = mod.exports;
  }
})(this, function (exports, _react, _momentJalaali, _Days, _Months, _Styles, _Years, _TimePicker, _Input, _Background) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _momentJalaali2 = _interopRequireDefault(_momentJalaali);

  var _Days2 = _interopRequireDefault(_Days);

  var _Months2 = _interopRequireDefault(_Months);

  var _Styles2 = _interopRequireDefault(_Styles);

  var _Years2 = _interopRequireDefault(_Years);

  var _TimePicker2 = _interopRequireDefault(_TimePicker);

  var _Input2 = _interopRequireDefault(_Input);

  var _Background2 = _interopRequireDefault(_Background);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

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

  var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
  _momentJalaali2.default.loadPersian([]);

  var daysInMonth = function daysInMonth(month, year) {
    if (0 < month && month < 7) return 31;else if (6 < month && month < 12) return 30;else if (month === 12 && _momentJalaali2.default.jIsLeapYear(year)) return 30;else if (month === 12 && !_momentJalaali2.default.jIsLeapYear(year)) return 29;
  };

  function DateTimePicker(props) {
    var id = props.id,
        placeholder = props.placeholder,
        disableFromUnix = props.disableFromUnix,
        customClass = props.customClass,
        containerClass = props.containerClass,
        inputTextAlign = props.inputTextAlign,
        monthTitleEnable = props.monthTitleEnable,
        inputComponent = props.inputComponent,
        _props$preSelected = props.preSelected,
        preSelected = _props$preSelected === undefined ? "" : _props$preSelected,
        cancelOnBackgroundClick = props.cancelOnBackgroundClick;

    var _useState = (0, _react.useState)(false),
        _useState2 = _slicedToArray(_useState, 2),
        openPicker = _useState2[0],
        setOpenPicker = _useState2[1];

    var _useState3 = (0, _react.useState)(parseInt((0, _momentJalaali2.default)().format("jYYYY"))),
        _useState4 = _slicedToArray(_useState3, 2),
        selectedYear = _useState4[0],
        setSelectedYear = _useState4[1];

    var _useState5 = (0, _react.useState)(parseInt((0, _momentJalaali2.default)().format("jMM"))),
        _useState6 = _slicedToArray(_useState5, 2),
        currentMonth = _useState6[0],
        setCurrentMonth = _useState6[1];

    var _useState7 = (0, _react.useState)((0, _momentJalaali2.default)((0, _momentJalaali2.default)().format("jYYYY") + '/' + (0, _momentJalaali2.default)().format("jMM") + '/01', "jYYYY/jMM/jDD").weekday()),
        _useState8 = _slicedToArray(_useState7, 2),
        selectedMonthFirstDay = _useState8[0],
        setSelectedMonthFirstDay = _useState8[1];

    var _useState9 = (0, _react.useState)(preSelected.length > 1 ? (0, _momentJalaali2.default)(preSelected, props.format).format("jYYYYjMMjDD") : ""),
        _useState10 = _slicedToArray(_useState9, 2),
        selectedDay = _useState10[0],
        setSelectedDay = _useState10[1];

    var _useState11 = (0, _react.useState)((0, _momentJalaali2.default)().format("HH:mm")),
        _useState12 = _slicedToArray(_useState11, 2),
        selectedTime = _useState12[0],
        setSelectedTime = _useState12[1];

    var _useState13 = (0, _react.useState)(preSelected),
        _useState14 = _slicedToArray(_useState13, 2),
        inputValue = _useState14[0],
        setInputValue = _useState14[1];

    var _useState15 = (0, _react.useState)(daysInMonth((0, _momentJalaali2.default)().format("jMM"), (0, _momentJalaali2.default)().format("jYYYY"))),
        _useState16 = _slicedToArray(_useState15, 2),
        daysCount = _useState16[0],
        setDaysCount = _useState16[1];

    (0, _react.useEffect)(function () {
      if (canUseDOM && !document.getElementById("jdstyle")) {
        var css = (0, _Styles2.default)(selectedMonthFirstDay);
        var head = document.head || document.getElementsByTagName("head")[0];
        var style = document.createElement("style");

        style.type = "text/css";
        style.id = "jdstyle";
        style.appendChild(document.createTextNode(css));
        head.appendChild(style);
      }
    }, [selectedMonthFirstDay]);

    (0, _react.useEffect)(function () {
      if (props.controlValue && props.preSelected !== selectedDay) {
        setSelectedDay((0, _momentJalaali2.default)(preSelected, props.format).format("jYYYYjMMjDD"));
        setSelectedTime((0, _momentJalaali2.default)().format("HH:mm"));
        setInputValue(preSelected);
      }
    }, [props.preSelected, props.format, props.controlValue, selectedDay]);

    (0, _react.useEffect)(function () {
      setSelectedDay((0, _momentJalaali2.default)(preSelected, props.format).format("jYYYYjMMjDD"));
      setSelectedTime((0, _momentJalaali2.default)().format("HH:mm"));
      setInputValue(preSelected);
    }, [disableFromUnix]);

    var daysClicked = function daysClicked(day, momentDay) {
      var format = props.format || "jYYYY-jMM-jDD HH:mm";
      if (selectedDay !== momentDay) {
        setSelectedDay(momentDay);
        setInputValue((0, _momentJalaali2.default)(momentDay + ' ' + selectedTime, "jYYYYjMMjDD HH:mm").format(format));
      }
    };

    var monthsClicked = function monthsClicked(month) {
      var year = selectedYear;
      if (month === 0) {
        setCurrentMonth(12);
        setDaysCount(daysInMonth(12, year - 1));
        setSelectedYear(year - 1);
      } else if (month === 13) {
        setCurrentMonth(1);
        setDaysCount(daysInMonth(1, year + 1));
        setSelectedYear(year + 1);
      } else {
        setCurrentMonth(month);
        setDaysCount(daysInMonth(month, year));
      }
      firstDayOfMonth(month === 0 ? 12 : month === 13 ? 1 : month, month === 0 ? year - 1 : month === 13 ? year + 1 : year);
    };

    var firstDayOfMonth = function firstDayOfMonth(mo, ye) {
      var month = mo.toString();
      var year = ye.toString();
      if (month.length === 1) month = "0" + month;
      setSelectedMonthFirstDay((0, _momentJalaali2.default)(year + '/' + month + '/01', "jYYYY/jMM/jDD").weekday());
    };

    var yearSelected = function yearSelected(year) {
      setSelectedYear(year);
      firstDayOfMonth(currentMonth, year);
    };

    var timeSelected = function timeSelected(time) {
      var format = props.format || "jYYYY-jMM-jDD HH:mm";
      setSelectedTime(time);
      setInputValue((0, _momentJalaali2.default)(selectedDay + ' ' + time, "jYYYYjMMjDD HH:mm").format(format));
    };

    var submitHandler = function submitHandler(e) {
      e.preventDefault();
      if (selectedDay && selectedTime) {
        setOpenPicker(false);
        var formatted = props.format ? (0, _momentJalaali2.default)(selectedDay + ' ' + selectedTime, "jYYYYjMMjDD HH:mm").format(props.format) : null;
        if (props.onChange) {
          props.onChange((0, _momentJalaali2.default)(selectedDay + ' ' + selectedTime, "jYYYYjMMjDD HH:mm").unix(), formatted);
        }
      }
    };

    var cancelPicker = function cancelPicker(e) {
      setOpenPicker(false);
    };

    var inputAlign = inputTextAlign || "right";

    return _react2.default.createElement(
      'div',
      { style: { textAlign: "initial" }, className: containerClass },
      _react2.default.createElement(_Input2.default, {
        type: 'text',
        id: id,
        placeholder: placeholder,
        dir: 'ltr',
        style: { textAlign: inputAlign },
        readOnly: true,
        value: inputValue,
        onClick: function onClick() {
          return setOpenPicker(!openPicker);
        },
        component: inputComponent
      }),
      cancelOnBackgroundClick && openPicker && _react2.default.createElement(_Background2.default, { onClick: cancelPicker }),
      openPicker && _react2.default.createElement(
        'div',
        { className: 'JDatePicker ' + customClass },
        _react2.default.createElement(
          'div',
          { className: 'JDheader' },
          _react2.default.createElement(
            'div',
            { className: 'right' },
            _react2.default.createElement(_Years2.default, { changeEvent: yearSelected, year: selectedYear })
          ),
          _react2.default.createElement(
            'div',
            { className: 'left' },
            _react2.default.createElement(_TimePicker2.default, {
              disableFromUnix: disableFromUnix,
              selectedYear: selectedYear,
              selectedDay: selectedDay,
              currentMonth: currentMonth,
              changeEvent: timeSelected,
              selectedTime: selectedTime
            })
          )
        ),
        _react2.default.createElement(_Months2.default, {
          monthTitleEnable: monthTitleEnable,
          clickEvent: monthsClicked,
          month: currentMonth
        }),
        _react2.default.createElement(
          'div',
          { className: 'days-titles' },
          _react2.default.createElement(
            'div',
            null,
            '\u0634'
          ),
          _react2.default.createElement(
            'div',
            null,
            '\u06CC'
          ),
          _react2.default.createElement(
            'div',
            null,
            '\u062F'
          ),
          _react2.default.createElement(
            'div',
            null,
            '\u0633'
          ),
          _react2.default.createElement(
            'div',
            null,
            '\u0686'
          ),
          _react2.default.createElement(
            'div',
            null,
            '\u067E'
          ),
          _react2.default.createElement(
            'div',
            null,
            '\u062C'
          )
        ),
        _react2.default.createElement(_Days2.default, {
          disableFromUnix: disableFromUnix,
          selectedYear: selectedYear,
          selectedDay: selectedDay,
          currentMonth: currentMonth,
          daysCount: daysCount,
          firstDay: selectedMonthFirstDay,
          clickEvent: daysClicked
        }),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'button',
            { onClick: submitHandler, className: 'JDsubmit' },
            '\u062A\u0627\u06CC\u06CC\u062F'
          ),
          _react2.default.createElement(
            'button',
            { onClick: cancelPicker, className: 'JDcancel' },
            '\u0628\u0633\u062A\u0646'
          )
        )
      )
    );
  }

  exports.default = DateTimePicker;
});