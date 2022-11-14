const express =require("express")
const cors = require("cors")
const app = express()
const dotenv= require("dotenv").config({path:".env.development.local"})
require("./db/config")
const foodroute =require("./routes/foodroute")
const userroute =require("./routes/userroute")

app.use(express.json())
app.use(cors({origin:"*"}))


app.use("/",foodroute)
app.use("/user",userroute)

app.listen(process.env.PORT)