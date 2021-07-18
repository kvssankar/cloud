import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText,
  Input,
  ButtonGroup,
  Button,
} from "reactstrap";
import "../css/navbar.css";
import ModalExample from "./Model";
const NavbarFinal = (props) => {
  const [title, setTitle] = useState("");

  const onTitleChange = (e) => {
    setTitle(e.target.value);
    console.log(e.target.value);
    document.title = e.target.value + " | PrivateShare";
  };

  return (
    <div>
      <Navbar className="custom-navbar" color="light" light expand="md">
        <NavbarBrand className="custom-title" href="/">
          <img
            height="35px"
            style={{ margin: "auto 10px" }}
            src="/security.png"
            alt="Logo"
          />
          PrivateShare
        </NavbarBrand>
        <Nav navbar>
          <NavItem>
            <Input
              style={{ margin: "0 10px" }}
              value={title}
              onChange={onTitleChange}
              placeholder="Set Title"
            />
          </NavItem>
        </Nav>
        <NavbarText style={{ marginLeft: "auto" }}>
          <ButtonGroup style={{ marginRight: "10px" }}>
            {/* <Button onClick={onShare} color="primary">
              <i className="fi-rr-cloud-share"></i>
            </Button> */}
            <ModalExample
              buttonLabel={<i className="fi-rr-cloud-share"></i>}
              title="Enter password"
              pageTitle={title}
              matter="If you dont want to set password leave the box empty"
            />
            <Button
              color="danger"
              onClick={() => {
                document.querySelector(".fr-view").innerHTML = "";
              }}
              className="btn-flex"
            >
              <i className="fi-rr-trash"></i>
            </Button>
          </ButtonGroup>
        </NavbarText>
      </Navbar>
    </div>
  );
};

export default NavbarFinal;
