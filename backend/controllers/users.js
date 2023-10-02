const client = require("../models/db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  const {
    firstName,
    lastName,
    birthDate,
    city,
    email,
    password,
    phoneNumber,
    gender,
    role_id,
  } = req.body;
  const encryptedPassword = await bcrypt.hash(password, 10);

  const query = `INSERT INTO users  (firstName ,lastName ,birthDate ,city ,email,password ,phoneNumber ,gender,role_id) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *`;
  const value = [
    firstName,
    lastName,
    birthDate,
    city,
    email.toLowerCase(),
    encryptedPassword,
    phoneNumber,
    gender,
    role_id,
  ];

  const response = await client
    .query(query, value)
    .then((result) => {
      if (response.rowCount) {
        res.status(200).json({
          success: true,
          message: "Account created successfully",
          result: result.rows,
        });
      }
    })
    .catch((err) => {
      res.status(409).json({
        success: false,
        message: "The email already exists",
        err,
      });
    });
};

const login = (req, res) => {
  const password = req.body.password;
  const email = req.body.email;
  const query = `SELECT * FROM users WHERE email = $1`;
  const data = [email.toLowerCase()];
  client
    .query(query, data)
    .then((result) => {
      console.log(result.rows[0].user_id);
      if (result.rows.length) {
        bcrypt.compare(password, result.rows[0].password, (err, response) => {
          if (err) res.json(err);
          if (response) {
            const payload = {
              userId: result.rows[0].user_id,
              city: result.rows[0].city,
              role: result.rows[0].role_id,
            };
            console.log(payload);
            const options = { expiresIn: "1d" };
            const secret = process.env.SECRET;
            const token = jwt.sign(payload, secret, options);
            if (token) {
              return res.status(200).json({
                token,
                success: true,
                message: `Valid login credentials`,
                userId: result.rows[0].user_id,
              });
            } else {
              throw Error;
            }
          } else {
         
            res.status(403).json({
              success: false,
              message: `The email doesn’t exist or the password you’ve entered is incorrect`,
            });
          }
        });
      } else throw Error;
    })
    .catch((err) => {
      console.log(err);
      res.status(403).json({
        success: false,
        message:
          "The email doesn’t exist or the password you’ve entered is incorrect",
        err,
      });

    });
};

//===================get user by id ======================//
const getUserById = async (req, res) => {
  const id = req.token.userId;
  const values = [id];
  const query = `SELECT *,AGE(birthdate)as age FROM  users WHERE user_id=$1 AND is_deleted=0`;
  try {
    const response = await client.query(query, values);
    if (response.rowCount) {
      res.status(200).json({
        status: true,
        data: response.rows,
      });
    } else {
      res.status(404).json({
        status: false,
        message: "User not found",
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


// provider login
const Provider_login = (req, res) => {
  const password = req.body.password;
  const email = req.body.email;
  const query = `SELECT * FROM providers WHERE email = $1`;
  const data = [email.toLowerCase()];
  client
    .query(query, data)
    .then((result) => {
      // console.log(result.rows[0]);
      if (result.rows.length) {
        bcrypt.compare(password, result.rows[0].password, (err, response) => {
          if (err) res.json(err);
          if (response) {
            const payload = {
              providerId: result.rows[0].provider_id,
              city: result.rows[0].city,
              role: result.rows[0].role_id,
            };
            // console.log(payload);
            const options = { expiresIn: "1d" };
            const secret = process.env.SECRET;
            const token = jwt.sign(payload, secret, options);
            // console.log(token);
            if (token) {
              return res.status(200).json({
                token,
                success: true,
                message: `Valid login credentials`,
                providerId: result.rows[0].provider_id,
                role:result.rows[0].role_id,
               
              });
            } else {
              throw Error;
            }
          } else {
         
            res.status(403).json({
              success: false,
              message: `The email doesn’t exist or the password you’ve entered is incorrect`,
            });
          }
        });
      } else throw Error;
    })
    .catch((err) => {
      console.log(err);
      res.status(403).json({
        success: false,
        message:
          "The email doesn’t exist or the password you’ve entered is incorrect",
        err,
      });

    });
};
module.exports = {
  register,
  login,
  Provider_login ,
  getUserById
};

