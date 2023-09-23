const express = require("express");

const historyRouter = express.Router();
const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization");
const {
  addHistory,
  getHistoryByUserId,
  getHistoryById,
  updateHistoryById,
  deleteHistoryById,
} = require("../controllers/history");

historyRouter.post(
  "/",
  authentication,
  authorization("CREATE_CATEGORY"),
  addHistory
);
historyRouter.get("/users", authentication, getHistoryByUserId);
historyRouter.get(
  "/:id",
  authentication,
  authorization("CREATE_CATEGORY"),
  getHistoryById
);
historyRouter.put(
  "/:id",
  authentication,
  authorization("CREATE_CATEGORY"),
  updateHistoryById
);
historyRouter.delete(
  "/:id",
  authentication,
  authorization("CREATE_CATEGORY"),
  deleteHistoryById
);
module.exports = historyRouter;
