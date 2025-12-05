import type React from "react"
import type { Metadata } from "next"
import { Fredoka, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _fredoka = Fredoka({ subsets: ["latin"], variable: "--font-display" })
const _poppins = Poppins({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "Craft Cocktails - Signature Recipes",
  description: "Discover and craft premium cocktail recipes with expert techniques",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${_fredoka.variable} ${_poppins.variable}`}>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
