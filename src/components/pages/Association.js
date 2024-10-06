import { Link } from "react-router-dom";
import associationLogo from "../../assets/images/association/logo-association.png";

const Association = () => {
    return (
        <main id="main" className="main main-association">
            
            <div className="container">
                <section className="row">
                    <div className="col-12 d-flex justify-content-center pt-5">
                        <img src={ associationLogo } className="img img-fluid logo-assoc" alt="Le logo de l'association L'Ajot'Vial" />
                    </div>
                    <div className="col-12 txt-container text-center">
                        <h4 className="mt-5 mb-3">
                            L'Ajot'Vial vise à apporter un soutien concret et durable aux écuries de l'Ajot en aidant à leur fonctionnement et l'organisation d'événements.
                        </h4>
                        <p className="mb-1">Participez à l'aventure de L'Ajot'Vial et faisons-la grandir ensemble !</p>
                        <p className="mb-4">Adhésion annuelle : 10€ - L'adhésion 2024 est offerte !</p>
                        <Link className="link d-block" to="/contact">Pour plus d'informations <br />N'hésitez pas à me contacter.</Link>
                    </div>
                </section>

                <section className="row">
                    <h1 className="text-center mt-5">Événements à venir 2024-2025</h1>
                    <div className="col-12 txt-container text-center">
                        <h3 className="mt-3 mb-2">Repas de Noël</h3>
                        <p>Célébrez les fêtes avec nous dans une ambiance conviviale avec un repas festif.</p>
                        <h3 className="mt-4 mb-2">Vide sellerie</h3>
                        <p>Une occasion idéale pour vendre, acheter ou échanger du matériel d'équitation et passer une bonne journée !</p>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Association;