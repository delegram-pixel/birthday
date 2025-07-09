import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Cinzel_Decorative, Great_Vibes, Libre_Baskerville } from "next/font/google"

const cinzel = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-cinzel",
})
const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
})
const libre = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-libre",
})

export const metadata: Metadata = {
  title: "A Magical Birthday for You ✨",
  description: "A Harry Potter-inspired birthday celebration",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${cinzel.variable} ${greatVibes.variable} ${libre.variable} font-libre`}>{children}</body>
    </html>
  )
}
