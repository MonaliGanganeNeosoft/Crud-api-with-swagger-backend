const express = require("express");
const {
  getAllProducts,
  getAllProducstsStatic,
} = require("../controller/products");
const router = express.Router();
router.route("/").get(getAllProducts);
router.route("/static").get(getAllProducstsStatic);
module.exports = router;
