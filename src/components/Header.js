import React from 'react'
import "./Header.css"
import parkLogo from "./images/National-Park-Logo.png"


const Header = () => {
    return (
        <div className = 'header'>
            <h1>National Parks</h1>
            <p>Explore the National Parks</p>
            <img src={parkLogo} alt={""} 
            style={{height: '250px' , width: '200px'}} />
        </div>
    )
}

export default Header
