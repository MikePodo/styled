import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiShoppingBag } from "react-icons/fi";

import { useStateContext } from "~lib/context";

import { NavStyle, NavItems, NavCart } from "~styles/components/NavStyle";

import { qtyAnimation } from "~animations/components/NavAnimation";

import Cart from "~components/Cart";

const Nav = () => {
  const { showCart, setShowCart, totalQty } = useStateContext();

  return (
    <NavStyle>
      <Link href="/">Styled.</Link>
      <NavItems>
        <NavCart onClick={() => setShowCart(true)}>
          {totalQty > 0 && (
            <motion.span {...qtyAnimation}>{totalQty}</motion.span>
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
