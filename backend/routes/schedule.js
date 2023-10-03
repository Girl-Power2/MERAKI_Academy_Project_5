const express=require("express")
const scheduleRouter=express.Router()
const authentication=require("../middlewares/authentication")
const authorization=require("../middlewares/authorization")
const {schedule}=require("../controllers/schedule")
scheduleRouter.post("/",authentication,schedule.createNewSchedule)
scheduleRouter.put("/updateChosen/:id",schedule.UpdateChosen)
scheduleRouter.put("/updateBooked/",authentication,schedule.UpdateBooked)
scheduleRouter.put("/Booked/:id",schedule.UpdateIs_viewedIfBooked)
scheduleRouter.get("/NotBooked/",schedule.getNotDeleted)
scheduleRouter.get("/ByProvider/:id",authentication,schedule.getByProviderId)
scheduleRouter.get("/CountBookedByProvider/",schedule.getBookedCountByProviderId)
scheduleRouter.delete("/ByProvider/",schedule.deleteByProviderId)
scheduleRouter.get("/all",schedule.getAllSchedules)














module.exports=scheduleRouter