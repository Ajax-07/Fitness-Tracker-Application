import styled from "styled-components";

export const Card = styled.div`
  flex: 1;
  display: flex;
  gap: 6px;
  min-width: 200px;
  padding: 15px;
  color: black;
  background-color:${({theme}) => theme.card};
  //border: 1px solid ${({ theme }) => theme.text_primary + 20};
  border-radius: 10px;
  box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.white + 20};
`;

//Left
export const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media (max-width: 700px) {
    gap: 6px;
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
export const Value = styled.div`
  font-weight: 600;
  font-size: 22px;
  
  display: flex;
  align-items: end;
  gap: 6px;
  @media (max-width: 700px) {
    font-size: 16px;
  }
`;
export const Unit = styled.div`
  font-size: 14px;
  margin-bottom: 6px;
  @media (max-width: 700px) {
    font-size: 12px;
    margin-bottom: 3px;
  }
`;
export const Span = styled.span`
  margin-bottom: 6px;
  font-weight: 600;
  font-size: 14px;
  @media (max-width: 700px) {
    font-size: 12px;
    margin-bottom: 3px;
  }
  ${({ theme, positive }) =>
    positive ? `color: ${theme.green}` : `color: ${theme.red}`};
`;
export const Desc = styled.div`
 font-size: 12px;
  color: ${({ theme }) => theme.text_secondary + 90};
  margin-bottom: 5px;
  @media (max-width: 700px) {
    font-size: 10px;
  }
`

//right
export const Right = styled.div`
    // border: 1px solid red;
`;
export const Icon = styled.div`
  height: fit-content;
  padding: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  ${({ color, bg }) => `
  background: ${bg};
  color: ${color};
  `};
  @media (max-width:700px){
  padding: 1px;
  }
`;
