const express = require("express");

//controllers
const {

  createNewPermission,
  
} = require("../controllers/permissions");

const permissionsRouter = express.Router();


permissionsRouter.post("/", createNewPermission);

module.exports = permissionsRouter;