import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://neocutmedia.com"),
  title: "Neo Cut Media | Content Creation, Branding & Video",
  description:
    "Neo Cut Media helps growing brands plan, create, edit, and manage polished content across branding, video, and social platforms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
