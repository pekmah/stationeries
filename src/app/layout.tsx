import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";

import "./globals.css";
import GlobalServices from "@/services/GlobalServices";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });
const rail = Raleway({
  subsets: ["latin"],
  variable: "--font-rail",
});

export const generateMetadata = async (): Promise<Metadata> => {
  const metaData = await GlobalServices.getMetaData();

  return {
    title: metaData.title,
    description: metaData.description,
  };
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${rail.className}`}>{children}</body>

      <Toaster />
    </html>
  );
}
