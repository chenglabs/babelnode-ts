import "./env.config";
import "@babel/polyfill/noConflict";

import http from "http";

const hostname = process.env.HOSTNAME || "127.0.0.1";
const port = +(process.env.PORT || "3000");

const server = http.createServer((_req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World\n");
});

if (process.env.NODE_ENV !== "test") {
  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
}

export { server };
