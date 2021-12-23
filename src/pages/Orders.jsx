import axios from "axios";
import React from "react";
import Card from "../components/Card";

function Orders(onAddToCart, onAddToFavorite) {
    const [orders, setOrders] = React.useState([]);
    React.useEffect(() => {
        (async () => {
           try {
            const {data} = await axios.get("https://61671c9c13aa1d00170a69b1.mockapi.io/orders");
            // console.log(data.map((obj) => obj.items).flat());// вытаскиваем из объектов массивы и объединяем в один массив
            // console.log(data.reduce((prev, obj) => [...prev, ...obj.items], []));//вытаскиваем из объектов массивы и сохраняем их в предыдущий массив
            setOrders(data.map((obj) => obj.items).flat());
           }
           catch (error) {
               alert("Error");
           } 
        })();
    }, []);
    return (
        <div className="content p-40">
            <h1>Мои заказы</h1>

            <div className="d-flex flex-wrap">
            {
                orders.map((obj) => {
                return <Card
                    id={obj.id}
                    title={obj.title} 
                    price={obj.price} 
                    imageUrl={obj.imageUrl}
                    key={obj.imageUrl}
                />
                })
            }
            </div>

        </div>
    );
}
export default Orders;