import { useContext } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.png";
import CurrentTempUnitContext from "../../contexts/CurrentTempUnitContext";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import GeneralUIContext from "../../contexts/GeneralUIContext";

import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

import "./Header.css";

function Header() {
  const { weatherData } = useContext(CurrentTempUnitContext);
  const { currentUser, isLoggedIn } = useContext(CurrentUserContext);
  const { manageActiveModal } = useContext(GeneralUIContext);

  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="Logo" className="header__logo" />
      </Link>
      <p className="header__date-and-location">
        {currentDate}, {weatherData.city}
      </p>
      <div className="header__container">
        <ToggleSwitch />
        {isLoggedIn ? (
          <>
            <button
              type="button"
              onClick={() => manageActiveModal("add-garment")}
              className="header__add-clothes-btn"
            >
              + Add clothes
            </button>
            <Link to="/profile" className="header__link">
              <div className="header__user-container">
                <p className="header__username">{currentUser?.name}</p>
                <img
                  src={currentUser?.avatar || avatar}
                  alt="User's avatar"
                  className="header__avatar"
                />
              </div>
            </Link>
          </>
        ) : (
          <>
            <button
              className="header__add-clothes-btn"
              onClick={() => manageActiveModal("sign-up")}
            >
              Sign Up
            </button>
            <button
              className="header__add-clothes-btn"
              onClick={() => manageActiveModal("login")}
            >
              Log In
            </button>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
