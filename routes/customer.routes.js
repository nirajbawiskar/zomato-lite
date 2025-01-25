const { getLoaction, updateCustomerInfo, getAllResturant, getAllResturantMenu, placeOrder, getOrders, getHistory, } = require("../controllers/customer.controller")

const router = require("express").Router()


router
    .post("/get-location", getLoaction)
    .post("/update-info", updateCustomerInfo)
    .get("/get-resturant", getAllResturant)
    .get("/get-resturant-menu/:rid", getAllResturantMenu)
    .post("/place-order", placeOrder)
    .get("/get-orders", getOrders)
    .get("/get-history-orders", getHistory)

module.exports = router
