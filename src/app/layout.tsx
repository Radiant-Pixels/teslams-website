import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Oswald, Caveat, Iceberg } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const iceberg = Iceberg({
  variable: "--font-iceberg",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-oswald",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-caveat",
});

export const metadata: Metadata = {
  title: "Teslams'25",
  description: "Innovation through Sparks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${iceberg.variable} ${oswald.variable} ${caveat.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
