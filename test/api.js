const dmd = require('dmd')
const a = require('assert').strict

const [test, only, skip] = [new Map(), new Map(), new Map()]

const fixture = [{
  id: 'someclass',
  longname: 'someclass',
  name: 'someclass',
  kind: 'class',
  description: 'is a class'
}]

test.set('dmd.async() returns correct data', async function () {
  const result = await dmd(fixture)
  a.ok(/is a class/.test(result))
})

test.set('dmd.async() again to exercise the cache', async function () {
  const result = await dmd(fixture)
  a.ok(/is a class/.test(result))
})

test.set('dmd.async({ noCache }) returns correct data', async function () {
  const options = { noCache: true }
  const result = await dmd(fixture, options)
  a.ok(/is a class/.test(result))
})

module.exports = { test, only, skip }
