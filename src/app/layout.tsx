import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import ScrollProgress from "@/components/motion/scroll-progress"

const inter = Inter({ subsets: ["latin"] })

const siteUrl = "https://tomisin-portfolio.netlify.app"
const description =
  "Data and AI Engineer building ETL pipelines, analytics warehouses, retrieval-and-ranking systems, and multi-tenant RAG infrastructure."

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Ayodabo Tomisin — Data & AI Engineer",
  description,
  keywords: [
    "Data Engineer",
    "AI Engineer",
    "ETL",
    "Airflow",
    "RAG",
    "Vector Databases",
    "Analytics Engineering",
    "Python",
    "FastAPI",
    "PostgreSQL",
  ],
  authors: [{ name: "Ayodabo Tomisin Kolawole" }],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Ayodabo Tomisin — Data & AI Engineer",
    description,
    siteName: "Ayodabo Tomisin",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayodabo Tomisin — Data & AI Engineer",
    description,
    creator: "@ayodabo_tomisin",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ScrollProgress />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
