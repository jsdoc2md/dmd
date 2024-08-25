const dmd = require('dmd')
const path = require('path')
const a = require('assert').strict

const [test, only, skip] = [new Map(), new Map(), new Map()]

const fixture = [{
  id: 'someclass',
  longname: 'someclass',
  name: 'someclass',
  kind: 'class',
  description: 'is a class'
}]

test.set('plugin: simple', async function () {
  const result = await dmd(fixture, { plugin: 'dmd-plugin-example' })
  a.ok(/documentation generated on/.test(result))
})

test.set('plugin: absolute path', async function () {
  const result = await dmd(fixture, {
    plugin: path.resolve(__dirname, 'fixture', 'dmd-plugin-example', 'lib', 'dmd-plugin-example.js')
  })
  a.ok(/documentation generated on/.test(result))
})

test.set('plugin: none-existent path', async function () {
  a.rejects(async function () {
    return dmd(fixture, { plugin: 'forejfirweuhnvkljne' })
  })
})

module.exports = { test, only, skip }
