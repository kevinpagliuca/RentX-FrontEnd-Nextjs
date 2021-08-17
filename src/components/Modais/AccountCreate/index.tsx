import router from "next/router";
import React from "react";

import { ButtonBase } from "@material-ui/core";
import Modal, { Styles } from "react-modal";

import { GreenCheckIcon } from "../../../assets/Icons";

const customStyles: Styles = {
  content: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1100,
    height: "100%",
  },
  overlay: {
    zIndex: 1000,
    background: "rgba(0, 0, 0, 0.4)",
  },
};

Modal.setAppElement("#__next");

import { ModalContent } from "./styles";
export const AccountCreateModal = ({ modalIsOpen, onRequestClose }) => {

  function toggleOk() {
    onRequestClose();
    router.push("/auth");
  }
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      bodyOpenClassName="modalOpen"
      className="register_success"
    >
      <ModalContent>
        <GreenCheckIcon />
        <h1>Conta Criada</h1>
        <p>
          Agora você parte da RentX. <br />
          Faça seu login e comece a aproveitar.
        </p>

        <ButtonBase onClick={toggleOk}>Ok</ButtonBase>
      </ModalContent>
    </Modal>
  );
};
