
// const { Pool } = require("pg");
const { Client } = require("pg");
const connectionString = process.env.DB_URL;

// const pool = new Pool({
//   connectionString,
// });
// client
//   .connect()
//   .then(() => {
//     console.log("connected on " + client.database);
//   })
//   .catch((error) => {
//     console.error("client didn't connect", error.message, error.stack);
//   });

const pool = new Pool({
  connectionString,
});
pool
  .connect()
  .then(() => {
    console.log("connected on " + pool.database);
  })
  .catch((error) => {
    console.error("client didn't connect", error.message, error.stack);
  });


module.exports = pool;
// const client = new Client({
//   host: "localhost",
//   user: "postgres",
//   password: "0000",
//   port: "5432",
//   database: "cureApp_5",

// });
// pool
//   .connect()
//   .then((res) => {
//     console.log(`DB connected to ${res.database}`);
//   })
//   .catch((err) => {
//     console.log(err);
//   });


const client = new Client({
  host: "localhost",
  user: "postgres",
  password: "0000",
  port: "5432",
  database: "cureApp_5",
});
client
  .connect()
  .then(() => {
    console.log("connected on " + client.database);
  })
  .catch((error) => {
    console.error("client didn't connect", error.message, error.stack);
  });
module.exports = client;


