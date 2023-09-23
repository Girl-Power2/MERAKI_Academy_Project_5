const client = require("../models/db");
const categories = {};
//===========Create new category==============
categories.createNewCategory = async (req, res) => {
  const category = req.body.category
  // admin_id = req.token.userId;
  const values = [category];
  const query = `INSERT INTO categories (category) VALUES ($1) RETURNING *;`;
  try {
    const result = await client.query(query, values);
    if (result.rowCount) {
        res.status(200).json({
          success: true,
          message: "Category created successfully",
          data: result.rows,
        });
    }
  }
  catch(err)  {
    res.status(500).json({
      success: false,
      message: "Server error",
      err: err.message
    });
  };
};
//=========== update category by id ==============

categories.UpdateCategorybyId = async (req, res) => {
  const  category  = req.body.category;
  const id = req.params.id;
  const values = [category || null, id];
  const query = `UPDATE categories SET category=COALESCE($1,category) WHERE category_id=$2 AND is_deleted=0 RETURNING *;`;
  try {
    const result = await client.query(query, values);
    if (result.rowCount) {
      res.status(200).json({
      success: true,
      message: "Category updated successfully",
      data: result.rows,
    });
    }
  }

  catch (err)  {
    res.status(500).json({
      success: false,
      message: "Server error",
      err: err.message,
    })
  
};
}
//=========== delete category ==============
categories.DeleteCategorybyId = async (req, res) => {
  const id = req.params.id;
  const values = [id];
  const query = `UPDATE  categories SET is_deleted=1 WHERE category_id=$1 AND is_deleted=0 RETURNING *;`;
  try {
    const result = await client.query(query, values);
    if (result.rowCount) {
       res.status(200).json({
      success: true,
      message: "Category deleted successfully",
      data: result.rows,
    });
    }

   
  }
  catch(err) {
    res.status(500).json({
      success: false,
      message: "Server error",
      err: err.message,
    });
  }
};
//=========== get all categories==============
categories.getAllCategories = async (req, res) => {
  const query = `SELECT * FROM categories `;
  try {
    const response = await client.query(query);
    if (response.rowCount) {
      res.status(200).json({
        status: true,
        message: "All Categories",
        data: response.rows,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      err: err.message,
    });
  }
};

module.exports = { categories };
