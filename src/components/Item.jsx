import React from "react";
import { Link } from "react-router-dom";

const Item = ({item}) => {
    return (
        <div className="col-md-4">
            <Link to={"/item/" + item.id} className="text-dark text-decoration-none">
                <div className="card text-center border border-0 card-img">
                    <img src={"/images/" + item.img} className="card-img-top img-catalogo" alt={item.nombre} />
                    <div className="card-body">
                        <p className="card-text">{item.marca}</p>
                        <p className="card-text">{item.modelo}</p>
                        <p className="card-text">Precio: ${item.price}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Item;