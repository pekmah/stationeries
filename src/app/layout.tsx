import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const rail = Raleway({
  subsets: ["latin"],
  variable: "--font-rail",
});

export const metadata: Metadata = {
  title: "Stationery Central",
  description:
    "Stationery Central is your one-stop-shop for all your children's stationery needs. We offer a wide range of fun, colorful, and educational stationery items that inspire creativity and learning. Join us in making learning a colorful and exciting journey for your little ones!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${rail.className}`}>{children}</body>
    </html>
  );
}
