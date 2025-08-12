import { useContext } from "react";

import CurrentUserContext from "../../contexts/CurrentUserContext";
import GeneralUIContext from "../../contexts/GeneralUIContext";

import "./ItemModal.css";

function ItemModal() {
  const { currentUser } = useContext(CurrentUserContext);
  const { activeModal, selectedCard, manageActiveModal } =
    useContext(GeneralUIContext);
  const isOwner = Array.isArray(selectedCard?.owner)
    ? selectedCard?.owner?.includes(currentUser?._id)
    : selectedCard?.owner === currentUser?._id;

  return (
    <div className={`modal${activeModal === "preview" ? " modal_opened" : ""}`}>
      <div className="modal__content modal__content_type_preview">
        <button
          type="button"
          onClick={() => manageActiveModal("")}
          className="modal__close-btn modal__close-btn_type_preview"
        ></button>
        <img
          src={selectedCard.imageUrl}
          alt={selectedCard.name}
          className="modal__image"
        />
        <div className="modal__footer">
          <div className="modal__container">
            <h2 className="modal__info">{selectedCard.name}</h2>
            <p className="modal__info">Weather: {selectedCard.weather}</p>
          </div>
          {isOwner && (
            <button
              type="button"
              onClick={() => manageActiveModal("remove-garment")}
              className="modal__btn modal__btn_type_remove"
            >
              Delete item
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
