const Product = require("../models/product");
// const getAllProducstsStatic = async (req, res) => {
//   // throw new Error("testing async errors");
//   // const search = "ab";
//   const products = await Product.find({
//     // name: { $regex: search, $options: "i" },
//   }).sort("-name price");
//   res.status(200).json({ products, nbhits: products.length });
// };

const getAllProducstsStatic = async (req, res) => {
  const products = await Product.find({ price: { $gt: 30 } })
    .sort("price")
    .select("name price");
  // .limit(10)
  // .skip(5);
  res.status(200).json({ products, nbhits: products.length });
};
const getAllProducts = async (req, res) => {
  // console.log(req.query);
  const { fetured, company, name, sort, fields, numericFilters } = req.query;
  const queryObject = {};
  if (fetured) {
    queryObject.fetured = fetured === "true" ? true : false;
  }
  if (company) {
    queryObject.company = company;
  }
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }
  if (numericFilters) {
    const operatorMap = {
      ">": "$gt",
      ">=": "$gte",
      "=": "$eq",
      "<": "$lt",
      "<=": "lte",
    };
    const regEx = /\b(<|>|>=|=|<|<=)\b/g;
    let filters = numericFilters.replace(
      regEx,
      (match) => `-${operatorMap[match]}-`
    );
    // console.log(filters);
    const options = ["price", "rating"];
    filters = filters.split(",").forEach((item) => {
      const [field, operator, value] = item.split("-");
      if (options.includes(field)) {
        queryObject[field] = { [operator]: Number(value) };
      }
    });
  }
  console.log(queryObject);
  let result = Product.find(queryObject);
  //sort
  if (sort) {
    // console.log(sort);
    // products = products.sort();
    const sortList = sort.split(",").join(" ");
    result = result.sort(sortList);
  } else {
    result = result.sort("createdAt");
  }
  if (fields) {
    const fieldList = fields.split(",").join(" ");
    result = result.select(fieldList);
  }
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  result = result.skip(skip).limit(limit);
  //23
  // 4 7 7 7 2
  const products = await result;
  res.status(200).json({ products, nbhits: products.length });
};

module.exports = {
  getAllProducstsStatic,
  getAllProducts,
};
