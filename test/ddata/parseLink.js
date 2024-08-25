const ddata = require('../../helpers/ddata')
const a = require('assert').strict

const [test, only, skip] = [new Map(), new Map(), new Map()]

test.set('{@link someSymbol}', function () {
  const text = 'blah {@link someSymbol}'
  const result = [{ original: '{@link someSymbol}', caption: 'someSymbol', url: 'someSymbol' }]
  a.deepEqual(ddata.parseLink(text), result)
})

test.set('{@link http://some.url.com}', function () {
  const text = 'blah {@link http://some.url.com} blah'
  const result = [{
    original: '{@link http://some.url.com}',
    caption: 'http://some.url.com',
    url: 'http://some.url.com'
  }]
  a.deepEqual(ddata.parseLink(text), result)
})

test.set('multiple {@link http://some.url.com}', function () {
  const text = 'blah {@link http://one.url.com} blah {@link http://two.url.com} whatever'
  const expected = [
    {
      original: '{@link http://one.url.com}',
      caption: 'http://one.url.com',
      url: 'http://one.url.com'
    },
    {
      original: '{@link http://two.url.com}',
      caption: 'http://two.url.com',
      url: 'http://two.url.com'
    }
  ]
  a.deepEqual(ddata.parseLink(text), expected)
})

test.set('[caption here]{@link someSymbol}', function () {
  const text = 'blah [caption here]{@link someSymbol} blah'
  const result = [{
    original: '[caption here]{@link someSymbol}',
    caption: 'caption here',
    url: 'someSymbol'
  }]
  a.deepEqual(ddata.parseLink(text), result)
})

test.set('multiple [caption here]{@link someSymbol}', function () {
  const text = 'blah [caption one]{@link thingOne} blah [caption two]{@link thingTwo} whatever'
  const result = [
    {
      original: '[caption one]{@link thingOne}',
      caption: 'caption one',
      url: 'thingOne'
    },
    {
      original: '[caption two]{@link thingTwo}',
      caption: 'caption two',
      url: 'thingTwo'
    }
  ]
  a.deepEqual(ddata.parseLink(text), result)
})

test.set('[caption here]{@link http://some.url.com}', function () {
  const text = 'blah [caption here]{@link http://some.url.com} blah'
  const result = [{
    original: '[caption here]{@link http://some.url.com}',
    caption: 'caption here',
    url: 'http://some.url.com'
  }]
  a.deepEqual(ddata.parseLink(text), result)
})

test.set('multiple {@link someSymbol|caption here}', function () {
  const text = 'blah {@link thingOne|caption one} blah {@link thingTwo|caption two} whatever'
  const result = [
    {
      original: '{@link thingOne|caption one}',
      caption: 'caption one',
      url: 'thingOne'
    },
    {
      original: '{@link thingTwo|caption two}',
      caption: 'caption two',
      url: 'thingTwo'
    }
  ]
  a.deepEqual(ddata.parseLink(text), result)
})

test.set('multiple {@link someSymbol Caption here}', function () {
  const text = 'blah {@link thingOne Caption one} blah {@link thingTwo Caption two} whatever'
  const result = [
    {
      original: '{@link thingOne Caption one}',
      caption: 'Caption one',
      url: 'thingOne'
    },
    {
      original: '{@link thingTwo Caption two}',
      caption: 'Caption two',
      url: 'thingTwo'
    }
  ]
  a.deepEqual(ddata.parseLink(text), result)
})

module.exports = { test, only, skip }
