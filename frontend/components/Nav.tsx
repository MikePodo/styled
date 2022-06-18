import React from "react";
import Link from "next/link";
import { FiShoppingBag } from "react-icons/fi";

import { NavStyle, NavItems } from "~styles/components/NavStyle";

const Nav = () => {
  return (
    <NavStyle>
      <Link href="/">Styled.</Link>
      <NavItems>
        <div>
          <FiShoppingBag />
          <h3>Cart</h3>
        </div>
      </NavItems>
    </NavStyle>
  );
};

export default Nav;
