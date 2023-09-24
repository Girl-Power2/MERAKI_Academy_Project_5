const express=require("express")
const authentication=require("../middlewares/authentication")
const authorization=require("../middlewares/authorization")
const{services}=require("../controllers/services")
const serviceRouter=express.Router()
serviceRouter.post("/",authentication,services.createNewService)
serviceRouter.get("/byId/:id",services.getServiceByProviderId)
serviceRouter.get("/byName",services.getServiceByName)
serviceRouter.get("/price_DESC",services.getServiceByPriceDes)
serviceRouter.get("/price_ASC",services.getServiceByPriceAsc)
serviceRouter.get("/all",services.GetALLServices)
serviceRouter.put("/:id",services.UpdateService)







module.exports=serviceRouter