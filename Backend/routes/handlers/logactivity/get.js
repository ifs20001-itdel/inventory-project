const { logs } = require("../../../models")

// GET all logs data

module.exports = async (req, res)=>{
  const log = await logs.findAll();
  return res.json(log)
};
