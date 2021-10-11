function Header() {
    return(
        <header className="d-flex justify-between align-center">
        <div className="d-flex align-center">
          <img alt="img" class="headerLeft-img" src="/img/logo.jpg" />
          <div className="headerInfo">
            <h3>React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img alt="img" class="headerRight-img" src="/img/cart.jpg" />
            <span className="headerSpan">1205 руб.</span>
          </li>
          <li>
            <img alt="img" class="headerRight-img" src="/img/user.jpg" />
          </li>
        </ul>
      </header>
    );
}
export default Header;