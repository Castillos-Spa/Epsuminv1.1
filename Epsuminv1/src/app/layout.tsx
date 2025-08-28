import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const garet = localFont({
  src: [
    {
      path: '../fonts/Garet-Book.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Garet-Heavy.otf',
      weight: '700',
      style: 'normal',
    }
  ],
  variable: '--font-garet'
});

const beltica = localFont({
  src: [
    {
      path: '../fonts/Baltica-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Baltica-Bold.ttf',
      weight: '700',
      style: 'normal',
    }
  ],
  variable: '--font-beltica'
});

export const metadata: Metadata = {
  title: "EPSUMIN",
  description: "by Castillos SpA",
  icons: {
    icon: "/logo.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${garet.variable} ${beltica.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
