import mongoose from "mongoose";

//스키마 생성 //이름, 이메일, 패스워드
const {Schema} = mongoose

const userSchema = new Schema({
  name: {
    type:String,
    unique: true, /*고유한*/
    required: true,
  },

  email: {
    type: String,
    unique: true,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
}, {timestamps: true})

export default mongoose.model('User', userSchema)