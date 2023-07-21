import mongoose from 'mongoose';
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 3,
      max: 50,
    },
    email: {
      type: String,
      max: 50,
      default: '',
    },
    password: {
      type: String,
      min: 8,
      default: '',
    },
    totalScore: {
      type: Number,
      default: 0,
    },
    loginMode:{
      type: String,
      default: 'form',
    }
  },
  { timestamps: true }
);
const UserModel = mongoose.model('User', UserSchema);
export default UserModel;
