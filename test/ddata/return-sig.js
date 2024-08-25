const ddata = require('../../helpers/ddata')
const a = require('assert').strict

function makeOptions (done) {
  return {
    fn: function (context) {
      done(context)
    }
  }
}

const [test, only, skip] = [new Map(), new Map(), new Map()]

test.set('multiple returns specified', function () {
  const identifier = {
    returns: [
      { type: { names: ['string'] }, description: 'desc 1' },
      { type: { names: ['object', 'function'] }, description: 'desc 2' }
    ]
  }

  const options = makeOptions(function (context) {
    a.deepEqual(context, { symbol: '⇒', types: ['string', 'object', 'function'] })
  })
  ddata.returnSig2.call(identifier, options)
})

test.set('no returns, one type', function () {
  const identifier = { type: { names: ['string'] } }

  const options = makeOptions(function (context) {
    a.deepEqual(context, { symbol: ':', types: ['string'] })
  })
  ddata.returnSig2.call(identifier, options)
})

test.set('return with no type', function () {
  const identifier = {
    returns: [{ description: 'A string representation of the argument.' }]
  }
  const options = makeOptions(function (context) {
    a.deepEqual(context, { symbol: null, types: null })
  })
  ddata.returnSig2.call(identifier, options)
})

module.exports = { test, only, skip }
