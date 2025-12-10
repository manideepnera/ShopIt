import type { Metadata } from "next";
import "./globals.css";
import { Outfit, Poppins, Figtree, Satisfy, Lato, Lusitana,} from "next/font/google";

// Font setup
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"], variable: "--font-poppins" });
const figtree = Figtree({ subsets: ["latin"], variable: "--font-figtree" });
const satisfy = Satisfy({ subsets: ["latin"], weight: ["400"], variable: "--font-satisfy" });
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-lato" });
const lusitana = Lusitana({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-lusitana" });


export const metadata: Metadata = {
  title: "Shopit",
  description: "Your One-Stop Online Shop for Everything You Need",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${poppins.variable} ${figtree.variable} ${satisfy.variable} ${lato.variable} ${lusitana.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
