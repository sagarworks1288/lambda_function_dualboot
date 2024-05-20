const _ = require('lodash')
const HomeController = require('./controllers/home_controller')
const defaultFunction = async () => {
    return { status: false, error: 'invalid pathName' }
  }
const routeNames = {
  '/': _.get(HomeController, 'index', defaultFunction),
  '/welcome': _.get(HomeController, 'welcome', defaultFunction),
}
module.exports = {routeNames,defaultFunction}