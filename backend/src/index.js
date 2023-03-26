import * as dotenv from "dotenv"
import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import router from "./routes/todo.routes.js"

dotenv.config();
const app = express();

const PORT = process.env.NODE_LOCAL_PORT || 4000;
const ORIGIN = process.env.CLIENT_ORIGIN || "http://localhost:3000";

var corsOptions = {
  origin: ORIGIN
}

// middlewares
app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// routes 
app.use("/api", router)

// db config
import "./config/db.config.js"

app.listen(PORT, () => {
  console.log(`server are listens port ${PORT}`)
})

