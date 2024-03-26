import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/components/Provider";

import "primereact/resources/themes/lara-light-blue/theme.css";
import "primeicons/primeicons.css";
import ToolBar from "@/components/ToolBar";
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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              const style = document.createElement('style')
              style.innerHTML = '@layer tailwind-base, primereact, tailwind-utilities;'
              style.setAttribute('type', 'text/css')
              document.querySelector('head').prepend(style)
            `,
          }}
        />
      </head>

      <body className={inter.className}>
      <ToolBar/>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
