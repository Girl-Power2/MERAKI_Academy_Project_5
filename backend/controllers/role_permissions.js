const pool=require ("../models/db")
const RolePermission={}
// ==================ADD NEW ROLE_PERMISSION===================
RolePermission.createNewRolePermission = (req, res) => {
    const { role_id, permission_id } = req.body;
    const query = `INSERT INTO role_permissions (role_id,
      permission_id) VALUES ($1,$2) RETURNING *`;
    const data = [role_id, permission_id];
  
    pool
      .query(query, data)
      .then((result) => {
        res.status(201).json({
          success: true,
          message: ` Role Permission created successfully`,
          result: result.rows,
        });
      })
      .catch((err) => {
        res.status(500).json({
          success: false,
          message: `Server error`,
          err: err,
        });
      });
  };
// ================== Get ALL Role Permissions===================

  RolePermission.GetALLRolePermission = (req, res) => {
    const query = `SELECT * FROM role_permissions;`;
  
    pool
      .query(query)
      .then((result) => {
        res.status(201).json({
          success: true,
          message: ` ALL Role Permissions `,
          result: result.rows,
        });
      })
      .catch((err) => {
        res.status(500).json({
          success: false,
          message: `Server error`,
          err: err,
        });
      });
  };


  module.exports = {RolePermission}
