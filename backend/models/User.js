import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    email: {
        type: String,
    },
    number: {
        type: String,
    },
    fullname: {
        type: String,
        required: [true, "Enter your fullname."]
    },
    username: {
        type: String,
        required: [true, "Enter your username"],
    },
    profilePhoto: {
        type: String,
        default: "/nopp.jpg"
    },
    info: {
        type: String,
    },
    password: {
        type: String,
        required: [true, "Enter your password"]
    }
},
{ timestamps: true }
)

export default mongoose.model("User", userSchema)