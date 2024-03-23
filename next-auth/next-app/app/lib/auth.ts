import  CredentialsProvider  from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
export const NEXT_AUTH =
{
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
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID || "",
            clientSecret: process.env.GITHUB_SECRET || ""
  })
   ],
   secret: process.env.NEXTAUTH_SECRET,
   callbacks: {
        session:({session, token, user}: any) =>{
            console.log(session);
            session.user.id = token.sub;
            return session;
        }
    },
    pages: {
        signIn: '/signin'
    }
}