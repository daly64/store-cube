import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/components/Provider";

// import "primereact/resources/themes/lara-light-blue/theme.css";
// import "primeicons/primeicons.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Store Cube",
  description: "storage management system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
