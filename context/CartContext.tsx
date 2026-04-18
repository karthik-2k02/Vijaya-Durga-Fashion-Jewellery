"use client";
import { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface Product {
  id: string;
  name: string;
  price: string;
  image_url: string;
  category: string;
}

interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("vijaya_durga_cart");
    if (savedCart) {
      try { setCart(JSON.parse(savedCart)); } catch (e) { console.error(e); }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("vijaya_durga_cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product) => setCart((prev) => [...prev, product]);
  const removeFromCart = (id: string) => setCart((prev) => prev.filter((item) => item.id !== id));
  const clearCart = () => { setCart([]); localStorage.removeItem("vijaya_durga_cart"); };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};