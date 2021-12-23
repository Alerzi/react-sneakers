import React from "react";
import AppContext from "../context";

function Card({onFavorite, onRemoveFavorite, id, parentId, imageUrl, price, title, onPlus}) {

  const {isItemAdded, isFavoriteAdded} = React.useContext(AppContext);
  // const [isAdded, setIsAdded] = React.useState(added);
  // const [isFavorite, setIsFavorite] = React.useState(favorited);

  const onClickPlus = () => {
    onPlus({id, parentId: id, title, price, imageUrl});
    // setIsAdded(!isAdded);
  }

  const onClickFavorite = () => {
    if(parentId) {
      onRemoveFavorite(id);
    }
    else {
      onFavorite({id, parentId: id, title, price, imageUrl});
    }
    // setIsFavorite(!isFavorite);
  }

  return(
    <div className="card">
      {
        onFavorite && <img className="favorite" onClick={onClickFavorite} src={(parentId ? isFavoriteAdded(parentId) : isFavoriteAdded(id)) ? "/img/heart-liked.jpg" : "/img/heart-unliked.jpg"} alt="heart" />
      }
      <img className="cardImg" src={imageUrl} alt="sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price}</b>
        </div>
        {
          onPlus && 
          <button className="button" onClick={onClickPlus}>
            <img className="buttonImg" src={isItemAdded(id) ? "/img/checked.jpg" : "/img/plus.svg" } alt="+" />
          </button>
        }
      </div>
    </div>
  );
}
export default Card;