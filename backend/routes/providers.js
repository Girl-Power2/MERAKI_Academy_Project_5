const express = require("express");
const { providers_functions } = require("../controllers/providers");
const providerRouter = express.Router();
providerRouter.post("/", providers_functions.CreateNewProvider);
providerRouter.get("/:id", providers_functions.getProviderById);
providerRouter.get("/fName_lName", providers_functions.getProviderByName);
providerRouter.get("/gender", providers_functions.getProviderByGender);

module.exports = providerRouter;
