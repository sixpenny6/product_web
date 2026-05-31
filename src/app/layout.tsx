import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tubular Motor Systems",
  description:
    "B2B tubular motor product website for shading, shutters, garage doors, and servo control applications."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
