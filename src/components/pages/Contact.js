import FormContact from '../FormContact';

const Contact = () => {
    return (
        <main id="main-contact" className='main main-contact'>
            <h1 className='text-center'>Contact</h1>

            {/* Bubble */}
            <section className="container bubble-contact-container">
                <div className="row justify-content-around align-items-center">
                    <div className="bubble-contact-content col-12 col-md-3 d-flex flex-column justify-content-center align-items-center text-center">
                        <i class="fa-solid fa-house"></i>
                        <span>51340<br />Pargny-sur-Saulx</span>
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

            <section className="partenaire d-flex justify-content-center align-items-center">
                <p>SECTION PARTENAIRE (Amélie)</p>
            </section>


            
        </main>
    );
};

export default Contact;