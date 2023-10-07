const client = require("../models/db");
const validation = {};
validation.Emailvalidation = (req, res, next) => {
    const email = req.body.email;
    const ValEmail =
      "^[a-zA-Z0-9][a-zA-Z0-9._-]*@[a-zA-Z0-9][a-zA-Z0-9._-]*\\.[a-zA-Z]{2,4}$";
    const values = [ ValEmail];
    const query = `where email REGEXP_LIKE(email,$1)`;
  
};
