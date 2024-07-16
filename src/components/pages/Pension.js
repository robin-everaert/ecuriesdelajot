import BlocThreeImages from "../BlocThreeImages";

import imgLeft from "../../assets/images/pension/img-left.jpg";
import imgCenter from "../../assets/images/pension/img-center.jpg";
import imgRight from "../../assets/images/pension/img-right.jpg";
import imgLeftT from "../../assets/images/pension/img-left-t.JPG";
import imgCenterT from "../../assets/images/pension/img-center-t.jpg";
import imgRightT from "../../assets/images/pension/img-right-t.jpg";


const Pension = () => {
    return (
        <main id="main" className="main main-pension">
            <section className="container">
                <h1 className='text-center'>Pensions à l'année</h1>

                <div className="row mt-3 mt-md-5">
                    <BlocThreeImages imgLeft={ imgLeft } imgCenter={ imgCenter } imgRight={ imgRight } />
                </div>
            </section>

            <section className="container mt-5">
                <div className="row txt-container">
                    <div className="col-12 text-center">
                       <p>
                            Nous hébergeons vos chevaux à l'année dans un joli cadre rural. Notre équipe surveille et observe un maximum vos chevaux afin de les connaître et de s'assurer de leur bonne santé au quotidien.
                       </p>
                       <p>
                            L'été, vos chevaux sont répartis en groupes mixtes dans de grands parcs avec abris, le long de la rivière. Ils sont nourris à l'herbe avec un complément CMV oligo-vit et un complément de foin si nécessaire en fin d'été.
                       </p>
                       <p>
                            L'hiver, ils rentrent dans des box paddocks ou dans de grands box intérieurs et sont nourris en filet à foin et toujours en CMV. Trois sorties par semaine en liberté au parc ou dans le manège selon le temps sont offertes avec la pension pour leur permettre de se retrouver et de s'aérer ensemble, sur des jours définis et réguliers de manière à simplifier votre planning.
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
            </section>

            {/* Pension Temporaire : */}
            <section className="container">
                <h1 className="text-center">Autres pensions</h1>

                <div className="row mt-3 mt-md-5">
                    <BlocThreeImages imgLeft={ imgLeftT } imgCenter={ imgCenterT } imgRight={ imgRightT } />
                </div>
            </section>

            <section className="container">
                <div className="row txt-container mt-5">
                    <div className="col-12">
                        <p>
                            Nous vous proposons diverses formules de pension courte durée, selon ce qui pourrait vous aider dans votre quotidien de propriétaire. 
                        </p>
                    
                        <ul className="li-container">
                            <li>
                                <i className="fa-solid fa-horse"></i>
                                Placement "provisoire" : Nous gardons toujours un box et un parc provisoire pour vous permettre de pouvoir séjourner temporairement et profiter des installations ainsi que des prestations sans avoir à vous engager sur une pension longue durée.
                            </li>
                            <li>
                                <i className="fa-solid fa-horse"></i>
                                Le gardiennage de votre cheval est possible si vous devez vous absenter et que vous souhaitez partir serein. Votre cheval bénéficiera de toutes les prestations dont il a besoin pour se sentir chez lui et passer un bon séjour, sans être perturbé par votre absence.
                            </li>
                            <li>
                                <i className="fa-solid fa-horse"></i>
                                L'été nous accueillons avec plaisir les personnes qui souhaitent faire escale chez nous. Des tentes peuvent être installées, juste à côté des chevaux et le club-house est mis à disposition avec lavabo, toilettes, réfrigérateur, micro-onde, machine à café et bouilloire. Lors de votre séjour, vous aurez accès à toutes nos infrastructures et vous pourrez bénéficier des prestations de l'écurie. 
                            </li>
                            <li>
                                <i className="fa-solid fa-horse"></i>
                                Le transport des chevaux ou la location de notre van est possible pour ceux qui ne sont pas équipés pour se déplacer.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Pension;