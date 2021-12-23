import React from "react";
import AppContext from "../context";

const Info = ({title, description}) => {
    const {setCartOpened} = React.useContext(AppContext);
    return (
        <div>
            <h3 className="drawerEmpty">{title}</h3>
            <p>{description}</p>
            <button onClick={() => setCartOpened(false)}>Назад</button>
        </div>
    )
}
export default Info
