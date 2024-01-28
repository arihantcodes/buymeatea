import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
    unique: true,
  },
  email: {
    require: true,
    type: String,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  isverfied: {
    type: Boolean,
    default: false,
  },
  role: {
    type: String,
    default: "user",
    enum: ["user", "admin"],
  },
  forgotPassword: {
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verificationToken: String,
    verificationTokenExpiry: Date,
  },
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;