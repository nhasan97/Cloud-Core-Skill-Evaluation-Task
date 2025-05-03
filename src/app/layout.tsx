import type { Metadata } from "next";
import "../styles/globals.css";
import { poppins } from "../config/fontConfig";
import Providers from "../lib/Providers";

export const metadata: Metadata = {
  title: "Gritly | Wear Your Drive",
  description: "Modern men’s clothing brand",
  icons: {
    icon: "/assets/icons/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${poppins.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
