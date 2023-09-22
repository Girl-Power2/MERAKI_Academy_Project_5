const express = require("express");
const { RolePermission } = require("../controllers/role_permissions");

const role_permissionsRouter = express.Router();
const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization");

role_permissionsRouter.post(
  "/",RolePermission.createNewRolePermission
);
role_permissionsRouter.get("/",RolePermission.GetALLRolePermission)
console.log("to commit ")

module.exports = role_permissionsRouter;
