import { Component } from "react";
import Boton from "./comun/Boton";
export default class Login extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div className="Contenedor">
                Componente Login
                <Boton
             ruta='/alumnos'
                >Ir a alumnos</Boton>
            </div>
        )
    }
}