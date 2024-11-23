import { Link } from 'react-router-dom';
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
                            <h1 className="fontTitle mt-0 mb-0">Écuries de l'Ajot</h1>
                            <h2 className='fontTitle'>Marie Bailly</h2>
                        </div>
                        <img src={ lineCoeur } className="img img-fluid line-coeur" alt="Un dessin avec un coeur" />
                        
                    </div>
                    <div className="col-12 col-md-6 mt-5 mt-md-0">
                        <img src={ accueilSection1 } className="img img-fluid border-radius-left" alt="Deux chevaux qui broutte dans un pré" />
                    </div>
                </section>

                <section className="row presentation-container txt-container">
                    <div className="col-12 text-center ">
                        <p className="fst-italic">
                            Il est essentiel de créer une relation équilibrée et respectueuse entre l’homme et le cheval, fondée sur la compréhension mutuelle et la confiance. Chaque cheval mérite de vivre dans un environnement propice à son épanouissement, accompagné avec douceur, patience et bienveillance tout au long de son parcours.
                        </p>
                       <p>
                            Les Écuries de L'Ajot vous invitent à découvrir un lieu unique et plein de charme en Champagne-Ardenne, où calme et nature s’harmonisent. Nichée dans un ancien corps de ferme rénové avec soin et datant du début du 20ᵉ siècle, bordée par la rivière Saulx, notre écurie offre un cadre authentique et paisible.
                       </p>
                       <p>
                            Nous proposons des services de pension et d'éducation pour vos chevaux. En tant qu'éducatrice équine, j'accompagne chaque cheval en tenant compte de ses besoins et de sa personnalité. Tous les chevaux sont accueillis sans préjugés, que ce soit pour des séances d’éducation ou la pension.
                            Notre priorité est de veiller à leur bien-être, en créant un environnement où ils se sentent en sécurité et peuvent s’épanouir pleinement.
                       </p>
                    </div>
                </section>

                {/* Qui suis-je */}
                <section className="row quiSuisJe-container border-radius-container">
                    <div className="col-12 col-md-6">
                        <img src={ quiSuisJe } alt="La photo de Bailly Marie avec un cheval" className="img img-fluid border-radius-right" />
                    </div>
                    <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
                        <h1 className="font-title text-center pb-4 pt-md-5">
                            Qui suis-je ?
                        </h1>
                        <div className="p-0 text-center text-md-start txt-container">
                            <p>
                                Depuis mon enfance, ma passion pour les chevaux a été une évidence. Très tôt, j’ai su que ma vie professionnelle leur serait dédiée. En 2010, j’ai obtenu mon BPJEPS, marquant le début d’un parcours riche et inspirant. Mon chemin m’a menée à exercer en tant que cavalière et monitrice indépendante, tout en approfondissant mes connaissances en éthologie grâce à des formations avec Ludovic Fournet et Andy Booth. J’ai également élargi mes compétences avec des formations variées dans les soins équins : auxiliaire vétérinaire équin, aromathérapie, algothérapie, et stretching pour chevaux.
                            </p>                

                            <p className="fw-bold">
                                Pour moi, les chevaux sont plus qu’une passion
                            </p>

                            <p>
                                C’est une véritable vocation qui façonne ma vie et guide chacun de mes choix. Entourée d’une équipe formidable, je poursuis cette aventure avec un objectif clair : construire ensemble une équitation moderne, où le partenariat est au cœur de tout. Une relation fondée sur la compréhension, l’éducation et, surtout, le respect. Ici, pas de soumission, mais une connexion authentique et solide mettant en lumière la confiance et l’harmonie.
                            </p>
                       
                        </div>
                    </div>     
                </section>

                {/* Mes services */}
                <section className="row service-container text-center border-container">
                    <h1 className="font-title text-center">Mes Services</h1>
                    <Link to="/pension" className='col-12 col-md-4'>
                        <img src={ servicePension } className="img img-fluid logo-no-txt" alt="Un cheval de l'écuries de l'Ajot" />
                        <h3 className="font-title">Pensions</h3>
                    </Link>
                    <Link to="/education" className='col-12 col-md-4'>
                        <img src={ serviceEducation } className="img img-fluid logo-no-txt" alt="Une adhérente de l'écuries de l'Ajot qui éduque un cheval" />
                        <h3 className="font-title">Éducation du cheval</h3>
                    </Link>
                    <Link to="/seance-bien-etre" className='col-12 col-md-4'>
                        <img src={ serviceSejour } className="img img-fluid logo-no-txt" alt="Une adhérente de l'écuries de l'Ajot qui baigne son cheval" />
                        <h3 className="font-title">Séance bien-être</h3>
                    </Link>
                </section>
            </div>

            {/* banner */}
            <section className="banner-home-container d-flex justify-content-center align-items-center">
                <div className="banner-home-content d-flex flex-column justify-content-center align-items-center">       
                    <img src={ logo } alt="Le logo de l'Ecuries de l'Ajot" />
                    <Link to="/contact" className='col-12 col-md-4 text-center'>
                        Contactez-moi
                    </Link>
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
                                infrastructureArray.slice(0, 4).map((m, i) => (
                                    <li key={ i }><i className="fa-solid fa-horse"></i>{ m }</li>
                                ))
                            }           
                        </ul>
                        <ul className="col-12 col-md-6 mt-md-5 pt-0 mb-0">
                            {
                                infrastructureArray.slice(4).map((m, i) => (
                                    <li key={ i }><i className="fa-solid fa-horse"></i>{ m }</li>
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