import { compare } from 'bcrypt'
import jwt from 'jsonwebtoken'
import NextAuth, { Awaitable, NextAuthOptions } from 'next-auth'
import { JWT, JWTDecodeParams, JWTEncodeParams } from 'next-auth/jwt'
import CredentialsProvider from 'next-auth/providers/credentials'
import { dbConnect } from '@/lib'
import { IUser, User } from '@/models'

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {},
      async authorize(credentials) {
        await dbConnect()
        const { email, password } = credentials as {
          email: string
          password: string
        }
        const user: IUser = (await User.findOne({ email }).lean()) as IUser
        const isPasswordMatched = await compare(password, user.password)
        if (user && isPasswordMatched) {
          return {
            id: user._id?.toString() ?? '',
            name: user.userName,
            email: user.email,
          }
        }
        throw new Error('Invalid Credentials')
      },
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
  secret: process.env.NEXTAUTH_SECRET,
  jwt: {
    async encode({ secret, token }: JWTEncodeParams) {
      return jwt.sign(token as JWT, secret)
    },
    async decode({ secret, token }: JWTDecodeParams) {
      return jwt.verify(token as string, secret) as Awaitable<JWT | null>
    },
  },
  pages: {
    signIn: '/auth/login',
  },
  callbacks: {
    async jwt({ token, user, account }) {
      if (account) {
        token.accessToken = account.access_token
        token.user = user
      }
      return token
    },
    async session({ session, token }) {
      return { ...session, user: token.user || {} }
    },
  },
}
export default NextAuth(authOptions)
