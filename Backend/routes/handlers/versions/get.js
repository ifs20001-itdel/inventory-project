const { versions } = require("../../../models")

// GET all versions data

module.exports = async (req, res)=>{
  const version = await versions.findAll();
  return res.json(version)
};
