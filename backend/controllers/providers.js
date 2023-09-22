const client = require("../models/db");
const providers_functions = {};
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
//=============== CREATE NEW PROVIDER ================
providers_functions.CreateNewProvider = async (req, res) => {
  const Hashed_password = await bcrypt.hash(password, 7);
  const {
    fName,
    lName,
    birthDAte,
    gender,
    email,
    password,
    city,
    phoneNumber,
    category_id,
  } = req.body;
  const role_id = 3;
  const values = [
    fName,
    lName,
    birthDAte,
    gender,
    email,
    Hashed_password,
    city,
    phoneNumber,
    role_id,
    category_id,
  ];
  const query = `INSERT INTO providers  (fName,
  lName,
  birthDAte,
  gender,
  email,
  password,
  city,
  phoneNumber,
  role_id,
  category_id) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *`;
  try {
    const response = await client.query(query, values);
    if (response.rowCount) {
      res.status(201).json({
        success: true,
        message: "Provider account created successfully",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};

// ===============get provider by id================
providers_functions.getProviderById = async (req, res) => {
  const id = req.params.id;
  const values = [id];
  const query = `SELECT * FROM  providers WHERE provider_id=$1 AND is_deleted=0`;
  try {
    const response = await client.query(query, values);
    if (response.rowCount) {
      res.status(200).json({
        status: true,
        data: response.rows,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};
// ===============get provider by  category_id================
providers_functions.getProviderByCategoryId = async (req, res) => {
  const id = req.params.id;
  const values = [id];
  const query = `SELECT * FROM  providers WHERE provider_id=$1 AND is_deleted=0`;
  try {
    const response = await client.query(query, values);
    if (response.rowCount) {
      res.status(200).json({
        status: true,
        data: response.rows,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};

// ===============get provider by name================
providers_functions.getProviderByName = async (req, res) => {
  const fName = req.query;
  const lName = req.query;
  const values = [fName, lName];
  const query = `SELECT * FROM  providers WHERE fName=$1 OR lName=$2 AND is_deleted=0`;
  try {
    const response = await client.query(query, values);
    if (response.rowCount) {
      res.status(200).json({
        status: true,
        data: response.rows,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};

// ===============get provider by gender================
providers_functions.getProviderByGender = async (req, res) => {
    const gender = req.query;

    const values = [gender];
    const query = `SELECT * FROM  providers WHERE gender=$1 AND is_deleted=0`;
    try {
      const response = await client.query(query, values);
      if (response.rowCount) {
        res.status(200).json({
          status: true,
          data: response.rows,
        });
      }
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Server Error",
        error: error.message,
      });
    }
  };

module.exports = { providers_functions };
