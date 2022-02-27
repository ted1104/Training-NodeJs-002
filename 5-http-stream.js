const http = require("http");
const { readFile, readFileSync, createReadStream } = require("fs");
// const util = require("util");
// const readF = util.promisify(readFile);

http
  .createServer(async (req, res) => {
    // const text = readFileSync("./content/big-file.txt", "utf8"); with sync method
    // const text = await readF("./content/big-file.txt", "utf8"); with async method
    // res.end(text);

    /* il est preferable de renvoyer le contenu du fichier ne chunks*/

    const fileStream = createReadStream("./content/big-file.txt", "utf8");
    fileStream.on("open", () => {
      fileStream.pipe(res);
    });
    fileStream.on("error", (error) => {
      res.end(error);
    });
  })
  .listen(5000);
