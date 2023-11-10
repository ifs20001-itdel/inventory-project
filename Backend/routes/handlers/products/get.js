const { products } = require("../../../models")

// GET all products data

module.exports = async (req, res)=>{
  const product = await products.findAll();
  return res.json(product)
};
