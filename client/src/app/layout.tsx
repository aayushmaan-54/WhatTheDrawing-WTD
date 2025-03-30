import type { Metadata } from "next";
import { Gochi_Hand, Londrina_Shadow } from "next/font/google";
import cn from "@/utils/cn";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";


const londrina_shadow = Londrina_Shadow({
  variable: "--font-londrina_shadow",
  weight: ['400'],
  display: 'swap',
  subsets: ["latin"],
});

const gochi_hand = Gochi_Hand({
  variable: "--font-gochi_hand",
  weight: ['400'],
  display: 'swap',
  subsets: ["latin"],
});



export const metadata: Metadata = {
  metadataBase: new URL("https://wt-drawing.vercel.app"),
  title: {
    default: "WhatTheDrawing - Multiplayer Drawing & Guessing Game",
    template: "WhatTheDrawing | %s",
  },
  description: "What The Drawing - WTD!? is a fun multiplayer drawing and guessing game. Challenge friends, test your creativity, and guess words in real-time!",
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "WhatTheDrawing - Multiplayer Drawing & Guessing Game",
    description: "Join the fun in this online multiplayer drawing game! Draw words, guess correctly, and compete with players worldwide.",
    images: ["/wtd-og.png"],
  },
  keywords: [
    "WhatTheDrawing",
    "What The Drawing",
    "WTD",
    "Multiplayer Drawing Game",
    "Guessing Game",
    "Online Pictionary",
    "Draw and Guess",
    "Party Game",
    "Skribbl.io Alternative",
    "Fun Online Game",
    "Guess The Drawing",
    "Drawing Guessing Game",
    "Drawing Game",
  ],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          londrina_shadow.variable, gochi_hand.variable,
          gochi_hand.className,
          "antialiased min-h-screen bg-[url(/paper-textrue.png)] flex flex-col items-center text-primary"
        )}
      >
        <Header />
          <main className="flex-grow w-full flex flex-col items-center">
            {children}
          </main>
        <Footer />
      </body>
    </html>
  );
}
