import { useState, useContext } from "react";

import likeHollow from "../../assets/like-hollow.svg";
import likeSolid from "../../assets/like-solid.svg";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { addLike, removeLike } from "../../utils/api";

import "./ItemCard.css";

function ItemCard({ item, onCardClick }) {
  const { currentUser, isLoggedIn } = useContext(CurrentUserContext);

  const [isLiked, setIsLiked] = useState(item?.likes.includes(currentUser._id));

  const handleCardClick = () => {
    onCardClick(item);
  };

  const handleIsLiked = () => {
    !isLiked
      ? addLike(item._id, currentUser)
          .then(() => {
            setIsLiked(true);
          })
          .catch(console.error)
      : removeLike(item._id, currentUser)
          .then(() => {
            setIsLiked(false);
          })
          .catch(console.error);
  };

  return (
    <li className="card">
      <div className="card__header">
        <h2 className="card__name">{item.name}</h2>
        {isLoggedIn ? (
          <img
            src={isLiked ? likeSolid : likeHollow}
            alt="Like button"
            onClick={handleIsLiked}
            className="card__like"
          />
        ) : (
          ""
        )}
      </div>
      <img
        onClick={handleCardClick}
        src={item.imageUrl}
        alt={item.name}
        className="card__image"
      />
    </li>
  );
}

export default ItemCard;
