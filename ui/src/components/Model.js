import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Alert,
} from "reactstrap";
import { Spinner } from "reactstrap";
import axios from "axios";

const ModalExample = (props) => {
  const { className, pageTitle, matter, title, buttonLabel } = props;

  const [pass, setPass] = useState("");

  const [modal, setModal] = useState(false);
  const [open, setOpen] = useState(1);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);

  const toggle = () => setModal(!modal);

  const closeBtn = <i className="fi-rr-cross" onClick={toggle}></i>;

  const onShare = () => {
    let text = document.querySelector(".fr-view").innerHTML;
    setLoading(1);
    axios
      .post("/add", { html: text, title: pageTitle, password: pass })
      .then((res) => {
        localStorage.setItem("page-data", JSON.stringify(res.data));
        setLoading(0);
        setOpen(0);
      })
      .catch((err) => {
        setLoading(0);
        setErr(1);
        console.log(err.response.data);
      });
  };

  return (
    <div>
      <Button color="primary" onClick={toggle}>
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} close={closeBtn}>
          {title}
        </ModalHeader>
        <ModalBody
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Alert color="warning">{matter}</Alert>
          {err && (
            <Alert color="danger">
              Title has already been used, please change it
            </Alert>
          )}
          <img
            src="../internet-security.png"
            alt="Password svg"
            height="200px"
          />
          <span style={{ margin: "5px" }}>Password:</span>
          <input
            type="text"
            className="mt-2"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </ModalBody>
        <ModalFooter>
          {loading ? (
            <Spinner color="primary" />
          ) : open ? (
            <>
              <Button color="primary" onClick={onShare}>
                Share
              </Button>{" "}
              <Button color="secondary" onClick={toggle}>
                Cancel
              </Button>
            </>
          ) : (
            <Alert color="success">
              <a href={"/view/" + pageTitle}>Click here to view</a>
            </Alert>
          )}
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalExample;
