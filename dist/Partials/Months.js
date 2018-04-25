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
        global.Months = mod.exports;
    }
})(this, function (exports, _react) {
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

    var Months = function (_React$Component) {
        _inherits(Months, _React$Component);

        function Months(props) {
            _classCallCheck(this, Months);

            var _this = _possibleConstructorReturn(this, (Months.__proto__ || Object.getPrototypeOf(Months)).call(this, props));

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
                this.setState({ monthPickerView: false, selectedMonth: i });
            }
        }, {
            key: "renderMonths",
            value: function renderMonths() {
                var _this2 = this;

                var _state = this.state,
                    months = _state.months,
                    selectedMonth = _state.selectedMonth;

                var result = [];

                var _loop = function _loop(i) {
                    if (selectedMonth == i) result.push(_react2.default.createElement(
                        "div",
                        { key: i, className: "month-items selected" },
                        months[i - 1]
                    ));else result.push(_react2.default.createElement(
                        "div",
                        { key: i, className: "month-items", onClick: function onClick(e) {
                                return _this2.monthClicked(i, e);
                            } },
                        months[i - 1]
                    ));
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

                var _props = this.props,
                    month = _props.month,
                    monthTitleEnable = _props.monthTitleEnable;
                var _state2 = this.state,
                    months = _state2.months,
                    monthPickerView = _state2.monthPickerView;

                return _react2.default.createElement(
                    "div",
                    { className: "JC-months" },
                    monthTitleEnable && _react2.default.createElement(
                        "span",
                        null,
                        "\u0645\u0627\u0647: "
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "holder" },
                        _react2.default.createElement(
                            "div",
                            { onClick: function onClick() {
                                    return _this3.monthClicked(month - 1);
                                }, className: "prev" },
                            ">"
                        ),
                        _react2.default.createElement(
                            "div",
                            { onClick: function onClick() {
                                    _this3.setState({ monthPickerView: !monthPickerView });
                                }, className: "print-month" },
                            months[month - 1]
                        ),
                        _react2.default.createElement(
                            "div",
                            { onClick: function onClick() {
                                    return _this3.monthClicked(month + 1);
                                }, className: "next" },
                            "<"
                        ),
                        monthPickerView && _react2.default.createElement(
                            "div",
                            { className: "monthPicker" },
                            this.renderMonths()
                        )
                    )
                );
            }
        }]);

        return Months;
    }(_react2.default.Component);

    ;

    exports.default = Months;
});