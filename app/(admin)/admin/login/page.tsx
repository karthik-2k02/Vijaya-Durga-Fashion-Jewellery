"use client";
import { useState, useEffect } from "react";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Clean up any old partial sessions on mount
  useEffect(() => {
    const session = localStorage.getItem("isAdminLoggedIn");
    if (session === "true") {
      window.location.href = "/admin";
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Credentials Check
    if (username === "admin" && password === "durga2026") {
      // 1. Commit to storage
      localStorage.setItem("isAdminLoggedIn", "true");
      
      // 2. Immediate hard redirect to bypass Next.js router cache
      window.location.replace("/admin"); 
    } else {
      alert("Access Denied: Invalid Credentials");
    }
  };

  return (
    <main className="min-h-screen bg-stone-100 flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-white p-10 rounded-[2.5rem] shadow-2xl border border-stone-200">
        <div className="text-center mb-10">
          <h2 className="text-[#0b422c] text-2xl font-bold uppercase tracking-[0.2em]">Admin Portal</h2>
          <div className="w-12 h-1 bg-[#d8a84e] mx-auto mt-2 rounded-full"></div>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-4">
            <input 
              type="text" 
              placeholder="Username" 
              className="w-full p-4 bg-stone-50 rounded-xl outline-none border border-stone-100 focus:border-[#d8a84e] transition-all" 
              onChange={(e) => setUsername(e.target.value)} 
              required
            />
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full p-4 bg-stone-50 rounded-xl outline-none border border-stone-100 focus:border-[#d8a84e] transition-all" 
              onChange={(e) => setPassword(e.target.value)} 
              required
            />
          </div>
          
          <button type="submit" className="w-full bg-[#0b422c] text-[#d8a84e] py-4 rounded-xl font-bold uppercase tracking-widest text-xs animate-shimmer shadow-lg active:scale-95 transition-transform">
            Secure Sign In
          </button>
        </form>
      </div>
    </main>
  );
}