import "./ItemModal.css";

function ItemModal({ activeModal, handleClose, card }) {
  return (
    <div className={`modal${activeModal === "preview" ? " modal_opened" : ""}`}>
      <div className="modal__content modal__content_type_preview">
        <button
          type="button"
          onClick={handleClose}
          className="modal__close-btn modal__close-btn_type_preview"
        ></button>
        <img src={card.link} alt={card.name} className="modal__image" />
        <div className="modal__footer">
          <h2 className="modal__info">{card.name}</h2>
          <p className="modal__info">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
