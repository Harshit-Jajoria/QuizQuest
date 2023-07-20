import mongoose from 'mongoose';
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 3,
      max: 50,
      
    },
    phoneNumber: {
      type: String,
      max: 50,
      default: '',
    },
    email: {
      type: String,
      max: 50,
      default: '',

      
    },
    password: {
      type: String,
      min: 8,
    },
  },
  { timestamps: true }
);
const UserModel = mongoose.model('User', UserSchema);
export default UserModel;
