import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        name: { label: "Name", type: "text" },
        email: { label: "Email", type: "text", placeholder: "example@ex.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const value = req.body;

        console.log({ value: value, credentials: credentials });

        return null;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  pages: {
    signIn: "/signin",
    newUser: "/auth/new-user", // New users will be directed here on first sign in (leave the property out if not of interest)
  },
});

export { handler as GET, handler as POST };
