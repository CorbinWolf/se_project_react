import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";

function ClothesSection({ handleCardClick, weatherData, clothingItems }) {
  return (
    <section className="clothessection">
      <div className="clothessection__header">
        <p className="clothessection__title">Your items</p>
        <button type="button" className="clothessection__add-clothes-btn">
          + Add new
        </button>
      </div>
      <ul className="clothessection__list">
        {clothingItems
          .filter((item) => {
            return item.weather === weatherData.type;
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
