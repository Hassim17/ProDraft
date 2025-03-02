import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Provider from "./provider";

export const metadata: Metadata = {
  title: "ProDraft",
  description: "Smart Drafting for Smart Teams",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
     appearance={{
      baseTheme: dark,
      variables: { 
        colorPrimary: "#3371FF",
        fontSize: "16px",
       }
     }}
    >
      <html lang="en">
        <body
          className={`min-h-screen ${fontSans} antialiased`}
        > 
          <Provider>
            {children}
          </Provider>
        </body>
      </html>
    </ClerkProvider>
  );
}
