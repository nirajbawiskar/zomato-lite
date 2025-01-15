const { getLoaction, updateCustomerInfo, getAllResturant, getAllResturantMenu, } = require("../controllers/customer.controller")

const router = require("express").Router()


router
    .post("/get-location", getLoaction)
    .post("/update-info", updateCustomerInfo)
    .get("/get-resturant", getAllResturant)
    .get("/get-resturant-menu/:rid", getAllResturantMenu)

module.exports = router
