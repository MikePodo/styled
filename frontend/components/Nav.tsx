import React from "react";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import { FiShoppingBag } from "react-icons/fi";

import { useStateContext } from "~lib/context";

import {
  NavStyle,
  NavItems,
  NavCart,
  NavCartQty,
} from "~styles/components/NavStyle";

import { QtyAnimation } from "~animations/components/NavAnimation";

import Cart from "~components/Cart";
import User from "~components/User";

const Nav = () => {
  const { showCart, setShowCart, totalQty } = useStateContext();

  return (
    <NavStyle>
      <Link href="/">Styled.</Link>
      <NavItems>
        <User />
        <NavCart onClick={() => setShowCart(true)}>
          {totalQty > 0 && (
            <NavCartQty {...QtyAnimation}>{totalQty}</NavCartQty>
          )}
          <FiShoppingBag />
          <h3>Cart</h3>
        </NavCart>
      </NavItems>
      <AnimatePresence>{showCart && <Cart />}</AnimatePresence>
    </NavStyle>
  );
};

export default Nav;
