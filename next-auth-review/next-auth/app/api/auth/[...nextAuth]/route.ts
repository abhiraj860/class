import NextAuth from "next-auth/next";
import  CredentialsProvider  from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
           name: 'Credentials',
           credentials: {
            username: { label: 'email', type: 'text', placeholder: 'Your email'},
            passw: {label: 'password', type: 'password', placeholder: "Enter Password"}
           },
           async authorize(credentials: any) {
            // console.log(credentials);
            return {
                id: "User 1",
                name: credentials.username,
                email: credentials.passw
            } 
           } 
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
            jwt: async ({ user, token }: any) => {
            if (user) {
                token.uid = user.id;
            }
            return token;
            },
        session: ({ session, token, user }: any) => {
            console.log(session);
            if (session.user) {
                session.user.id = token.uid
            }
            return session
        }
        },
})

export {handler as GET, handler as POST}