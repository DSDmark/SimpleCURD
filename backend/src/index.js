import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import router from "./routes/todo.routes.js"
import dotenv from "dotenv"

dotenv.config();
const app = express();

var corsOptions = {
  origin:"*"
}

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use("/api",router)

import "./config/db.config.js"

const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>{
  console.log(`server are listens port no.${PORT}`)
})
