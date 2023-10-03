const express=require("express")
const scheduleRouter=express.Router()
const authentication=require("../middlewares/authentication")
const authorization=require("../middlewares/authorization")
const {schedule}=require("../controllers/schedule")
scheduleRouter.post("/",authentication,schedule.createNewSchedule)
scheduleRouter.put("/updateChosen/:id",schedule.UpdateChosen)
scheduleRouter.put("/updateBooked/:id",schedule.UpdateBooked)
scheduleRouter.put("/Booked/:id",schedule.UpdateIs_viewedIfBooked)
scheduleRouter.get("/NotBooked/",schedule.getNotDeleted)
scheduleRouter.get("/ByProvider/:provider_id",authentication,schedule.getByProviderId)
scheduleRouter.get("/CountBookedByProvider/",schedule.getBookedCountByProviderId)
scheduleRouter.delete("/ById/:schedule_id",authentication,schedule.deleteByScheduleId)
scheduleRouter.get("/all",schedule.getAllSchedules)














module.exports=scheduleRouter