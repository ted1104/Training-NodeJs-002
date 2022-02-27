const { readFile, writeFile } = require("fs");

// nested async function with callback :: toutes les fonctions qui prennent callback sont asynchronne
// readFile("./content/first.txt", "utf-8", (err, data) => {
//   if (err) {
//     return;
//   } else {
//     console.log(data);
//     Here white  a readFile for the second file
//     And at the end the writeFile
//   }
// });

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const writeText = (content) => {
  return new Promise((resolve, reject) => {
    writeFile("./content/result-mind-await.txt", content, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

//1st method to invoque function that return promise with then and catch
// getText("./content/first.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

//2nd method to invoque function that return promise with async and await
const start = async () => {
  try {
    const first = await getText("./content/first.txt");
    const second = await getText("./content/second.txt");
    await writeText(`THIS AWESOME ${first} ${second}`);
    console.log(first, second);
  } catch (err) {
    console.log(err);
  }
};
start();
