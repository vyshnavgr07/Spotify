import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "lucide-react";
import { GoogleOAuthProvider } from '@react-oauth/google';
import SessionProvid from "./provider/SessionProvider";
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
