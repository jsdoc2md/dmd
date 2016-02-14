'use strict'

module.exports = function (SuperClass) {
  return class Separators extends SuperClass {
    render () {
      return `${super.render()}\n* * *\n`
    }
  }
}
