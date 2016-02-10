'use strict'

module.exports = function (depth, SuperClass) {
  return class HeadingDepth extends SuperClass {
    headingDepth () {
      const difference = depth - 1
      return super.level() + difference
    }
  }
}
