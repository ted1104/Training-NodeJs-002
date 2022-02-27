const http = require("http");

// const server = http.createServer((req, res) => {
//   res.end("WELCOME TO MY NEW SERVER");
// });

const server = http.createServer();
server.on("request", (req, res) => {
  res.end("WELCOME TO MY NEW SERVER WITH EVENT");
});

server.listen(5000, () => {
  console.log("listening on port 500");
});
