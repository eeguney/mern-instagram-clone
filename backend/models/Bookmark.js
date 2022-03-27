import mongoose from "mongoose";

const bookmarkSchema = mongoose.Schema({
    postID: {
        type: String,
        required: true
    },
    userID: {
        type: String,
        required: true
    }
},
{ timestamps: true }
)

export default mongoose.model("Bookmark", bookmarkSchema)