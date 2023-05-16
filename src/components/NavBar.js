import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
        <nav id="navBar" className="navbar navbar-expand-md">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-md-flex justify-content-center" id="navbarNav">
                    <ul className="navbar-nav d-md-flex justify-content-center">
                        <li className="nav-item active">
                        <Link to="/home" className='btn btn-nav'>Accueil</Link>
                        </li>
                        <li className="nav-item">
                        <Link to='/stay' className='btn btn-nav'>Séjour bien-être</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/pension" className='btn btn-nav'>Pension débourrage</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/price" className='btn btn-nav'>Tarifs</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/contact" className='btn btn-nav'>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;