import type { Metadata } from "next";
import { Inter, Josefin_Sans, Martian_Mono, Outfit } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const sans = Outfit(
  {
    subsets: ["latin"],
    variable: "--font-sans"
  }
);

const serif = Josefin_Sans(
  {
    subsets: ["latin"],
    variable: "--font-serif"
  }
);

const mono = Martian_Mono(
  {
    subsets: ["latin"],
    variable: "--font-mono"
  }
);

export const metadata: Metadata = {
  title: "SAPHIER | Digital Business Consulting Services",
  description: "Digital Business Consulting Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${sans.variable} ${serif.variable} ${mono.variable}`}>
      <body >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
