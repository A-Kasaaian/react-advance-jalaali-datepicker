"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['../index'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('../index'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.index);
    global.undefined = mod.exports;
  }
})(void 0, function (_require) {
  "use strict";

  var daysInMonth = _require.daysInMonth;
  describe('daysInMonth', function () {
    test('1st month should return 31', function () {
      expect(daysInMonth('1', '1402')).toBe(31);
    });
    test('6th month should return 31', function () {
      expect(daysInMonth('6', '1402')).toBe(31);
    });
    test('7th month should return 30', function () {
      expect(daysInMonth('7', '1402')).toBe(30);
    });
    test('12th month should return 29 in non-leap year', function () {
      expect(daysInMonth('12', '1402')).toBe(29);
    });
    test('12th month should return 30 in leap year', function () {
      expect(daysInMonth('12', '1403')).toBe(30);
    });
  });
});