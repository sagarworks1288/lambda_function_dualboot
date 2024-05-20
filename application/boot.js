const _ = require('lodash')
const { routeNames, defaultFunction } = require('./routes')
const invoke = async (param) => {
    const pathName = _.get(param, 'pathName', '/')
    const routeFunction = _.get(routeNames, pathName, defaultFunction)
    return await routeFunction(param)
}
module.exports = {
    invoke
}