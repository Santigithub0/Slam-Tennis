import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "./context/CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {
    const {addItem} = useContext(CartContext);
    const [itemStock, setItemStock] = useState(0);

    const onAdd = (quantity) => {
        setItemStock(itemStock - quantity);
        addItem(item, quantity);
    };

    useEffect(() => {
        setItemStock(item.stock);
    }, [item]);

    return (
        <div className="row detailContainer">
            <div className="col-md-4 offset-md-2">
                <img src={"/images/"+item.img} alt={item.nombre} className="img-fluid img-detail" />
            </div>
            <div className="col-md-4 offset-md-2">
                <h1>{item.marca}</h1>
                <h5>{item.modelo}</h5>
                <p>{item.peso}</p>
                <p>{item.lenght}</p>
                <p>{item.headsize}</p>
                <p>{item.balance}</p>
                <p>{item.construction}</p>
                <p>{item.stringpattern}</p>
                <p><b>Precio: ${item.price}</b></p>
                <ItemCount stock={item.stock} onAdd={onAdd} />
            </div>
        </div>
    );
};

export default ItemDetail;