import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sterling Studio | Content Creation, Branding & Video",
  description:
    "Sterling Studio helps growing brands plan, create, edit, and manage polished content across branding, video, and social platforms.",
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
