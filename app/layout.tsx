import type { Metadata } from "next"
import { Cairo } from "next/font/google"
import "./globals.css"

const cairo = Cairo({ subsets: ["arabic", "latin"], weight: ["300","400","600","700","900"] })

export const metadata: Metadata = {
  title: "PLATÓ – العاصمة الإدارية R8 | Artal Developments",
  description: "PLATÓ من Artal Developments في العاصمة الإدارية R8 — EOI مفتوح الآن. شقق من 2,275,000 جنيه. 5% مقدم وأقساط حتى 12 سنة.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={cairo.className}>{children}</body>
    </html>
  )
}
