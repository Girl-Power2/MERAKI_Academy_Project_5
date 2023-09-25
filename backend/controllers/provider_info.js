const pool = require("../models/db");

const addInfo = (req, res) => {
  const { img, bio, qualifications } = req.body;
  const provider_id = req.token.providerId;
  const query = `INSERT INTO provider_info  (img,bio,qualifications, provider_id) VALUES ($1,$2,$3,$4) RETURNING *`;
  const value = [img, bio, qualifications, provider_id];
  pool
    .query(query, value)
    .then((result) => {
      res.status(201).json({
        success: true,
        message: "Information Added Successfully",
        result: result.rows,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "Server Error",
        error: err.message,
      });
    });
};

const getInfoByProviderId = (req, res) => {
  const id = req.params.id;
  const query = `SELECT * FROM provider_info INNER JOIN providers
    ON provider_info.provider_id = providers.provider_id
    WHERE provider_info.provider_id=${id}`;

  pool
    .query(query)
    .then((result) => {
      res.status(201).json({
        success: true,
        message: `Information For Provider=${id}`,
        result: result.rows,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "Server Error",
        error: err.message,
      });
    });
};

const updateInfoById = (req, res) => {
  const id = req.params.id;
  const provider_id = req.token.providerId;
  const { img, bio, qualifications } = req.body;
  const query = `UPDATE provider_info
    SET img=COALESCE($1,img), bio=COALESCE($2,bio), qualifications=COALESCE($3,qualifications)
    WHERE provider_info_id=${id} AND provider_id=${provider_id} RETURNING *;`;
  const value = [img || null, bio || null, qualifications || null];

  pool.query(query,value).then((result)=>{
    res.status(201).json({
        success: true,
        message: `Information Updated Successfully For Provider=${provider_id}`,
        result: result.rows,
      });
  }).catch((err) => {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: err.message,
    });
  });
};


const deleteInfoByProviderId=(req, res)=>{
  const id =req.params.id
  const provider_id =req.token.userId
  const query=`UPDATE provider_info
  SET is_deleted = 1
  WHERE provider_info_id=${id} AND provider_id=${provider_id} RETURNING *;`
  pool.query(query).then((result)=>{
    res.status(201).json({
      success: true,
        message: `Information Deleted Successfully For Provider_info=${provider_id}`,
        result: result.rows,
    })
  }).catch((err)=>{
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: err.message,
    });
  })
}




module.exports = {
  addInfo,
  getInfoByProviderId,
  updateInfoById,
  deleteInfoByProviderId
};


//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjcsImNpdHkiOiJhbW1hbiIsInJvbGUiOjMsImlhdCI6MTY5NTY0MDQ1MiwiZXhwIjoxNjk1NzI2ODUyfQ.RS3FeteJEm9lXV_yea4JJugc-WX2dBtPjU9zyJLI13w
