"use client"; // Note: Needed because we use useCart() in the header
import { Metadata } from "next";
import Link from "next/link";
import "../globals.css";
import { CartProvider, useCart } from "@/context/CartContext";

// Component to handle the dynamic Cart count in the header
function HeaderActions() {
  const { cart } = useCart();
  
  return (
    <nav className="flex flex-wrap justify-center items-center gap-5 md:gap-6 text-sm text-emerald-50">
      <Link href="/" className="hover:text-[#d8a84e] transition">Home</Link>
      <Link href="/about" className="hover:text-[#d8a84e] transition">About</Link>
      <Link href="/contact" className="hover:text-[#d8a84e] transition">Contact</Link>
      
      {/* THE BAG BUTTON */}
      <Link href="/checkout" className="relative group">
        <span className="bg-[#145d40] px-4 py-2 rounded-full border border-[#d8a84e]/30 group-hover:border-[#d8a84e] transition-all flex items-center gap-2">
          <span className="text-[10px] font-bold tracking-widest uppercase text-[#d8a84e]">Bag</span>
          {cart.length > 0 && (
            <span className="bg-[#d8a84e] text-[#0b422c] text-[10px] font-bold h-5 w-5 rounded-full flex items-center justify-center animate-pulse">
              {cart.length}
            </span>
          )}
        </span>
      </Link>
    </nav>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 font-sans antialiased overflow-x-hidden">
        <CartProvider>
          {/* HEADER */}
          <header className="bg-[#0b422c] px-6 py-4 flex flex-col md:flex-row justify-between items-center border-b border-[#145d40] gap-4 sticky top-0 z-50 shadow-lg">
            <Link href="/">
              <h1 className="text-2xl font-semibold tracking-wide cursor-pointer">
                <span className="text-white">Vijaya</span> <span className="text-[#d8a84e]">Durga</span>
              </h1>
            </Link>
            
            <HeaderActions />
          </header>

          {/* MAIN CONTENT */}
          <div className="min-h-screen">
            {children}
          </div>

          {/* FOOTER */}
          <footer className="relative bg-[#0b422c] text-white pt-16 pb-20 overflow-hidden border-t border-[#145d40]">
            <div 
              className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
              style={{ 
                backgroundImage: `url('/footer-banner.png')`, 
                opacity: '0.4', 
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#0b422c] via-transparent to-[#0b422c]"></div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-left mb-12">
              <div>
                <h3 className="font-medium text-[#d8a84e] mb-5 text-lg tracking-wide uppercase drop-shadow-md">Our Heritage</h3>
                <p className="text-white leading-relaxed font-normal text-sm">
                  Vijaya Durga is dedicated to the modern woman who cherishes tradition. Every piece in our collection is meticulously curated for its craftsmanship.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-[#d8a84e] mb-5 text-lg tracking-wide uppercase drop-shadow-md">The Promise</h3>
                <div className="flex flex-col gap-4 text-white text-sm font-normal">
                  <p className="flex items-center gap-3 hover:text-[#d8a84e] transition cursor-default">
                    <span className="text-[#d8a84e]">✦</span> Fast & Secured Shipping
                  </p>
                  <p className="flex items-center gap-3 hover:text-[#d8a84e] transition cursor-default">
                    <span className="text-[#d8a84e]">✦</span> Hand-Inspected Quality
                  </p>
                  <p className="flex items-center gap-3 hover:text-[#d8a84e] transition cursor-default">
                    <span className="text-[#d8a84e]">✦</span> Skin-Friendly Materials
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-medium text-[#d8a84e] mb-5 text-lg tracking-wide uppercase drop-shadow-md">Reach Us</h3>
                <div className="flex flex-col gap-4 text-white text-sm font-normal">
                  <p className="flex items-start gap-3">
                    <span className="mt-1">📱</span> <span>WhatsApp: +91 90327 43444</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="mt-1">🕒</span> <span>Mon-Sat: 10 AM - 7 PM</span>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative z-10 text-center px-6 border-t border-white/10 pt-10">
              <p className="text-[10px] text-white/60 tracking-[0.2em] uppercase">
                © 2026 Vijaya Durga Fashion Jewellery
              </p>
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}