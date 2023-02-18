import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
        <nav className="container-btn-nav btn-group d-flex justify-content-center">
            <Link to="/home" className='btn btn-nav'>Accueil</Link>
            <Link to='/stay' className='btn btn-nav'>Séjour bien-être</Link>
            <Link to="/pension" className='btn btn-nav'>Pension débourrage</Link>
            <Link to="/price" className='btn btn-nav'>Tarifs</Link>
            <Link to="/contact" className='btn btn-nav'>Contact</Link>
        </nav>
    );
};

export default NavBar;