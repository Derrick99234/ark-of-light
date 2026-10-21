import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ark of Light for All Nations — Global Headquarters",
  description:
    "A city of refuge for all nations. The global headquarters of Gospel Pillars International Churches in Lagos, Nigeria — worship, food bank and emergency relief for every nation.",
  icons: { icon: "/ark-logo.png" },
  openGraph: {
    title: "Ark of Light for All Nations — Global Headquarters",
    description:
      "A city of refuge for all nations — worship, food bank and emergency relief for every nation.",
    images: [
      "https://arkoflightforallnations.com/wp-content/uploads/2026/03/Ark-of-light-for-all-nation-1.png",
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
