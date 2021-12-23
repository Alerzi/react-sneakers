import React from "react";
import Card from "../components/Card";

function Home({items, searchValue, setSearchValue, onChangeSearchInput, onAddToFavorite, onAddToCart }) {
    return (
        <div className="content p-40">
            <div className="d-flex align-center mb-40 justify-between">
            <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кроссовки"}</h1>
            <div className="search-block">
                <img src="/img/search.jpg" alt="search" className="searchImg"/>
                {searchValue && <img onClick={() => setSearchValue('')} src="/img/clear.jpg" alt="x" className="searchClear" />}
                <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." />
            </div>
            </div>

            <div className="d-flex flex-wrap">
            {
                items.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()))
                .map((obj) => {
                return <Card
                    id={obj.id}
                    title={obj.name} 
                    price={obj.price} 
                    imageUrl={obj.imageUrl}
                    key={obj.imageUrl}
                    // added={isItemAdded(obj.id)}
                    onPlus={(object) => onAddToCart(object)}
                    onFavorite={(object) => onAddToFavorite(object)}
                />
                })
            }
            </div>

        </div>
    );
}
export default Home;