import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const Nav = styled.div`
  background-color: ${({ theme }) => theme.bg};
  border-bottom: 1px solid ${({ theme }) => theme.primary + 40};
  height: 65px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  z-index: 10;
`;
export const NavContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  font-size: 1rem;
  // border: 1px solid red;
`;
export const NavIcon = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  text-decoration: none;
`;
export const Logo = styled.img`
  height: ${({isOpen}) => !isOpen ? "auto" : "20px"};
`;
export const MobileIcon = styled.div`
  display: inline;
  color: ${({ theme }) => theme.primary};
  border-radius: 3px;
  border: none;
  display: none;
  z-index: 1;
  @media screen and (max-width: 700px) {
    display: flex;
    align-items: center;
  }
`;
export const NavItems = styled.div`
    width: auto;
    display: flex;
    align-items: center;
    gap: 20px;
    padding 0 6px;
    // border:1px solid red;
    list-style:none;
    @media screen and (max-width: 700px) {
      display: none;
    }
`;
export const Navlink = styled(NavLink)`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 1s slide-in;
  text-decoration: none;
  a:{
  width: fit-content;
  }
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
   &.active {
    color: ${({ theme }) => theme.primary};
    // border-bottom: 1.8px solid ${({ theme }) => theme.primary};
  }
`;
export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`;
export const sx = { width: 30, height: 30 };

export const MenuContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background-color:${({ theme }) => theme.bg};
    height:100vh;
    width: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
    border-right: 2px solid ${({ theme }) => theme.primary}; 
    border-radius: 0px 10px 10px 0px;
    transition: all 0.6s ease-in-out;
    transform: ${({ isOpen }) => isOpen ? "translateX(0)" : "translateX(-100%)"};
    opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
    
`;
export const MobileMenu = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 12px 24px;
  list-style: none;
}
`;
