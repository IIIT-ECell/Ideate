import type { Metadata } from "next";
import Navbar from "@/app/components/navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Ideate",
    default: "Ideate",
  },
  description: "Ideate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
