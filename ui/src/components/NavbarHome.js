import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText,
  ButtonGroup,
} from "reactstrap";
import "../css/navbar.css";
const NavbarHome = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="custom-navbar-home" expand="md">
        <NavbarBrand className="custom-title" href="/">
          <img
            height="35px"
            style={{ margin: "auto 10px" }}
            src="/security.png"
            alt="Logo"
          />
          PrivateShare
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          {/* <Nav className="mr-auto" navbar>
            <NavItem>
              <Input
                value={title}
                onChange={onTitleChange}
                placeholder="Set Title"
              />
            </NavItem>
          </Nav> */}
        </Collapse>
        <NavbarText>
          <ButtonGroup style={{ marginRight: "10px" }}>
            <a
              className="btn btn-dark btn-md text-light"
              href="https://github.com/kvssankar"
              rel="noreferrer"
              target="_blank"
            >
              Github
            </a>
            <a
              className="btn btn-primary btn-md text-light"
              href="https://www.linkedin.com/in/sankarkvs/"
              rel="noreferrer"
              target="_blank"
            >
              Linkedin
            </a>
          </ButtonGroup>
        </NavbarText>
      </Navbar>
    </div>
  );
};

export default NavbarHome;
