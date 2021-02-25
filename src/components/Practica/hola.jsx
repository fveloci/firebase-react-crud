import React from 'react';

function Hola(){
    let saludo = 'Hola que tal'
    return(        
        <React.Fragment>
            <h2>Primer componente {saludo}</h2>
            <p>Este es un parrafo de React ppppppp para aprender react</p>
        </React.Fragment>  
    );
}

export default Hola;