import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import SpotifyProvider from "next-auth/providers/spotify";

//spoty
const scopes = [
  "user-read-email",
  "playlist-read-private",
  "playlist-read-collaborative",
  "user-read-currently-playing",
  "user-modify-playback-state"
].join(",")

const params={
  scope:scopes
}

const LOGIN_URL='https://accounts.spotify.com/authorize?'+ new URLSearchParams(params).toString();



//spoty
export const authOptions={
    providers:[

        GoogleProvider({
            clientId:process.env.GOOGLE_CLIENT_ID,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                  prompt: "consent",
                  access_type: "offline",
                  response_type: "code"
                }
              }
            }),


        SpotifyProvider({
          clientId: process.env.SPOTIFY_CLIENT_ID,
          clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
          authorization:LOGIN_URL
        }),


    ],
    pages:{
signIn:'/'
    },
    secret:process.env.SECRET,
    callbacks:{
      async jwt({ token, user }) {
          // console.log("token from next auth:",token)
          return { ...token, ...user };
        },
        async session({ session, token, user }) {
          // console.log(session,"next auth session");
          session.user = token;
          return session;
        },
  },
}

const handler=NextAuth(authOptions);

export {handler as GET,handler as POST}

