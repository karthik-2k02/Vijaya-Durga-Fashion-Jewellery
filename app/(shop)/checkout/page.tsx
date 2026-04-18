"use client";
import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { supabase } from "@/lib/supabase";
import Link from "next/link";

export default function CheckoutPage() {
  const { cart, clearCart, removeFromCart } = useCart();
  const [formData, setFormData] = useState({ name: "", phone: "", address: "" });
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const subtotal = cart.reduce((sum, item) => {
    const price = Number(item.price.replace(/[^0-9.-]+/g, ""));
    return sum + price;
  }, 0);

  const shipping = subtotal > 1500 || subtotal === 0 ? 0 : 60;
  const grandTotal = subtotal + shipping;

  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;
    setLoading(true);

    try {
      const { error } = await supabase.from("orders").insert([{
        customer_name: formData.name,
        whatsapp_number: formData.phone,
        address: formData.address,
        items: cart,
        total_amount: grandTotal.toString()
      }]);

      if (error) throw error;

      const itemList = cart.map((item, i) => `${i + 1}. ${item.name} (${item.price})`).join("%0A");
      const message = `*NEW ORDER: VIJAYA DURGA*%0A` +
        `--------------------------%0A` +
        `*Customer:* ${formData.name}%0A` +
        `*Items:*%0A${itemList}%0A` +
        `--------------------------%0A` +
        `*GRAND TOTAL: ₹${grandTotal}*%0A` +
        `--------------------------%0A` +
        `*Address:* ${formData.address}`;

      window.location.href = `https://wa.me/919866326712?text=${message}`;
      clearCart();
    } catch (err: any) {
      alert("Error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-[#faf9f6] text-stone-900 selection:bg-[#d8a84e]/20">
      
      {/* Elegance detail texture */}
      <div className="absolute inset-0 z-0 opacity-[0.03] bg-[url('/stone-texture.png')] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 animate-fade-in">
        
        {/* HEADER SECTION */}
        <header className="mb-20 text-center flex flex-col items-center">
          <span className="text-[10px] font-black uppercase tracking-[0.6em] text-stone-400 mb-2">Secure Checkout</span>
          <h1 className="text-4xl font-light tracking-[0.4em] uppercase text-[#0b422c]">Review Bag</h1>
          <div className="w-16 h-[2px] bg-[#d8a84e] mt-4 rounded-full"></div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          
          {/* LEFT: FLOATING GLASSMORTPHISM CARDS */}
          <section className="space-y-6">
            {cart.length > 0 ? (
              cart.map((item, idx) => (
                <div 
                  key={`${item.id}-${idx}`} 
                  className="group flex gap-8 items-center bg-white/70 backdrop-blur-sm p-6 rounded-[2.5rem] border border-white/50 shadow-sm hover:shadow-xl hover:scale-[1.01] transition-all duration-500 animate-slide-in-up"
                  style={{ animationDelay: `${idx * 150}ms` }}
                >
                  <div className="w-28 h-28 rounded-[1.8rem] bg-stone-50 overflow-hidden relative shadow-inner">
                    <img 
                      src={item.image_url} 
                      alt="" 
                      className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700" 
                    />
                  </div>
                  
                  <div className="flex-grow space-y-2 py-2">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-[#d8a84e] bg-[#d8a84e]/10 px-3 py-1 rounded-full">{item.category}</span>
                    <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#0b422c] pt-2">{item.name}</h3>
                    <p className="text-[#0b422c] text-sm font-medium italic tracking-tight">{item.price}</p>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-[9px] uppercase tracking-widest text-red-300 hover:text-red-500 transition-colors pt-4 block border-b border-transparent hover:border-red-500"
                    >
                      Remove Item
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex flex-col items-center justify-center h-80 bg-white p-12 rounded-[2.5rem] border border-dashed border-stone-100 text-center animate-pulse">
                <span className="text-4xl mb-4 opacity-10">💎</span>
                <p className="text-stone-400 italic text-sm">Your selection is currently empty.</p>
                <Link href="/" className="mt-8 px-6 py-2 border border-stone-100 rounded-full text-[10px] uppercase font-bold tracking-widest text-stone-500 hover:bg-stone-50 transition-colors">Return to Collections</Link>
              </div>
            )}
          </section>

          {/* RIGHT: CLEAN ORDER FORM WITH SUMMARY */}
          <section className="relative lg:pt-10">
            <div className="sticky top-24 space-y-12">
              
              {/* TOTALS DISPLAY */}
              <div className="bg-white p-10 rounded-[2.5rem] shadow-lg border border-stone-50">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-400 mb-8">Summary</h3>
                <div className="space-y-4">
                  <div className="flex justify-between text-xs tracking-widest uppercase text-stone-500 font-medium">
                    <span>Subtotal</span>
                    <span>₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between text-xs tracking-widest uppercase text-stone-500 font-medium pb-5">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? "Complimentary" : `₹${shipping}`}</span>
                  </div>
                  <div className="flex justify-between items-baseline pt-6 border-t border-stone-100">
                    <span className="uppercase text-[10px] font-black tracking-[0.4em] text-stone-300 self-center">Grand Total</span>
                    <span className="text-4xl text-[#0b422c] font-black tracking-tighter italic">₹{grandTotal}</span>
                  </div>
                </div>
              </div>

              {/* FORM */}
              <form onSubmit={handlePlaceOrder} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <input 
                    type="text" 
                    placeholder="FULL NAME" 
                    required 
                    className="col-span-1 w-full p-4 bg-white rounded-xl border border-stone-50 outline-none focus:border-[#d8a84e]/30 transition-all text-xs placeholder:text-stone-300 uppercase tracking-wider"
                    onChange={e => setFormData({...formData, name: e.target.value})} 
                  />
                  <input 
                    type="text" 
                    placeholder="WHATSAPP PHONE" 
                    required 
                    className="col-span-1 w-full p-4 bg-white rounded-xl border border-stone-50 outline-none focus:border-[#d8a84e]/30 transition-all text-xs font-mono"
                    onChange={e => setFormData({...formData, phone: e.target.value})} 
                  />
                </div>
                <textarea 
                  placeholder="DELIVERY ADDRESS (HOUSE NO, STREET, CITY, PINCODE)" 
                  required 
                  className="w-full p-4 bg-white rounded-xl border border-stone-50 outline-none focus:border-[#d8a84e]/30 transition-all text-xs h-28 resize-none"
                  onChange={e => setFormData({...formData, address: e.target.value})} 
                />

                {/* THE NEW SHRINKED BUTTON (CENTERED & REFINED) */}
                <div className="flex justify-center pt-8">
                  <button 
                    disabled={loading || cart.length === 0}
                    className="group relative px-12 py-4 bg-[#0b422c] text-[#d8a84e] text-[10px] font-bold uppercase tracking-[0.5em] rounded-full hover:shadow-[0_10px_30px_rgba(216,168,78,0.2)] hover:bg-[#083322] transition-all disabled:opacity-20 active:scale-95 shadow-md overflow-hidden"
                  >
                    <span className="relative z-10">{loading ? "PROCESSING..." : "CONFIRM ORDER"}</span>
                    <div className="absolute inset-0 bg-[#d8a84e]/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  </button>
                </div>
              </form>

              <p className="text-[9px] text-center text-stone-300 tracking-[0.3em] uppercase pt-10">
                Secured Checkout • WhatsApp Confirmation
              </p>
            </div>
          </section>

        </div>
      </div>

      <style jsx global>{`
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slide-in-up { 
          from { opacity: 0; transform: translateY(15px); } 
          to { opacity: 1; transform: translateY(0); } 
        }
        .animate-fade-in { animation: fade-in 1s ease-out; }
        .animate-slide-in-up { animation: slide-in-up 0.6s ease-out forwards; opacity: 0; }
      `}</style>
    </main>
  );
}