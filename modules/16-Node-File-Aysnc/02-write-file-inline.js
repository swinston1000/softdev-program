const fs = require('fs')


fs.writeFile(`${__dirname}/workfiles/hello.txt`, 'hello, world', function () {
  console.log('File was written!')
})

/**
 * Same, with inline function
 */
/* eslint handle-callback-err: 0 */