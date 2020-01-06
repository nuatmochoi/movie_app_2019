import React from "react";
import { Link } from "react-router-dom"

function Navigation(){
    return <div>
        <Link to="/">Home</Link> 
        <Link to="/about">About</Link>
    </div> // instead of <a>, use Link => it doesn't kill react
}

export default Navigation