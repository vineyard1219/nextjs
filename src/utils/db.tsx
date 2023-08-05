import mongoose from "mongoose"

//사용자 경고 오류
const connect = async () => {

  try {
    await mongoose.connect(process.env.MONGO)
  } catch (error) {
    throw new Error('Connection failed!')
  }
}

export default connect