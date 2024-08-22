import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/navigation/page";
import Footer from "@/components/footer/page";
import ScrollToTop from "@/components/ScrollToTop";

import { Exo_2 } from "next/font/google";
const font = Exo_2({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Web Design + Development | Luminosity Web Design",
  description:
    "Don’t let the thought of creating a new website stress you out. Let us assist you. Connect with us and discover the experience of working with professionals that bring your goals to fruition.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navigation />
        {children}
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
