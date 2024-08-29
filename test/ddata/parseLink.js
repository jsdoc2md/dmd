const ddata = require('../../helpers/ddata')
const a = require('assert').strict

const [test, only, skip] = [new Map(), new Map(), new Map()]

test.set('{@link someSymbol}', function () {
  const text = 'blah {@link someSymbol}'
  const result = [{ original: '{@link someSymbol}', caption: 'someSymbol', url: 'someSymbol', format: 'plain' }]
  a.deepEqual(ddata.parseLink(text), result)
})

test.set('{@linkcode someSymbol}', function () {
  const text = 'blah {@linkcode someSymbol}'
  const result = [{ original: '{@linkcode someSymbol}', caption: 'someSymbol', url: 'someSymbol', format: 'code' }]
  a.deepEqual(ddata.parseLink(text), result)
})

test.set('{@linkplain someSymbol}', function () {
  const text = 'blah {@linkplain someSymbol}'
  const result = [{ original: '{@linkplain someSymbol}', caption: 'someSymbol', url: 'someSymbol', format: 'plain' }]
  a.deepEqual(ddata.parseLink(text), result)
})

test.set('{@link http://some.url.com}', function () {
  const text = 'blah {@link http://some.url.com} blah'
  const result = [{
    original: '{@link http://some.url.com}',
    caption: 'http://some.url.com',
    url: 'http://some.url.com',
    format: 'plain'
  }]
  a.deepEqual(ddata.parseLink(text), result)
})

test.set('{@linkcode http://some.url.com}', function () {
  const text = 'blah {@linkcode http://some.url.com} blah'
  const result = [{
    original: '{@linkcode http://some.url.com}',
    caption: 'http://some.url.com',
    url: 'http://some.url.com',
    format: 'code'
  }]
  a.deepEqual(ddata.parseLink(text), result)
})

test.set('{@linkplain http://some.url.com}', function () {
  const text = 'blah {@linkplain http://some.url.com} blah'
  const result = [{
    original: '{@linkplain http://some.url.com}',
    caption: 'http://some.url.com',
    url: 'http://some.url.com',
    format: 'plain'
  }]
  a.deepEqual(ddata.parseLink(text), result)
})

test.set('multiple {@link http://some.url.com}', function () {
  const text = 'blah {@link http://one.url.com} blah {@link http://two.url.com} whatever'
  const expected = [
    {
      original: '{@link http://one.url.com}',
      caption: 'http://one.url.com',
      url: 'http://one.url.com',
      format: 'plain'
    },
    {
      original: '{@link http://two.url.com}',
      caption: 'http://two.url.com',
      url: 'http://two.url.com',
      format: 'plain'
    }
  ]
  a.deepEqual(ddata.parseLink(text), expected)
})

test.set('[caption here]{@link someSymbol}', function () {
  const text = 'blah [caption here]{@link someSymbol} blah'
  const result = [{
    original: '[caption here]{@link someSymbol}',
    caption: 'caption here',
    url: 'someSymbol',
    format: 'plain'
  }]
  a.deepEqual(ddata.parseLink(text), result)
})

test.set('[caption here]{@linkcode someSymbol}', function () {
  const text = 'blah [caption here]{@linkcode someSymbol} blah'
  const result = [{
    original: '[caption here]{@linkcode someSymbol}',
    caption: 'caption here',
    url: 'someSymbol',
    format: 'code'
  }]
  a.deepEqual(ddata.parseLink(text), result)
})

test.set('[caption here]{@linkplain someSymbol}', function () {
  const text = 'blah [caption here]{@linkplain someSymbol} blah'
  const result = [{
    original: '[caption here]{@linkplain someSymbol}',
    caption: 'caption here',
    url: 'someSymbol',
    format: 'plain'
  }]
  a.deepEqual(ddata.parseLink(text), result)
})

test.set('multiple [caption here]{@link someSymbol}', function () {
  const text = 'blah [caption one]{@link thingOne} blah [caption two]{@link thingTwo} whatever'
  const result = [
    {
      original: '[caption one]{@link thingOne}',
      caption: 'caption one',
      url: 'thingOne',
      format: 'plain'
    },
    {
      original: '[caption two]{@link thingTwo}',
      caption: 'caption two',
      url: 'thingTwo',
      format: 'plain'
    }
  ]
  a.deepEqual(ddata.parseLink(text), result)
})

test.set('[caption here]{@link http://some.url.com}', function () {
  const text = 'blah [caption here]{@link http://some.url.com} blah'
  const result = [{
    original: '[caption here]{@link http://some.url.com}',
    caption: 'caption here',
    url: 'http://some.url.com',
    format: 'plain'
  }]
  a.deepEqual(ddata.parseLink(text), result)
})

test.set('multiple {@link someSymbol|caption here}', function () {
  const text = 'blah {@link thingOne|caption one} blah {@link thingTwo|caption two} whatever'
  const result = [
    {
      original: '{@link thingOne|caption one}',
      caption: 'caption one',
      url: 'thingOne',
      format: 'plain'
    },
    {
      original: '{@link thingTwo|caption two}',
      caption: 'caption two',
      url: 'thingTwo',
      format: 'plain'
    }
  ]
  a.deepEqual(ddata.parseLink(text), result)
})

