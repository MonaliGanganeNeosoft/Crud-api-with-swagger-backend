const express = require("express");
const app = express();
const morgan = require("morgan");
const logger = require("./logger");
const authorize = require("./authorize");
//req=>middleware=>res
//1.use vs route
//2.options-our own /express/third party
// app.use(logger);
// app.use([logger, authorize]);
//app.use(express.static('./public'))
app.use(morgan("tiny"));

// app.use("/api", logger);
//api/home/about/products

app.get("/", (req, res) => {
  // const method = req.method;
  // const url = req.url;
  // const time = new Date().getFullYear();
  // console.log(method, url, time);

  res.send("Home");
});
app.get("/about", (req, res) => {
  res.send("About");
});
app.get("/api/products", (req, res) => {
  res.send("Products");
});
// app.get("/api/items", [logger, authorize], (req, res) => {
app.get("/api/items", (req, res) => {
  console.log(req.user);
  res.send("Items");
});
app.listen(5000, () => {
  console.log("Server is listening on 5000...");
});
