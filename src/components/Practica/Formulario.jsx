import React, {useState} from 'react';

const Formulario = () => {

    const [nombre, setNombre] = useState('');
    const [edad, setEdad] = useState('');

    const Validar = (event) => {
        event.preventDefault()
        if(!nombre.trim()){
            console.log("El nombre esta vacio");
            return
        }
        if(!edad.trim()){
            console.log("La edad esta vacia");
            return
        }
    }


    return (
        <div className="container">
            <form onSubmit={Validar} action="" className="form-group">
                <input 
                placeholder="Introduce nombre" 
                class="form-control m-2" 
                type="text"
                onChange={(e) => {setNombre(e.target.value)}}/>
                <input 
                placeholder="Introduce edad" 
                class="form-control m-2" 
                type="text"
                onChange={(e) => {setEdad(e.target.value)}}/>
                <input className="btn btn-info btn-block" type="submit"/>
            </form>
        </div>
    )
}

export default Formulario;