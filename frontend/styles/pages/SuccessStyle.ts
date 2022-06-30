import styled from "styled-components";
import { motion } from "framer-motion";

export const SuccessWrapperStyle = styled.div`
  margin: 1rem 15rem;
`;

export const SuccessCardStyle = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  border-radius: 2rem;
  padding: 3rem;
  h2 {
    margin: 1rem 0;
  }
  button {
    color: white;
    background: var(--primary);
    font-size: 1.2rem;
    font-weight: 500;
    padding: 1rem 2rem;
    cursor: pointer;
    border: none;
  }
`;

export const SuccessInfoWrapper = styled.div`
  display: flex;
  margin: 2rem 0;
`;

export const SuccessAddressStyle = styled.div`
  font-size: 1rem;
  width: 100%;
`;

export const SuccessOrderInfo = styled.div`
  font-size: 1rem;
  width: 100%;
  div {
    padding-bottom: 1rem;
  }
`;
