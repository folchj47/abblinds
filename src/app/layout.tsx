import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ABBlinds - Premium Window Treatments & Custom Blinds",
  description: "Transform your windows with high-quality blinds, curtains, and custom window treatments. Modern, elegant solutions for homes and offices.",
  keywords: "blinds, curtains, window treatments, custom blinds, roller blinds, vertical blinds, venetian blinds, motorized blinds, sheer curtains, blackout curtains",
  authors: [{ name: "ABBlinds" }],
  openGraph: {
    title: "ABBlinds - Premium Window Treatments & Custom Blinds",
    description: "Transform your windows with high-quality blinds, curtains, and custom window treatments.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased`}
      >
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
