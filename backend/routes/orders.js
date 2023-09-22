const express = require("express")
const { creatNewOrder } = require("../controllers/orders")

const orderRouter =express.Router()

orderRouter.post("/",creatNewOrder)

module.exports =orderRouter