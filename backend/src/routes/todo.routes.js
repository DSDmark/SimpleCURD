import express from "express"
import { create, findOne, findAll, deleteAll, deleteOne, update } from "../controllers/todo.controller.js"
const router = express.Router();

router.post("/add", create)
router.get("/find", findOne)
router.get("/findAll", findAll)
router.delete("/deleteAll", deleteAll)
router.delete("/deleteOne", deleteOne)
router.patch("/update", update)

export default router;
