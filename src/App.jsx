import { Component } from "react";
import './App.css'
import Login from "./Components/Login/Login";
import Alumnos from "./Components/Alumnos/Alumnos";
import { Route } from "wouter";
import { Redirect } from "wouter";

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      menu:"alumnos"
    }
  }

  render(){
    return(
      <>
      {/header/}
      <switch>
    <Route path="/">
    <Redirect to="/login"/>
      </Route>
      <Route path="/login"> 
      <Login
        cambiarMenu={(opcion)=> this.setState({menu:opcion})}
     />
     </Route>
      
      <Route path= "/alumnos">
     <Alumnos
     cambiarMenu={(opcion)=> this.setState({menu:opcion})}
     />
     </Route>
     <Route>404</Route>
     </switch>
     {/header/}
     </>
    
    )
  }
}