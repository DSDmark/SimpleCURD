import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "add your text"],
      maxLength: [100, "text is out of range in title"],
    },
    desc: {
      type: String,
      required: [true, "Add your details"],
      maxLength: [500, "text is out of range in desc"],
    },
    published: {
      type:Boolean,
      default:false,
      required:[true,"add you status"],
    },
  },
  { timestamps: true }
);
todoSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

export default mongoose.model("todo", todoSchema);
