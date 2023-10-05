const express = require("express");
const { providers_functions } = require("../controllers/providers");
const providerRouter = express.Router();
providerRouter.post("/", providers_functions.CreateNewProvider);

providerRouter.get("/byId/:id", providers_functions.getProviderById);
providerRouter.get(
  "/byCategory/:category",
  providers_functions.getProviderByCategoryId
);

providerRouter.get("/byName/", providers_functions.getProviderByName);
providerRouter.get("/byGender/", providers_functions.getProviderByGender);
providerRouter.get("/all", providers_functions.GetALLProviders);
providerRouter.get("/all/count", providers_functions.GetALLProviders);

providerRouter.delete("/:id", providers_functions.deleteProviderById);

module.exports = providerRouter;
