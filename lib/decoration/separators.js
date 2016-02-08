'use strict'

module.exports = function () {
  return class Separators {
    separator () {
      return '\n* * *\n'
    }
    render () {
      return super.render() + this.separator()
    }
  }
}
