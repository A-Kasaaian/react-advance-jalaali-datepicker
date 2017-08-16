(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports", "react", "moment-jalaali", "./index.js"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require("react"), require("moment-jalaali"), require("./index.js"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.momentJalaali, global.index);
        global.DateRangePicker = mod.exports;
    }
})(this, function (exports, _react, _momentJalaali, _index) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _momentJalaali2 = _interopRequireDefault(_momentJalaali);

    var _index2 = _interopRequireDefault(_index);

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

    var DateRangePicker = function (_React$Component) {
        _inherits(DateRangePicker, _React$Component);

        function DateRangePicker(props) {
            _classCallCheck(this, DateRangePicker);

            var _this = _possibleConstructorReturn(this, (DateRangePicker.__proto__ || Object.getPrototypeOf(DateRangePicker)).call(this, props));

            _this.change = _this.change.bind(_this);
            _this.state = { disableFromYear: "", disableFromMonth: "", disableFromDay: "", disableFromUnix: "" };
            return _this;
        }

        _createClass(DateRangePicker, [{
            key: "change",
            value: function change(unix, formatted) {
                this.setState({ disableFromUnix: unix });
            }
        }, {
            key: "secondchange",
            value: function secondchange(unix, formatted) {
                this.setState({ disableFromUnix: unix });
                debugger;
            }
        }, {
            key: "render",
            value: function render() {
                var disableFromUnix = this.state.disableFromUnix;

                return _react2.default.createElement(
                    "div",
                    { className: "rangePicker" },
                    _react2.default.createElement(_index2.default, { placeholder: "\u0627\u0646\u062A\u062E\u0627\u0628 \u062A\u0627\u0631\u06CC\u062E", format: "jYYYY/jMM/jDD", onChange: this.change, id: "datePicker" }),
                    !!disableFromUnix && _react2.default.createElement(_index2.default, { placeholder: "\u0627\u0646\u062A\u062E\u0627\u0628 \u062A\u0627\u0631\u06CC\u062E", disableFromUnix: disableFromUnix, format: "jYYYY/jMM/jDD", onChange: this.secondchange, id: "datePicker" })
                );
            }
        }]);

        return DateRangePicker;
    }(_react2.default.Component);

    exports.default = DateRangePicker;
});