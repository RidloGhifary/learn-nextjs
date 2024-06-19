import { login, loginWithGoogle } from "@/lib/firebase/service";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcryptjs";

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.AUTH_SECRET,
  providers: [
    CredentialsProvider({
      type: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        const user: any = await login(email);

        if (user) {
          const comparedPassword = await bcrypt.compare(
            password,
            user.password
          );

          if (comparedPassword) return user;
          else return null;
        } else {
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_OAUTH_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }: any) {
      if (account?.provider === "credentials") {
        token.email = user.email;
        token.name = user.name;
        token.role = user.role;
      }

      if (account?.provider === "google") {
        const data = {
          name: user.name,
          email: user.email,
          type: "google",
        };

        await loginWithGoogle(
          data,
          (result: { status: boolean; data: any }) => {
            if (result.status) {
              token.email = result.data.email;
              token.name = result.data.name;
              token.role = result.data.role;
            }
          }
        );
      }

      return token;
    },

    async session({ session, token }: any) {
      if ("email" in session.user) {
        session.user.email = token.email;
      }

      if ("name" in session.user) {
        session.user.name = token.name;
      }

      if ("role" in session.user) {
        session.user.role = token.role;
      }

      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
