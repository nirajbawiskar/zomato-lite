const { getHistory } = require("../controllers/customer.controller")
const { updateInfo, addMenu, getMenu, deleteMenu, updateMenu, getResturantOrders, updateResturantStatus } = require("../controllers/resturant.controller")
const router = require("express").Router()


router
    .post("/update-info", updateInfo)
    .post("/add-menu", addMenu)

    .get("/get-menu", getMenu)
    .delete("/delete-menu/:mid", deleteMenu)
    .put("/update-menu/:mid", updateMenu)
    
    
    .get("/get-orders", getResturantOrders)
    .put("/change-status/:oid", updateResturantStatus)
    // .get("/get-order-history", getHistory)
    module.exports = router