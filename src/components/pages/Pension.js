import BlocThreeImages from "../BlocThreeImages";

import imgLeft from "../../assets/images/pension/img-left.jpg";
import imgCenter from "../../assets/images/pension/img-center.jpg";
import imgRight from "../../assets/images/pension/img-right.jpg";
import imgLeftT from "../../assets/images/pension/img-left-t.jpg";
import imgCenterT from "../../assets/images/pension/img-center-t.JPG";
import imgRightT from "../../assets/images/pension/img-right-t.jpg";


const Pension = () => {
    return (
        <main id="main" className="main main-pension">
            {/* <section className="container">
                <h1 className='text-center'>Pensions à l'année</h1>

                <div className="row mt-3 mt-md-5">
                    <BlocThreeImages imgLeft={ imgLeft } imgCenter={ imgCenter } imgRight={ imgRight } />
                </div>
            </section> */}

            {/* <section className="container mt-5">
                <div className="row txt-container">
                    <div className="col-12 text-center">
                       <p>
                            Nous hébergeons vos chevaux à l'année dans un joli cadre rural. Notre équipe surveille et observe un maximum vos chevaux afin de les connaître et de s'assurer de leur bonne santé au quotidien.
                       </p>
                       <p>
                            L'été, vos chevaux sont répartis en groupes mixtes dans de grands parcs avec abris, le long de la rivière. Ils sont nourris à l'herbe avec un complément CMV oligo-vit et un complément de foin si nécessaire en fin d'été.
                       </p>
                       <p>
                            L'hiver, ils rentrent dans des box paddocks ou dans de grands box intérieurs et sont nourris en filet à foin et toujours en CMV. Deux sorties par semaine en liberté au parc ou dans le manège selon le temps sont offertes avec la pension pour leur permettre de se retrouver et de s'aérer ensemble, sur des jours définis et réguliers de manière à simplifier votre planning.
                       </p>
                       <p>
                            Si vous le souhaitez, nous vous proposons un suivi pédagogique personnalisé et adapté à chacun pour vous aider à progresser avec votre cheval, à votre rythme. Nous visons un enseignement comportementaliste avec des méthodes éthiques dites "éthologiques", tenant compte de la personnalité du cheval mais également de celle de son cavalier, afin que tout le monde se sente à l'aise et que tout se passe au mieux. Toutes les disciplines sont coachées de la même façon, sans aucun préjugé !
                       </p>
                       <p>
                            Vous avez également la possibilité de nous confier votre cheval pour le travail ou les sorties : liberté, brouting, pansage... <br />Tout est possible
                       </p>
                    </div>

                    <ul className="col-12 li-container mt-3">
                        <li>
                            <i className="fa-solid fa-horse"></i>
                            Accès à des chemins de balade et à la rivière depuis l'écurie.
                        </li>
                        <li>
                            <i className="fa-solid fa-horse"></i>
                            Monitrice diplômée BPJEPS sur place.
                        </li>
                        <li>
                            <i className="fa-solid fa-horse"></i>
                            Prestation de podologie disponible sur place.
                        </li>
                        <li>
                            <i className="fa-solid fa-horse"></i>
                            Accès aux prestations bien-être à un tarif réduit
                        </li>
                    </ul>
                </div>
            </section> */}

            <section className="container">
                <h1 className="text-center">Pensions</h1>

                <div className="row mt-3 mt-md-5">
                    <BlocThreeImages imgLeft={ imgLeftT } imgCenter={ imgCenterT } imgRight={ imgRightT } />
                </div>
            </section>

            <section className="container">
                <div className="row txt-container mt-5">
                    <div className="col-12">
                        <p className="text-center">
                            Bienvenue dans notre pension pour chevaux, où le bien-être et le respect de nos compagnons à quatre pattes sont au centre de notre engagement. Nous veillons à offrir des soins personnalisés, adaptés aux besoins spécifiques de chaque pensionnaire, quels que soient son âge, son passé et son état physique.
                        </p>
                        <p className="text-center">
                            Notre priorité est de garantir une atmosphère sereine et équilibrée, permettant à chaque cheval et à son propriétaire de s’épanouir dans un environnement calme et sécurisé, entouré de professionnels passionnés.
                        </p>
                        <p className="text-center">
                            Nous proposons des services d'hébergement en pension complète ou temporaire, que ce soit pour profiter de nos installations, pour les périodes de vacances ou si vous souhaitez nous confier votre cheval pour une convalescence.
                        </p>
                        <p className="text-center">
                            La pension inclut un suivi pédagogique vous permettant de progresser avec votre cheval à votre rythme ainsi qu'un suivi de santé personnalisé et adapté à vos chevaux. 
                        </p>
                        <p className="text-center">
                            Vous avez également la possibilité de nous confier votre cheval pour le travail ou des sorties : liberté, balade en main, pansage, etc. Tout est possible !
                        </p>
                        <ul className="li-container mt-5">
                            <li>
                                <i className="fa-solid fa-horse"></i>
                                Monitrice diplômée BPJEPS sur place.
                            </li>
                            <li>
                                <i className="fa-solid fa-horse"></i>
                                Prestations de podologie et de bien-être (massages, algothérapie, stretching et aromathérapie) proposées à tarif réduit.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Pension;