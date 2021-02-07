
const { expect } = require('@jest/globals')
const capitalize = require('./capitalize')

test('should be defined', () => {
    expect(capitalize).toBeDefined()
})

test('should make first letter capitalize', () => {
    expect(capitalize('zaid')).toEqual('Zaid')
})

