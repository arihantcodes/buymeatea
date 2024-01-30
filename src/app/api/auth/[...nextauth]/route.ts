import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";


export const authOptions = {
providers: [
GithubProvider({
clientId: process.env.GITHUB_ID ?? "",
clientSecret: process.env.GITHUB_SECRET ?? "",
}),
GoogleProvider({
clientId: process.env.GOOGLE_ID ?? "",
clientSecret: process.env.GOOGLE_SECRET ?? "",
}),
],
callbacks: {
    async redirect(url:any, baseUrl:any) {
      // Customize the redirect URL after sign-up
      return '/dashboard/profile/arihanthu';
    },
  },
}

export const handler = NextAuth({
    ...authOptions,
    callbacks: {
        async redirect(params: { url: string; baseUrl: string }) {
        
            return '/dashboard/profile/';
        },
    },
});

export {handler as GET, handler as POST};