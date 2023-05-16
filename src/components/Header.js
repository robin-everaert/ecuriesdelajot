import React from 'react';

import logo from "../assets/images/logo.jpeg"



import NavBar from "./NavBar";
const Header = () => {
    return (
        <header className='main-header d-flex flex-column justify-content-around' id="header">
            <div className="container-logo d-flex justify-content-center">
                <img src={ logo } className='img -img-fluid' alt="Le logo de l'Ecuries de l'Ajot" />
            </div>
            
            <NavBar />     
        </header>
    );
};

export default Header;