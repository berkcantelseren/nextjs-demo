import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Learning Next",
    template: "%s | PyrismaRift",
  },
  description: "Generated by Next",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
