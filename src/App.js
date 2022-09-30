import React from "react";
import MiPrimerComponente from "./componentes/MiPrimerComponente/MiPrimerComponente";
import PersonCard from "./componentes/PersonCard/PersonCard";

class App extends React.Component {

  render() {
    return (
      <div className="container">
        <h1> Mi primera aplicación con React</h1>
        <h2>Wuju!</h2>
        <MiPrimerComponente/>
        <PersonCard firstName='Elena' lastName='De Troya' age={30} city='México'/>
        <PersonCard firstName='Juana' lastName='De Troya' age={20} city='Roma'/>
        <PersonCard firstName='Pedro' lastName='Páramo' age={25} city='Colombia'/>
      </div>
    );
  }



}

export default App;
