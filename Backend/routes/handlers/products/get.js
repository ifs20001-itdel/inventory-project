const { Product } = require("../../../models")

// GET all Product data

module.exports = async (req, res)=>{
  const data = await Product.findAll();
  return res.json(data)
};
