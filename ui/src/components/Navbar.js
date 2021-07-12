import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText,
  Input,
  ButtonGroup,
  Button,
} from "reactstrap";
import "../css/Navbar.css";
const NavbarFinal = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const toggle = () => setIsOpen(!isOpen);

  const onTitleChange = (e) => {
    setTitle(e.target.value);
    console.log(e.target.value);
    document.title = e.target.value + " | PrivateShare";
  };

  const onShare = () => {
    let text = document.querySelector(".fr-view").innerHTML;
    console.log(text);
  };

  return (
    <div>
      <Navbar className="custom-navbar" color="light" light expand="md">
        <NavbarBrand className="custom-title" href="/">
          <img
            height="35px"
            style={{ margin: "auto 5px" }}
            src="/security.png"
            alt="Logo"
          />
          PrivateShare
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Input
                value={title}
                onChange={onTitleChange}
                placeholder="Set Title"
              />
            </NavItem>
          </Nav>
        </Collapse>
        <NavbarText>
          <ButtonGroup style={{ marginRight: "10px" }}>
            <Button onClick={onShare} color="primary">
              Share
            </Button>
            <Button color="danger">Clear</Button>
          </ButtonGroup>
        </NavbarText>
      </Navbar>
    </div>
  );
};

export default NavbarFinal;
