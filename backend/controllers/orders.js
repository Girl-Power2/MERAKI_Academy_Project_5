const { query } = require("express");
const pool = require("../models/db");

const creatNewOrder = (req, res) => {
  const { service_id, provider_id, user_id,schedule_id } = req.body;

  const query = `INSERT INTO orders  (service_id, provider_id,user_id,schedule_id) VALUES ($1,$2,$3,$4) RETURNING *`;
  const value = [service_id, provider_id, user_id,schedule_id];

  pool
    .query(query, value)
    .then((result) => {
      res.status(200).json({
        success: true,
        message: "order created successfully",
        result: result.rows,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "server error",
        error: err.message,
      });
    });
};

const getAllOrders = (req, res) => {
  const id = req.token.userId
  const query = `SELECT * FROM orders  INNER JOIN users
  ON orders.user_id = users.user_id WHERE orders.user_id=${id}`;

  pool
    .query(query)
    .then((result) => {
      res.status(201).json({
        success: true,
        message: `all order for user_id=${id}`,
        result: result.rows,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "server error",
        error: err.message,
      });
    });
};

const getOrderById = (req, res) => {
  const id = req.params.id;
  const query = `SELECT * FROM orders INNER JOIN users
  ON orders.user_id = users.user_id WHERE orders.order_id=${id}`;
  pool
    .query(query)
    .then((result) => {
      res.status(201).json({
        success: true,
        message: `order_id = ${id} `,
        result: result.rows,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "server error",
        error: err.message,
      });
    });
};

const getOrderByUserId = (req, res) => {
  const id =req.params.id
  const user_id = req.token.userId;
  const query = `SELECT * FROM orders INNER JOIN users
  ON orders.user_id = users.user_id INNER JOIN providers ON orders.provider_id = providers.provider_id WHERE orders.user_id=${user_id} AND orders.order_id=${id}`;
  pool
    .query(query)
    .then((result) => {
      res.status(201).json({
        success: true,
        message: `user_id = ${user_id} `,
        result: result.rows,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        success: false,
        message: "server error",
        error: err.message,
      });
    });
};

const getOrderByProviderId = (req, res) => {
  const id = req.params.id;
  const query = `SELECT * FROM orders INNER JOIN users
  ON orders.user_id = users.user_id WHERE provider_id=${id}`;
  pool
    .query(query)
    .then((result) => {
      res.status(201).json({
        success: true,
        message: `provider_id = ${id} `,
        result: result.rows,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "server error",
        error: err.message,
      });
    });
};

const getAllOrderDone= (req, res) => {

  const query = `SELECT * FROM orders INNER JOIN users
  ON orders.user_id = users.user_id WHERE orders.status='Done'`;
  pool
    .query(query)
    .then((result) => {
      res.status(201).json({
        success: true,
        message: `All Previus Orders  `,
        result: result.rows,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "server error",
        error: err.message,
      });
    });
};

const getAllOrderPending= (req, res) => {

  const query = `SELECT * FROM orders INNER JOIN users
  ON orders.user_id = users.user_id WHERE orders.status='pending'`;
  pool
    .query(query)
    .then((result) => {
      res.status(201).json({
        success: true,
        message: `All Orders `,
        result: result.rows,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "server error",
        error: err.message,
      });
    });
};





const updateOrederById = (req, res) => {
  const id = req.params.id;
  const query = `UPDATE orders
    SET status = 'Done'
    WHERE order_id=${id} RETURNING *;`;

  pool
    .query(query)
    .then((result) => {
      res.status(201).json({
        success: true,
        message: `order was updated `,
        result: result.rows,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "server error",
        error: err.message,
      });
    });
};

const deleteOrederById = (req, res) => {
  const id = req.params.id;
  const query = `UPDATE orders
    SET is_deleted = 1
    WHERE order_id=${id} RETURNING *;`;

  pool
    .query(query)
    .then((result) => {
      res.status(201).json({
        success: true,
        message: `order was deleted `,
        result: result.rows,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "server error",
        error: err.message,
      });
    });
};

module.exports = {
  creatNewOrder,
  getAllOrders,
  getOrderById,
  getOrderByUserId,
  getOrderByProviderId,
  deleteOrederById,
  updateOrederById,
  getAllOrderDone,
  getAllOrderPending
};
