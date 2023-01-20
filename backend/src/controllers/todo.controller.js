import db from "../models/todo.model.js";

export const create = async (req, res) => {
  try {
    const { title, desc, published } = req.body;
    if (!title || !desc) {
      res.status(400).json({ message: "please enter the text" });
      return;
    }
    const newTodo = { title, desc, published };
    const new_todo = new db(newTodo);
    await new_todo.save();
    res.status(200).json({ message: "successfully added in database" });
  } catch (err) {
    console.log(err);
  }
};

export const findOne = async (req, res) => {
  try {
    const {id} = req.query;
    const data = await db.findById(id);
    if (!data) {
      res.status(404).json({ message: "Not found " + id });
    }
    res.status(200).json(data);
    console.log(data)
  } catch (err) {
    console.log(err);
  }
};
export const findAll = (req, res) => {};
export const deleteAll = (req, res) => {};
export const delelteOne = (req, res) => {};
export const update = (req, res) => {};
export const findAllPublished = (req, res) => {};
