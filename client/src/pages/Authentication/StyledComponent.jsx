import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  background: ${({ theme }) => theme.bg};
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;
export const Left = styled.div`
  flex: 1;
  background: green;
  position: relative;
  @media (max-width: 700px) {
    display: none;
  }
`;

export const Logo = styled.img`
  position: absolute;
  top: 30px;
  left: 35px;
  z-index: 10;
`;

export const Image = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Right = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 40px;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 700px) {
    padding: 20px;
  }
`;

export const Text = styled.div`
  font-size: 16px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
  margin-top: 16px;
  @media (max-width: 700px) {
    font-size: 14px;
  }
`;

export const TextButton = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
`;