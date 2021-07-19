import React, { useEffect, useState } from "react";
import { Input, NavbarBrand } from "reactstrap";
import parse from "html-react-parser";
import "../css/view.css";

const ViewPage = () => {
  const [title, setTitle] = useState("");
  const [htmlString, setHtmlString] = useState("");
  const copy = () => {
    var copyText = document.getElementById("cp");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
  };
  useEffect(() => {
    setTitle("sankar");
    let pd = localStorage.getItem("page-data");
    if (!pd) document.location.href = "/";
    pd = JSON.parse(pd);
    pd = pd.link;
    setTitle(pd.title);
    setHtmlString(pd.html);
  }, []);
  return (
    <div className="view">
      <div className="view-left">
        <img className="limg" src="../security.png" alt="Logo" />
        <div>
          <h4>The whole data is encrypted and protected safely.</h4>
          <img
            height="100px"
            src="https://image.flaticon.com/icons/png/512/2313/2313458.png"
            alt="secured"
          />
        </div>
        <div>
          <Input type="text" id="cp" value={"/v/" + title} />
          <button className="btn btn-primary mt-2 w-100" onClick={copy}>
            Copy To Share
          </button>
        </div>
      </div>
      <div className="view-right">
        <NavbarBrand className="custom-title" href="/">
          <img height="35px" src="/security.png" alt="Logo" />
          PrivateShare
        </NavbarBrand>
        <h3 className="mt-2" style={{ textTransform: "capitalize" }}>
          {title}
        </h3>
        <div className="mt-2">{parse(htmlString, { trim: true })}</div>
      </div>
    </div>
  );
};

export default ViewPage;
