import React, { useState } from "react";

import { Button } from "react-bootstrap";
import MyModal from "./modal";

function ModalButton() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button variant='primary' onClick={() => setModalShow(true)}>
        Launch modal with grid
      </Button>

      <MyModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default ModalButton;
