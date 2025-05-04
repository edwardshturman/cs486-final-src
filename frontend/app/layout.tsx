import type { Metadata } from "next"
import localFont from "next/font/local"

import "./globals.css"

const TronicaMono = localFont({
  src: [
    {
      path: "../public/fonts/TronicaMono.woff",
      weight: "400",
      style: "normal"
    }
  ],
  variable: "--font-tronica-mono"
})

const iAWriterQuattro = localFont({
  src: [
    {
      path: "../public/fonts/iAWriterQuattroS-Regular.woff2",
      weight: "400",
      style: "normal"
    },
    {
      path: "../public/fonts/iAWriterQuattroS-Italic.woff2",
      weight: "400",
      style: "italic"
    },
    {
      path: "../public/fonts/iAWriterQuattroS-Bold.woff2",
      weight: "600",
      style: "normal"
    },
    {
      path: "../public/fonts/iAWriterQuattroS-BoldItalic.woff2",
      weight: "600",
      style: "italic"
    }
  ],
  variable: "--font-ia-writer-quattro"
})

export const metadata: Metadata = {
  title: "compsigh Events API Demo",
  description: "CS 486 Final by Edward Shturman"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${TronicaMono.variable} ${iAWriterQuattro.variable}`}>
        {children}
      </body>
    </html>
  )
}
