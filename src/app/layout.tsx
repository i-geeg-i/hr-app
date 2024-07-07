import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "QHR",
  description: "An aplication to give and pass test on sphere",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/logo.png"></link>
      <body className={inter.className}>
      <Header/>
      {children}
      </body>
    </html>
  );
}
