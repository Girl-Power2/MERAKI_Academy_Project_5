const express = require("express");
const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization");
const { categories } = require("../controllers/categories");
const categoriesRouter = express.Router();
categoriesRouter.post(
  "/",categories.createNewCategory
);

categoriesRouter.put(
  "/update/:id",
  authentication,
  authorization("UPDATE_CATEGORY", categories.UpdateCategorybyId)
);
categoriesRouter.delete(
  "/delete/:id",
  authentication,
  authorization("DELETE_CATEGORY", categories.DeleteCategorybyId)
);
categoriesRouter.get("/", authentication, categories.getAllCategories);

module.exports = categoriesRouter;
