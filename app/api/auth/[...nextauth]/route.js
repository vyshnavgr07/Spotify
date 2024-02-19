import authOptions from "@/app/utils/auth";
import NextAuth from "next-auth/next";

const handler =NextAuth(authOptions)

module.exports= { get:handler,post:handler};