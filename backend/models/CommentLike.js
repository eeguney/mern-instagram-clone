import mongoose from "mongoose";

const commentLikeSchema = mongoose.Schema({
    postID: {
        type: String,
        required: true
    },
    commentID: {
        type: String,
        required: true
    },
    user: {
        type: String,
        requrired: true
    },
    isRead: {
        type: Boolean,
        default: false
    }
},
{ timestamps: true }
)

export default mongoose.model("CommentLike", commentLikeSchema)