"use client";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase"; 

export default function AdminDashboard() {
  const [authorized, setAuthorized] = useState(false);
  const [products, setProducts] = useState<any[]>([]);
  const [file, setFile] = useState<File | null>(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("earrings");
  const [uploading, setUploading] = useState(false);
  const [status, setStatus] = useState("");

  // 1. SECURITY & INITIAL LOAD
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isAdminLoggedIn");
    if (isLoggedIn !== "true") {
      window.location.replace("/admin/login");
    } else {
      setAuthorized(true);
      fetchProducts(); // Load current inventory
    }
  }, []);

  // 2. FETCH INVENTORY
  const fetchProducts = async () => {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("created_at", { ascending: false });
    
    if (!error) setProducts(data || []);
  };

  // 3. UPLOAD PRODUCT
  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return setStatus("❌ Select an image.");
    
    setUploading(true);
    setStatus("⏳ Processing...");

    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${crypto.randomUUID()}.${fileExt}`;
      const filePath = `products/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('product-images')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('product-images')
        .getPublicUrl(filePath);

      const { error: dbError } = await supabase
        .from('products')
        .insert([{ name, price, category, image_url: publicUrl }]);

      if (dbError) throw dbError;

      setStatus("✅ Product Live!");
      setName(""); setPrice(""); setFile(null);
      fetchProducts(); // Refresh list
    } catch (err: any) {
      setStatus(`❌ Error: ${err.message}`);
    } finally {
      setUploading(false);
    }
  };

  // 4. DELETE PRODUCT (System Clean-up)
  const handleDelete = async (id: string, imageUrl: string) => {
    if (!confirm("Are you sure you want to delete this item?")) return;

    try {
      // Step A: Delete from Database
      const { error: dbError } = await supabase
        .from("products")
        .delete()
        .eq("id", id);
      
      if (dbError) throw dbError;

      // Step B: Extract filename from URL and delete from Storage
      const fileName = imageUrl.split('/').pop();
      if (fileName) {
        await supabase.storage
          .from('product-images')
          .remove([`products/${fileName}`]);
      }

      fetchProducts(); // Refresh the UI
      alert("Product removed successfully.");
    } catch (err: any) {
      alert(`Delete failed: ${err.message}`);
    }
  };

  if (!authorized) return null;

  return (
    <main className="min-h-screen bg-stone-50 p-4 md:p-12">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* SECTION: UPLOAD FORM */}
        <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-stone-100 relative">
          <button 
            onClick={() => { localStorage.removeItem("isAdminLoggedIn"); window.location.replace("/admin/login"); }}
            className="absolute top-6 right-8 text-[10px] font-bold text-red-400 uppercase tracking-widest"
          >
            Logout
          </button>
          
          <h2 className="text-xl font-bold text-[#0b422c] text-center mb-8 uppercase tracking-widest">Add New Product</h2>
          
          <form onSubmit={handleUpload} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files?.[0] || null)} className="w-full p-3 border-2 border-dashed rounded-xl text-xs" />
              <input type="text" placeholder="Title" className="w-full p-4 bg-stone-50 rounded-xl outline-none" value={name} onChange={(e) => setName(e.target.value)} required />
              <input type="text" placeholder="Price" className="w-full p-4 bg-stone-50 rounded-xl outline-none" value={price} onChange={(e) => setPrice(e.target.value)} required />
              <select className="w-full p-4 bg-stone-50 rounded-xl outline-none" value={category} onChange={(e) => setCategory(e.target.value)}>
                 <option value="earrings">Earrings</option>
                 <option value="necklaces">Necklaces</option>
                 <option value="bangles">Bangles</option>
                 <option value="anklets">Anklets</option>
                 <option value="sets">Full Sets</option>
                 <option value="more">More</option>
              </select>
              <button disabled={uploading} className="w-full bg-[#0b422c] text-[#d8a84e] py-4 rounded-xl font-bold uppercase tracking-widest text-xs">
                {uploading ? "Uploading..." : "Publish to Shop"}
              </button>
              {status && <p className="text-center text-[10px] uppercase font-bold text-emerald-600 mt-2">{status}</p>}
            </div>
            
            {/* Preview Area */}
            <div className="hidden md:flex items-center justify-center bg-stone-50 rounded-2xl border border-stone-100">
              {file ? (
                <img src={URL.createObjectURL(file)} alt="Preview" className="max-h-60 rounded-lg shadow-md" />
              ) : (
                <p className="text-stone-300 text-xs italic tracking-widest">Image Preview</p>
              )}
            </div>
          </form>
        </div>

        {/* SECTION: LIVE INVENTORY LIST */}
        <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-stone-100">
          <h2 className="text-xl font-bold text-[#0b422c] mb-8 uppercase tracking-widest">Current Inventory ({products.length})</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((item) => (
              <div key={item.id} className="group border border-stone-100 p-4 rounded-2xl hover:shadow-lg transition-all">
                <div className="relative aspect-square mb-4 overflow-hidden rounded-xl bg-stone-50">
                  <img src={item.image_url} alt={item.name} className="object-cover w-full h-full" />
                </div>
                <h3 className="text-xs font-bold uppercase tracking-wider mb-1">{item.name}</h3>
                <p className="text-[#d8a84e] text-xs font-bold mb-4">{item.price}</p>
                
                <button 
                  onClick={() => handleDelete(item.id, item.image_url)}
                  className="w-full py-2 bg-red-50 text-red-500 text-[10px] font-bold uppercase tracking-widest rounded-lg hover:bg-red-500 hover:text-white transition-all"
                >
                  Delete Item
                </button>
              </div>
            ))}
          </div>
          
          {products.length === 0 && (
            <p className="text-center text-stone-400 text-xs py-10">No products in the vault yet.</p>
          )}
        </div>

      </div>
    </main>
  );
}