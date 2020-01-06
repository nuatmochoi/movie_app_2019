import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home"
import About from "./routes/About";
import Navigation from "./components/Navigation"

function App(){
  return ( // if there is Link in Navigation => put in Navi~ in Router
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home}/> 
      <Route path="/about" component={About}/>
    </HashRouter>
  ); // exact=>  render when url ==="~~~"
}

export default App;