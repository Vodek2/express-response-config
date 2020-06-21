// const assert = require('assert');
const assert = require('assert');
const buildResponseObject = require('./buildResponseOb');
module.exports = function ({
    responseName,
    express,
    responseObKeys = []
}) {
    assert(responseName, 'responseName is required');
    assert(express, 'express instance is required');

    express.response[responseName] = function (
        status,
        responseOb = {}
    ) {
        this.status(status)
        this.json(buildResponseObject({
            responseObKeys,
            responseOb
        }))

    }

}