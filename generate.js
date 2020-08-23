// generate a new project directory using the template
const { argv } = require("yargs");
const fse = require("fs-extra");
// node generate --name=new-site
console.log(argv.name);
fse.copySync("./sites/template", `./sites/${argv.name}`);
