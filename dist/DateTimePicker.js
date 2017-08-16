(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports", "react", "moment-jalaali", "./Partials/Days", "./Partials/Months", "./Partials/Styles", "./Partials/Years", "./Partials/TimePicker"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require("react"), require("moment-jalaali"), require("./Partials/Days"), require("./Partials/Months"), require("./Partials/Styles"), require("./Partials/Years"), require("./Partials/TimePicker"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.momentJalaali, global.Days, global.Months, global.Styles, global.Years, global.TimePicker);
        global.DateTimePicker = mod.exports;
    }
})(this, function (exports, _react, _momentJalaali, _Days, _Months, _Styles, _Years, _TimePicker) {
    "use strict";

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

    var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
    _momentJalaali2.default.loadPersian([]);

    var DateTimePicker = function (_React$Component) {
        _inherits(DateTimePicker, _React$Component);

        function DateTimePicker(props) {
            _classCallCheck(this, DateTimePicker);

            var _this = _possibleConstructorReturn(this, (DateTimePicker.__proto__ || Object.getPrototypeOf(DateTimePicker)).call(this, props));

            _this.daysInMonth = _this.daysInMonth.bind(_this);
            _this.canclePicker = _this.canclePicker.bind(_this);
            _this.submitHandler = _this.submitHandler.bind(_this);
            _this.state = {
                openPicker: false,
                selectedYear: parseInt((0, _momentJalaali2.default)().format("jYYYY")),
                currentMonth: parseInt((0, _momentJalaali2.default)().format("jMM")),
                selectedMonthFirstDay: (0, _momentJalaali2.default)((0, _momentJalaali2.default)().format("jYYYY") + "/" + (0, _momentJalaali2.default)().format("jMM") + "/01", "jYYYY/jMM/jDD").weekday(),
                selectedDay: "",
                selectedTime: (0, _momentJalaali2.default)().format("HH:mm"),
                inputValue: ""
            };

            _this.state.daysCount = _this.daysInMonth((0, _momentJalaali2.default)().format("jMM"), (0, _momentJalaali2.default)().format("jYYYY"));
            return _this;
        }

        _createClass(DateTimePicker, [{
            key: "daysInMonth",
            value: function daysInMonth(month, selectedYear) {
                if (0 < month && month < 7) return 31;else if (6 < month && month < 12) return 30;else if (month == 12 && _momentJalaali2.default.jIsLeapYear(selectedYear)) return 30;else if (month == 12 && !_momentJalaali2.default.jIsLeapYear(selectedYear)) return 29;
            }
        }, {
            key: "componentWillMount",
            value: function componentWillMount() {
                var selectedMonthFirstDay = this.state.selectedMonthFirstDay;

                if (canUseDOM) {
                    var css = (0, _Styles2.default)(selectedMonthFirstDay),
                        head = document.head || document.getElementsByTagName('head')[0],
                        style = document.createElement('style');

                    style.type = 'text/css';
                    if (style.styleSheet) {
                        style.styleSheet.cssText = css;
                    } else {
                        style.appendChild(document.createTextNode(css));
                    }

                    head.appendChild(style);
                }
            }
        }, {
            key: "daysClicked",
            value: function daysClicked(day, momentDay) {
                var _props = this.props,
                    onChange = _props.onChange,
                    format = _props.format;
                var selectedTime = this.state.selectedTime;

                if (!format) format = "jYYYY-jMM-jDD HH:mm";
                if (this.state.selectedDay != momentDay) this.setState({ selectedDay: momentDay, inputValue: (0, _momentJalaali2.default)(momentDay + " " + selectedTime, "jYYYYjMMjDD HH:mm").format(format) });
            }
        }, {
            key: "monthsClicked",
            value: function monthsClicked(month) {
                var selectedYear = this.state.selectedYear;

                var year = selectedYear;
                var thisMonth = month;
                this.setState({ daysCount: 0 });
                if (month == 0) {
                    this.setState({ currentMonth: 12, daysCount: this.daysInMonth(12, selectedYear - 1), selectedYear: selectedYear - 1 });thisMonth = 12;year = selectedYear - 1;
                } else if (month == 13) {
                    this.setState({ currentMonth: 1, daysCount: this.daysInMonth(1, selectedYear + 1), selectedYear: selectedYear + 1 });thisMonth = 1;year = selectedYear + 1;
                } else this.setState({ currentMonth: month, daysCount: this.daysInMonth(month, selectedYear) });
                this.firstDayOfMonth(thisMonth, year);
            }
        }, {
            key: "firstDayOfMonth",
            value: function firstDayOfMonth(mo, ye) {
                var month = mo.toString();
                var year = ye.toString();
                if (month.length == 1) month = "0" + month;
                this.setState({ selectedMonthFirstDay: (0, _momentJalaali2.default)(year + "/" + month + "/01", "jYYYY/jMM/jDD").weekday() });
            }
        }, {
            key: "yearSelected",
            value: function yearSelected(year) {
                this.setState({ selectedYear: year });
                this.firstDayOfMonth(this.state.currentMonth, year);
            }
        }, {
            key: "timeSelected",
            value: function timeSelected(time) {
                var format = this.props.format;
                var selectedDay = this.state.selectedDay;

                if (!format) format = "jYYYY-jMM-jDD HH:mm";
                this.setState({ selectedTime: time, inputValue: (0, _momentJalaali2.default)(selectedDay + " " + time, "jYYYYjMMjDD HH:mm").format(format) });
            }
        }, {
            key: "submitHandler",
            value: function submitHandler(e) {
                e.preventDefault();
                var _props2 = this.props,
                    onChange = _props2.onChange,
                    format = _props2.format;
                var _state = this.state,
                    selectedTime = _state.selectedTime,
                    selectedDay = _state.selectedDay;

                if (!!selectedDay && !!selectedTime) {
                    this.setState({ openPicker: false });
                    var formatted = void 0;
                    if (!!format) formatted = (0, _momentJalaali2.default)(selectedDay + " " + selectedTime, "jYYYYjMMjDD HH:mm").format(format);
                    if (onChange) this.props.onChange((0, _momentJalaali2.default)(selectedDay + " " + selectedTime, "jYYYYjMMjDD HH:mm").unix(), formatted);
                }
            }
        }, {
            key: "canclePicker",
            value: function canclePicker(e) {
                e.preventDefault();
                this.setState({ openPicker: false });
            }
        }, {
            key: "render",
            value: function render() {
                var _this2 = this;

                var _state2 = this.state,
                    openPicker = _state2.openPicker,
                    daysCount = _state2.daysCount,
                    selectedDay = _state2.selectedDay,
                    currentMonth = _state2.currentMonth,
                    selectedYear = _state2.selectedYear,
                    selectedMonthFirstDay = _state2.selectedMonthFirstDay,
                    inputValue = _state2.inputValue,
                    selectedTime = _state2.selectedTime;
                var _props3 = this.props,
                    id = _props3.id,
                    placeholder = _props3.placeholder;

                return _react2.default.createElement(
                    "div",
                    null,
                    _react2.default.createElement("input", { type: "text", id: id, placeholder: placeholder, dir: "ltr", style: { textAlign: "right" }, readOnly: true, value: inputValue, onClick: function onClick() {
                            _this2.setState({ openPicker: !openPicker });
                        } }),
                    openPicker && _react2.default.createElement(
                        "div",
                        { className: "JDatePicker" },
                        _react2.default.createElement(
                            "div",
                            { className: "JDheader" },
                            _react2.default.createElement(
                                "div",
                                { className: "right" },
                                _react2.default.createElement(_Years2.default, { changeEvent: function changeEvent(returnedYear) {
                                        return _this2.yearSelected(returnedYear);
                                    }, year: selectedYear })
                            ),
                            _react2.default.createElement(
                                "div",
                                { className: "left" },
                                _react2.default.createElement(_TimePicker2.default, { changeEvent: function changeEvent(returnedTime) {
                                        return _this2.timeSelected(returnedTime);
                                    }, selectedTime: selectedTime })
                            )
                        ),
                        _react2.default.createElement(_Months2.default, { clickEvent: function clickEvent(returnedMonth) {
                                return _this2.monthsClicked(returnedMonth);
                            }, month: currentMonth }),
                        _react2.default.createElement(
                            "div",
                            { className: "days-titles" },
                            _react2.default.createElement(
                                "div",
                                null,
                                "\u0634"
                            ),
                            _react2.default.createElement(
                                "div",
                                null,
                                "\u06CC"
                            ),
                            _react2.default.createElement(
                                "div",
                                null,
                                "\u062F"
                            ),
                            _react2.default.createElement(
                                "div",
                                null,
                                "\u0633"
                            ),
                            _react2.default.createElement(
                                "div",
                                null,
                                "\u0686"
                            ),
                            _react2.default.createElement(
                                "div",
                                null,
                                "\u067E"
                            ),
                            _react2.default.createElement(
                                "div",
                                null,
                                "\u062C"
                            )
                        ),
                        _react2.default.createElement(_Days2.default, { selectedYear: selectedYear, selectedDay: selectedDay, currentMonth: currentMonth, daysCount: daysCount, firstDay: selectedMonthFirstDay, clickEvent: function clickEvent(day, momentDay) {
                                return _this2.daysClicked(day, momentDay);
                            } }),
                        _react2.default.createElement(
                            "div",
                            null,
                            _react2.default.createElement(
                                "button",
                                { onClick: this.submitHandler, className: "JDsubmit" },
                                "\u062A\u0627\u06CC\u06CC\u062F"
                            ),
                            _react2.default.createElement(
                                "button",
                                { className: "JDcancel", onClick: this.canclePicker },
                                "\u0644\u063A\u0648"
                            )
                        )
                    )
                );
            }
        }]);

        return DateTimePicker;
    }(_react2.default.Component);

    ;

    exports.default = DateTimePicker;
});