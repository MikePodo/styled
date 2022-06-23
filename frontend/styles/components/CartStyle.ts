import styled from "styled-components";
import { motion } from "framer-motion";

export const CartWrapperStyle = styled(motion.div)`
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
  display: flex;
  justify-content: flex-end;
`;

export const CartStyle = styled(motion.div)`
  width: 30%;
  background: #f1f1f1;
  padding: 2rem 5rem;
  overflow-y: scroll;
  position: relative;
`;

export const EmptyStyle = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  text-align: center;
  h1 {
    font-size: 2rem;
    padding: 2rem;
  }
  svg {
    font-size: 10rem;
    color: var(--secondary);
  }
`;

export const ProductCardStyle = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 1rem;
  overflow: hidden;
  background: white;
  margin: 2rem 0;
  img {
    width: 8rem;
  }
`;

export const ProductCardInfoStyle = styled(motion.div)`
  width: 50%;
  div {
    display: flex;
    flex-direction: space-between;
  }
`;

export const CheckoutStyle = styled(motion.div)`
  button {
    background: var(--primary);
    padding: 1rem 2rem;
    width: 100%;
    color: white;
    margin-top: 2rem;
    cursor: pointer;
    border: none;
  }
`;
