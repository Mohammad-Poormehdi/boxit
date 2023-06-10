import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import prisma from "@/lib/prismadb";

const handler = NextAuth({
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
});

export { handler as GET, handler as POST };
