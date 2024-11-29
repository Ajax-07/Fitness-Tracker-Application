import logoImg from "../../utils/Images/logo.svg";
import { MenuRounded } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from '@mui/icons-material/Close';
import {
  Nav,
  NavContainer,
  NavIcon,
  Logo,
  MobileIcon,
  NavItems,
  Navlink,
  UserContainer,
  sx,
  MobileMenu,
  MenuContainer,
} from "./StyledComponent";
import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const CloseMenu = () =>{
    setIsOpen(!isOpen);
  }
  
  return (
    <Nav>
      <NavContainer>
        <MobileIcon onClick={CloseMenu}>
          {isOpen ? <CloseIcon/> : <MenuRounded />}
        </MobileIcon>
        <MenuContainer isOpen={isOpen}> 
          <Logo isOpen={isOpen} src={logoImg} />
          <MobileMenu>
            <Navlink to="/" onClick={CloseMenu}>Dashboard</Navlink>
            <Navlink to="/workout" onClick={CloseMenu}>Workout</Navlink>
            <Navlink to="/service" onClick={CloseMenu}>Service</Navlink>
            <Navlink to="/goals" onClick={CloseMenu}>Goals</Navlink>
            <Navlink to="/about" onClick={CloseMenu}>About</Navlink>
          </MobileMenu>
        </MenuContainer>
        <NavIcon to="/">
          <Logo src={logoImg} />
        </NavIcon>

        <NavItems>
          <Navlink to="/">Dashboard</Navlink>
          <Navlink to="/workout">Workout</Navlink>
          <Navlink to="/service">Service</Navlink>
          <Navlink to="/goals">Goals</Navlink>
          <Navlink to="/about">About</Navlink>
        </NavItems>
        <UserContainer>
          <SearchIcon sx={sx} />
          <Avatar sx={sx}></Avatar>
        </UserContainer>
      </NavContainer>
    </Nav>
  );
}
