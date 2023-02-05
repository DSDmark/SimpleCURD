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
    const { id } = req.query;
    const data = await db.findById(id);
    if (!data) {
      res.status(404).json({ message: "Not found " + id });
    }
    res.status(200).json(data);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

export const findAll = async (req, res) => {
  try {
    const { title } = req.query;
    console.log(title)
      ? { title: { $regex: new RegExp(title), $options: "i" } }
      : {};
    let data = await db.find(condition);
    if (data) {
      res.json(data);
    } else {
      res.status(500).json({ message: "internal server error " });
    }
  } catch (err) {
    console.log(err);
  }
};
export const deleteAll = async (req, res) => {
  try {
    let data = await db.deleteMany({});
    if (data) {
      res.json({ message: "all todo is deleted" });
    } else {
      res.status(500).json({ message: "internal server error" });
    }
  } catch (err) {
    console.log(err);
  }
};
export const deleteOne = async (req, res) => {
  try {
    const { id } = req.query;

    const data = await db.findByIdAndRemove(id);
    if (data) {
      res.status(200).json({ message: "todo deleted" });
    } else {
      res.status(500).json({ message: "internal server error" });
    }
  } catch (err) {
    console.log(err);
  }
};
export const update = async (req, res) => {
  try {
    const {title,desc} = req.body
    if (title || desc) {
      const data = await db.findByIdAndUpdate(req.query.id, req.body, {
        useFindAndModify: false,
      });
      console.log(req.body)
      if (data) {
        res.status(200).json({ message: "data updated" });
      } else {
        res
          .status(400)
          .json({ message: `Connot update that id:${req.query.id}` });
      }
    } else {
      res.status(400).json({ message: "please fill the data" });
    }
  } catch (err) {
    console.log(err);
  }
};
export const findAllPublished = (req, res) => {};
