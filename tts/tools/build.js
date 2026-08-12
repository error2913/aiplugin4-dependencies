const { buildSync } = require("esbuild");
const path = require("path");
const fs = require("fs");
const configAll = require("./build-config");

(async () => {
  try {
    const config = process.env.NODE_ENV === "dev" ? configAll.dev : configAll.build;
    const timerStart = Date.now();
    fs.rmSync(path.dirname(config.outfile), { recursive: true, force: true });
    await buildSync(config);
    const bodyText = fs.readFileSync(config.outfile);
    const headerText = fs.readFileSync("./header.txt").toString();
    fs.writeFileSync(config.outfile, `${headerText}\n${bodyText}`);
    console.log(`Built in ${Date.now() - timerStart}ms.`);
    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
