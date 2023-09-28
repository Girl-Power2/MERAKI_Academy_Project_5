const express = require("express");

const infoRouter = express.Router();

const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization");
const {
  addInfo,
  getInfoByProviderId,
  updateInfoById,
  deleteInfoByProviderId,
  getInfoByCategory,
} = require("../controllers/provider_info");

infoRouter.post("/", authentication,addInfo);
infoRouter.get("/:id", authentication, getInfoByProviderId);
infoRouter.put(
  "/:id",
  authentication,
  authorization("ADD_SERVICES"),
  updateInfoById
);
infoRouter.delete(
  "/:id",
  authentication,
  authorization("ADD_SERVICES"), deleteInfoByProviderId)

infoRouter.get("/category/:id",authentication,getInfoByCategory)

module.exports = infoRouter;
