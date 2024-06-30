import type { Metadata } from "next"
import { Figtree, Inter } from "next/font/google"
import "./globals.css"

const figtree = Figtree({ subsets: ["latin"] })
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Luxury Car Marketplace For Crypto Community | CryptoAutos",
  description:
    "Embark on an Unprecedented Journey: Discover the Ultimate Fusion of Luxury and Cryptocurrency in Our Exclusive Luxury Car Marketplace for Crypto Enthusiasts",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${figtree.className}`}>{children}</body>
    </html>
  )
}
