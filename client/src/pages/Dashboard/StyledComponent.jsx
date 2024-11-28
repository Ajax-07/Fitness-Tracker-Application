import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 22px 0px;
  overflow-y: scroll;
`;
export const Wrapper = styled.div`
  flex: 1;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  @media (max-width: 700px) {
    gap: 12px;
  }
`;
export const Title = styled.div`
  padding: 0px 16px;
  font-size: 22px;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
`;
export const FlexWrap = styled.div`
  display: flex;
  //   flex-wrap: wrap;
  justify-content: space-between;
  gap: 22px;
  padding: 0px 16px;
  @media (max-width: 700px) {
    gap: 12px;
    flex-direction: column;
  }
`;

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 16px;
    gap: 22px;
    @media (max-width: 700px) {
        gap: 12px;
    }
`;
export const SectionWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20 px;
    margin-bottom:100px;
    @media (max-width: 700px) {
        gap: 12px;
        flex-direction: column;
    }
`;
