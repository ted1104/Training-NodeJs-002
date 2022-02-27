const { createReadStream } = require("fs");

// const stream = createReadStream("./content/big-file.txt", {
//   encoding: "utf8",
//   highWaterMark: 90000,
// });
const stream = createReadStream("./content/big-file.txt");
stream.on("data", (result) => {
  console.log(result);
});

stream.on("error", (error) => {
  console.log(error);
});
