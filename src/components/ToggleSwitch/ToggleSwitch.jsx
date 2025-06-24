import { useContext } from "react";

import "./ToggleSwitch.css";
import CurrentTempUnitContext from "../../contexts/CurrentTempUnitContext";

function ToggleSwitch() {
  const { currentTempUnit, handleToggleSwitchChange } = useContext(
    CurrentTempUnitContext
  );

  return (
    <label className="toggle-switch">
      <input
        type="checkbox"
        className="toggle-switch__checkbox"
        onChange={handleToggleSwitchChange}
      />
      <div className="toggle-switch__container">
        <span
          className={`toggle-switch__circle${
            currentTempUnit === "C" ? " toggle-switch__circle_alt" : ""
          }`}
        ></span>
        <p
          className={`toggle-switch__text${
            currentTempUnit === "F" ? " toggle-switch__text_active" : ""
          }`}
        >
          F
        </p>
        <p
          className={`toggle-switch__text${
            currentTempUnit === "C" ? " toggle-switch__text_active" : ""
          }`}
        >
          C
        </p>
      </div>
    </label>
  );
}

export default ToggleSwitch;
