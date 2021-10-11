function Drawer() {
    return(
        <div className="overlay" style={{display: "none"}}>
            <div className="drawer">
            <h2 className="mb-30 d-flex justify-between">Корзина <img className="removeBtn cu-p" src="/img/remove.jpg" alt="remove" /></h2>

            <div className="cartBlock">
                <div className="cartItem d-flex align-center mb-20">
                    <div className=""></div>
                    <img className="cartItem-img mr-20" src="/img/sneakers/1.jpg" alt="sneakers" />
                    <div className="mr-20">
                    <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                    <b>12 999 руб.</b>
                    </div>
                    <img className="removeBtn" src="/img/remove.jpg" alt="remove" />
                </div>

                <div className="cartItem d-flex align-center mb-20">
                    <div className=""></div>
                    <img className="cartItem-img mr-20" src="/img/sneakers/1.jpg" alt="sneakers" />
                    <div className="mr-20">
                    <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                    <b>12 999 руб.</b>
                    </div>
                    <img className="removeBtn" src="/img/remove.jpg" alt="remove" />
                </div>
            </div>

            <div className="items">
                <ul className="cartTotalBlock">
                <li className="d-flex justify-between">
                    <span>Итого:</span>
                    <div></div>
                    <b>21 498 руб.</b>
                </li>
                <li className="d-flex justify-between">
                    <span>Налог 5%:</span>
                    <div></div>
                    <b>1074 руб.</b>
                </li>
                </ul>
                <button className="cartTotalBlock-btn">Оформить заказ <img src="/img/arrow.jpg" alt="arrow" /></button>
            </div>

            </div>
        </div>
    );
}
export default Drawer;