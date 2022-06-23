import React, { createContext, useContext, useState } from "react";

import { ProductType } from "~types/ProductsType";

type SetStateType<I> = React.Dispatch<React.SetStateAction<I>>;
type CartProductType = ProductType["attributes"] & { qty: number };

interface DefaultContext {
  qty: number;
  totalQty: number;
  totalPrice: number;
  increaseQty: () => void;
  decreaseQty: () => void;

  showCart: boolean;
  setShowCart: SetStateType<boolean>;

  cartItems: CartProductType[];

  onAddProduct: (product: ProductType["attributes"], qty: number) => void;
  onRemoveProduct: (product: ProductType["attributes"]) => void;
}

interface ContextProps {
  children: React.ReactNode;
}

const ShopContext = createContext<DefaultContext>({} as DefaultContext);

export const StateContext = ({ children }: ContextProps) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState<CartProductType[]>([]);
  const [qty, setQty] = useState(1);
  const [totalQty, setTotalQty] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const increaseQty = () => setQty((prev) => prev + 1);
  const decreaseQty = () => setQty((prev) => (prev - 1 < 1 ? 1 : prev - 1));

  const onAddProduct = (product: ProductType["attributes"], qty: number) => {
    //Update total price
    setTotalPrice((prev) => prev + product.price * qty);

    //Increase total qty
    setTotalQty((prev) => prev + qty);

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

  const onRemoveProduct = (product: ProductType["attributes"]) => {
    //Update total price
    setTotalPrice((prev) => prev - product.price);

    //Decrease total qty
    setTotalQty((prev) => prev - 1);

    const existingItem = cartItems.find((item) => item.slug === product.slug);

    if (existingItem?.qty === 1) {
      setCartItems(cartItems.filter((item) => item.slug !== product.slug));
    } else {
      if (!existingItem) return;
      const newCart = cartItems.map((item) =>
        item.slug === product.slug
          ? { ...existingItem, qty: existingItem?.qty - 1 }
          : item
      );

      setCartItems(newCart);
    }
  };

  return (
    <ShopContext.Provider
      value={{
        qty,
        totalQty,
        totalPrice,
        increaseQty,
        decreaseQty,
        showCart,
        setShowCart,
        onAddProduct,
        onRemoveProduct,
        cartItems,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useStateContext = () => useContext(ShopContext);
