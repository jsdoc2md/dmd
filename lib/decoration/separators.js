'use strict'

module.exports = function () {
  return class Separators {
    render () {
      return `${super.render()}\n* * *\n`
    }
  }
}
