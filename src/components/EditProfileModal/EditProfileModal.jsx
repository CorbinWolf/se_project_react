import { useEffect, useState, useContext } from "react";

import CurrentUserContext from "../../contexts/CurrentUserContext";
import GeneralUIContext from "../../contexts/GeneralUIContext";

import ModalWithForm from "../ModalWithForm/ModalWithForm";

import "./EditProfileModal.css";

function EditProfileModal() {
  const { currentUser, handleEditProfileSubmit } =
    useContext(CurrentUserContext);
  const { activeModal, manageActiveModal } = useContext(GeneralUIContext);

  const [name, setName] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");

  useEffect(() => {
    setName(currentUser?.name || "");
    setAvatarUrl(currentUser?.avatar || "");
  }, [activeModal, currentUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEditProfileSubmit({ name, avatar: avatarUrl });
  };

  return (
    <ModalWithForm
      title="Change profile data"
      btnText="Save changes"
      isOpen={activeModal === "edit-profile"}
      onClose={() => manageActiveModal("")}
      onSubmit={handleSubmit}
    >
      <label className="modal__label">
        Name{" "}
        <input
          id="edit-name"
          type="text"
          className="modal__input"
          placeholder="Name"
          required
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        />
      </label>
      <label className="modal__label">
        Avatar{" "}
        <input
          id="edit-avatar"
          type="url"
          className="modal__input"
          placeholder="Avatar"
          required
          onChange={(e) => {
            setAvatarUrl(e.target.value);
          }}
          value={avatarUrl}
        />
      </label>
    </ModalWithForm>
  );
}

export default EditProfileModal;
