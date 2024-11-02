import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import TitleProvider from "@/providers/title.provider";
import { Analytics } from "@vercel/analytics/react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const gisha = localFont({
  src: "./fonts/Gisha.ttf",
  variable: "--font-gisha",
  weight: "100 900",
});
const gishaBold = localFont({
  src: "./fonts/GishaBold.ttf",
  variable: "--font-gisha-bold",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "The Grind Academy",
  description: "The Grind Academy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${gisha.variable} ${gishaBold.variable} antialiased`}
      >
        <TitleProvider>
          {children}
        </TitleProvider>
        <Analytics />
      </body>
    </html>
  );
}
