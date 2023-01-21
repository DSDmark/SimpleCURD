import express from "express"
import {create,findOne,findAll,deleteAll,deleteOne} from "../controllers/todo.controller.js"
const router = express.Router();

router.post("/add",create)
router.get("/find",findOne)
router.get("findAll",findAll)
router.get("/deleteAll",deleteAll)
router.get("/deleteOne",deleteOne)

export default router;
