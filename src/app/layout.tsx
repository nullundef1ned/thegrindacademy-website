import localFont from "next/font/local";
import "./globals.css";
import TitleProvider from "@/providers/title.provider";
import { Analytics } from "@vercel/analytics/react";
import environmentUtil from "@/utils/env.util";
import { IMeta } from "./_module/app.interfaces";
import { PostHogProvider } from "@/providers/PostHogProvider";

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

export const generateMetadata = async () => {
  const response = await fetch(`${environmentUtil.API_URL}/website-content/meta`, {
    cache: 'no-store'
  });

  let data: Partial<IMeta> = {
    title: 'The Grind Academy',
    description: 'The Grind Academy',
    keywords: '',
    imageUrl: ''
  };

  try {
    data = (await response.json()).data as IMeta;
  } catch (error) {
    console.error(error);
  }

  const title = data?.title || 'The Grind Academy';
  const description = data?.description || 'The Grind Academy';
  const keywords = data?.keywords?.split(',') || [];
  const imageUrl = data?.imageUrl || '';

  return {
    alternates: {
      canonical: '/',
    },
    title: {
      template: `%s | ${title}`,
      default: title
    },
    description,
    keywords,
    openGraph: {
      title: {
        template: `%s | ${title}`,
        default: title
      },
      description,
      keywords,
      images: [imageUrl]
    },
    twitter: {
      title: {
        template: `%s | ${title}`,
        default: title
      },
      description,
      card: 'summary_large_image',
      images: [imageUrl]
    }
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${gisha.variable} ${gishaBold.variable} antialiased bg-background`}
      >
        <PostHogProvider>
          <TitleProvider>
            {children}
          </TitleProvider>
          <Analytics />
        </PostHogProvider>
      </body>
    </html>
  );
}