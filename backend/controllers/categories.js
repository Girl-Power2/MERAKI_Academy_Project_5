const client = require("../models/db");
const categories = {};
//===========Create new category==============
categories.createNewCategory = async (req, res) => {
  const { category } = req.body;
  admin_id = req.token.userId;
  const values = [category, admin_id];
  const query = `INSERT INTO categories (category) VALUES ($1,$2) RETURNING *;`;
  try {
    const result = await client.query(query, values);
    if (!result.rowCount) {
    }
  } catch (error) {}
  ((result) => {
    res.status(200).json({
      success: true,
      message: "Category created successfully",
      result: result.rows[0],
    });
  }).catch((err) => {
    res.status(500).json({
      success: false,
      message: "Server error",
      err: err,
    });
  });
};
//=========== update category by id ==============

categories.UpdateCategorybyId = async (req, res) => {
  const { category } = req.body;
  const id = req.params.id;
  const values = [category || null, id];
  const query = `UPADATE  categories SET category=COALESCE($1,category) WHERE category_id=$2 AND is_deleted=0 RETURNING *;`;
  try {
    const result = await client.query(query, values);
    if (result.rowCount) {
    }
  } catch (error) {}
  ((result) => {
    res.status(200).json({
      success: true,
      message: "Category updated successfully",
      result: result.rows,
    });
  }).catch((err) => {
    res.status(500).json({
      success: false,
      message: "Server error",
      err: err,
    });
  });
};
//=========== delete category ==============
categories.DeleteCategorybyId = async (req, res) => {
  const id = req.params.id;
  const values = [id];
  const query = `UPADATE  categories SET is_deleted=1 WHERE category_id=$1 AND is_deleted=0 RETURNING *;`;
  try {
    const result = await client.query(query, values);
    if (result.rowCount) {
    }
  } catch (error) {}
  ((result) => {
    res.status(200).json({
      success: true,
      message: "Category deleted successfully",
      result: result.rows,
    });
  }).catch((err) => {
    res.status(500).json({
      success: false,
      message: "Server error",
      err: err,
    });
  });
};
module.exports = { categories };
