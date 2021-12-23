import {Link} from "react-router-dom";
import React from "react";
import AppContext from "../context";

function Header(props) {
  const {setCartOpened, cartItems} = React.useContext(AppContext);
  const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);
    return(
        <header className="d-flex justify-between align-center">
        <Link to="/">
          <div className="d-flex align-center">
            <img alt="img" className="headerLeft-img" src="/img/logo.jpg" />
            <div className="headerInfo">
              <h3>React Sneakers</h3>
              <p>Магазин лучших кроссовок</p>
            </div>
          </div>
        </Link>
        <ul className="d-flex">
          <li onClick={() => setCartOpened(true)} className="mr-30 cu-p">
            <img alt="img" className="headerRight-img" src="/img/cart.jpg" />
            <span className="headerSpan">{totalPrice} руб.</span>
          </li>
          <li>
            <Link to="/favorites">
              <img alt="img" className="headerRight-img cu-p" src="/img/favorite.jpg" />
            </Link>
          </li>
          <li>
            <Link to="/orders">
              <img alt="img" className="headerRight-img cu-p" src="/img/user.jpg" />
            </Link>
          </li>
        </ul>
      </header>
    );
}
export default Header;