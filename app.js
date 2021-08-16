const express = require("express");
const cors = require('cors');
const bodyParser=require('body-parser')
const userRoute=require("./route/users")
require("./db/conn");

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());



app.use(cors());
 app.use("/signUp",userRoute)


app.listen(port, () => {
  console.log(`connection is setup at ${port}`);
});
