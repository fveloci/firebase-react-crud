import React, {useState} from 'react';

const Listadenombres = () => {
    return(
        <div>
            <h2>Aplicación CRUD básica</h2>
            <div className="row">
                <div className="col">   
                    <h3>Listado de nombres</h3>
                </div>
                <div className="col">
                    <h3>Formulario para añadir nombres</h3>
                    <form className="form-group">
                        <input className="form-control m-3" type="text" placeholder="Introduce el nombre"/>
                        <input className="form-control btn btn-info btn-block m-3" type="submit" value="Registrar nombre"></input>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Listadenombres;