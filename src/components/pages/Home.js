import BlocThreeImages from "../BlocThreeImages";

import { infrastructureArray } from "../../assets/js/data";

import logo from "../../assets/images/logo.png";
import logoNoTxt from "../../assets/images/logo-no-txt.png";
import lineCoeur from "../../assets/images/line-coeur.png";
import accueilSection1 from "../../assets/images/home/accueil-section-1.jpg"
import quiSuisJe from "../../assets/images/home/qui-suis-je.jpg";
import servicePension from "../../assets/images/home/service-pension.jpeg";
import serviceEducation from "../../assets/images/home/service-education.jpg";
import serviceSejour from "../../assets/images/home/service-sejour.JPG";
import infrastructure1 from "../../assets/images/home/infrastructure1.JPG";
import infrastructure2 from "../../assets/images/home/infrastructure2.JPG";
import infrastructure3 from "../../assets/images/home/infrastructure3.JPG";

const Home = () => {

    return (
            <main id="main" className="main main-home">

            <div className="container">
                <section className="row section-1">
                    <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
                        <img src={ logoNoTxt } className="img img-fluid logo-no-txt" alt="Le logo de l'écuries de l'Ajot" />
                        <div className="txt-section1-container text-center">
                            <h1 className="fontTitle">Écuries de l'Ajot</h1>
                        </div>
                        <img src={ lineCoeur } className="img img-fluid line-coeur" alt="Un dessin avec un coeur" />
                        
                    </div>
                    <div className="col-12 col-md-6 mt-5 mt-md-0">
                        <img src={ accueilSection1 } className="img img-fluid border-radius-left" alt="" />
                    </div>
                </section>

                <section className="row presentation-container txt-container">
                    <div className="col-12 text-center">
                        <p className="fst-italic">
                            Les chevaux partagent la vie des hommes depuis plusieurs millénaires et de nos jours, on ne les élève plus que pour nos loisirs et donc notre plaisir. Il est de notre devoir de faire en sorte que nos chevaux tirent, eux aussi, profit de cette interaction entre les espèces. 
                        </p>
                        <p>
                            Les Ecuries de L'Ajot vous accueillent dans un cadre unique et authentique en Champagne-Ardenne. Le calme et la nature règnent dans cet ancien corps de ferme, longé par la Saulx et datant du début du 20ème siècle. Nous avons commencé à réaménager les bâtiments il y a 4 ans et nous les avons transformés en écuries, tout en conservant leur charme d’antan.
                        </p>
                        <p>
                            Diverses prestations sont disponibles aux écuries : pension, éducation du cheval et séjour bien-être. Notre objectif premier reste la compréhension et le bien-être des chevaux, quel que soit le service proposé et nous aspirons chaque jour à les aider à se sentir au mieux, tout en conservant au maximum leurs besoins naturels.
                        </p>
                    </div>
                </section>

                {/* Qui suis-je */}
                <section className="row quiSuisJe-container border-radius-container">
                    <div className="col-12 col-md-6">
                        <img src={ quiSuisJe } alt="La photo de Bailly Marie" className="img img-fluid border-radius-right" />
                    </div>
                    <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
                        <h1 className="font-title text-center pb-4 pt-md-5">
                            Qui suis-je ?
                        </h1>
                        <div className="p-0 text-center text-md-start txt-container">
                            <p>
                                Fascinée depuis mon plus jeune âge par les chevaux, il m’est apparu très tôt comme une évidence d’orienter ma vie professionnelle dans ce domaine.
                            </p>
                            <p>
                                J’ai commencé en obtenant mon BPJEPS en 2010 puis j’ai multiplié les expériences professionnelles en tant que cavalière et monitrice indépendante, tout en continuant à approfondir mes connaissances en suivant diverses formations, principalement en éthologie (domaine que je continue d’approfondir chaque jour), mais aussi en participant à d’autres formations : auxiliaire vétérinaire équin, aromathérapie équine, algothérapie, stretching.
                            </p>
                            <p className="fw-bold">
                                Plus qu’une passion, c’est devenue une vocation…
                            </p>
                            <p>
                            Soutenue par mon équipe, c’est tout naturellement que je poursuis l’aventure pour que l’on puisse avancer ensemble vers une équitation d’avenir basée sur un partenariat et une relation saine avec nos chevaux sans aucune forme de soumission mais avec des bases solides d’éducation, de confiance et de connexion.
                            </p>
                        </div>
                    </div>     
                </section>

                {/* Mes services */}
                <section className="row service-container text-center border-container">
                    <h1 className="font-title text-center">Mes Services</h1>
                    <a href="#" className="col-12 col-md-4">
                        <img src={ servicePension } className="img img-fluid logo-no-txt" alt="Le logo de l'écuries de l'Ajot" />
                        <h3 className="font-title">Pensions</h3>
                    </a>
                    <a href="#" className="col-12 col-md-4">
                        <img src={ serviceEducation } className="img img-fluid logo-no-txt" alt="Le logo de l'écuries de l'Ajot" />
                        <h3 className="font-title">Éducation</h3>
                    </a>
                    <a href="#" className="col-12 col-md-4">
                        <img src={ serviceSejour } className="img img-fluid logo-no-txt" alt="Le logo de l'écuries de l'Ajot" />
                        <h3 className="font-title">Séjour bien-être</h3>
                    </a>
                </section>
            </div>

            {/* banner */}
            <section className="banner-home-container d-flex justify-content-center align-items-center">
                <div className="banner-home-content d-flex flex-column justify-content-center align-items-center">       
                    <img src={ logo } className="logo-guarantie" alt="Le logo de la garantie décenale" />
                    <a href="#" className="mt-5 mb-4">Contactez-moi</a>
                </div>
            </section>

            <div className="container">      
                <section className="infrastructure-container">
                    <h1 className="font-title text-center">Mes infrastructures</h1>
                    <div className="row">
                        <BlocThreeImages imgLeft={ infrastructure1 } imgCenter={ infrastructure2 } imgRight={ infrastructure3 } />
                    </div>
                    <div className="row li-container">
                        <ul className="col-12 col-md-6 mt-5 pb-0 mb-0">
                            {
                                infrastructureArray.slice(0, 5).map((m, i) => (
                                    <li key={ i }><i class="fa-solid fa-horse"></i>{ m }</li>
                                ))
                            }           
                        </ul>
                        <ul className="col-12 col-md-6 mt-md-5 pt-0 mb-0">
                            {
                                infrastructureArray.slice(5).map((m, i) => (
                                    <li key={ i }><i class="fa-solid fa-horse"></i>{ m }</li>
                                ))
                            }           
                        </ul>
                    </div>
                </section>
            </div>

                
        
        </main>
    );
};

export default Home;