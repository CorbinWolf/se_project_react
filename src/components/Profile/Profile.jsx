import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";
import "./Profile.css";

function Profile({
  handleCardClick,
  handleAddClick,
  weatherData,
  clothingItems,
}) {
  return (
    <div className="profile">
      <SideBar />
      <ClothesSection
        handleCardClick={handleCardClick}
        onAddClick={handleAddClick}
        weatherData={weatherData}
        clothingItems={clothingItems}
      />
    </div>
  );
}

export default Profile;
