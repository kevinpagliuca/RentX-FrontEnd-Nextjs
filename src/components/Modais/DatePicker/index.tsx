import React from "react";
import TextField from "@material-ui/core/TextField";

import StaticDateRangePicker from "@material-ui/lab/StaticDateRangePicker";
import AdapterDateFns from "@material-ui/lab/AdapterDateFns";
import LocalizationProvider from "@material-ui/lab/LocalizationProvider";
import Locale from "date-fns/locale/pt-BR";

import Modal, { Styles } from "react-modal";

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

import { ButtonBase } from "@material-ui/core";
import { FiX } from "react-icons/fi";
import { ModalContent, ModalHeader, ModalBody } from "./styles";
export const DatePickerModal = ({ modalIsOpen, onRequestClose }) => {
  const [value, setValue] = React.useState<any>([null, null]);

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      bodyOpenClassName="modalOpen"
      className="register_success"
    >
      <ModalContent>
        <ModalHeader>
          <span>Escolha uma data de início e fim do aluguel</span>
          <ButtonBase onClick={onRequestClose}>
            <FiX />
          </ButtonBase>
        </ModalHeader>

        <ModalBody>
          <LocalizationProvider dateAdapter={AdapterDateFns} locale={Locale}>
            <StaticDateRangePicker
              displayStaticWrapperAs="desktop"
              disablePast
              calendars={1}
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(startProps, endProps) => (
                <React.Fragment>
                  <TextField {...startProps} />
                  {/* <Box sx={{ mx: 2 }}> to </Box> */}
                  <TextField {...endProps} />
                </React.Fragment>
              )}
            />
          </LocalizationProvider>

          <div>
            <h1>teste</h1>
            <h1>teste</h1>
            <h1>teste</h1>
            <h1>teste</h1>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
