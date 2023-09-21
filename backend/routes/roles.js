const express = require("express");

//controllers
const {
  createNewRole ,
getAllRoles}=require("../controllers/roles");
const { get } = require("mongoose");

  const rolesRouter = express.Router();

rolesRouter.post("/", createNewRole);
rolesRouter.get("/",getAllRoles)

module.exports = rolesRouter