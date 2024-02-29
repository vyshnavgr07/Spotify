import { Inter } from "next/font/google";
import "./globals.css";
import SessionProvid from "./provider/SessionProvider";
import { Component } from "lucide-react";
import { useSession } from "next-auth/react";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Spotify-Clone",
  description: "lets have some fun....",
};

export default function RootLayout({ children }) {


  
  return (
    <html lang="en">
        
      <SessionProvid>
      <body className={inter.className}>{children}</body>
      </SessionProvid>
    </html>
    
  );
}

