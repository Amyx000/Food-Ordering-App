const express =require("express")
const cors = require("cors")
const app = express()
const dotenv= require("dotenv").config({path:".env.development.local"})
require("./db/config")
const foodroute =require("./routes/foodroute")

app.use(express.json())
app.use(cors({origin:"*"}))


app.use("/",foodroute)

app.listen(process.env.PORT)