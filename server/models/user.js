import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    // validation here and in auth.js
    min: 5,
  },
  selectedTeam: {
    type: String,
    required: false,
  },
  selectedTeamLogo: {
    type: String,
    required: false,
  },
});

export default mongoose.model("User", userSchema);
