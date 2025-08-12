import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";

import "./Profile.css";

function Profile() {
  return (
    <div className="profile">
      <SideBar />
      <ClothesSection />
    </div>
  );
}

export default Profile;
