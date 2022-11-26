import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import authRepository from "../../../repository/auth/auth.repository";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId:
        "603793618349-q7almd4qq5d9vjein4uimosrejb1ee93.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
  pages: {
    signIn: "/auth",
  },

  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
        token.provider = account.provider;
      }
      return token;
    },

    async session({ session, token }) {
      session.accessToken = token.accessToken;
      session.provider = token.provider;

      return session;
    },

    async signIn({ account }) {
      const accessToken = account?.access_token;

      if (accessToken) {
        return true;
      } else {
        return false;
      }
    },
  },
});
