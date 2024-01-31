import NextAuth from "next-auth";



import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
export const authOptions = {
  providers:[
  GithubProvider({
    clientId: process.env.GITHUB_ID || "",
    clientSecret: process.env.GITHUB_SECRET || "",
  }),
  GoogleProvider({
    clientId: process.env.GOOGLE_ID || "",
    clientSecret: process.env.GOOGLE_SECRET || "",
  }),
]
}

const callbacks = {
  async redirect(url: string, baseUrl: string) {
    // Customize the redirect URL after sign-up
    return '/dashboard/profile/arihanthu';
  },
};



export default NextAuth(authOptions);
