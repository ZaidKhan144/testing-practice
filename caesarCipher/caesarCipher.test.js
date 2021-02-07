
const { expect } = require('@jest/globals')
const caesarCipher = require('./caesarCipher')

test('should be able to check whether caesarCipher is defined or not', () => {
    expect(caesarCipher).toBeDefined()
})

test('should be able to check lowercase ceasar cipher logic', () => {
    expect(caesarCipher('defend the east wall of the castle', 1)).toEqual('efgfoe uif fbtu xbmm pg uif dbtumf')
})

test('should be able to check uppercase ceasar cipher logic', () => {
    expect(caesarCipher('ATTACK AT DAWN', 1)).toEqual('BUUBDL BU EBXO')
})