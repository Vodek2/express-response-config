const buildResponseOb = require('../buildResponseOb')

describe('test buildResponseOb', () => {
    it('should response with object with only given keys in config array', () => {
        const responseObKeys = ['a', 'b', 'c', 'd']
        const responseOb = {
            'a': 1,
            'c': [{
                'e': 'stringVal'
            }],
            'f': false,
            'd': false
        }

        const expected = {
            'a': 1,
            'c': [{
                'e': 'stringVal'
            }],
            'd': false
        }

        expect(buildResponseOb({
            responseOb,
            responseObKeys
        })).toEqual(expected);
    })
})