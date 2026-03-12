import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  task: String,
  startDate: String,
  finishDate: String,
  completed: { type: Boolean, default: false }
});

export default mongoose.model("Todo", todoSchema);