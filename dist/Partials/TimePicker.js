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
        global.TimePicker = mod.exports;
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

            _this.timeChanged = _this.timeChanged.bind(_this);
            _this.state = { editable: false, minuteEnable: true, time: _this.props.selectedTime, error: "", minute: Math.floor(parseInt(_this.props.selectedTime.substring(3, 5)) / 5) * 5, hour: _this.props.selectedTime.substring(0, 2) };
            return _this;
        }

        _createClass(TimePicker, [{
            key: "timeChanged",
            value: function timeChanged() {
                var _refs = this.refs,
                    minute = _refs.minute,
                    hour = _refs.hour;
                var changeEvent = this.props.changeEvent;

                var minuteInt = parseInt(minute.value);
                var houraInt = parseInt(hour.value);
                if (houraInt > 0 && houraInt < 24) {
                    if (minuteInt > 0 && minuteInt < 60) {
                        this.setState({ editable: false, error: "" });
                        if (!!changeEvent) changeEvent(hour.value + ":" + minute.value);
                    } else {
                        this.setState({ error: "دقیقه حداکثر ۶۰ باشد" });
                    }
                } else {
                    this.setState({ error: "ساعت حداکثر ۲۴ باشد" });
                }
            }
        }, {
            key: "componentWillReceiveProps",
            value: function componentWillReceiveProps(nextprops) {
                this.setState({ time: nextprops.selectedTime });
            }
        }, {
            key: "TimePicker",
            value: function TimePicker() {
                var _this2 = this;

                var _state = this.state,
                    minute = _state.minute,
                    hour = _state.hour,
                    minuteEnable = _state.minuteEnable;

                var hourOptions = [];
                for (var i = 0; 23 >= i; i++) {
                    var number = i.toString();
                    if (i < 10) number = "0" + number;
                    var persianNumber = number.replace(/1|2|3|4|5|6|7|8|9|0/gi, function (e) {
                        return mapObj[e];
                    });
                    hourOptions.push(_react2.default.createElement(
                        "option",
                        { key: i, value: number },
                        persianNumber
                    ));
                }
                var hourElement = _react2.default.createElement(
                    "select",
                    { onChange: function onChange(e) {
                            _this2.setState({ minuteEnable: false, hour: e.target.value });
                        }, value: hour, ref: "hour" },
                    hourOptions
                );

                var minuteOptions = [];
                for (var _i = 0; 11 >= _i; _i++) {
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
                    { disabled: minuteEnable, value: minute, onChange: this.timeChanged, ref: "minute" },
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
            }
        }, {
            key: "render",
            value: function render() {
                var _this3 = this;

                var _state2 = this.state,
                    error = _state2.error,
                    time = _state2.time,
                    editable = _state2.editable;

                var timeString = time.toString().replace(/1|2|3|4|5|6|7|8|9|0/gi, function (e) {
                    return mapObj[e];
                });
                return _react2.default.createElement(
                    "div",
                    { className: "JC-years" },
                    !editable && _react2.default.createElement(
                        "div",
                        { className: "number", style: { cursor: "pointer" }, onClick: function onClick() {
                                return _this3.setState({ editable: true });
                            } },
                        timeString
                    ),
                    editable && this.TimePicker(),
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

    ;

    exports.default = TimePicker;
});