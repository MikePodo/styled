import React, { createContext, useContext, useState } from "react";

import { ProductType } from "~types/ProductsType";

interface DefaultContext {
  qty: number;
  increaseQty: () => void;
  decreaseQty: () => void;

  showCart: boolean;
  cartItems: ProductType[];
}

interface ContextProps {
  children: React.ReactNode;
}

const ShopContext = createContext<DefaultContext>({} as DefaultContext);

export const StateContext = ({ children }: ContextProps) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState<ProductType[]>([]);
  const [qty, setQty] = useState(1);

  const increaseQty = () => setQty((prev) => prev + 1);
  const decreaseQty = () => setQty((prev) => (prev - 1 < 1 ? 1 : prev - 1));

  return (
    <ShopContext.Provider
      value={{ qty, increaseQty, decreaseQty, showCart, cartItems }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useStateContext = () => useContext(ShopContext);
