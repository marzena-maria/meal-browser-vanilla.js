const fs = require('fs');
const generate = require('./generate.js');

module.exports = () => {
  console.log("")
  console.log("Watching for changes!")
  fs.watch(".", {recursive:true}, (event, filename)=>{
    if (filename && filename.endsWith(".scss") && event !== "delete") {
      console.log(`\nParsing ${filename}`)
      generate("./" + filename)
      console.log(`Parsed!`)
    }
  })
}
