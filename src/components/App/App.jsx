import { useEffect, useState } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";

import CurrentTempUnitContext from "../../contexts/CurrentTempUnitContext";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import GeneralUIContext from "../../contexts/GeneralUIContext";
import {
  getInitialCards,
  addCard,
  removeCard,
  getUserData,
  updateUserInfo,
} from "../../utils/api";
import { signup, signin, tokenCheck } from "../../utils/auth";
import { coordinates, APIkey } from "../../utils/constants";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import AddItemModal from "../AddItemModal/AddItemModal";
import RemoveItemModal from "../RemoveItemModal/RemoveItemModal";
import ItemModal from "../ItemModal/ItemModal";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import EditProfileModal from "../EditProfileModal/EditProfileModal";

import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999, C: 999 },
    city: "",
    condition: "",
    isDay: true,
  });
  const [clothingItems, setClothingItems] = useState([]);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTempUnit, setCurrentTempUnit] = useState("F");
  const [currentUser, setCurrentUser] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  const handleToggleSwitchChange = () => {
    setCurrentTempUnit(currentTempUnit === "F" ? "C" : "F");
  };

  const manageActiveModal = (modal) => {
    setActiveModal(modal);
  };

  const handleCardClick = (card) => {
    manageActiveModal("preview");
    setSelectedCard(card);
  };

  const handleSignOutClick = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    setCurrentUser("");
    navigate("/");
  };

  const handleLoginModalSubmit = ({ email, password }) => {
    signin(email, password)
      .then((data) => {
        localStorage.setItem("jwt", data.token);
        getUserData().then((UserData) => {
          setCurrentUser(UserData);
          manageActiveModal("");
        });
        setIsLoggedIn(true);
      })
      .catch(console.error);
  };

  const handleRegisterModalSubmit = ({ email, password, name, avatar }) => {
    signup(email, password, name, avatar)
      .then((data) => {
        handleLoginModalSubmit({ email, password });
      })
      .catch(console.error);
  };

  const handleEditProfileSubmit = ({ name, avatar }) => {
    updateUserInfo({ name, avatar }, localStorage.getItem("jwt"))
      .then((res) => {
        setCurrentUser(res);
        manageActiveModal("");
      })
      .catch((error) => console.log(error));
  };

  const handleAddItemModalSubmit = ({ name, imageUrl, weather }) => {
    addCard({ name, imageUrl, weather })
      .then((newItem) => {
        setClothingItems([newItem, ...clothingItems]);
        manageActiveModal("");
      })
      .catch(console.error);
  };

  const handleRemoveItemModalSubmit = () => {
    removeCard(selectedCard._id)
      .then(() => {
        setClothingItems(
          clothingItems.filter((item) => item._id !== selectedCard._id)
        );
        manageActiveModal("");
      })
      .catch(console.error);
  };

  const handleTokenCheck = () => {
    if (localStorage.getItem("jwt")) {
      tokenCheck()
        .then((res) => {
          setCurrentUser(res);
          setIsLoggedIn(true);
        })
        .catch((err) => {
          console.log(err);
          setIsLoggedIn(false);
        });
    }
  };

  const renderCards = () => {
    getInitialCards()
      .then((data) => {
        setClothingItems(data);
      })
      .catch(console.error);
  };

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    renderCards();
  }, []);

  useEffect(() => {
    if (!activeModal) return;

    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        manageActiveModal("");
      }
    };

    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]);

  useEffect(() => {
    handleTokenCheck();
  }, []);

  return (
    <GeneralUIContext.Provider
      value={{
        activeModal,
        clothingItems,
        selectedCard,
        manageActiveModal,
        handleCardClick,
        handleAddItemModalSubmit,
        handleRemoveItemModalSubmit,
      }}
    >
      <CurrentUserContext.Provider
        value={{
          currentUser,
          isLoggedIn,
          handleLoginModalSubmit,
          handleRegisterModalSubmit,
          handleEditProfileSubmit,
          handleSignOutClick,
        }}
      >
        <CurrentTempUnitContext.Provider
          value={{ currentTempUnit, weatherData, handleToggleSwitchChange }}
        >
          <div className="page">
            <div className="page__content">
              <Header />
              <Routes>
                <Route path="/" element={<Main />} />
                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute>
                      <Profile />
                    </ProtectedRoute>
                  }
                />
              </Routes>
              <Footer />
            </div>
            <LoginModal />
            <RegisterModal />
            <EditProfileModal />
            <AddItemModal />
            <RemoveItemModal />
            <ItemModal />
          </div>
        </CurrentTempUnitContext.Provider>
      </CurrentUserContext.Provider>
    </GeneralUIContext.Provider>
  );
}

export default App;
