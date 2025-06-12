import "./WeatherCard.css";
import { defaultWeatherCards, weatherCards } from "../../utils/constants";

function WeatherCard({ weatherData }) {
  const filteredOptions = weatherCards.filter((option) => {
    return (
      option.day === weatherData.isDay &&
      option.condition === weatherData.condition
    );
  });

  let weatherOptions;
  if (filteredOptions.length === 0) {
    weatherOptions = defaultWeatherCards[weatherData.isDay ? "day" : "night"];
  } else {
    weatherOptions = filteredOptions[0];
  }

  return (
    <section className="weather-card">
      <p className="weather-card__temp">{weatherData.temp.F}&deg;F</p>
      <img
        src={weatherOptions?.url}
        alt={`Card showing ${weatherOptions?.day ? "day" : "night"}time ${
          weatherOptions?.condition
        } weather`}
        className="weather-card__image"
      />
    </section>
  );
}

export default WeatherCard;
