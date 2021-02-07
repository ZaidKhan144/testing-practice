
const { expect } = require('@jest/globals')
const reverseString = require('./reverseSring')

test('should check where reverseString is defined or not', () => {
    expect(reverseString).toBeDefined()
})

test('should be able to reverse a string', () => {
    expect(reverseString('Zaid')).toEqual('diaz')
})

