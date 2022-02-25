const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("HOME PAGE");
    return;
  }
  if (req.url === "/about") {
    //blocking code
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 1000; j++) {
        console.log(`${i} ${j}`);
      }
    }
    res.end("ABOUT PAGE");
    return;
  }
  res.end("ERROR PAGE");
  //   res.end(`${req.url}`);
});
server.listen(5000, () => {
  console.log("Listening on port 5000 ...");
});
