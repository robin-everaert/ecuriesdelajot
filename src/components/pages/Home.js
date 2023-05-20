import logoNoTxt from "../../assets/images/logo-no-txt.png";
import lineCoeur from "../../assets/images/line-coeur.png";
import accueilSection1 from "../../assets/images/home/accueil-section-1.jpg"
import quiSuisJe from"../../assets/images/home/qui-suis-je.jpg";
import service1 from "../../assets/images/home/service-1.JPG";
import service2 from "../../assets/images/home/service-2.JPG";
import service3 from "../../assets/images/home/service-3.JPG";
import service4 from "../../assets/images/home/service-4.JPG";


const Home = () => {
    return (
<main id="main" className="main main-home">

    <div className="container">
        <section className="row section-1">
            <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
                <img src={ logoNoTxt } className="img img-fluid logo-no-txt" alt="Le logo de l'écuries de l'Ajot" />
                <div className="txt-section1-container text-center">
                    <h1 className="fontTitle">Écuries de l'Ajot</h1>
                    <h2 className="fontTitle">Pensions pour chevaux</h2>
                </div>
                <img src={ lineCoeur } className="img img-fluid line-coeur" alt="Une dessin avec un coeur" />
                
            </div>
            <div className="col-12 col-md-6 mt-5 mt-md-0">
                <img src={ accueilSection1 } className="img img-fluid border-radius-left" alt="" />
            </div>
        </section>

        <section className="row presentation-container">
            <div className="col-12 text-center p-0">
                <p>
                    Les Ecuries de L'Ajot vous accueillent dans un cadre unique et authentique en Champagne-Ardenne. 
                    Le calme et la nature règnent dans cet ancien corps de ferme, longé par la Saulx, datant du début du 20ème siècle. Nous avons commencé à réaménagé les bâtiments il y a 4ans et nous les avons transformés en écuries, tout en conservant leur charme d’antan.
                </p>
                <p>
                    Nous vous proposons diverses formes de pensions dans une ambiance agréable, axée sur l’entraide et le respect de chacun. Notre objectif premier est le bien-être des
                    chevaux et nous aspirons chaque jour  à les aider à se sentir bien, en combinant le confort que peut apporter une structure avec la conservation autant que possible, de leurs habitudes naturelles et instinctives. 
                </p>
            </div>
        </section>

        {/* Qui suis-je */}
        <section className="row quiSuisJe-container">
            <div className="col-12 col-md-6">
                <img src={ quiSuisJe } alt="La photo de Bailly Marie" className="img img-fluid border-radius-right" />
            </div>
            <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
                <h1 className="font-title text-center pb-4 pt-md-5">
                    Qui suis-je ?
                </h1>
                <div className="p-0 text-center text-md-start">
                    <p>
                        Fascinée depuis mon plus jeune âge par les chevaux, il m’est apparu très tôt comme une évidence d’orienter ma vie professionnelle dans ce domaine.
                    </p>
                    <p>
                        J’ai commencé en obtenant mon BPJEPS en 2010 puis j’ai multiplié les expériences professionnelles en tant que cavalière et monitrice indépendante, tout en continuant à approfondir mes connaissances en suivant diverses formations (éthologie, auxiliaire vétérinaire équin, aromathérapie équine).
                    </p>
                    <p className="font-title text-center">
                        Plus qu’une passion, c’est devenue une vocation…
                    </p>
                    <p>
                    Soutenue par mon équipe, c’est tout naturellement que je poursuis l’aventure pour que l’on puisse avancer ensemble vers une équitation d’avenir basée sur un partenariat et une relation saine avec nos chevaux sans aucune forme de soumission mais avec des bases solides d’éducation, de confiance et d’interaction.
                    </p>
                </div>
            </div>     
        </section>

        {/* Mes services */}
        <section className="row service-container text-center">
            <h1 className="font-title text-center">Mes Services</h1>
            <a href="#" className="col-12 col-md-3">
                <img src={ service1 } className="img img-fluid" alt="Une photo de l'écuries de l'Ajot" />
                <h3 className="font-title">Pension à l'année</h3>
            </a>
            <a href="#" className="col-12 col-md-3">
                <img src={ service2 } className="img img-fluid" alt="Une photo de l'écuries de l'Ajot" />
                <h3 className="font-title">Pension passagère</h3>
            </a>
            <a href="#" className="col-12 col-md-3">
                <img src={ service3 } className="img img-fluid" alt="Une photo de l'écuries de l'Ajot" />
                <h3 className="font-title">Pension débourrage</h3>
            </a>
            <a href="#" className="col-12 col-md-3">
                <img src={ service4 } className="img img-fluid" alt="Une photo de l'écuries de l'Ajot" />
                <h3 className="font-title">Séjour bien-être</h3>
            </a>
        </section>
    </div>
        
  
</main>
    );
};

export default Home;