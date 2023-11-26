import mongoose from "mongoose";

//creating schema
const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique:true,
    },
    email:{
        type: String,
        required: true,
        unique:true,
    },
    password:{
        type: String,
        required: true,

    },
    avatar: String,
    default: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
}, {timestamps:true});

//creating a model
const User = mongoose.model('User', userSchema)

export default User;