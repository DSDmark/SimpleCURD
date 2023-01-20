import express from "express"
import {create,findOne} from "../controllers/todo.controller.js"
const router = express.Router();

router.post("/add",create)
router.get("/find",findOne)

export default router;
