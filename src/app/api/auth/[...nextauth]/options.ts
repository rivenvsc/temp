import type { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  providers: [
    // CredentialsProvider({
    //   name: 'Credentials',
    //   async authorize(credentials, req) {
    //     // Dummy user data (replace with your actual database logic)
    //     const users = [
    //       {
    //         id: '1',
    //         username: 'testuser',
    //         phone: '1234567890',
    //         // passwordHash: await bcrypt.hash('testpassword', 10),
    //       },
    //     ];

    //     const { identifier, password } = credentials;
    //     const user = users.find(
    //       (u) => u.username === identifier || u.phone === identifier
    //     );

    //     if (!user) {
    //       return null;
    //     }

    //     const isPasswordValid = password as string == "123456";
        
    //     // await bcrypt.compare(
    //     //   password as string,
    //     //   user.passwordHash
    //     // );

    //     if (!isPasswordValid) {
    //       return null;
    //     }
    //     return { id: user.id, name: user.username };
    //   },
    //   credentials: undefined
    // }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),

    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID as string,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
    }),
  ],
  pages: {
    signIn: '/', // Redirect to home page for sign in
    error: '/', // Redirect to home page on error
  },
  callbacks: {
    async session({ session, token }) {
      // Add user ID to session
      if (token.sub) {
        session.user.id = token.sub;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
