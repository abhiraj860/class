import NextAuth from "next-auth/next";
import  CredentialsProvider  from "next-auth/providers/credentials";

const handler = NextAuth({
   providers: [
        CredentialsProvider({
            name: "Email",
            credentials: {
                username: { label: 'Username', type: 'text', placeholder: 'Email' },
                password: { label: 'Password', type: 'password', placeholder: 'Password' },
            }, 
            async authorize(credentials: any) {
               console.log(credentials);
               // validation 
                return {
                    id: "user1",
                    name: "Abhira",
                    email: "sfsdfsad"
                }
            }
        })
   ],
   secret: process.env.NEXTAUTH_SECRET 
});

export const GET = handler;
export const POST = handler;