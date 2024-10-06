import logo from "../assets/images/logo.png";
import logoNoTxt from "../assets/images/logo-no-txt.png";

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <footer id="main-footer" className="d-flex flex-column justify-content-center align-items-center pt-5">
            <div className="line-footer mb-4"></div>
            <img src={ logoNoTxt } alt="Le logo de l'écuries de l'Ajot" className="img img-fluid logo" />
            <p className="mt-3 text-center">© { currentYear } - Marie Bailly - Ecuries de l'Ajot - Tous droits réservés</p>
            <p className="text-center">3 chemin de l'Ajot 51340 Pargny-sur-Saulx</p>
            <a href="https://github.com/robin-everaert" className="text-center d-flex align-items-center mt-4" target="_blank">
                <i className="fa-solid fa-code"></i><span>Site développé par Everaert Robin</span><i className="fa-solid fa-code"></i>
            </a>
        </footer>
    );
};

export default Footer;