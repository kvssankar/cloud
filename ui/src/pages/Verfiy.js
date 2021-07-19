import React, { useState } from "react";
import { useParams } from "react-router";
import NavbarHome from "../components/NavbarHome";
import axios from "axios";

import "../css/verify.css";
const Verify = (props) => {
  const { title } = useParams();
  const [pass, setPass] = useState("");
  const check = () => {
    axios
      .post("/check", { title: title, password: pass })
      .then((res) => {
        localStorage.setItem("page-data", JSON.stringify(res.data));
        document.location.href = "/view/" + title;
      })
      .catch((err) => {
        alert(err.response.data);
      });
  };
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
        <button onClick={check} className="mt-2 btn btn-md btn-primary">
          Enter
        </button>
      </div>
    </>
  );
};

export default Verify;
