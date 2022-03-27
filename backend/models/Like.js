import mongoose from "mongoose";

const likeSchema = mongoose.Schema(
  {
    postID: {
      type: String,
      required: true,
    },
    likedBy: {
      type: String,
      required: true,
    },
    isRead: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Like", likeSchema);
