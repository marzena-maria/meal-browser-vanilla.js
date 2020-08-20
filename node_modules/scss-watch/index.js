const sass = require('sass');

function warn(text) {
  return `\x1b[33m${text}\x1b[0m`;
}

module.exports = ()=>{
  const command = process.argv[2];
  if (!command) {
    require("./modules/help.js")();
    return;
  }
  switch (command) {
    case "build":
      require("./modules/build.js")();
      break;
    case "watch":
      require("./modules/watch.js")();
      break;
    case "help":
      require("./modules/help.js")();
      break;
    default:
      console.log(`Unknown command. Use "scss-watch help" for a list of commands.`)
  }
  // console.log(process.cwd())
}
