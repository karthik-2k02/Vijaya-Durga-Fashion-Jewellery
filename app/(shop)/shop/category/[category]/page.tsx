"use client";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { useCart } from "@/context/CartContext"; // Add this import
import { use } from "react";

export default function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = use(params);
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart(); // Initialize the cart trigger

  useEffect(() => {
    async function fetchProducts() {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('category', category);
      
      if (!error) setProducts(data);
      setLoading(false);
    }
    fetchProducts();
  }, [category]);

  return (
    <main className="min-h-screen bg-stone-50 py-12 px-6">
      {/* Category Title Header */}
      <div className="max-w-6xl mx-auto mb-10 text-center">
        <h2 className="text-2xl font-bold text-[#0b422c] uppercase tracking-[0.2em]">{category}</h2>
        <div className="w-12 h-1 bg-[#d8a84e] mx-auto mt-2 rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {loading ? (
          <p className="col-span-full text-center py-20 animate-pulse text-[#0b422c]">Searching the vault...</p>
        ) : products.length > 0 ? (
          products.map((item) => (
            <div key={item.id} className="bg-white rounded-[2rem] overflow-hidden shadow-md hover:shadow-xl transition-shadow flex flex-col h-full animate-fade-in-up border border-stone-100">
              <div className="relative group overflow-hidden">
                <img src={item.image_url} alt={item.name} className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              
              <div className="p-5 flex flex-col flex-grow">
                <h4 className="text-[#0b422c] font-bold text-sm mb-1 uppercase tracking-tight">{item.name}</h4>
                <p className="text-[#d8a84e] font-bold text-base mb-4">{item.price}</p>
                
                {/* THE NEW ADD TO BAG BUTTON */}
                <button 
                  onClick={() => addToCart(item)}
                  className="mt-auto w-full py-3 bg-[#0b422c] text-[#d8a84e] text-[10px] font-bold uppercase tracking-widest rounded-xl hover:bg-[#083322] active:scale-95 transition-all shadow-lg"
                >
                  Add to Bag
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center py-20 text-stone-400 italic">No items found in this collection yet.</p>
        )}
      </div>
    </main>
  );
}