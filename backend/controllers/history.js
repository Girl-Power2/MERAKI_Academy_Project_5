const { get } = require("mongoose");
const pool = require("../models/db");

const addHistory = (req, res) => {
  const { history, medications, chronic_diseases } = req.body;
  const user_id = req.token.userId;
  const query = `INSERT INTO users  (history,medications,chronic_diseases,user_id) VALUES ($1,$2,$3,$4) RETURNING *`;
  const value = [history, medications, chronic_diseases, user_id];

  pool
    .query(query, value)
    .then((result) => {
      res.status(200).json({
        success: true,
        message: "medical_history created successfully",
        result: result.rows,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "server error",
        err: err.message,
      });
    });
};

const getHistoryByUserId = (req, res) => {
  const user_id = req.token.userId;
  const query = `SELECT * FROM medical_history WHERE user_id=${user_id}`;

  pool
    .query(query)
    .then((result) => {
      res.status(201).json({
        success: true,
        message: `medical_history with user_id=${user_id}`,
        result: result.rows,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "server error",
        err: err.message,
      });
    });
};

const getHistoryById = (req, res) => {
  const id = req.params.id;
  const user_id = req.token.userId;
  const query = `SELECT * FROM medical_history WHERE user_id=${user_id} AND medical_history_id=${id}`;
  pool
    .query(query)
    .then((result) => {
      res.status(201).json({
        success: true,
        message: `medical_history with user_id=${user_id} and medical_history_id=${id}`,
        result: result.rows,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "server error",
        err: err.message,
      });
    });
};

const updateHistoryById = (req, res) => {
  const id = req.params.id;
  const user_id = req.token.userId;
  const { history, medications, chronic_diseases } = req.body;
  const query = `UPDATE medical_history
    SET history=COALESCE($1,history), medications=COALESCE($2,medications), chronic_diseases=COALESCE($3,chronic_diseases)
    WHERE medical_history_id=${id} AND user_id=${user_id} ;`;
  const value = [
    history || null,
    medications || null,
    chronic_diseases || null,
  ];
  pool
    .query(query, value)
    .then((result) => {
      if (result.rows.length !== 0) {
        res.status(201).json({
          success: true,
          message: `medical_history with user_id=${user_id} and medical_history_id=${id}`,
          result: result.rows,
        });
      } else {
        throw new Error("Error happened while updating history");
      }
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "server error",
        err: err.message,
      });
    });
};


const deleteHistoryById =(req,res)=>{
    const id = req.params.id;
    const user_id = req.token.userId;
    const query =`UPDATE medical_history
    SET is_deleted = 1
    WHERE medical_history_id=${id} AND user_id=${user_id};`
    pool.query(query).then((result)=>{
        res.status(201).json({
            success: true,
            message: `medical_history with user_id=${user_id} and medical_history_id=${id} was deleted`,
            
          });
    }).catch((err)=>{
        res.status(500).json({
            success: false,
            message: "server error",
            err: err.message,
          });
    })
} 


module.exports = {
  addHistory,
  getHistoryByUserId,
  getHistoryById,
  updateHistoryById,
deleteHistoryById
};
