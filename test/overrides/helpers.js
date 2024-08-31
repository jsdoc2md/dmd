const overrides = {
  inlineLinks: function (text, options) {
    return 'get me?'
  },

  orphans: function () {
    return 'whatever'
  }
}

module.exports = overrides
