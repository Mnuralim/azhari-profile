import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        try {
          const { email, password } = credentials;
          const user = await axios.post(`https://colorful-calf-helmet.cyclic.app/login-admin`, { email, password });
          console.log(user);
          return user.data.data;
        } catch (error) {
          console.log(error);
          throw new Error(error);
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
});
