import { Link } from "react-router-dom";
import associationLogo from "../../assets/images/association/logo-association.png";

const Association = () => {
    return (
        <main id="main" className="main main-association">
            
            <div className="container">
                <section className="row">
                    <div className="col-12 d-flex flex-column justify-content-center align-items-center pt-5">
                        <img src={ associationLogo } className="img img-fluid logo-assoc" alt="Le logo de l'association L'Ajot'Vial" />
                        <h3 className="secondColor mt-4 text-center fw-bold">Une association pour faire grandir l’aventure</h3>
                    </div>
                    <div className="col-12 txt-container">
                        <p className="mt-5 mb-3">
                            L’Ajot’Vial est une association créée pour soutenir concrètement et durablement les Écuries de l’Ajot. Son but est d’accompagner le fonctionnement quotidien des écuries tout en permettant le développement de projets enrichissants pour les chevaux comme pour leurs propriétaires.
                        </p>
                        <p>
                            À travers L’Ajot’Vial, nous souhaitons organiser des événements et des stages à thème, autour du bien-être équin, de la relation homme/cheval et de disciplines variées telles que le mountain trail. Ces moments seront l’occasion d’apprendre, de partager et de vivre de belles expériences collectives dans une ambiance conviviale.
                        </p>
                    </div>
                    <ul className="li-container mt-3">
                        <h3 className="secondColor mt-4 text-center fw-bold">Rejoindre l’association, c’est:</h3>
                        <li>
                            <i className="fa-solid fa-horse"></i>
                            Soutenir la vie et les projets des écuries.
                        </li>
                        <li>
                            <i className="fa-solid fa-horse"></i>
                            Participer à la mise en place d’activités enrichissantes,
                        </li>
                        <li>
                        <i className="fa-solid fa-horse"></i>
                            Contribuer à faire grandir un lieu où les chevaux et leurs humains s’épanouissent ensemble.
                        </li>
                        <li>
                            <i className="fa-solid fa-horse"></i>
                            Adhésion annuelle: 20 €
                        </li>
                    </ul>  
                    <p className="fst-italic text-center secondColor fw-bold">
                        <Link className="link d-block" to="/contact">Pour plus d’informations ou pour adhérer, contactez-nous !</Link> 
                    </p> 
                </section>

                {/* <section className="row">
                    <h1 className="text-center mt-5">Événements à venir 2024-2025</h1>
                    <div className="col-12 txt-container text-center">
                        <h3 className="mt-3 mb-2">Repas de Noël</h3>
                        <p>Célébrez les fêtes avec nous dans une ambiance conviviale avec un repas festif.</p>
                        <h3 className="mt-4 mb-2">Vide sellerie</h3>
                        <p>Une occasion idéale pour vendre, acheter ou échanger du matériel d'équitation et passer une bonne journée !</p>
                    </div>
                </section> */}
            </div>
        </main>
    );
};

export default Association;