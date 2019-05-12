const Tom = require('test-runner').Tom
const ddata = require('../../helpers/ddata')
const a = require('assert')

const tom = module.exports = new Tom('parseLink')

tom.test('{@link someSymbol}', function () {
  const text = 'blah {@link someSymbol}'
  const result = [ { original: '{@link someSymbol}', caption: 'someSymbol', url: 'someSymbol' } ]
  a.deepEqual(ddata.parseLink(text), result)
})

tom.test('{@link http://some.url.com}', function () {
  const text = 'blah {@link http://some.url.com} blah'
  const result = [{
    original: '{@link http://some.url.com}',
    caption: 'http://some.url.com',
    url: 'http://some.url.com'
  }]
  a.deepEqual(ddata.parseLink(text), result)
})

tom.test('multiple {@link http://some.url.com}', function () {
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

tom.test('[caption here]{@link someSymbol}', function () {
  const text = 'blah [caption here]{@link someSymbol} blah'
  const result = [{
    original: '[caption here]{@link someSymbol}',
    caption: 'caption here',
    url: 'someSymbol'
  }]
  a.deepEqual(ddata.parseLink(text), result)
})

tom.test('multiple [caption here]{@link someSymbol}', function () {
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

tom.test('[caption here]{@link http://some.url.com}', function () {
  const text = 'blah [caption here]{@link http://some.url.com} blah'
  const result = [{
    original: '[caption here]{@link http://some.url.com}',
    caption: 'caption here',
    url: 'http://some.url.com'
  }]
  a.deepEqual(ddata.parseLink(text), result)
})

tom.test('multiple {@link someSymbol|caption here}', function () {
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

tom.test('multiple {@link someSymbol Caption here}', function () {
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
