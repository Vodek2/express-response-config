module.exports = function ({
    responseObKeys,
    responseOb
}) {
    return responseObKeys.reduce((acc, curr) => {
        acc[curr] = responseOb[curr]
        return acc
    }, {})
}