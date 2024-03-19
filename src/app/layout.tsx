import type { Metadata } from "next";
import { Josefin_Sans, Outfit, Aleo, PT_Sans_Narrow, DM_Serif_Text } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";


const base = Outfit(
  {
    subsets: ["latin"],
    variable: "--font-base",
  }
);

const sans = Josefin_Sans(
  {
    subsets: ["latin"],
    variable: "--font-sans"
  }
);

const serif = DM_Serif_Text(
  {
    subsets: ["latin"],
    variable: "--font-serif",
    weight: "400"
  }
);

const mono = PT_Sans_Narrow(
  {
    subsets: ["latin"],
    variable: "--font-mono",
    weight: "400"
  }
);

const handwritten = Aleo(
  {
    subsets: ["latin"],
    variable: "--font-handwritten"
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
    <html lang="nl" className={`${base.variable} ${sans.variable} ${serif.variable} ${mono.variable} ${handwritten.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
