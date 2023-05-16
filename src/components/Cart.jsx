import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";

const Cart = () => {
    const {cart, cartTotal, clear, removeItem, sumTotal} = useContext(CartContext);

    if (cartTotal() === 0) {
        return (
            <div className="container">
                <div className="row my-5">
                    <div className="col-md-12 text-center">
                        <div className="alert alert-danger" role="alert">No se encontraron productos en el carrito</div>
                        <Link to={"/"} className="btn btn-warning">Volver al inicio</Link>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="container">
            <div className="row my-5">
                <div className="col-md-12 text-center">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">&nbsp;</th>
                                <th scope="col">Producto</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Precio</th>
                                <th><Link onClick={clear} className="btn btn-warning">Vaciar carrito</Link></th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td><img src={"/images/"+item.img} alt={item.modelo} width={80} /></td>
                                    <td className="align-middle">{item.modelo}</td>
                                    <td className="align-middle">{item.quantity}</td>
                                    <td className="align-middle">${item.quantity * item.price}</td>
                                    <td className="align-middle"><Link onClick={() => {removeItem(item.id)}}><img src={"/images/basura.svg"} alt={"Eliminar producto"} width={32} /></Link></td>
                                </tr>
                            ))}
                            <tr className="align-middle">
                                <td colspan={2}>&nbsp;</td>
                                <td><b>Total a pagar</b></td>
                                <td><b>${sumTotal()}</b></td>
                                <td><Link to={"/checkout"} className="btn btn-warning">Finalizar Compra</Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;