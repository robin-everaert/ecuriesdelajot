import { NavLink } from 'react-router-dom';

const NavBar = () => {

    return (
        <nav id="navBar" className="navbar navbar-expand-sm mt-3 mt-md-3">
            <div className="container-fluid justify-content-end">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-sm-flex justify-content-end text-end" id="navbarNav">
                <ul className="navbar-nav w-100 d-flex justify-content-md-center flex-wrap">
                    <li className="nav-item active">
                        <NavLink to="/accueil" className='btn btn-nav'>Accueil</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/pension" className='btn btn-nav'>Pensions</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to="/education" className='btn btn-nav'>Éducation du cheval</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/tarif" className='btn btn-nav'>Tarifs</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/association" className='btn btn-nav'>L'Ajot'Vial</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" className='btn btn-nav'>Contact</NavLink>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;