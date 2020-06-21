const cloneDeep = require('lodash/cloneDeep')
const index = require('../index')

describe('test main function', () => {
    const responseName = 'testName'
    const expressTest = {
        response: {
            status(st) {
                return st
            },
            json(ob) {
                return ob
            }
        }
    }
    responseObKeys = ['a', 'b', 'c']

    it('should throw an error in no express pram given', () => {
        expect(() => index({
            responseName
        })).toThrowError(/express/)
    })
    it('should throw an error in no responseName pram given', () => {
        expect(() => index({
            express: expressTest
        })).toThrowError(/responseName/)
    })
    it('should respond with function named responseName added to express.response object ', () => {

        const express = cloneDeep(expressTest)
        index({
            express,
            responseName
        })
        expect(express.response).toHaveProperty(responseName)
        expect(typeof express.response[responseName]).toEqual('function')
    })
})