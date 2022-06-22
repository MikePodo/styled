import React from "react";
import Link from "next/link";
import { FiShoppingBag } from "react-icons/fi";

import { useStateContext } from "~lib/context";

import { NavStyle, NavItems } from "~styles/components/NavStyle";

import Cart from "~components/Cart";

const Nav = () => {
  const { showCart, setShowCart, totalQty } = useStateContext();

  return (
    <NavStyle>
      <Link href="/">Styled.</Link>
      <NavItems>
        <div onClick={() => setShowCart(true)}>
          {totalQty > 0 && <span>{totalQty}</span>}
          <FiShoppingBag />
          <h3>Cart</h3>
        </div>
      </NavItems>
      {showCart && <Cart />}
    </NavStyle>
  );
};

export default Nav;
