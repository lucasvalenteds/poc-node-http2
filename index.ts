import * as Path from "path";
import * as FS from "fs";
import * as Util from "util";

import { createServer } from "./src/server";

const domain = process.env.DOMAIN;
const port = process.env.PORT;

async function main() {
  try {
    const readFile = Util.promisify(FS.readFile);

    const [cert, key] = await Promise.all([
      readFile(Path.resolve(__dirname, `${domain}.pem`)),
      readFile(Path.resolve(__dirname, `${domain}-key.pem`)),
    ]);

    createServer({ cert, key }).listen(port, () => {
      console.debug("Server running at https://%s:%d", domain, port);
    });
  } catch (error) {
    console.error(error);
  }
}

main();
