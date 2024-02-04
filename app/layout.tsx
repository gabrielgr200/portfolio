import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/Main/StarBackground";
import NavBar from "@/components/Main/NavBar";
import Footer from "@/components/Main/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PortFólio",
  description: "PortFólio Leirbaggr",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} bg-[#000] overflow-y-scroll overflow-x-hidden`}>
        <StarsCanvas />
        <NavBar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
