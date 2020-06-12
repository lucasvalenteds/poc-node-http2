import { createServer } from "./server";
import * as FS from "fs";
import * as Path from "path";

const HttpClient = require("h2url"); // eslint-disable-line

const [domain, port] = ["localhost", 8443];
const credentialsPath = Path.dirname(__dirname);

const server = createServer({
  cert: FS.readFileSync(Path.resolve(credentialsPath, `${domain}.pem`)),
  key: FS.readFileSync(Path.resolve(credentialsPath, `${domain}-key.pem`)),
});

beforeAll(() => {
  server.listen(port);
});

afterAll(() => {
  server.close();
});

test("GET / returns Hello World as JSON", async () => {
  const response = await HttpClient.concat({
    url: `https://localhost:${port}/`,
  });

  expect(response.headers[":status"]).toStrictEqual(200);
  expect(response.headers["content-type"]).toStrictEqual("application/json");
  expect(response.body).toStrictEqual(
    JSON.stringify({
      message: "Hello World!",
    })
  );
});
