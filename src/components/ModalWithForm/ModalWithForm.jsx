import "./ModalWithForm.css";

function ModalWithForm({ children, title, btnText, activeModal, handleClose }) {
  return (
    <div
      className={`modal${activeModal === "add-garment" ? " modal_opened" : ""}`}
    >
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button
          type="button"
          onClick={handleClose}
          className="modal__close-btn"
        ></button>
        <form className="modal__form">
          {children}
          <button type="submit" className="modal__submit-btn">
            {btnText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
