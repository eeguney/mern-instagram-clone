import mongoose from "mongoose";

const watchedStorySchema = mongoose.Schema({
    watcherID: {
        type: String,
        required: true
    },
    storyID: {
        type: String,
        required: true
    }
},
{ timestamps: true }
)

export default mongoose.model("WatchedStory", watchedStorySchema)