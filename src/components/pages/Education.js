
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
                            Avoir une bonne relation avec notre cheval est non seulement une source inégalable de plaisir mais permet également d’apporter plus de sécurité, de performance et de nous faire gagner un temps précieux au quotidien !  
                        </p>
                        <p>
                            C’est pourquoi nous vous proposons différentes formes de pension éducation, pour vous permettre de créer des bases stables et solides avec votre cheval et de travailler en partenariat avec lui. 
                        </p>
                        <p className='fw-bold'>
                            Pendant le séjour votre cheval sera hébergé en paddock individuel avec abri naturel l’été ou en grand box intérieur l’hiver.
                        </p>
                    </div>
                </section>

                <section className="row">
                    <h2 className="text-center mt-4 mt-md-5">Pensions débourrage</h2>
                    
                    <img src={ debourrage } className="img img-fluid mt-3" alt="Une photo de débourrage" />
                    <div className="col-12 text-center txt-container">
                        <p className="mt-4 mt-md-5">
                            Le débourrage d'un cheval est une étape fondamentale, car ce sont ses premiers pas dans le monde de l’équitation. Cette étape doit se réaliser sans stress et dans la confiance, pour que la suite devienne un plaisir, en toute sécurité. 
                        </p>
                        <p>
                            On considère souvent le cheval comme adulte à l’âge de 3 ans et pourtant on sait aujourd’hui que sa croissance ne se termine totalement que vers 7 ans. C’est pourquoi nous vous conseillerons un âge précis pour son débourrage et nous adapterons la durée et la régularité de nos séances selon l’âge choisi et vos objectifs équestres (sportifs ou de loisirs).
                            Pendant la période de débourrage, votre cheval apprendra les bases de l’éducation à pied : céder aux pressions, désensibilisation, acceptation du matériel, débuts en longe. Mais également les bases de l’éducation montée : travail du montoir, travail aux trois allures rênes longues, sortie en extérieur.
                        </p>
                        <p>
                            Il sera travaillé en licol en corde dit « éthologique » et fera la connaissance avec le filet, si vous le désirez sur ces derniers jours de séjour, lorsque toutes les bases seront acquises pour que vous puissiez par la suite lui apporter plus de finesse et de précision. D’autres bases de travail peuvent être ajoutées si vous le désirez comme le travail du van ou encore le passage de barre au sol ou de bâche selon la discipline que vous souhaitez pratiquer. 
                            Un cours avec le propriétaire est offert à la fin du séjour.
                        </p>
                        <p>
                            Vous pouvez également venir effectuer le débourrage de votre cheval vous-même, étape par étape, sous notre encadrement.
                        </p>
                    </div>
                </section>

                <section className="row">
                    <h2 className="text-center mt-4 mt-md-5">Pensions pré débourrage - manipulation poulain</h2>
                    <img src={ manipulation } className="img img-fluid mt-3" alt="Une photo de manipulation équestre" />
                    <div className="col-12 text-center txt-container">
                        <p className="mt-4 mt-md-5">
                            Ce n’est pas parce que le débourrage du cheval se fait de plus en plus vers l’âge de 4 ans que celui-ci ne doit pas commencer à être éduqué avant.
                        </p>
                        <p>
                            Nous vous proposons de prendre votre jeune cheval sur une courte période pour lui apprendre comment se comporter vis à vis de l’homme et lui inculquer des bases solides et stables d’éducation, dès son plus jeune âge.
                        </p>
                        <p>
                            Cet apprentissage personnalisé selon l'âge de votre cheval, peut être : marcher en main, s’arrêter, reculer, apprendre l’immobilité. Des exercices de découverte : se désensibiliser à certains objets, monter et descendre du van, sortir en main en extérieur dans le calme. Ou encore un pré débourrage : apprentissage du tapis et de la selle, apprentissage de la longe et quelques séances travail à pied dans la décontraction, avec des exercices d’assouplissement et quelques séances de stretching.
                        </p>
                    </div>
                </section>

                <section className="row">
                    <h2 className="text-center mt-4 mt-md-5">Pensions rééducation</h2>
                    <img src={ reeducation } className="img img-fluid mt-3" alt="Une photo de réducation équestre" />
                    <div className="col-12 text-center txt-container">
                        <p className="mt-4 mt-md-5">
                            Le cheval a une excellente mémoire, c’est pour cela qu’une mauvaise expérience ou une mauvaise interprétation des aides peut provoquer chez lui une envie de fuite ou un blocage psychologique immense. Cheval qui vous bouscule, ne monte pas en van, se défend au montoir… certains comportements peuvent devenir contraignants et dangereux mais ils ne sont jamais irréversibles !
                        </p>
                        <p>
                            Le travail de rééducation est multiple et varié et doit être personnalisé en fonction du caractère du cheval et de son passé. Bien souvent un seul objectif s’impose : apprendre au cheval que nous ne sommes pas un danger, qu’il peut avoir confiance en l’homme, en toutes circonstances et qu’il lui est inutile de développer son instinct de fuite. Nous vous proposons de prendre en main votre cheval pour remettre en place des bases d’éducation différentes et vous permettre de mieux le comprendre et de retrouver la communication avec lui.
                        </p>
                        <p>
                            Le transport des chevaux ou la location de notre van est possible pour ceux qui ne sont pas équipés pour se déplacer.
                        </p>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Education;