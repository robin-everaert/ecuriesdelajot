import FormContact from '../FormContact';
import contactTop from "../../assets/images/contact/contact-top.jpg";

const Contact = () => {
    return (
        <main id="main-contact" className='main main-contact'>
            <h1 className='text-center'>Contactez-moi</h1>

            <div className="d-flex justify-content-center mt-5">
                <img src={ contactTop} className='img img-fluid b-radius imgContactTop' alt="Une photo de Marie Bailly qui promène deux chevaux" />
            </div>
            
            {/* Bubble */}
            <section className="container bubble-contact-container">
                <div className="row justify-content-around align-items-center">
                    <div className="bubble-contact-content col-12 col-md-3 d-flex flex-column justify-content-center align-items-center text-center">
                        <i className="fa-solid fa-house"></i>
                        <span>51340 - Pargny-sur-Saulx</span>
                    </div>
                    <a href="tel:0622671999" className="bubble-contact-content col-12 col-md-3 d-flex flex-column justify-content-center align-items-center text-center" target='_blank'>
                        <i className="fa-solid fa-phone"></i>
                        <span>06-22-67-19-99</span>
                    </a>
                    <a href="mailto:ecuriesdelajot@gmail.com" className="bubble-contact-content col-12 col-md-3 d-flex flex-column justify-content-center align-items-center text-center" target='_blank'>
                        <i className="fa-solid fa-envelope"></i>
                        <span>ecuriesdelajot@gmail.com</span>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100057115764094" className="bubble-contact-content col-12 col-md-3 d-flex flex-column justify-content-center align-items-center text-center" target='_blank'>
                        <i className="fa-brands fa-facebook-f"></i>
                        <span>Ecurie de L'Ajot</span>
                    </a>
                </div>
            </section>


            {/* Form */}
            <section className="container container-form">
                <div className="row">
                    <FormContact />
                </div>
            </section>

            {/* Banner */}
            <section className="banner-contact"></section>

            {/* Partenaire */}

            <section className="container partner mt-0 mt-md-5 pt-5">
                <h1 className='text-center'>Mes partenaires</h1>
                <div className="row mt-5">
                    <div className="col-12 partner-content border-container">
                        <h2 className='text-center'>Sarah Cleret - Equi'Presta <br /> Conseils et entretien des pieds nus </h2>
                            <div className="container-link-partner d-flex flex-column justify-content-around align-items-center">
                                <a href="https://www.facebook.com/profile.php?id=61567273826752" className="d-flex flex-column justify-content-center align-items-center" target='_blank'>
                                    <i className="fa-brands fa-facebook-f"></i>
                                    <span>Equi'Presta</span>
                                </a>
                                <a href="tel:+33769049674" className="d-flex flex-column justify-content-center align-items-center" target='_blank'>
                                    <i className="fa-solid fa-phone"></i>
                                    <span>07 69 04 96 74</span>
                                </a>
                                {/* <a href="mailto:amelieauguste@yahoo.fr" className="d-flex flex-column justify-content-center align-items-center" target='_blank'>
                                    <i className="fa-solid fa-envelope"></i>
                                    <span>amelieauguste@yahoo.fr</span>
                                </a> */}
                            </div>               
                    </div>
                </div>
            </section>

            {/* Partenaire 2 */}

            <section className="container partner mt-0 mt-md-5">
                <div className="row mt-5">
                    <ul className="col-12 partner-content container-link-partner container-link-partner-2 border-container d-flex flex-column flex-md-row justify-content-between align-items-center align-items-md-start text-center">
                    <li className='d-flex flex-column justify-content-center align-items-center m-md-0 m-3'>
                            {/* <i className="fa-solid fa-horse"></i> */}
                            <span>
                                <span className="d-block fw-bold">Amelie Auguste</span>
                                <div className="d-flex justify-content-around">
                                    <a href="https://www.facebook.com/massageequinamelieauguste" className="span-saddle fw-bold" target='_blank'><i className="fa-brands fa-facebook-f"></i></a>
                                    <a href="mailto:amelieauguste@yahoo.fr" target='_blank'><i className="fa-solid fa-envelope"></i></a>
                                    <a href="tel:+33675742348"><i className="fa-solid fa-mobile-screen-button"></i></a>
                                </div>
                                
                            </span>
                        </li>
                        <li className='d-flex flex-column justify-content-center align-items-center m-md-0 m-3'>
                            {/* <i className="fa-solid fa-horse"></i> */}
                            <span>
                                <span className="d-block fw-bold">O'Creations Sellerie</span>
                                <div className="d-flex justify-content-around">
                                    <a href="https://www.ocreations.fr/?gad_source=1&gclid=CjwKCAjw7s20BhBFEiwABVIMrbJlLcHNq_psN-Q7juxDnbpm5VVlAHm7Rd5YWP2BEMXgYJq-18eJWRoC9iYQAvD_BwE" className="span-saddle fw-bold" target='_blank'><i className="fa-solid fa-globe"></i></a>
                                    <a href="https://www.facebook.com/o.creations.sellerie/" className="span-saddle fw-bold" target='_blank'><i className="fa-brands fa-facebook-f"></i></a>
                                    <a href="https://www.instagram.com/o.creations.officiel?igsh=MXhmemttZ2V6em53OA==" className="span-saddle fw-bold" target='_blank'><i className="fa-brands fa-square-instagram"></i></a>
                                </div>
                                
                            </span>
                        </li>
                        <li className='d-flex flex-column justify-content-center align-items-center m-md-0 m-3'>
                            {/* <i className="fa-solid fa-horse"></i> */}
                            <span>
                                <span className="d-block fw-bold">Cavasso</span>
                                <div className="d-flex justify-content-around">
                                    <a href="https://cavasso.fr" className="span-saddle fw-bold" target='_blank'><i className="fa-solid fa-globe"></i></a>
                                </div>
                            </span>
                        </li>
                        <li className='d-flex flex-column justify-content-center align-items-center m-md-0 m-3'>
                            {/* <i className="fa-solid fa-horse"></i> */}
                            <span>   
                                <span className="d-block fw-bold">Saddle fitting Lorraine</span>
                                <div className="d-flex justify-content-around">
                                    <a href="https://saddlefittinglorraine.fr/" className="span-saddle fw-bold" target='_blank'><i className="fa-solid fa-globe"></i></a>
                                </div>
                            </span>
                        </li>
                        <li className='d-flex flex-column justify-content-center align-items-center m-md-0 m-3'>
                            {/* <i className="fa-solid fa-horse"></i> */}
                            <span>
                                <span className="d-block fw-bold">Rémi Champion</span>
                                <div className="d-flex justify-content-around">
                                    <a href="https://www.liber-key.com/" className="fw-bold" target='_blank'><i className="fa-solid fa-globe"></i></a>
                                </div>
                            </span>
                        </li>
                        <li className='d-flex flex-column justify-content-center align-items-center m-md-0 m-3'>
                            {/* <i className="fa-solid fa-horse"></i> */}
                            <span>
                                <span className="d-block fw-bold">Christian Briquet</span> 
                                <div className="d-flex justify-content-around">
                                    <a href="tel:+33675742348"><i className="fa-solid fa-mobile-screen-button"></i></a>
                                </div>
                            </span>
                        </li>
                    </ul>
                </div>
            </section>


            
        </main>
    );
};

export default Contact;