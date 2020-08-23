const fse = require("fs-extra");
fse.readdir("./sites").then((dir) => {
  let list = dir.filter((item) => item !== "template");
  fse.outputFile(
    "./src/scripts/modules/list.js",
    `export const sites = ${JSON.stringify(list)}`,
    (err) => console.log(err)
  );
});
