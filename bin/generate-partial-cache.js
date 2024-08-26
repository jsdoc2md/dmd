const FileSet = require('file-set')
const fs = require('fs')
const path = require('path')

const fileSet = new FileSet()

async function start () {
  await fileSet.add('./partials/**/*.hbs')
  const map = new Map()
  for (const file of fileSet.files) {
    map.set(
      path.basename(file, '.hbs'),
      fs.readFileSync(file, 'utf8') || ''
    )
  }
  console.log('module.exports = ' + JSON.stringify(Array.from(map), null, '  '))
}
start()

/*
node bin/generate-partial-cache.js > partials/partial-cache.js
*/
