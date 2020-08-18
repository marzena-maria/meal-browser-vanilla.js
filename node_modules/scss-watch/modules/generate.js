const sass = require('sass');
const fs = require('fs');

function warn(text) {
  console.log(`\x1b[33m${text}\x1b[0m`);
}

module.exports = (path)=>{
  sass.render({file: path}, (err, data)=>{
    if (err) {
      if (err.formatted.endsWith("no such file or directory")) {
        fs.unlink(path.replace(".scss", ".css"), (err)=>{
        })
        return;
      }
      warn(err.formatted)
      return;
    }
    let target = path.replace(".scss", ".css")
    fs.writeFileSync(target, data.css)
  })
}