test.set('mixed {@link(plain/code) someSymbol|caption here}', function () {
  const text = 'blah {@linkplain thingOne|caption one} blah {@linkcode thingTwo|caption two} whatever'
  const result = [
    {
      original: '{@linkplain thingOne|caption one}',
      caption: 'caption one',
      url: 'thingOne',
      format: 'plain'
    },
    {
      original: '{@linkcode thingTwo|caption two}',
      caption: 'caption two',
      url: 'thingTwo',
      format: 'code'
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
      url: 'thingOne',
      format: 'plain'
    },
    {
      original: '{@link thingTwo Caption two}',
      caption: 'Caption two',
      url: 'thingTwo',
      format: 'plain'
    }
  ]
  a.deepEqual(ddata.parseLink(text), result)
})

test.set('multiple {@link(plain/code) someSymbol Caption here}', function () {
  const text = 'blah {@linkplain thingOne Caption one} blah {@linkcode thingTwo Caption two} whatever'
  const result = [
    {
      original: '{@linkplain thingOne Caption one}',
      caption: 'Caption one',
      url: 'thingOne',
      format: 'plain'
    },
    {
      original: '{@linkcode thingTwo Caption two}',
      caption: 'Caption two',
      url: 'thingTwo',
      format: 'code'
    }
  ]
  a.deepEqual(ddata.parseLink(text), result)
})

// {@link symbol catption} style
const allLinksText = 'blah {@linkplain thingOne Caption one} blah {@linkcode ftp://url-two.tld Caption two} whatever {@link thingThree Caption three} !@ {@link https://url-four.com Caption four} ok ' +
  // {@link symbol|caption} style
  '{@linkplain thingFive|caption five} nah {@linkcode git://url-six.com|caption six} ??? {@link thingSeven|caption seven} {@link https://url-eight.net|caption eight} @typedef ' +
  // [caption]{@link symbol} style
  '[caption nine]{@linkplain symbolNine} ach [caption ten]{@linkcode http://url.ten.com} 2434 [caption eleven]{@link symbolEleven} http://foo.com [caption twelve]{@link http://url.12.com} whawha' +
  // {@link symbol} style
  '{@linkplain symbolThirteen} fee {@linkcode proto://fourteen.asbf} blb {@link symbolFifteen} geez {@link telnet://16.123.123.123}'

const cleverLinksResults = [
  {
    original: '{@linkplain thingOne Caption one}',
    caption: 'Caption one',
    url: 'thingOne',
    format: 'plain'
  },
  {
    original: '{@linkcode ftp://url-two.tld Caption two}',
    caption: 'Caption two',
    url: 'ftp://url-two.tld',
    format: 'code'
  },
  {
    original: '{@link thingThree Caption three}',
    caption: 'Caption three',
    url: 'thingThree',
    format: 'code'
  },
  {
    original: '{@link https://url-four.com Caption four}',
    caption: 'Caption four',
    url: 'https://url-four.com',
    format: 'plain'
  },
  {
    original: '{@linkplain thingFive|caption five}',
    caption: 'caption five',
    url: 'thingFive',
    format: 'plain'
  },
  {
    original: '{@linkcode git://url-six.com|caption six}',
    caption: 'caption six',
    url: 'git://url-six.com',
    format: 'code'
  },
  {
    original: '{@link thingSeven|caption seven}',
    caption: 'caption seven',
    url: 'thingSeven',
    format: 'code'
  },
  {
    original: '{@link https://url-eight.net|caption eight}',
    caption: 'caption eight',
    url: 'https://url-eight.net',
    format: 'plain'
  },
  {
    original: '[caption nine]{@linkplain symbolNine}',
    caption: 'caption nine',
    url: 'symbolNine',
    format: 'plain'
  },
  {
    original: '[caption ten]{@linkcode http://url.ten.com}',
    caption: 'caption ten',
    url: 'http://url.ten.com',
    format: 'code'
  },
  {
    original: '[caption eleven]{@link symbolEleven}',
    caption: 'caption eleven',
    url: 'symbolEleven',
    format: 'code'
  },
  {
    original: '[caption twelve]{@link http://url.12.com}',
    caption: 'caption twelve',
    url: 'http://url.12.com',
    format: 'plain'
  },
  {
    original: '{@linkplain symbolThirteen}',
    caption: 'symbolThirteen',
    url: 'symbolThirteen',
    format: 'plain'
  },
  {
    original: '{@linkcode proto://fourteen.asbf}',
    caption: 'proto://fourteen.asbf',
    url: 'proto://fourteen.asbf',
    format: 'code'
  },
  {
    original: '{@link symbolFifteen}',
    caption: 'symbolFifteen',
    url: 'symbolFifteen',
    format: 'code'
  },
  {
    original: '{@link telnet://16.123.123.123}',
    caption: 'telnet://16.123.123.123',
    url: 'telnet://16.123.123.123',
    format: 'plain'
  }
]

test.set("'clever-links' true, 'monospace-links' undefined", function () {
  a.deepEqual(ddata.parseLink(allLinksText, { 'clever-links': true }), cleverLinksResults)
})

test.set("'clever-links' true overrides 'monospace-links' true", function () {
  a.deepEqual(ddata.parseLink(allLinksText, { 'clever-links': true, 'monospace-links': true }), cleverLinksResults)
})

test.set("'monospace-links' set all {@link}s to 'code' format", function () {
  const monospaceLinkResults = cleverLinksResults.map((result) => {
    const newResult = Object.assign({}, result)
    if (!/@link(?:code|plain)/.test(result.original)) {
      newResult.format = 'code'
    }
    return newResult
  })
  a.deepEqual(ddata.parseLink(allLinksText, { 'monospace-links': true }), monospaceLinkResults)
})

module.exports = { test, only, skip }
