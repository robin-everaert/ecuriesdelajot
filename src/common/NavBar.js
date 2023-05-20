import { Link } from 'react-router-dom';

const NavBar = () => {

    // active Link: 
    const navLinks = document.querySelectorAll('.nav-item');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
        navLinks.forEach(navLink => navLink.classList.remove('active'));
        this.classList.add('active');
        });
    });

    return (
        <nav id="navBar" className="navbar navbar-expand-sm mt-3 mt-md-3">
            <div className="container-fluid justify-content-end">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-sm-flex justify-content-end text-end" id="navbarNav">
                <ul className="navbar-nav w-100 d-flex justify-content-md-center flex-wrap">
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