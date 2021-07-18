import React from "react";
import NavbarHome from "../components/NavbarHome";
import "../css/home.css";

const Home = () => (
  <div>
    <NavbarHome />
    <div className="block d-flex flex-row justify-content-around">
      <div className="col-lg-5 mx-auto left">
        <h3 className="heading">Share your stuff privately</h3>
        <p>
          Share images, text messages, docs, files etc., privately to anyone
          with a password protected url. <br /> Use the best editor for forming
          the message. <br /> Share it with anyone with just a link with custom
          expiry and password protection.
        </p>
        <div className="d-flex flex-row">
          <div className="boxes">
            <img className="img-fluid" src="./network.png" alt="network" />
            <p className="subtitle" style={{ textAlign: "center" }}>
              Share
            </p>
          </div>
          <div className="boxes">
            <img
              className="img-fluid"
              src="./private-detective.png"
              alt="network"
            />
            <p className="subtitle" style={{ textAlign: "center" }}>
              Private
            </p>
          </div>
          <div className="boxes">
            <img className="img-fluid" src="./url.png" alt="network" />
            <p className="subtitle" style={{ textAlign: "center" }}>
              Effortless
            </p>
          </div>
        </div>
        <a href="/app" className="mt-5 btn btn-primary btn-lg">
          Start Writing
        </a>
      </div>
      <div className="off col-lg-7 right d-flex justify-content-center">
        <img src="./cyber-security.png" alt="Logo" />
      </div>
    </div>
  </div>
);

export default Home;
