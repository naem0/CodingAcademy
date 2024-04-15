import { Inter } from "next/font/google";
import "./globals.css";
import Navber from "@/components/Navber";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Coding Academy",
  description: "MERN Stack Web Development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navber/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
