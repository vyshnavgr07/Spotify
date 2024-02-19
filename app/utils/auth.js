const { NextAuthOptions } = require("next-auth");
const SpotifyProvider = require("next-auth/providers/spotify");
import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "./db";

const authOptions = {
    adapter:PrismaAdapter(prisma),
  providers: [
    new SpotifyProvider({
      clientId:process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    }),
    EmailProvider({
        server: {
          host: process.env.EMAIL_SERVER_HOST,
          port: process.env.EMAIL_SERVER_PORT,
          auth: {
            user: process.env.EMAIL_SERVER_USER,
            pass: process.env.EMAIL_SERVER_PASSWORD
          }
        },
        from: process.env.EMAIL_FROM
      }),
  ],
};

module.exports = authOptions;

