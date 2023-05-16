import React from "react";

const Footer = () => {
    return (
        <div className="container footer">
            <div className="row py-2">
                <div className="col-md-6">
                    <a href="https://www.facebook.com/tenniswarehouse" target="_blank" rel="noreferrer" className="mx-3"><img src={"/images/facebook.svg"} alt={"Facebook"} width={24} /></a>
                    <a href="https://twitter.com/TennisWarehouse" target="_blank" rel="noreferrer" className="mx-3"><img src={"/images/twitter.svg"} alt={"Twitter"} width={24} /></a>
                    <a href="https://www.instagram.com/tenniswarehouse/" target="_blank" rel="noreferrer" className="mx-3"><img src={"/images/instagram.svg"} alt={"Instagram"} width={24} /></a>
                    <a href="https://www.youtube.com/channel/UCmgyIibKmFosnm-LyZEB7uQ" target="_blank" rel="noreferrer" className="mx-3"><img src={"/images/youtube.svg"} alt={"YouTube"} width={24} /></a>
                </div>
                <div className="col-md-6 d-flex justify-content-end">
                    <a href="https://www.apple.com/la/app-store/" target="_blank" rel="noreferrer" className="mx-1"><img src="/images/appstore.png" alt="App Store" width="115" /></a>
                    <a href="https://play.google.com/store/games?device=phone&hl=es_AR&gl=US" target="_blank" rel="noreferrer" className="mx-1"><img src="/images/googleplay.png" alt="Play Store" width="129" /></a>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-md-10">
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link text-muted" href="https://www.tennis-warehouse.com/privacypolicy.html" target="_blank" rel="noreferrer">Política de Privacidad</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-muted" href="https://www.tennis-warehouse.com/custservice/" target="_blank" rel="noreferrer">Defensa del Consumidor</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-muted" href="https://www.tennis-warehouse.com/termsofuse.html" target="_blank" rel="noreferrer">Protección de datos personales</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-muted" href="https://www.tennis-warehouse.com/custservice/contactus.html" target="_blank" rel="noreferrer">Contacto</a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-2 text-end">
                    <p><img src="/images/logo.jpg" alt="Slam Tennis" width="40" /> © Slam Tennis 2022</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;