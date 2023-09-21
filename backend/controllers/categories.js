const client = require("../models/db");
const categories={}
categories. createNewCategory = async(req, res) => {
  const {category} = req.body;
  admin_id=req.token.user_id
  const values = [category, admin_id];
  const query = `INSERT INTO categories (category) VALUES ($1) RETURNING *;`;
  

    try {
        const result=await   pool
        .query(query, values)
        if(!result.rowCount){

        }
    } catch (error) {
        
    }((result) => {
      res.status(200).json({
        success: true,
        message: "Category created successfully",
        result: result.rows[0],
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "Server error",
        err: err,
      });
    });
};
