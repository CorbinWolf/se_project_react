import "./WeatherCard.css";
import sunnyDay from "../../assets/sunny-day.png";

function WeatherCard() {
  return (
    <section className="weather-card">
      <img src={sunnyDay} alt="" className="weather-card__image" />
      <p className="weather-card__temp">75&deg;F</p>
    </section>
  );
}

export default WeatherCard;
