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
  max-width: 1600px;
  display: flex;
  gap: 22px;
  padding: 0px 16px;
  @media (max-width: 600px) {
    gap: 12px;
    flex-direction: column;
  }
`;
export const Left = styled.div`
  flex: 0.2;
  height: fit-content;
  padding: 18px;
  background: ${({ theme }) => theme.bg};
  border: 1px solid ${({ theme }) => theme.text_primary + 20};
  border-radius: 14px;
  box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.primary + 15};
`;
export const Title = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.primary};
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;
export const Right = styled.div`
  flex: 1;
`;
export const Section = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 16px;
  gap: 22px;
  padding: 0px 16px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;
export const SectionTitle = styled.div`
  font-size: 22px;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
`;
export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-bottom: 100px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;

export const slotProps = {
  day: {
    sx: {
      // Style the individual days
      fontSize: "14px",
      color: "white",
      "&:hover": {
        backgroundColor: "#9bb70d",
      },
    },
  },

  calendarHeader: {
    sx: {
      ".MuiPickersArrowSwitcher-button": {
        color: "white", // Left/Right icons color
        "&:hover": {
          backgroundColor: "#9bb70d", // Hover background color
        },
      },
      ".MuiPickersCalendarHeader-labelContainer svg": {
        fill: "white", // Year dropdown icon color
      },
    },
  },
};
