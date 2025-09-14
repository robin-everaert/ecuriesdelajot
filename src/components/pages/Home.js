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
                            Entre l’homme et le cheval, l’harmonie naît de la douceur et du respect. Chaque cheval mérite un chemin où bienveillance et équilibre l’accompagnent à chaque étape de sa vie.
                        </p>
                        <p>
                            Nichées en pleine nature, les Écuries de L’Ajot vous accueillent dans un cadre paisible et authentique, au cœur d’un ancien corps de ferme rénové du début du 20ᵉ siècle, bordé par la rivière La Saulx.
                        </p>
                        <p>
                            Plus qu’une simple écurie, Les Écuries de l’Ajot sont un lieu de vie et de partage où chaque cheval écrit une page de notre histoire. Notre priorité est de veiller à leur bien-être, en créant un environnement où ils peuvent s'épanouir pleinement et progresser à leur rythme.
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
                                Depuis toujours, les chevaux sont au cœur de ma vie. Après l’obtention de mon BPJEPS en 2010, j’ai exercé en tant que cavalière et monitrice indépendante.
                            </p>
                            <p>
                                Cependant, il me manquait quelque chose. L'approche du cheval qu'on me proposait me mettait souvent mal à l'aise et m'a donné envie de me tourner vers d'autres horizons. J'ai donc continué à travailler tout en approfondissant mes connaissances en éthologie et en éducation du cheval auprès de Ludovic Fournet et Andy Booth.
                            </p>
                            <p>
                                Passionnée par le bien-être équin, j’ai ensuite complété mon parcours avec des formations en soins et médecines alternatives.
                            </p>
                            <p>
                                Aujourd'hui, avec une équipe passionnée à mes côtés, je poursuis ce chemin vers une équitation moderne, respectueuse de la nature profonde du cheval.
                            </p>
                            <p className="fst-italic">
                                L'essentiel, c’est une connexion sincère, faite de confiance et d'harmonie.
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
                    <Link to="/care" className='col-12 col-md-4'>
                        <img src={ serviceSejour } className="img img-fluid logo-no-txt" alt="Une adhérente de l'écuries de l'Ajot qui baigne son cheval" />
                        <h3 className="font-title">Soins et accompagnement naturel</h3>
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