
const FormContact = () => {
    return (
        <form id="form-contact" className="form-contact col-12">
            <div class="container-input mb-3 d-flex flex-column flex-md-row justify-content-center align-items-center">
                <input type="text" class="form-control" id="nameInput" placeholder="Prénom" />
                <input type="email" class="form-control" id="telInput" placeholder="Adresse Email" />
                <input type="tel" class="form-control" id="mailInput" placeholder="Téléphone" />
            </div>

            <div class="container-msg mb-3 d-flex justify-content-center mt-5">
                <textarea class="form-control" id="msg" rows="8" placeholder="Bonjour, votre site est génial et j'adorerai vraiment faire appel à vos services ! J'ai un cheval depuis maintenant ..."></textarea>
            </div>

            <div className="container-submit d-flex justify-content-center mt-5">
                <button type="submit" className="btn-submit">Envoyer</button>
            </div>
        </form>
    );
};

export default FormContact;