import { useState, useEffect, useContext } from "react";

import CurrentUserContext from "../../contexts/CurrentUserContext";
import GeneralUIContext from "../../contexts/GeneralUIContext";

import ModalWithForm from "../ModalWithForm/ModalWithForm";

import "./LoginModal.css";

function LoginModal() {
  const { handleLoginModalSubmit } = useContext(CurrentUserContext);
  const { activeModal, manageActiveModal } = useContext(GeneralUIContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setEmail("");
    setPassword("");
  }, [activeModal]);

  const handleContentChange = (inputState) => (e) => {
    inputState(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLoginModalSubmit({ email, password });
  };

  return (
    <ModalWithForm
      title="Log in"
      btnText="Log in"
      isOpen={activeModal === "login"}
      onClose={() => manageActiveModal("")}
      onSubmit={handleSubmit}
    >
      <label htmlFor="email" className="modal__label">
        Email{" "}
        <input
          id="email"
          type="email"
          className="modal__input"
          placeholder="Email"
          required
          onChange={handleContentChange(setEmail)}
          value={email}
        />
      </label>
      <label htmlFor="password" className="modal__label">
        Password{" "}
        <input
          id="password"
          type="password"
          className="modal__input"
          placeholder="Password"
          required
          onChange={handleContentChange(setPassword)}
          value={password}
        />
      </label>
      <button
        className="modal__submit-btn"
        type="button"
        onClick={() => manageActiveModal("sign-up")}
      >
        or Sign Up
      </button>
    </ModalWithForm>
  );
}

export default LoginModal;
