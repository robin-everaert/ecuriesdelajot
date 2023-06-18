import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const FormContact = () => {

    // Send Email:
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        console.log(form.current.name.value)
        emailjs.sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE,
            process.env.REACT_APP_EMAILJS_TEMPLATE, 
            form.current, 
            process.env.REACT_APP_EMAILJS_ID
        ).then((result) => {
            let nameResponse = form.current.name.value
            document.querySelector('.form-response').innerHTML = `🤗 Merci pour votre message ${nameResponse} Je vous recontacte très vite. 🤗`;
            document.querySelector('.form-response').classList.add('mt-5');
            document.querySelector('.form-response').classList.replace("text-danger", "text-success");
            document.querySelector('.container-submit').classList.add('d-none');
            form.current.reset(); 
        }, (error) => {
            document.querySelector('.form-response').innerHTML = `Une erreur s'est produite. Veuillez réessayer.`;
            document.querySelector('.form-response').classList.add('mt-5');
            document.querySelector('.form-response').classList.add('text-danger');
        });
    };

    return (
            <form ref={ form } onSubmit={ sendEmail } id="form-contact" className="form-contact border-container">
                <div class="container-input mb-3 d-flex flex-column flex-md-row justify-content-center align-items-center">
                    <input type="text" name="name" class="form-control" id="nameInput" placeholder="Prénom *" required autoComplete='off' />
                    <input type="email" name="email" class="form-control" id="telInput" placeholder="Adresse Email *" required autoComplete='off' />
                    <input type="tel" name="phone" class="form-control" id="mailInput" placeholder="Téléphone" autoComplete='off' />
                </div>

                <div class="container-msg mb-3 d-flex justify-content-center mt-5">
                    <textarea name="message" class="form-control" id="msg" rows="8" placeholder="Votre message ... *"></textarea>
                </div>

                <div className="container-submit d-flex justify-content-center mt-5">
                    <button type="submit" className="btn-submit">Envoyer</button>
                </div>
                <p className="form-response text-success text-center"></p>
            </form>
    );
};

export default FormContact;