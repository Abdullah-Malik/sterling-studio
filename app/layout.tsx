import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sterling Studio | Premium Video Post-Production",
  description:
    "Sterling Studio transforms raw footage into high-retention visual assets for creators, companies, entrepreneurs, and corporate brands.",
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
