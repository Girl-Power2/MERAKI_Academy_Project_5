const express = require("express")
const { creatNewOrder, getAllOrders, getOrderById, getOrderByUserId, getOrderByProviderId, updateOrederById } = require("../controllers/orders")

const authentication =require("../middlewares/authentication")
const authorization =require("../middlewares/authorization")




const orderRouter =express.Router()
orderRouter.post("/",authentication,authorization("CREATE_CATEGORY"),creatNewOrder)
orderRouter.get("/",authentication,getAllOrders)
orderRouter.get("/:id",authentication,getOrderById)
orderRouter.get("/user/:id",authentication,getOrderByUserId)
orderRouter.get("/provider/:id",authentication,getOrderByProviderId)
orderRouter.put("/:id",authentication,authorization("CREATE_CATEGORY"),updateOrederById)
module.exports =orderRouter