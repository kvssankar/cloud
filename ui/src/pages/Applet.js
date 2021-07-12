import React, { useEffect } from "react";
import "../components/Editor";
import NavbarFinal from "../components/Navbar";
const Applet = () => {
  useEffect(() => {
    document.getElementById("editor").style.display = "block";
    document.title = "New Doc | PrivateShare";
  }, []);
  return (
    <>
      <NavbarFinal />
    </>
  );
};

export default Applet;
