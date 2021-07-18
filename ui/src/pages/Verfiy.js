import React, { useState } from "react";
import { useParams } from "react-router";
import NavbarHome from "../components/NavbarHome";
import "../css/verify.css";
const Verify = (props) => {
  const { title } = useParams();
  const [pass, setPass] = useState();
  return (
    <>
      <NavbarHome />
      <div className="d-flex align-items-center flex-column verify-container justify-content-center">
        <img
          className="img-fluid"
          src="../internet-security.png"
          alt="Password svg"
        />
        <p>
          Please enter the key to view : <b>{title}</b>{" "}
        </p>
        <input
          type="text"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <button className="mt-2 btn btn-md btn-primary">Enter</button>
      </div>
    </>
  );
};

export default Verify;
