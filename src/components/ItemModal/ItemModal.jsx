import "./ItemModal.css";

function ItemModal({ activeModal, onClose, card, onDeleteClick }) {
  return (
    <div className={`modal${activeModal === "preview" ? " modal_opened" : ""}`}>
      <div className="modal__content modal__content_type_preview">
        <button
          type="button"
          onClick={onClose}
          className="modal__close-btn modal__close-btn_type_preview"
        ></button>
        <img src={card.imageUrl} alt={card.name} className="modal__image" />
        <div className="modal__footer">
          <div className="modal__container">
            <h2 className="modal__info">{card.name}</h2>
            <p className="modal__info">Weather: {card.weather}</p>
          </div>
          <button
            type="button"
            onClick={onDeleteClick}
            className="modal__btn modal__btn_type_remove"
          >
            Delete item
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
