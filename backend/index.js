
const express = require("express");
require("dotenv").config();
const cors = require("cors");
require("./models/db");

//routers

const role_permissionsRouter=require("./routes/role_permissions")



const rolesRouter =require("./routes/roles");
const permissionsRouter = require("./routes/permissions");
const usersRouter = require("./routes/users");
const categoriesRouter=require("./routes/categories")

const app = express();

//built-in middleware
app.use(express.json());
app.use(cors());


// router middleware
app.use("/role_permissions",role_permissionsRouter)
app.use("/roles" ,rolesRouter)
app.use("/permissions" ,permissionsRouter)
app.use("/users" ,usersRouter)
app.use("/categories",categoriesRouter)






const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server on ${PORT}`);
});

