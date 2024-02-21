import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "lucide-react";
import { GoogleOAuthProvider } from '@react-oauth/google';
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Spotify-Clone",
  description: "lets have some fun....",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>{children}</body>
    </html>
  );
}
