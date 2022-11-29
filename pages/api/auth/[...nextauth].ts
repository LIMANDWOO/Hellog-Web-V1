import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_OAUTH_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET!,
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
