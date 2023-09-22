const { query } = require("express")
const pool = require("../models/db")


const creatNewOrder =(req,res)=>{
const {service_id, provider_id,user_id,schedule_id}=req.body

  const query = `INSERT INTO users  (service_id, provider_id,user_id,schedule_id) VALUES ($1,$2,$3,$4) RETURNING *`;
const value = [service_id, provider_id,user_id,schedule_id]

pool.query(query,value).then((result)=>{
    res.status(200).json({
        success :true,
        message:"order created successfully",
        result:result.rows
    })
}).catch((err)=>{
    res.status(500).json({
        success :true,
        message:"server error",
        error:err.message
    })
})
}



module.exports={
    creatNewOrder
}