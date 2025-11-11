import { type AuthOptions } from "next-auth";
import Github from "next-auth/providers/github";

export const authOptions: AuthOptions = {
    providers: [
        Github({
            clientId: process.env.AUTH_GITHUB_ID!,
            clientSecret: process.env.AUTH_GITHUB_SECRET!,
        }),
    ],
    // You must still have your AUTH_SECRET in .env.local
    secret: process.env.AUTH_SECRET,
};