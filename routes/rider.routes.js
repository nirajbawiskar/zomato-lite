const { getRiderOrders, updateOrdersStatus } = require("../controllers/rider.controller")

const router = require("express").Router()

router
.get("/get-orders", getRiderOrders)
.put("/update-orders-status/:oid", updateOrdersStatus)

module.exports = router