import { useContext } from "react";

import avatar from "../../assets/avatar.png";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import GeneralUIContext from "../../contexts/GeneralUIContext";

import "./SideBar.css";

function SideBar() {
  const { currentUser, handleSignOutClick } = useContext(CurrentUserContext);
  const { manageActiveModal } = useContext(GeneralUIContext);

  return (
    <section className="sidebar">
      <div className="sidebar__header">
        <img
          src={currentUser?.avatar || avatar}
          alt="User's avatar"
          className="sidebar__avatar"
        />
        <p className="sidebar__username">{currentUser?.name}</p>
      </div>
      <div className="sidebar__btns">
        <button
          className="sidebar__btn"
          onClick={() => manageActiveModal("edit-profile")}
        >
          Change profile data
        </button>
        <button className="sidebar__btn" onClick={handleSignOutClick}>
          Log out
        </button>
      </div>
    </section>
  );
}

export default SideBar;
