import React from "react";
import cham from "./images/cham.png"

function Header () {
   
    return (
        <div >
            <header className="header" >
                <h1>Welcome to Hameleon </h1>
                <img src={cham} />
            </header>
        </div>
    )
    }

export default Header