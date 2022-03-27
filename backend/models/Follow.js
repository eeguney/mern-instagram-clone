import mongoose from "mongoose";

const followSchema = mongoose.Schema({
    followBy: {
        type: String,
        required: true
    },
    toBeFollowed: {
        type: String,
        required: true
    },
    isRead: {
        type: Boolean,
        default: false
    },
    status: {
        type: Boolean,
        default: false
    }
},
{ timestamps: true }
)

export default mongoose.model("Follow", followSchema)