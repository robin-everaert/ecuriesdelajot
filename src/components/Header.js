import NavBar from "../common/NavBar";

import logoNoTxt from "../assets/images/logo-no-txt.png";

const Header = () => {
    return (
        <header className='main-header d-flex justify-content-between align-items-start' id="header">
                <div className="logo-header-container pt-3">
                    <img src={ logoNoTxt } className='img img-fluid logo-header' alt="Le logo de l'Ecuries de l'Ajot" />
                </div>
                
                <NavBar />                 
        </header>
    );
};

export default Header;