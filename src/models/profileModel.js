import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
  avatar: {
    type: String,
    require: false,
  
  },
  upi: {
    require: true,
    type: String,
    unique: true,
  },
  username: {
    type: String,
    require: true,
    unique: true,
  },
  bio:{
        type: String,
        require: true,
    },

},{timestamps:true})


const Profile = mongoose.model("Profile", profileSchema);

export default Profile

