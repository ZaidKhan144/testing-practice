
const { expect } = require('@jest/globals')
const calculator = require('./calculator')

test('should be able to perfom basic calculator expressions', () => {
    expect(calculator.add(2, 3)).toEqual(5)
    expect(calculator.sub(2, 3)).toEqual(-1)
    expect(calculator.mul(2, 2)).toEqual(4)
    expect(calculator.div(2, 4)).toEqual(0.5)
})

