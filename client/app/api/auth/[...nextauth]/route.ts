import NextAuth from "next-auth/next";
import type { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
            // profile(profile) {
            //     return {
            //         id: profile.id,
            //         name: profile.name,
            //         email: profile.email,
            //         role: profile.email?.endsWith("@gmail.com") ? "teachers" : "students",
            //     }
            // }
        }),
    ],
    pages: {
        signIn: "/",
    },
    callbacks: {
        redirect: async ({ url, baseUrl }) => {
            return Promise.resolve(url.startsWith(baseUrl) ? url : baseUrl);
        }
    }
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }