import styled from "styled-components";

export const OrderStyle = styled.div`
  background: white;
  margin: 2rem 0;
  padding: 3rem;
  display: flex;
  justify-content: space-between;
  h1,
  h2 {
    font-size: 1rem;
  }
`;

export const LogoutButtonStyle = styled.button`
  color: white;
  border-radius: 0;
  border: none;
  padding: 0.5rem 1rem;
  background: var(--primary);
  cursor: pointer;
`;
