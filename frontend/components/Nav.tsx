import React from "react";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
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
      <AnimatePresence>{showCart && <Cart />}</AnimatePresence>
    </NavStyle>
  );
};

export default Nav;
