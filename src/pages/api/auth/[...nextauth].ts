import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const YOUR_API_URL = 'https://api.multipublicador.grupolivamotor.com/signin'

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {},
      async authorize(credentials, req) {
        console.log(credentials)
        const res = await fetch(YOUR_API_URL, {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { 'Content-Type': 'application/json' },
        })
        const user = await res.json()
        console.log(user)

        // If no error and we have user data, return it
        if (res.ok && user) {
          return user.user
        }
        // Return null if user data could not be retrieved
        return null
      },
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token and user id from a provider.
      session.accessToken = token.accessToken
      session.user.id = token.id

      return session
    },
  },
  pages: {
    signIn: '/login',
    signOut: '/auth/signout',
    error: '/login', // Error code passed in query string as ?error=
  },
  secret: 'quiter-json-server-local',
}

export default NextAuth(authOptions)
