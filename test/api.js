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

test.set('Dmd issue #89 - Max callstack size exceeded bug', async function () {
  const templateData = [
    {
      id: 'Foo',
      longname: 'Foo',
      name: 'Foo',
      kind: 'class',
      scope: 'global',
      memberof: 'Foo',
      thisvalue: undefined,
      meta: {
        lineno: 2,
        filename: 'foo.js',
        path: '/Users/lloyd/Documents/jsdoc2md/dmd/tmp/issue-89'
      },
      order: 0
    }
  ]
  const options = {
    files: ['foo.js'],
    template: '{{#class name="Foo"}}{{>docs}}{{/class}}\n',
    noCache: true
  }
  a.doesNotReject(() => dmd(templateData, options))
})

test.set('dmd.async({ noCache }) with custom line endings', async function () {
  const options = { noCache: true, EOL: 'win32' }
  const result = await dmd(fixture, options)
  a.equal(result, '<a name="someclass"></a>\r\n\r\n## someclass\r\nis a class\r\n\r\n')
})


module.exports = { test, only, skip }
