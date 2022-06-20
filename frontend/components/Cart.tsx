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
  QuantityStyle,
} from "~styles/components/CartStyle";

const Cart = () => {
  const { cartItems, setShowCart, onAddProduct } = useStateContext();

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
            <ProductCardStyle>
              <img
                src={item.image.data.attributes.formats.thumbnail.url}
                alt={item.title}
              />
              <ProductCardInfoStyle>
                <h3>{item.title}</h3>
                <h3>{item.price}</h3>
                <QuantityStyle>
                  <span>Quantity</span>
                  <button>
                    <AiFillMinusCircle />
                  </button>
                  <p>{item.qty}</p>
                  <button>
                    <AiFillPlusCircle />
                  </button>
                </QuantityStyle>
              </ProductCardInfoStyle>
            </ProductCardStyle>
          ))}
      </CartStyle>
    </CartWrapperStyle>
  );
};

export default Cart;
