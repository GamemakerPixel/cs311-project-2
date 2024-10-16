import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

/*
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
*/

export const metadata: Metadata = {
  title: "Spacial Repition",
  description: "A flashcards system that shows more frequently missed cards more often.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="font-sans bg-background antialiased"
      >
        {children}
      </body>
    </html>
  );
}
