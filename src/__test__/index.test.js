const { daysInMonth } = require('../index')

describe('daysInMonth', () => {
    test('1st month should return 31', () => {
        expect(daysInMonth('1', '1402')).toBe(31)
    })
    test('6th month should return 31', () => {
        expect(daysInMonth('6', '1402')).toBe(31)
    })
    test('7th month should return 30', () => {
        expect(daysInMonth('7', '1402')).toBe(30)
    })
    test('12th month should return 29 in non-leap year', () => {
        expect(daysInMonth('12', '1402')).toBe(29)
    })
    test('12th month should return 30 in leap year', () => {
        expect(daysInMonth('12', '1403')).toBe(30)
    })
})