import mongoose from "mongoose";

const storySchema = mongoose.Schema({
    userID: {
        type: String,
        required: true
    },
    story: {
        type: [String],
        required: true
    },
    description: {
        type: String,
    },
    timeout: {
        type: Boolean,
        default: false
    }
},
{ timestamps: true });

export default mongoose.model("Story", storySchema)