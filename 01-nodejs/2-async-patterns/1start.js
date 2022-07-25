const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("home page");
  } else if (req.url === "/about") {
    //blocking code
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        console.log(`${i} ${j}`);
      }
    }
    res.end("about page");
  } else {
    res.end("Error page");
  }
});

server.listen(5000);
