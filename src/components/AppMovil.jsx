import React from "react";

const AppMovil = () => {
    return (
        <div className="container-fluid bg-warning descarga">
            <div className="container py-4">
                <div className="row">
                    <div className="col-md-2">
                        <img className="marca-grande" src="/images/logo.jpg" alt="Slam Tennis" width="123" />
                    </div>
                    <div className="col-md-8 d-flex align-items-center">
                        <div>
                            <h2>Descargate nuestra app</h2>
                            <p>Descargate nuestra app y mira todo lo que tenemos para vos</p>
                        </div>
                    </div>
                    <div className="col-md-2 d-flex align-items-center text-end">
                        <a className="btn btn-light btn-lg" href="https://play.google.com/store/apps/details?id=com.app.tennishub&hl=es_AR&gl=US" target="_blank" rel="noreferrer">Descargar</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppMovil;