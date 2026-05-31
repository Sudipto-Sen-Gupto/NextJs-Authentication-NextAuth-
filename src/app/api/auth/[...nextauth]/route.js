import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";


 const userList=[
       {name:"Cokomali",password:"cokocoko"},
       {
        name:"Malacak",password:'malamala'
       }
 ] 

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
   CredentialsProvider({
    
    // The name to display on the sign in form (e.g. "Sign in with...")
    name: "Credentials",
    // `credentials` is used to generate a form on the sign in page.
    // You can specify which fields should be submitted, by adding keys to the `credentials` object.
    // e.g. domain, username, password, 2FA token, etc.
    // You can pass any HTML attribute to the <input> tag through the object.
    credentials: {
      username: { label: "Username", type: "text", placeholder: "jsmith" },
      password: { label: "Password", type: "password" },
      secret_code:{label:'secret code',type:'number',placeholder:'enter your code'}
    },
    async authorize(credentials, req) {
      // Add logic here to look up the user from the credentials supplied
     
                  const {username,password,secret_code}= credentials;

                  const nameMatch=userList.find(u=>u.name==username);

                  if(!nameMatch){
                    return null
                  }
            const isPassOk=nameMatch.password==password;
             if(isPassOk){
                       
                    return  nameMatch
             }      
        return null

       
    }
  })
    // ...add more providers here
  ],
}
const handler= NextAuth(authOptions)

export { handler as GET, handler as POST }