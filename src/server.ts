import * as HTTP from "http2";

export function createServer(
  options: HTTP.SecureServerOptions
): HTTP.Http2SecureServer {
  const server = HTTP.createSecureServer(options);

  server.on("error", (error: Error) => {
    console.error(error);
  });

  server.on("stream", (stream: HTTP.ServerHttp2Stream) => {
    stream.respond({
      "content-type": "application/json",
      ":status": 200,
    });

    stream.end(JSON.stringify({ message: "Hello World!" }));
  });

  return server;
}
