import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';


const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar color="dark" dark expand="sm" >
        <NavbarBrand href="/">Twitter Sentiment Analysis</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            
            <NavItem>
              <NavLink href="https://github.com/Hack-Club-PICT/Sentimental-Analysis">GitHub</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      
    </>
  );
}

export default Header;