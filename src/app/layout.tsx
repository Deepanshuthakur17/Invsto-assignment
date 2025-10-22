import type { Metadata } from "next";
import { Manrope } from 'next/font/google'
import "./globals.css";

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  display: 'swap',
})


export const metadata: Metadata = {
  title: "Assignment Pricing Model",
  description: "create by next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.className}>
    <body>{children}</body>
  </html>
  );
}
