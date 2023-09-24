const express = require("express");

const infoRouter = express.Router();

const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization");
const {
  addInfo,
  getInfoByProviderId,
  updateInfoById,
  deleteInfoByProviderId,
} = require("../controllers/provider_info");

infoRouter.post("/", authentication, authorization("CREATE_CATEGORY"), addInfo);
infoRouter.get("/:id", authentication, getInfoByProviderId);
infoRouter.put(
  "/:id",
  authentication,
  authorization("CREAE_CATEGORY"),
  updateInfoById
);
infoRouter.delete(
  "/:id",
  authentication,
  authorization("CREATE_CATEGORY", deleteInfoByProviderId)
);
module.exports = infoRouter;
