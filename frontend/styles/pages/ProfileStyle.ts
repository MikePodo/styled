import styled from "styled-components";
import devices from "~styles/util/MediaSizes";

export const OrderStyle = styled.div`
  background: white;
  margin: 2rem 0;
  padding: 3rem;
  display: flex;
  justify-content: space-between;
  h1,
  h2 {
    font-size: 1rem;
    margin: 0 1rem;
  }
  @media ${devices.laptopS} {
    padding: 2rem;
  }
  @media ${devices.mobileL} {
    padding: 2rem 0.5rem;
    h1,
    h2 {
      font-size: 0.8rem;
    }
  }
  @media ${devices.mobileM} {
    flex-direction: column;
    align-items: center;
    padding: 1rem 0.5rem;
    h1,
    h2 {
      margin: 3px;\
      text-align: center;
    }
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
