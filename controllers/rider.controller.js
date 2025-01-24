const asyncHandler = require("express-async-handler")
const Order = require("./../models/Order")
const {io} = require("../socket/socket")

exports.getRiderOrders = asyncHandler(async (req, res) => {
   const result =  await Order
   .find({rider: req.user })
   .select("-rider -createdAt -updatedAd -__v")
   .populate("customer", "name mobile address")
   .populate("resturant", "name mobile address")
   .populate("items.dish", "name type image price")
   .sort({ createdAt: -1 })
    res.json({ message: "order fetch success", result })
})
exports.updateOrdersStatus = asyncHandler(async (req, res) => {
  const{oid}=req.params
  const result = await Order.findByIdAndUpdate(oid,{ status: req.body.status })
  io.emit("status-update")
    res.json({ message: "order status update success", result })
})