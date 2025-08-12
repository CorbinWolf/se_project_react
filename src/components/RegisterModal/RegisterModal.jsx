import { useState, useEffect, useContext } from "react";

import CurrentUserContext from "../../contexts/CurrentUserContext";
import GeneralUIContext from "../../contexts/GeneralUIContext";

import ModalWithForm from "../ModalWithForm/ModalWithForm";

import "./RegisterModal.css";

function RegisterModal() {
  const { handleRegisterModalSubmit } = useContext(CurrentUserContext);
  const { activeModal, manageActiveModal } = useContext(GeneralUIContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    setEmail("");
    setPassword("");
    setName("");
    setAvatar("");
  }, [activeModal]);

  const handleContentChange = (inputState) => (e) => {
    inputState(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegisterModalSubmit({ email, password, name, avatar });
  };

  return (
    <ModalWithForm
      title="Sign up"
      btnText="Sign up"
      isOpen={activeModal === "sign-up"}
      onClose={() => manageActiveModal("")}
      onSubmit={handleSubmit}
    >
      <label htmlFor="new-email" className="modal__label">
        Email{" "}
        <input
          id="new-email"
          type="email"
          className="modal__input"
          placeholder="Email"
          required
          onChange={handleContentChange(setEmail)}
          value={email}
        />
      </label>
      <label htmlFor="new-password" className="modal__label">
        Password{" "}
        <input
          id="new-password"
          type="password"
          className="modal__input"
          placeholder="Password"
          required
          onChange={handleContentChange(setPassword)}
          value={password}
        />
      </label>
      <label htmlFor="new-name" className="modal__label">
        Name{" "}
        <input
          id="new-name"
          type="text"
          className="modal__input"
          placeholder="Name"
          required
          minLength="1"
          maxLength="30"
          onChange={handleContentChange(setName)}
          value={name}
        />
      </label>
      <label htmlFor="new-avatar" className="modal__label">
        Image{" "}
        <input
          id="new-avatar"
          type="url"
          className="modal__input"
          placeholder="Image URL"
          required
          onChange={handleContentChange(setAvatar)}
          value={avatar}
        />
      </label>
      <button
        className="modal__submit-btn"
        type="button"
        onClick={() => manageActiveModal("login")}
      >
        or Log In
      </button>
    </ModalWithForm>
  );
}

export default RegisterModal;
