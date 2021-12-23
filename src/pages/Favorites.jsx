import React from "react";
import Card from "../components/Card";
import AppContext from "../context";

function Favorites({onAddToFavorite, onRemoveFavorite}) {
    const {favorites} = React.useContext(AppContext);
    return (
        <div className="content p-40">
            <h1>Мои закладки</h1>

            <div className="d-flex flex-wrap">
            {
                favorites.map((obj) => {
                return <Card
                    {...obj}
                    key={obj.imageUrl}
                    onFavorite={onAddToFavorite}
                    onRemoveFavorite={onRemoveFavorite}
                />
                })
            }
            </div>

        </div>
    );
}
export default Favorites;