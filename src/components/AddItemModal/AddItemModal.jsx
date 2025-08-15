import { useContext, useState, useEffect } from "react";

import GeneralUIContext from "../../contexts/GeneralUIContext";

import ModalWithForm from "../ModalWithForm/ModalWithForm";

import "./AddItemModal.css";

function AddItemModal() {
  const { activeModal, manageActiveModal, handleAddItemModalSubmit } =
    useContext(GeneralUIContext);

  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [weather, setWeather] = useState("");

  const handleContentChange = (inputState) => (e) => {
    inputState(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddItemModalSubmit({ name, imageUrl, weather });
  };

  useEffect(() => {
    setName("");
    setImageUrl("");
    setWeather("");
  }, [isOpen]);

  return (
    <ModalWithForm
      title="New garment"
      btnText="Add garment"
      isOpen={activeModal === "add-garment"}
      onClose={() => manageActiveModal("")}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name" className="modal__label">
        Name{" "}
        <input
          id="name"
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
      <label htmlFor="image-url" className="modal__label">
        Image{" "}
        <input
          id="image-url"
          type="url"
          className="modal__input"
          placeholder="Image URL"
          required
          onChange={handleContentChange(setImageUrl)}
          value={imageUrl}
        />
      </label>
      <fieldset className="modal__radio-btns">
        <legend className="modal__legend">Select the weather type:</legend>
        <label htmlFor="hot" className="modal__label modal__label_type_radio">
          <input
            id="hot"
            name="weather-type"
            type="radio"
            className="modal__radio-input"
            onChange={handleContentChange(setWeather)}
            value="hot"
            checked={weather === "hot"}
          />
          Hot
        </label>
        <label htmlFor="warm" className="modal__label modal__label_type_radio">
          <input
            id="warm"
            name="weather-type"
            type="radio"
            className="modal__radio-input"
            onChange={handleContentChange(setWeather)}
            value="warm"
            checked={weather === "warm"}
          />
          Warm
        </label>
        <label htmlFor="cold" className="modal__label modal__label_type_radio">
          <input
            id="cold"
            name="weather-type"
            type="radio"
            className="modal__radio-input"
            onChange={handleContentChange(setWeather)}
            value="cold"
            checked={weather === "cold"}
          />
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
}

export default AddItemModal;
