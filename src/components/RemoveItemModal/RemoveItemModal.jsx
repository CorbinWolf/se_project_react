import "./RemoveItemModal.css";

function RemoveItemModal({ activeModal, onClose, onRemoveItemModalSubmit }) {
  return (
    <div
      className={`modal${
        activeModal === "remove-garment" ? " modal_opened" : ""
      }`}
    >
      <div className="modal__content modal__content_type_delete">
        <button
          type="button"
          onClick={onClose}
          className="modal__close-btn modal__close-btn_type_delete"
        ></button>
        <p className="modal__info modal__info_type_delete">
          Are you sure you want to delete this item? This action is
          irreversible.
        </p>
        <div className="modal__container_type_delete">
          <button
            type="button"
            onClick={onRemoveItemModalSubmit}
            className="modal__btn_type_delete modal__btn_type_remove"
          >
            Yes, delete item
          </button>
          <button
            type="button"
            onClick={onClose}
            className="modal__btn_type_delete"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default RemoveItemModal;
