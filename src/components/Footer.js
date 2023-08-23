import logo from "../assets/images/logo.png";

const Footer = () => {

    return (
        <footer id="main-footer" className="d-flex flex-column justify-content-center align-items-center">
            <img src={ logo } alt="Le logo de l'écuries de l'Ajot" className="img img-fluid logo" />
            <p className="mt-3 text-center">© Marie Bailly - Ecuries de l'Ajot | Tous droits réservés</p>
            <p className="text-center">3 chemin de l'Ajot 51340 Pargny-sur-Saulx</p>
            <a href="https://www.linkedin.com/in/robin-everaert/?originalSubdomain=fr" className="text-center d-flex align-items-center mt-4" target="_blank">
                <i className="fa-solid fa-code"></i><span>Site développé par Everaert Robin</span><i className="fa-solid fa-code"></i>
            </a>
            <a href="https://github.com/robin-everaert/ecuriesdelajot" className="text-center d-flex align-items-center" target="_blank">
                <i className="fa-solid fa-code"></i><span>Voir le code source</span><i className="fa-solid fa-code"></i>
            </a>
        </footer>
    );
};

export default Footer;