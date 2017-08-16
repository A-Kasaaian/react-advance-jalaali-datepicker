(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'react'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react);
        global.Days = mod.exports;
    }
})(this, function (exports, _react) {
    'use strict';

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

    var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
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

    var Days = function (_React$Component) {
        _inherits(Days, _React$Component);

        function Days(props) {
            _classCallCheck(this, Days);

            var _this = _possibleConstructorReturn(this, (Days.__proto__ || Object.getPrototypeOf(Days)).call(this, props));

            _this.state = { selectedDay: "", daysCount: _this.props.daysCount };
            return _this;
        }

        _createClass(Days, [{
            key: 'dayClicked',
            value: function dayClicked(i, element) {
                var clickEvent = this.props.clickEvent;

                if (clickEvent) clickEvent(i, element);
                if (!!this.state.selectedDay && !!this.refs[this.state.selectedDay]) this.refs[this.state.selectedDay].className = this.refs[this.state.selectedDay].className.replace('selected', '');
                this.setState({ selectedDay: element });
                this.refs[element].className += " selected";
            }
        }, {
            key: 'renderDays',
            value: function renderDays() {
                var _this2 = this;

                var _props = this.props,
                    firstDay = _props.firstDay,
                    currentMonth = _props.currentMonth,
                    selectedYear = _props.selectedYear,
                    selectedDay = _props.selectedDay;
                var daysCount = this.state.daysCount;

                var year = selectedYear.toString();
                var month = currentMonth.toString();
                if (month.length == 1) month = "0" + month;
                var result = [];

                var _loop = function _loop(i) {
                    var addedClass = "";
                    var marginRight = "0%";
                    var date = void 0;
                    var number = i.toString().replace(/1|2|3|4|5|6|7|8|9|0/gi, function (e) {
                        return mapObj[e];
                    });
                    if (i == 1) marginRight = firstDay * 14.28 + "%";
                    if (i < 10) date = year + month + "0" + i.toString();else date = year + month + i.toString();
                    if (date == selectedDay) addedClass = " selected";
                    result.push(_react2.default.createElement(
                        'div',
                        { className: "day-items" + addedClass, ref: date, style: { marginRight: marginRight }, key: i, onClick: function onClick() {
                                return _this2.dayClicked(1, date);
                            } },
                        number
                    ));
                };

                for (var i = 1; daysCount >= i; i++) {
                    _loop(i);
                }
                return result;
            }
        }, {
            key: 'componentWillReceiveProps',
            value: function componentWillReceiveProps(nextProps) {
                var _this3 = this;

                if (canUseDOM) {
                    this.setState({ daysCount: 0 });
                    var that = this;
                    window.setTimeout(function () {
                        _this3.setState({ daysCount: nextProps.daysCount });
                    }, 10);
                }
            }
        }, {
            key: 'render',
            value: function render() {
                return _react2.default.createElement(
                    'div',
                    { className: 'JC-days' },
                    _react2.default.createElement(
                        'div',
                        { className: 'holder' },
                        !!this.state.daysCount && this.renderDays()
                    )
                );
            }
        }]);

        return Days;
    }(_react2.default.Component);

    ;

    exports.default = Days;
});