
const { expect } = require('@jest/globals')
const caesarCipher = require('./caesarCipher')

test('should be able to check whether caesarCipher is defined or not', () => {
    expect(caesarCipher).toBeDefined()
})

test('should be able to implement ceasar cipher logic', () => {
    expect(caesarCipher('defend the east wall of the castle', 1)).toEqual('efgfoe uif fbtu xbmm pg uif dbtumf')
})

