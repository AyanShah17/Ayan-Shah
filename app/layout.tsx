import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@/components/analytics"
import ClientLayout from "./client"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Ayan Shah | Site Reliability Engineer",
  description:
    "Portfolio of Ayan Shah, a Site Reliability Engineer specializing in Python, Docker, CI/CD, and cloud infrastructure with focus on reliability and performance.",
  keywords: [
    "Ayan Shah",
    "Site Reliability Engineer",
    "Software Engineer",
    "Python",
    "Docker",
    "CI/CD",
    "DevOps",
    "SRE",
  ],
  authors: [{ name: "Ayan Shah" }],
  creator: "Ayan Shah",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ayanshah.com",
    title: "Ayan Shah | Site Reliability Engineer",
    description:
      "Portfolio of Ayan Shah, a Site Reliability Engineer specializing in Python, Docker, CI/CD, and cloud infrastructure with focus on reliability and performance.",
    siteName: "Ayan Shah Portfolio",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "Ayan Shah Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayan Shah | Site Reliability Engineer",
    description:
      "Portfolio of Ayan Shah, a Site Reliability Engineer specializing in Python, Docker, CI/CD, and cloud infrastructure with focus on reliability and performance.",
    creator: "@ayanshah",
    images: ["/favicon.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Suspense>
        <ClientLayout>{children}</ClientLayout>
      </Suspense>
      <Analytics />
    </>
  )
}


import './globals.css'