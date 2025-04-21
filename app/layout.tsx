import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { CartProvider } from "./context/CartContext";
import { FavoritesProvider } from "./context/FavoritesContext";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EcoShop",
  description: "An Eco-Friendly Shopping Experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={montserrat.className}>
          <CartProvider>
            <FavoritesProvider>{children}</FavoritesProvider>
          </CartProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
