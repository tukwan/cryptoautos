import "@/styles/globals.scss"
import type { Metadata } from "next"
import { Figtree, Inter } from "next/font/google"
import clsx from "clsx"

const figtree = Figtree({ subsets: ["latin"], variable: "--font-figtree" })
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={clsx(figtree.variable, inter.variable)}>{children}</body>
    </html>
  )
}

export const metadata: Metadata = {
  title: "Luxury Car Marketplace For Crypto Community | CryptoAutos",
  description:
    "Embark on an Unprecedented Journey: Discover the Ultimate Fusion of Luxury and Cryptocurrency in Our Exclusive Luxury Car Marketplace for Crypto Enthusiasts",
  keywords:
    "Luxury Cars, Crypto Marketplace, Cryptocurrency, Automotive Industry, Blockchain, Web3",
  openGraph: {
    title: "Luxury Car Marketplace For Crypto Community | CryptoAutos",
    description:
      "Revolutionizing the automotive industry by bridging the gap between Web2 and Web3 through a global car marketplace and Real-World Asset platform.",
    url: "https://www.cryptoautos.com",
    type: "website",
    images: [
      {
        url: "https://cryptoautos-five.vercel.app/graph.webp",
        alt: "CryptoAutos Marketplace",
      },
    ],
  },
  twitter: {
    title: "Luxury Car Marketplace For Crypto Community | CryptoAutos",
    description:
      "Discover the ultimate fusion of luxury and cryptocurrency in our exclusive marketplace for crypto enthusiasts.",
    site: "@CryptoAutos",
    images: [
      {
        url: "https://cryptoautos-five.vercel.app/graph.webp",
        alt: "CryptoAutos Marketplace",
      },
    ],
  },
}
