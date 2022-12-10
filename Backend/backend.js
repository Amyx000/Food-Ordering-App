const express =require("express")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const app = express()
const dotenv= require("dotenv").config({path:".env.development.local"})
require("./db/config")
const foodroute =require("./routes/foodroute")
const userroute =require("./routes/userroute")
const orderroute=require("./routes/orderroute")

app.use(express.json())
app.use(cors({credentials: true, origin: process.env.FRONTEND_URL,allowedHeaders: ["set-cookie", "Content-Type", "Access-Control-Allow-Origin"]}))
app.use(cookieParser())

app.use("/",foodroute)
app.use("/user",userroute)
app.use("/",orderroute)

app.listen(process.env.PORT)