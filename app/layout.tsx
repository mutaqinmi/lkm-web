import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" })
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "Kelompok 14 | LKM Informatika 2026",
  description: "Web blog materi LKM Informatika 2026 oleh Kelompok 14",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased scheme-light`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
