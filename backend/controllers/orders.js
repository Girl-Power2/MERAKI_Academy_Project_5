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
        success :false,
        message:"server error",
        error:err.message
    })
})
}


const getAllOrders =(req,res)=>{
    const query =`SELECT * FROM orders`

    pool.query(query).then((result)=>{
        res.status(201).json({
            success :true,
            message:"all order",
            result:result.rows 
        })
    }).catch((err)=>{
        res.status(500).json({
            success :false,
            message:"server error",
            error:err.message
        })
    })
}

const getOrderById =(req,res)=>{
    const id = req.params.id
    const query =`SELECT * FROM orders WHERE order_id=${id}`
    pool.query(query).then((result)=>{
        res.status(201).json({
            success :true,
            message:`order_id = ${id} `,
            result:result.rows  
        })
    }).catch((err)=>{
        res.status(500).json({
            success :false,
            message:"server error",
            error:err.message
        })
    })
}

const getOrderByUserId =(req,res)=>{
    const id =req.params.id
    const query =`SELECT * FROM orders WHERE user_id=${id}`
    pool.query(query).then((result)=>{
        res.status(201).json({
            success :true,
            message:`user_id = ${id} `,
            result:result.rows  
        })
    }).catch((err)=>{
        res.status(500).json({
            success :false,
            message:"server error",
            error:err.message
        })
    })
}

const getOrderByProviderId =(req,res)=>{
    const id =req.params.id
    const query =`SELECT * FROM orders WHERE provider_id=${id}`
    pool.query(query).then((result)=>{
        res.status(201).json({
            success :true,
            message:`provider_id = ${id} `,
            result:result.rows  
        })
    }).catch((err)=>{
        res.status(500).json({
            success :false,
            message:"server error",
            error:err.message
        })
    })
}

const updateOrederById =(req,res)=>{
    const id =req.params.id
    const query =`UPDATE orders
    SET is_deleted = 1
    WHERE order_id=${id};`

    pool.query(query).then((result)=>{
        res.status(201).json({
            success :true,
            message:`order was deleted `,
            result:result.rows  
        })
    }).catch((err)=>{
        res.status(500).json({
            success :false,
            message:"server error",
            error:err.message
        })
    })
}


module.exports={
    creatNewOrder,getAllOrders,getOrderById,getOrderByUserId,getOrderByProviderId,updateOrederById
}