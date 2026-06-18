import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "China Auto Export | China Used Car Exporter & B2B Wholesale — Jetour, BYD, Toyota & More",
  description:
    "Wholesale used cars exported from Foshan, China — Jetour, Changan, BYD, Toyota, Hyundai+More. Serving Africa, Latin America & the Middle East. Direct from source dealer.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
