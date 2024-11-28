import styled from "styled-components";

export const Card = styled.div`
    flex:1;
    min-width:250px;
    background-color:${({theme}) => theme.card};
    padding:18px;
    //border:1px solid ${({theme}) => theme.primary};
    border-radius:10px;
    box-shadow:1px 6px 20px 0px ${({theme}) => theme.white +20};
    display:flex;
    flex-direction:column;
    gap:6px;
    @media (max-width:700px) {
        gap:4px;
        padding:14px;
    }
`;
export const Title = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.primary};
  @media (max-width: 700px) {
    font-size: 12px;
  }
`;
