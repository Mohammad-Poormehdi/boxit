import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/lib/prismadb";
import bcrypt from "bcrypt";
import { AuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";

const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "username", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials.password) {
          throw new Error("Invalid credentials");
        }
        const user = await prisma.user.findUnique({
          where: {
            username: credentials?.username,
          },
        });
        if (!user || !user.hashedPassword) {
          throw new Error("User Does not exists");
        }
        const comparedPassword = bcrypt.compare(
          credentials?.password,
          user?.hashedPassword
        );
        if (!comparedPassword) {
          throw new Error("Invalid password");
        }

        return user;
      },
    }),
  ],

  pages: { signIn: "/" },
  debug: process.env.NODE_ENV === "development",
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
};
export default authOptions;
