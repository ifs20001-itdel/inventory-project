const express = require('express')
const verifyToken = require("../middlewares/verify-token")
const router = express.Router()
const logHandler = require('./handlers/logs')
const logIdHandler = require('./handlers/logs/id')

router.route('/')
    .get(verifyToken, logHandler.get)
router
.route("/:logId")
  .get(logIdHandler.get)

module.exports = router;