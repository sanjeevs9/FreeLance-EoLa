import { createContext, useEffect, useState } from "react";

export const CartContext = createContext([]);

export default function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem("eola-cart");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("eola-cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(product) {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.SKU === product.SKU);
      if (existing) {
        return prev.map((item) =>
          item.product.SKU === product.SKU
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  }

  function removeFromCart(SKU) {
    setCart((prev) => prev.filter((item) => item.product.SKU !== SKU));
  }

  function updateQuantity(SKU, qty) {
    if (qty <= 0) {
      removeFromCart(SKU);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.SKU === SKU ? { ...item, quantity: qty } : item
      )
    );
  }

  function clearCart() {
    setCart([]);
  }

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
