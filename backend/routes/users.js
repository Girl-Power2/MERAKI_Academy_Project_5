const express = require("express");

const { register,login,Provider_login } = require("../controllers/users");

const usersRouter = express.Router();

usersRouter.post("/register", register);
usersRouter.post("/login", login);
usersRouter.post("/loginProvider",Provider_login)

module.exports = usersRouter;