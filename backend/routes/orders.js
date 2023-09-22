const express = require("express")
const { creatNewOrder, getAllOrders, getOrderById, getOrderByUserId, getOrderByProviderId, updateOrederById } = require("../controllers/orders")

const orderRouter =express.Router()

orderRouter.post("/",creatNewOrder)
orderRouter.get("/",getAllOrders)
orderRouter.get("/:id",getOrderById)
orderRouter.get("/user/:id",getOrderByUserId)
orderRouter.get("/provider/:id",getOrderByProviderId)
orderRouter.put("/:id",updateOrederById)
module.exports =orderRouter