import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Børnegaveguiden - Find den perfekte gave til børn",
    template: "%s | Børnegaveguiden",
  },
  description:
    "Ærlige anbefalinger af kvalitetsgaver til børn i alle aldre. Fra legetøj og bøger til oplevelser og elektronik. Uafhængige anmeldelser fra danske forældre.",
  keywords: [
    "børnegaver",
    "gaver til børn",
    "legetøj",
    "fødselsdagsgaver",
    "julegaver børn",
    "konfirmationsgaver",
    "gave til barn",
  ],
  authors: [{ name: "Børnegaveguiden" }],
  creator: "Børnegaveguiden",
  openGraph: {
    type: "website",
    locale: "da_DK",
    siteName: "Børnegaveguiden",
    title: "Børnegaveguiden - Find den perfekte gave til børn",
    description:
      "Ærlige anbefalinger af kvalitetsgaver til børn i alle aldre.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Børnegaveguiden",
    description:
      "Ærlige anbefalinger af kvalitetsgaver til børn i alle aldre.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da">
      <body className={`${nunito.variable} font-body antialiased bg-paper text-text-primary`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
