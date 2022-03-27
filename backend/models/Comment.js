import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
    postID: {
        type: String,
        required: true
    },
    userID: {
        type: String,
        required: true
    },
    parentID: {
        type: String,
    },
    comment: {
        type: String,
        required: true
    },
    isRead: {
        type: Boolean,
        default: false
    }
},
{ timestamps: true }
)

export default mongoose.model("Comment", commentSchema)