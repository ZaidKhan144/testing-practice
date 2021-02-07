
const arrayAnalysis = require('./arrayAnalysis')

test('should check whether arrayAnalysis is defined or not', () => {
    expect(arrayAnalysis).toBeDefined()
})

test('should return object with properties, avg, min, max, length', () => {
    const object = arrayAnalysis([1, 8, 3, 4, 2, 6])
    expect(object).toEqual({
        avg: 4,
        min: 1,
        max: 8,
        len: 6
    })
})

test('should return object with properties, avg, min, max, length', () => {
    const object = arrayAnalysis([0, 10, 3, 4, 2, 6, 9])
    expect(object).toEqual({
        avg: 4.857142857142857,
        min: 0,
        max: 10,
        len: 7
    })
})