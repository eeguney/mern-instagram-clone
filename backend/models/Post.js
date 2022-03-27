import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  userID: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  data: [String],
  status: {
    type: Boolean,
    default: true,
  },
},
{ timestamps: true });

export default mongoose.model("Post", postSchema);
