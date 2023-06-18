import FormContact from '../FormContact';
import line from "../../assets/images/line.png";

const Contact = () => {
    return (
        <main id="main-contact" className='main main-contact'>
            <h1 className='text-center'>Contactez-moi</h1>

            {/* Bubble */}
            <section className="container bubble-contact-container">
                <div className="row justify-content-around align-items-center">
                    <div className="bubble-contact-content col-12 col-md-3 d-flex flex-column justify-content-center align-items-center text-center">
                        <i class="fa-solid fa-house"></i>
                        <span>51340 - Pargny-sur-Saulx</span>
                    </div>
                    <a href="tel:0622671999" className="bubble-contact-content col-12 col-md-3 d-flex flex-column justify-content-center align-items-center text-center">
                        <i class="fa-solid fa-phone"></i>
                        <span>06-22-67-19-99</span>
                    </a>
                    <a href="mailto:ecuriesdelajot@gmail.com" className="bubble-contact-content col-12 col-md-3 d-flex flex-column justify-content-center align-items-center text-center">
                        <i class="fa-solid fa-envelope"></i>
                        <span>ecuriesdelajot@gmail.com</span>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100057115764094" className="bubble-contact-content col-12 col-md-3 d-flex flex-column justify-content-center align-items-center text-center">
                        <i class="fa-brands fa-facebook-f"></i>
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
                        <h2 className='text-center'>Amelie August Massage equin</h2>
                            <div className="container-link-partner d-flex flex-column justify-content-around align-items-center">
                                <a href="tel:0681399757" className="d-flex flex-column justify-content-center align-items-center">
                                    <i class="fa-solid fa-phone"></i>
                                    <span>06 81 39 97 57</span>
                                </a>
                                <a href="mailto:amelieauguste@yahoo.fr" className="d-flex flex-column justify-content-center align-items-center">
                                    <i class="fa-solid fa-envelope"></i>
                                    <span>amelieauguste@yahoo.fr</span>
                                </a>
                                <a href="https://www.facebook.com/massageequinamelieauguste" className="d-flex flex-column justify-content-center align-items-center">
                                    <i class="fa-brands fa-facebook-f"></i>
                                    <span>massageequinamelieauguste</span>
                                </a>
                            </div>               
                    </div>
                </div>
            </section>


            
        </main>
    );
};

export default Contact;