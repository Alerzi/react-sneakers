import Info from "./Info";
import React from "react";
// import AppContext from "../context";
import axios from "axios";
import {useCart} from "../hooks/useCarts";//кастомный хук вместо AppContext

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer({onClose, items = [], onRemove, opened}) {
    // const {cartItems, setCartItems} = React.useContext(AppContext);
    const {cartItems, setCartItems, totalPrice} = useCart();//кастомный хук вместо AppContext
    const [orderId, setOrderId] = React.useState(null);
    const [isOrderComplete, setIsOrderComplete] = React.useState(false);
    // const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);
    const onClickOrder = async () => {console.log(cartItems);
        try {
            const {data} = await axios.post("https://61671c9c13aa1d00170a69b1.mockapi.io/orders", { items: cartItems });
            setOrderId(data.id);
            setIsOrderComplete(true);
            setCartItems([]);
            for(let i = 0; i < cartItems.length; i++) {
                const item = cartItems[i];
                await axios.delete("https://61671c9c13aa1d00170a69b1.mockapi.io/cart/" + item.id);
                await delay(1000);
            }
        }
        catch(error) {
            alert(error);
        }
    }
    return(
        <div className={`overlay ${opened ? "overlayShow" : ""}`}>
            <div className="drawer">
            <h2 className="mb-30 d-flex justify-between">Корзина <img className="removeBtn cu-p" onClick={onClose} src="/img/remove.jpg" alt="remove" /></h2>
            {
                items.length > 0 ? (
                <div>
                    <div className="cartBlock">
                        {
                            items.map((obj) => { 
                                return (
                                    <div key={obj.imageUrl} className="cartItem d-flex align-center mb-20">
                                        <img className="cartItem-img mr-20" src={obj.imageUrl} alt="sneakers" />
                                        <div className="mr-20">
                                            <p className="mb-5">{obj.name}</p>
                                            <b>{obj.price}</b>
                                        </div>
                                        <img onClick={() => onRemove(obj.id)} className="removeBtn" src="/img/remove.jpg" alt="remove" />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="items">
                        <ul className="cartTotalBlock">
                        <li className="d-flex justify-between">
                            <span>Итого:</span>
                            <div></div>
                            <b>{totalPrice} руб.</b>
                        </li>
                        <li className="d-flex justify-between">
                            <span>Налог 5%:</span>
                            <div></div>
                            <b>{(totalPrice / 100) * 5} руб.</b>
                        </li>
                        </ul>
                        <button onClick={onClickOrder} className="cartTotalBlock-btn">Оформить заказ <img src="/img/arrow.jpg" alt="arrow" /></button>
                    </div>
                </div>
                ) : (
                    <Info 
                        title={isOrderComplete ? "Заказ оформлен" : "Корзина пустая"}
                        description={isOrderComplete ? `Ваш заказ №${orderId} скоро будет передан крьерам` : `Добавьте пару кроссовок, чтобы сделать заказ`}
                    />
                )
            }

            </div>
        </div>
    );
}
export default Drawer;