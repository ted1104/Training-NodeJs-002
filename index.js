const { writeFile, readFile } = require("fs").promises;
// const util = require("util");

// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const start = async () => {
  try {
    const first = await readFile("./content/first.txt", "utf-8");
    const second = await readFile("./content/second.txt", "utf-8");
    await writeFile(
      "./content/result-mind-await-third.txt",
      `THIS AWESOME ${first} ${second}`,
      { flag: "a" }
    );
    console.log(first, second);
  } catch (err) {
    console.log("Error ", err);
  }
};

start();
