import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import Loading from "./Loading";

const Banners = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const q = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
        
        getDocs(q).then((snapShot) => {
            setItems(snapShot.docs.map((doc) => ({id:doc.id, ...doc.data()})
            ));
            setLoading(false);
        });
    }, [id]);

    return (
        <div className="container banners">
            <div className="row">
                <div className="col-md-6">
                    <img className="banner banner-img" src="images/banner1.jpg" alt="Banner de indumentaria" />
                    <div className="banner-titulo1">
                        <h3 className="titulo1">¡Descubrí la mejor indumentaria y la mayor variedad para vos!</h3>
                    </div>
                    <div className="banner-boton1">
                        <a className="boton1" href="https://www.tennis-warehouse.com/ApparelMen.html" target="_blank" rel="noreferrer">Ver</a>
                    </div>
                </div>
                <div className="col-md-6">
                    <img className="banner banner-img banner-img2" src="images/banner2.jpg" alt="Banner de raquetas" />
                    <div className="banner-titulo2">
                        <h3 className="titulo2">Aprovecha y regalate la raqueta que siempre quisiste.</h3>
                    </div>
                    <div className="banner-boton2">
                        <a className="boton2" href="https://www.tennis-warehouse.com/TennisRacquets.html" target="_blank" rel="noreferrer">Ver</a>
                    </div>
                    <img className="banner banner-img banner-img3" src="images/banner3.jpg" alt="Banner de encordados" />
                    <div className="banner-titulo3">
                        <h3 className="titulo3">Encordamos tu raqueta y muchos más.</h3>
                    </div>
                    <div className="banner-boton3">
                        <a className="boton3" href="https://www.tennis-warehouse.com/stringcontent.html" target="_blank" rel="noreferrer">Ver</a>
                    </div>
                </div>
            </div>
            <div className="container">
                {loading ? <Loading /> : <ItemList items={items} />}
            </div>
        </div>
    );
};

export default Banners;