import "./ModalWithForm.css";

function ModalWithForm({
  children,
  title,
  btnText,
  activeModal,
  onClose,
  onSubmit,
}) {
  return (
    <div
      className={`modal${activeModal === "add-garment" ? " modal_opened" : ""}`}
    >
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button
          type="button"
          onClick={onClose}
          className="modal__close-btn"
        ></button>
        <form className="modal__form" onSubmit={onSubmit}>
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
