import React from "react";

const Error404 = () => {
    return (
        <div className="container text-center">
            <div className="row my-5">
                <div className="col-md-12">
                    <div className="alert alert-danger" role="alert">
                        <h1>Error 404!</h1>
                        <h3>La página que estas buscando no existe!</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Error404;