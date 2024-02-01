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
  createdBy:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"users",
  },

},{timestamps:true})


const Profile = mongoose.model("Profile", profileSchema);

export default Profile

