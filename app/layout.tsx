import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "PLATÓ by Artal Developments | العاصمة الإدارية الجديدة R8",
  description:
    "احجز وحدتك في PLATÓ أحدث مشروعات ارتال للتطوير العقاري في الحي السكني الثامن R8 بالعاصمة الإدارية الجديدة. شقق وتاون هاوس ودوبلكس بمقدم 5% وتقسيط حتى 12 سنة.",
  keywords:
    "PLATO, Artal, ارتال, العاصمة الإدارية, R8, شقق, تاون هاوس, دوبلكس, عقارات مصر",
  openGraph: {
    title: "PLATÓ by Artal Developments",
    description:
      "أحدث مشروعات ارتال في العاصمة الإدارية الجديدة R8 - مقدم 5% وتقسيط 12 سنة",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}

        {/* Google Tag Manager - in body per project convention */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-XXXXXXX');`,
          }}
        />
      </body>
    </html>
  );
}
