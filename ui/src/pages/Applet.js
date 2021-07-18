import React, { useEffect } from "react";
import "../components/Editor";
import NavbarFinal from "../components/Navbar";
const Applet = () => {
  useEffect(() => {
    document.getElementById("editor").style.display = "block";
    document.title = "New Doc | PrivateShare";
    window.onbeforeunload = function () {
      return "Are you really want to perform the action?";
    };
    window.onbeforeunload = function () {
      return "Your text wont be saved";
    };
  }, []);
  return (
    <>
      <NavbarFinal />
    </>
  );
};

export default Applet;
