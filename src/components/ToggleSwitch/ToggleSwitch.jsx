import "./ToggleSwitch.css";

function ToggleSwitch() {
  return (
    <label className="toggle-switch">
      <input type="checkbox" className="toggle-switch__checkbox" />
      <div className="toggle-switch__container">
        <span className="toggle-switch__circle"></span>
        <p className="toggle-switch__text toggle-switch__text_active">F</p>
        <p className="toggle-switch__text">C</p>
      </div>
    </label>
  );
}

export default ToggleSwitch;
