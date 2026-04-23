import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppinsHeading = Poppins({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const poppinsBody = Poppins({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Aithentic | AI-Powered Agency",
  description: "A bold single-page agency hero built for AI-led digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppinsHeading.variable} ${poppinsBody.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
