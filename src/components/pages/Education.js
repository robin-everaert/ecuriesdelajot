
import debourrage from "../../assets/images/education/debourrage.JPG";
import manipulation from "../../assets/images/education/manipulation.JPG";
import reeducation from "../../assets/images/education/reeducation.JPG";

const Education = () => {
    return (
        <main id="main" className="main main-education">
            <h1 className='text-center mt-5'>Éducation du cheval</h1>
            <div className="container">              
                <section className="row txt-container">
                    <div className="col-12 text-center">
                        <p className="mt-4 mt-md-5">         
                            Spécialisés dans l'éducation des chevaux, nous proposons des prestations adaptées à chaque étape de leur apprentissage, en douceur et dans le respect de leur nature. Un cheval bien dans sa tête et bien éduqué est plus sûr, performant et facilite le quotidien !
                        </p>
                    </div>
                </section>

                <section className="row">
                    <h2 className="text-center mt-4 mt-md-5">Débourrage</h2>
                    
                    <img src={ debourrage } className="img img-fluid mt-3" alt="Une photo de débourrage" />
                    <div className="col-12 text-center txt-container">
                        <p className="mt-4 mt-md-5">
                            Le débourrage est une étape fondamentale, représentant les premiers pas d’un cheval dans le monde de l’équitation. Cette phase doit se faire sans stress et dans la confiance, pour que la suite devienne un plaisir, en toute sécurité.
                        </p>
                        <p>
                            Bien que l’on considère souvent un cheval adulte à l’âge de 3 ans, il est aujourd’hui reconnu que sa croissance se termine vers 7 ans. C’est pourquoi nous adaptons la durée et la régularité des séances en fonction de l’âge et des objectifs équestres (sportifs ou de loisir) avec une méthode bienveillante.
                        </p>
                        <p>
                            Vous pouvez également choisir de réaliser le débourrage de votre cheval vous-même, sous notre encadrement.
                        </p>
                    </div>
                </section>

                <section className="row">
                    <h2 className="text-center mt-4 mt-md-5">Rééducation – Réhabilitation</h2>
                    <img src={ reeducation } className="img img-fluid mt-3" alt="Une photo de réducation équestre" />
                    <div className="col-12 text-center txt-container">
                        <p className="mt-4 mt-md-5">
                            Les chevaux possèdent une mémoire exceptionnelle, rendant certaines mauvaises expériences ou incompréhensions des aides sources de comportements défensifs.
                        </p>
                        <p>
                            Nous vous proposons pour les chevaux présentant des comportements difficiles ou ayant subi des expériences traumatisantes, une approche et des exercices visant à rétablir la confiance, l’équilibre et le bien-être dans leur relation avec l’humain.
                        </p>
                        <p>
                            Le travail de rééducation est varié et doit être personnalisé en fonction du caractère et du passé de chaque cheval. L’objectif principal est de lui faire comprendre que l’homme ne représente pas un danger, afin qu’il cesse d’adopter des réactions de fuite. Nous prenons en charge votre cheval pour rétablir des bases d’éducation et favoriser une meilleure compréhension mutuelle.
                        </p> 
                    </div>
                </section>

                <section className="row">
                    <h2 className="text-center mt-4 mt-md-5">Manipulation des poulains</h2>
                    <img src={ manipulation } className="img img-fluid mt-3" alt="Une photo de manipulation équestre" />
                    <div className="col-12 text-center txt-container">
                        <p className="mt-4 mt-md-5">
                            L’éducation d’un cheval ne commence pas uniquement lors de son débourrage à l’âge de 4 ans. Dès le plus jeune âge, il est important de lui apprendre à bien se comporter et à se décontracter en présence de l’homme avec des bases d'éducation solides et stables.
                        </p>
                        <p>
                            Nous proposons de prendre en charge votre jeune cheval sur une courte période pour des manipulations de base, selon son âge, avec une approche douce et progressive. Cet apprentissage favorise son bien-être et sa sécurité à long terme.
                        </p>
                    </div>
                </section>

               
            </div>
        </main>
    );
};

export default Education;