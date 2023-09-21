const express = require("express");
const { RolePermission } = require("../controllers/role_permissions");

const role_permissionsRouter = express.Router();
const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization");

role_permissionsRouter.post(
  "/",
  authentication,
  authorization("CREATE_ROLE_PERMISSION"),RolePermission.createNewRolePermission
);
role_permissionsRouter.get("/",authentication,RolePermission.GetALLRolePermission)

module.exports = role_permissionsRouter;
