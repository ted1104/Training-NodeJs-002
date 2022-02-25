const { writeFile, readFile } = require("fs");
const util = require("util");

const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const start = async () => {
  try {
    const first = await readFilePromise("./content/first.txt", "utf-8");
    const second = await readFilePromise("./content/second.txt", "utf-8");
    await writeFilePromise(
      "./content/result-mind-await-second.txt",
      `THIS AWESOME ${first} ${second}`
    );
    console.log(first, second);
  } catch (err) {
    console.log("Error ", err);
  }
};

start();
