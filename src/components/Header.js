import React from 'react';

import NavBar from "./NavBar";
const Header = () => {
    return (
        <header className='main-header' id="header">
            <div className="container-logo d-flex justify-content-center">
                <img src="./img/logo.jpeg" className='img -img-fluid' alt="Le logo de l'Ecuries de l'Ajot" />
            </div>
            
            <NavBar />     
        </header>
    );
};

export default Header;