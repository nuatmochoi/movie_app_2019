import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation(){
    return (<div className="nav">
        <Link to="/">Home</Link> 
        <Link to="/about">About</Link>
    </div>
    ); // instead of <a>, use Link => it doesn't kill react
}

export default Navigation;