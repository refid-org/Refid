import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  description: "Welcome to Refid",
  icons: {
    apple: [
      {
        sizes: "180x180",
        type: "image/png",
        url: "/apple-touch-icon.png",
      },
    ],
    icon: [
      {
        sizes: "32x32",
        type: "image/png",
        url: "/favicon-32x32.png",
      },
      {
        sizes: "16x16",
        type: "image/png",
        url: "/favicon-16x16.png",
      },
      {
        url: "/favicon.ico",
      },
      {
        sizes: "192x192",
        url: "/android-chrome-192x192.png",
      },
      {
        sizes: "512x512",
        url: "/android-chrome-512x512.png",
      },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
      },
    ],
  },
  manifest: "/site.webmanifest",
  themeColor: "#ffffff",
  title: {
    default: "Refid",
    template: "%s | Refid",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
