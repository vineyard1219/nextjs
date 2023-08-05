import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from 'next-auth/providers/credentials'
import User from "@/models/User"
import bcrypt from 'bcryptjs'
import connect from "@/utils/db" // connect 함수 임포트 (경로는 실제 경로에 맞게 수정하세요)

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      async authorize(credentials) {
        await connect()
        
        try{
          const user = await User.findOne({email:credentials.email}) // await 추가

          if(user){
            //check password
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
              )

              if(isPasswordCorrect){
                return user
              } else {
                throw new Error('Wrong Credentials')
              }
          }else{
            throw new Error('User not found!')
          }
        }catch(err){
          throw new Error(err)
        }

      }
    })
  ],
  pages: {
    error:'/dashboard/login'
  }
})

export {handler as GET, handler as POST}
