import { useContext } from "react";

import CurrentTempUnitContext from "../../contexts/CurrentTempUnitContext";
import GeneralUIContext from "../../contexts/GeneralUIContext";

import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";

import "./Main.css";

function Main() {
  const { currentTempUnit, weatherData } = useContext(CurrentTempUnitContext);
  const { clothingItems, handleCardClick } = useContext(GeneralUIContext);

  return (
    <main>
      <WeatherCard weatherData={weatherData} />
      <section className="cards">
        <p className="cards__text">
          Today is {weatherData.temp[currentTempUnit]}&deg; {currentTempUnit} /
          You may want to wear:
        </p>
        <ul className="cards__list">
          {clothingItems
            .filter((item) => {
              return item.weather === weatherData.type;
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
    </main>
  );
}

export default Main;
