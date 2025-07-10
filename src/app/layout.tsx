import type { Metadata } from "next";
import { Geist, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import NavbarContainer from "@/components/organisms/NavbarContainer";
import FooterContainer from "@/components/organisms/FooterContainer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const fontJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Best Holiday in Bali with Kanciana Trip",
  description: "Best Holiday in Bali with populer agent Kanciana Trip",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning>
      <body
        className={`${fontJakartaSans.variable} ${geistSans.variable} min-h-screen antialiased`}>
        <NavbarContainer />
        <main className="bg-gray-50 py-16 md:py-20">{children}</main>
        <FooterContainer />
      </body>
    </html>
  );
}
