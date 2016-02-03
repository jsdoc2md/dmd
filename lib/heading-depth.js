'use strict'

module.exports = function (depth) {
  return class HeadingDepth {
    level () {
      const difference = depth - 1
      return super.level() + difference
    }
  }
}
