import styled from "styled-components";

export const CartWrapperStyle = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
  display: flex;
  justify-content: flex-end;
  /* display: none; */
`;

export const CartStyle = styled.div`
  width: 30%;
  background: #f1f1f1;
  padding: 2rem 5rem;
  overflow-y: scroll;
  position: relative;
`;

export const EmptyStyle = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
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

export const ProductCardStyle = styled.div`
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

export const ProductCardInfoStyle = styled.div`
  width: 50%;
  div {
    display: flex;
    flex-direction: space-between;
  }
`;

export const QuantityStyle = styled.div``;
