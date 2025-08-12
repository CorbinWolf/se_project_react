import { useContext } from "react";

import CurrentUserContext from "../../contexts/CurrentUserContext";
import GeneralUIContext from "../../contexts/GeneralUIContext";

import ItemCard from "../ItemCard/ItemCard";

import "./ClothesSection.css";

function ClothesSection() {
  const { currentUser } = useContext(CurrentUserContext);
  const { clothingItems, manageActiveModal, handleCardClick } =
    useContext(GeneralUIContext);

  return (
    <section className="clothessection">
      <div className="clothessection__header">
        <p className="clothessection__title">Your items</p>
        <button
          type="button"
          onClick={() => manageActiveModal("add-garment")}
          className="clothessection__add-clothes-btn"
        >
          + Add new
        </button>
      </div>
      <ul className="clothessection__list">
        {clothingItems
          .filter((item) => {
            return Array.isArray(item?.owner)
              ? item.owner?.includes(currentUser?._id)
              : item?.owner === currentUser?._id;
          })
          .sort((item, prevItem) => {
            return new Date(prevItem.createdAt) - new Date(item.createdAt);
          })
          .map((item) => {
            return (
              <ItemCard
                key={item._id}
                item={item}
                onCardClick={handleCardClick}
              />
            );
          })}
      </ul>
    </section>
  );
}

export default ClothesSection;
