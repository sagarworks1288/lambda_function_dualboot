const _ = require('lodash')
const {outputObj} = require('../helpers/common_helper')
const index = async (param) => {
  const output = outputObj(param)
  return output
}

const welcome = async (param) => {
    const output = outputObj(param)
    _.set(output,'message','hello world welcome')
    return output
  }

module.exports = {
  index,
  welcome
}