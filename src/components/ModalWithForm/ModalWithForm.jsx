import "./ModalWithForm.css";

function ModalWithForm({
  children,
  title,
  btnText,
  isOpen,
  onClose,
  onSubmit,
}) {
  const sortChildren = children.reduce(
    (accumulator, child) => {
      if (child.type === "button") {
        accumulator.btnChildren.push(child);
      } else {
        accumulator.inputChildren.push(child);
      }
      return accumulator;
    },
    { inputChildren: [], btnChildren: [] }
  );

  return (
    <div className={`modal${isOpen ? " modal_opened" : ""}`}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button
          type="button"
          onClick={onClose}
          className="modal__close-btn"
        ></button>
        <form className="modal__form" onSubmit={onSubmit}>
          {sortChildren.inputChildren}
          <div className="modal__buttons">
            <button type="submit" className="modal__submit-btn">
              {btnText}
            </button>
            {sortChildren.btnChildren}
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
