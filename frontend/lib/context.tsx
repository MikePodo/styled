import React, { createContext, useContext, useState } from "react";

import { ProductType } from "~types/ProductsType";

type SetStateType<I> = React.Dispatch<React.SetStateAction<I>>;
type CartProductType = ProductType["attributes"] & { qty: number };

interface DefaultContext {
  qty: number;
  increaseQty: () => void;
  decreaseQty: () => void;

  showCart: boolean;
  setShowCart: SetStateType<boolean>;

  cartItems: CartProductType[];

  onAddProduct: (product: ProductType["attributes"], qty: number) => void;
}

interface ContextProps {
  children: React.ReactNode;
}

const ShopContext = createContext<DefaultContext>({} as DefaultContext);

export const StateContext = ({ children }: ContextProps) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState<CartProductType[]>([]);
  const [qty, setQty] = useState(1);

  const increaseQty = () => setQty((prev) => prev + 1);
  const decreaseQty = () => setQty((prev) => (prev - 1 < 1 ? 1 : prev - 1));

  const onAddProduct = (product: ProductType["attributes"], qty: number) => {
    const existingItem = cartItems.find((item) => item.slug === product.slug);

    //If product is already in cart
    if (existingItem) {
      //Add current qty to previous qty, leave other items the same
      const newCart = cartItems.map((item: CartProductType) =>
        item.slug === product.slug
          ? {
              ...existingItem,
              qty: existingItem.qty + qty,
            }
          : item
      );

      setCartItems(newCart);
    } else {
      //Add product to cart with current qty
      setCartItems([...cartItems, { ...product, qty }]);
    }
  };

  return (
    <ShopContext.Provider
      value={{
        qty,
        increaseQty,
        decreaseQty,
        showCart,
        setShowCart,
        onAddProduct,
        cartItems,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useStateContext = () => useContext(ShopContext);
