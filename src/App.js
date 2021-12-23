import AppContext from "./context";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import React from "react";
import axios from "axios";
import {Route} from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Orders from "./pages/Orders";

// export const AppContext = React.createContext({});

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [favorites, setFavorites] = React.useState([]);

  React.useEffect(() => {
    // fetch("https://61671c9c13aa1d00170a69b1.mockapi.io/items").then(res => {
    //   return res.json();
    // }).then(json => setItems(json));
    // axios.get("https://61671c9c13aa1d00170a69b1.mockapi.io/items").then((res) => {
    //   setItems(res.data);
    // });
    // axios.get("https://61671c9c13aa1d00170a69b1.mockapi.io/cart").then((res) => {
    //   setCartItems(res.data);
    // });
    // axios.get("https://61671c9c13aa1d00170a69b1.mockapi.io/favorites").then((res) => {
    //   setFavorites(res.data);
    // });
    async function fetchData() {
     try {
       const [cartResponse, favoritesResponse, itemsResponse] = await Promise.all([
         axios.get("https://61671c9c13aa1d00170a69b1.mockapi.io/cart"), 
         axios.get("https://61671c9c13aa1d00170a69b1.mockapi.io/favorites"), 
         axios.get("https://61671c9c13aa1d00170a69b1.mockapi.io/items")
        ]);
      // const cartResponse = await axios.get("https://61671c9c13aa1d00170a69b1.mockapi.io/cart");
      // const favoritesResponse = await axios.get("https://61671c9c13aa1d00170a69b1.mockapi.io/favorites");
      // const itemsResponse = await axios.get("https://61671c9c13aa1d00170a69b1.mockapi.io/items");

      setCartItems(cartResponse.data);
      setFavorites(favoritesResponse.data);
      setItems(itemsResponse.data);
     }
     catch (error) {
       alert("Error");
     }
    }
    fetchData();
  }, []);

  const onAddToCart = async (obj) => {
   try {
     const findItem = cartItems.find((item) => Number(item.parentId) === Number(obj.id));
     if(findItem) {
      setCartItems(prev => prev.filter(item => Number(item.parentId) !== Number(obj.id)));
      await axios.delete(`https://61671c9c13aa1d00170a69b1.mockapi.io/cart/${Number(findItem.id)}`);
     }
     else {
      const {data} = await axios.post("https://61671c9c13aa1d00170a69b1.mockapi.io/cart", obj);
      setCartItems(prev => [...prev, data]);
     }
    }
    catch (error) {
      alert("Error");
    }
  }

  const onRemoveItem = (id) => {
    axios.delete(`https://61671c9c13aa1d00170a69b1.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter(item => item.id !== id));
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  }

  const onAddToFavorite = async (obj) => {
    try {
      const findFavorite = favorites.find(item => Number(item.parentId) === Number(obj.id));
      if(findFavorite) {
        setFavorites(prev => prev.filter(item => Number(item.parentId) !== Number(obj.id)));
        await axios.delete(`https://61671c9c13aa1d00170a69b1.mockapi.io/favorites/${Number(findFavorite.id)}`);
      }
      else {
        const {data} = await axios.post("https://61671c9c13aa1d00170a69b1.mockapi.io/favorites", obj);
        setFavorites(prev => [...prev, data]);
      }
    }
    catch (error) {
      alert("Не удалось добавить в фавориты");
    }
  }

  const onRemoveFavorite = (id) => {
    axios.delete(`https://61671c9c13aa1d00170a69b1.mockapi.io/favorites/${id}`);
    setFavorites((prev) => prev.filter(item => item.id !== id));
  }

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id));
  }

  const isFavoriteAdded = (id) => {
    console.log(id);
    return favorites.some((obj) => Number(obj.parentId) === Number(id));
  }

  return (
   <AppContext.Provider value={{items, cartItems, favorites, isItemAdded, isFavoriteAdded, setCartOpened, setCartItems}}>
      <div className="wrapper clear">
        <Drawer opened={cartOpened} items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem}/>
        <Header />
        <Route path="/" exact>
          <Home 
            items={items}
            cartItems={cartItems}
            searchValue={searchValue} 
            setSearchValue={setSearchValue}
            onChangeSearchInput={onChangeSearchInput}
            onAddToFavorite={onAddToFavorite}
            onAddToCart={onAddToCart} 
          />
        </Route>
        <Route path="/favorites" exact>
          <Favorites 
            // items={favorites} 
            onAddToFavorite={onAddToFavorite}
            onRemoveFavorite={onRemoveFavorite}
          />
        </Route>
        <Route path="/orders" exact>
          <Orders />
        </Route>
      </div>
   </AppContext.Provider>
  );
}

export default App;
