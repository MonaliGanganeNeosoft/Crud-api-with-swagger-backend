const { readFile } = require("fs");
// readFile("./content/first.txt", "utf8", (err, data) => {
//   if (err) {
//     return;
//   } else {
//     console.log(data);
//   }
// });

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};
const start = async () => {
  try {
    const first = await getText("./content/first.txt");
    console.log(first);
    const second = await getText("./content/second.txt");
    console.log(second);
  } catch (error) {
    console.log(error);
  }
};

// const start = async () => {
//   try {
//     const first = await getText("./content/first.txt");
//     console.log(first);
//   } catch (error) {
//     console.log(error);
//   }
// };

// const start = async () => {
//   const first = await getText("./content/first.txt");
//   console.log(first);
// };
start();
// getText("./content/first.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));
