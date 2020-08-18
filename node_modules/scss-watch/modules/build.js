const glob = require('glob');
const generate = require('./generate.js');

module.exports = ()=>{
  let files = glob.sync(`**/*.scss`);
  let now = Date.now()
  console.log(`\nParsing ${files.length} SCSS files.`)
  files.forEach(file => generate(file))
  console.log(`Done in ${(Date.now()-now)/1000} seconds.`)
}
