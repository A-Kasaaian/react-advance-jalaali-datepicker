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
        global.Years = mod.exports;
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

    var Years = function (_React$Component) {
        _inherits(Years, _React$Component);

        function Years(props) {
            _classCallCheck(this, Years);

            var _this = _possibleConstructorReturn(this, (Years.__proto__ || Object.getPrototypeOf(Years)).call(this, props));

            _this.yearChanged = _this.yearChanged.bind(_this);
            _this.state = { year: _this.props.year, error: "" };
            return _this;
        }

        _createClass(Years, [{
            key: "yearChanged",
            value: function yearChanged() {
                var year = this.refs.year;
                var changeEvent = this.props.changeEvent;

                this.setState({ year: year.value });
                if (year.value.length == 4 && year.value > 1300 && year.value < 1500) {
                    this.setState({ editable: false, error: "" });
                    if (!!changeEvent) changeEvent(parseInt(year.value));
                } else this.setState({ error: "سال ۴ رقم و درفاصله ۱۳۰۰ تا ۱۵۰۰ باشد" });
            }
        }, {
            key: "componentWillReceiveProps",
            value: function componentWillReceiveProps(nextprops) {
                this.setState({ year: nextprops.year });
            }
        }, {
            key: "render",
            value: function render() {
                var _this2 = this;

                var _state = this.state,
                    error = _state.error,
                    year = _state.year,
                    editable = _state.editable;

                var yearString = year.toString().replace(/1|2|3|4|5|6|7|8|9|0/gi, function (e) {
                    return mapObj[e];
                });
                return _react2.default.createElement(
                    "div",
                    { className: "JC-years" },
                    _react2.default.createElement(
                        "span",
                        null,
                        "\u0633\u0627\u0644: "
                    ),
                    !editable && _react2.default.createElement(
                        "span",
                        { className: "number", style: { cursor: "pointer" }, onClick: function onClick() {
                                return _this2.setState({ editable: true });
                            } },
                        yearString
                    ),
                    editable && _react2.default.createElement("input", { type: "tel", ref: "year", placeholder: "\u0633\u0627\u0644", onChange: this.yearChanged, value: year }),
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

        return Years;
    }(_react2.default.Component);

    ;

    exports.default = Years;
});