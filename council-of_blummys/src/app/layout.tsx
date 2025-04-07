import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Council of Blummys",
  description: "Con queso",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
