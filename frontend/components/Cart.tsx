import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

import { useStateContext } from "~lib/context";
import getStripe from "~lib/getStripe";

import {
  CartWrapperStyle,
  CartStyle,
  EmptyStyle,
  ProductCardStaggerStyle,
  ProductCardStyle,
  ProductCardInfoStyle,
  CheckoutStyle,
} from "~styles/components/CartStyle";
import { QuantityStyle } from "~styles/pages/product/ProductDetailsStyle";

import {
  CartWrapperAnimation,
  CartAnimation,
  EmptyAnimation,
  ProductCardStaggerAnimation,
  ProductCardAnimation,
  CheckoutAnimation,
} from "~animations/components/CartAnimation";

const Cart = () => {
  const { cartItems, setShowCart, onAddProduct, onRemoveProduct, totalPrice } =
    useStateContext();

  const handleCheckout = async () => {
    const stripe = await getStripe();
    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartItems),
    });
    const data = await response.json();
    console.log(data);
    await stripe?.redirectToCheckout({ sessionId: data.id });
  };

  return (
    <CartWrapperStyle
      onClick={() => setShowCart(false)}
      {...CartWrapperAnimation}
    >
      <CartStyle
        onClick={(e: React.MouseEvent<HTMLElement>) => e.stopPropagation()}
        {...CartAnimation}
      >
        {cartItems.length < 1 && (
          <EmptyStyle {...EmptyAnimation}>
            <h1>You have more shopping to do!</h1>
            <FaShoppingCart />
          </EmptyStyle>
        )}
        <ProductCardStaggerStyle {...ProductCardStaggerAnimation}>
          {cartItems.length >= 1 &&
            cartItems.map((item) => (
              <ProductCardStyle key={item.slug} {...ProductCardAnimation}>
                <img
                  src={item.image.data.attributes.formats.thumbnail.url}
                  alt={item.title}
                />
                <ProductCardInfoStyle>
                  <h3>{item.title}</h3>
                  <h3>${item.price}</h3>
                  <QuantityStyle>
                    <span>Quantity</span>
                    <button>
                      <AiFillMinusCircle
                        onClick={() => onRemoveProduct(item)}
                      />
                    </button>
                    <p>{item.qty}</p>
                    <button>
                      <AiFillPlusCircle onClick={() => onAddProduct(item, 1)} />
                    </button>
                  </QuantityStyle>
                </ProductCardInfoStyle>
              </ProductCardStyle>
            ))}
        </ProductCardStaggerStyle>
        {cartItems.length >= 1 && (
          <CheckoutStyle {...CheckoutAnimation}>
            <h3>Subtotal: ${totalPrice}</h3>
            <button onClick={handleCheckout}>Purchase</button>
          </CheckoutStyle>
        )}
      </CartStyle>
    </CartWrapperStyle>
  );
};

export default Cart;
