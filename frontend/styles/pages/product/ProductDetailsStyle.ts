import styled from "styled-components";
import devices from "~styles/util/MediaSizes";

export const ProductDetailsStyle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
  img {
    width: 40%;
    object-fit: cover;
  }
  @media ${devices.mobileM} {
    flex-direction: column;
    align-items: center;
    img {
      width: 70%;
      margin-bottom: 2rem;
    }
  }
  @media ${devices.mobileS} {
    img {
      width: 90%;
    }
  }
`;

export const ProductInfoStyle = styled.div`
  width: 40%;
  button {
    font-size: 1rem;
    font-weight: medium;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }
  @media ${devices.mobileM} {
    width: 70%;
  }
  @media ${devices.mobileS} {
    width: 90%;
  }
`;

export const QuantityStyle = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
  button {
    background: transparent;
    border: none;
    display: flex;
    font-size: 1.5rem;
    padding: 0 0.5rem;
  }
  p {
    width: 1rem;
    text-align: center;
  }
  span {
    color: var(--secondary);
  }
  svg {
    color: #494949;
  }
`;

export const BuyStyle = styled.button`
  width: 100%;
  background: var(--primary);
  border: none;
  color: white;
  font-weight: 500;
`;
