const express = require('express')
const verifyToken = require("../middlewares/verify-token")
const router = express.Router()
const productHandler = require('./handlers/products')
const productIdHandler = require('./handlers/products/id')

router.route('/')
    .get(verifyToken, productHandler.get)

router.route('/add')
    .post(verifyToken, productHandler.post)


router
.route("/:productId")
  .get(productIdHandler.get)
  .put(productIdHandler.put)
  .delete(productIdHandler.delete);

module.exports = router;

