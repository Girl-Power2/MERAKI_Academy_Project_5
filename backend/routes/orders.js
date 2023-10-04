const express = require("express");
const {
  creatNewOrder,
  getAllOrders,
  getOrderById,
  getOrderByUserId,
  getOrderByProviderId,
  deleteOrederById,
  updateOrederById,
  getAllOrderDone,
  getAllOrderPending,
} = require("../controllers/orders");

const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization");

const orderRouter = express.Router();
orderRouter.post(
  "/",
  authentication,
  authorization("CREATE_CATEGORY"),
  creatNewOrder
);
// orderRouter.get("/", authentication, getAllOrders);
orderRouter.get("/byId/:id", authentication, getOrderById);
// orderRouter.get("/user/:id", authentication, getOrderByUserId);
// orderRouter.get("/provider/:id", authentication, getOrderByProviderId);
// orderRouter.delete(
//   "/:id",
//   authentication,
//   authorization("CREATE_CATEGORY"),
//   deleteOrederById
// );

orderRouter.put(
  "/ByOrder/:orderId",
  authentication,
  updateOrederById
);
orderRouter.get("/done/",authentication,getAllOrderDone)
orderRouter.get("/",authentication,getAllOrderPending)
module.exports = orderRouter;
