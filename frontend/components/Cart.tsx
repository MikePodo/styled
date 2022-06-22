import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

import { useStateContext } from "~lib/context";

import {
  CartWrapperStyle,
  CartStyle,
  EmptyStyle,
  ProductCardStyle,
  ProductCardInfoStyle,
  CheckoutStyle,
} from "~styles/components/CartStyle";
import { QuantityStyle } from "~styles/pages/product/ProductDetailsStyle";

const Cart = () => {
  const { cartItems, setShowCart, onAddProduct, onRemoveProduct, totalPrice } =
    useStateContext();

  return (
    <CartWrapperStyle onClick={() => setShowCart(false)}>
      <CartStyle onClick={(e) => e.stopPropagation()}>
        {cartItems.length < 1 && (
          <EmptyStyle>
            <h1>You have more shopping to do!</h1>
            <FaShoppingCart />
          </EmptyStyle>
        )}
        {cartItems.length >= 1 &&
          cartItems.map((item) => (
            <ProductCardStyle key={item.slug}>
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
                    <AiFillMinusCircle onClick={() => onRemoveProduct(item)} />
                  </button>
                  <p>{item.qty}</p>
                  <button>
                    <AiFillPlusCircle onClick={() => onAddProduct(item, 1)} />
                  </button>
                </QuantityStyle>
              </ProductCardInfoStyle>
            </ProductCardStyle>
          ))}
        {cartItems.length >= 1 && (
          <CheckoutStyle>
            <h3>Subtotal: ${totalPrice}</h3>
            <button>Purchase</button>
          </CheckoutStyle>
        )}
      </CartStyle>
    </CartWrapperStyle>
  );
};

export default Cart;