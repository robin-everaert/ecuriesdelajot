import BlocThreeImages from "../BlocThreeImages";

import imgLeft from "../../assets/images/yearPension/img-left.jpg";
import imgCenter from "../../assets/images/yearPension/img-center.jpg";
import imgRight from "../../assets/images/yearPension/img-right.jpg";
import imgLeftT from "../../assets/images/yearPension/img-left-t.jpg";
import imgCenterT from "../../assets/images/yearPension/img-center-t.JPG";
import imgRightT from "../../assets/images/yearPension/img-right-t.jpg";


const YearPension = () => {
    return (
        <main id="main" className="main main-pension">
            <section className="container">
                <h1 className='text-center'>Pension à l'année</h1>

                <div className="row mt-3 mt-md-5">
                    <BlocThreeImages imgLeft={ imgLeft } imgCenter={ imgCenter } imgRight={ imgRight } />
                </div>
            </section>

            <section className="container mt-5">
                <div className="row txt-container">
                    <div className="col-12 text-center">
                        <p>
                            Nous hébergeons vos chevaux à l'année dans un joli cadre rural. Notre équipe surveille et observe vos chevaux afin d’apprendre à les connaître et de s’assurer de leur bonne santé au quotidien.
                        </p>  
                        <p>
                            L'été, vos chevaux sont répartis par groupe de 6 dans des grands parcs avec abris, le long de la rivière. Ils sont nourris avec un complément CMV oligo-vit et à l'herbe (avec un complément de foin en fin d'été si nécessaire.)
                        </p>
                        <p>
                            L'hiver, ils rentrent dans des box paddock ou dans des grands box intérieurs. Nourris en filet à foin et toujours en CMV, deux sorties en liberté dans le manège avec les copains par semaine sont offertes avec la pension, pour qu'ils puissent se retrouver et s'aérer ensemble, sur des jours définis et réguliers de manière à simplifier votre planning. Un parc hivernal est également mis à disposition si vous souhaitez sortir vos chevaux pendant les belles journées d’hiver ensoleillées.
                        </p>
                        <p>
                            Si vous le souhaitez, nous vous proposons un suivi pédagogique personnalisé et adapté à chacun pour vous aider à progresser avec votre cheval, au rythme qui vous convient. Travail à pied, Dressage, TREC, CSO... toutes les disciplines sont coachées de la même façon, sans aucun préjugé ! Nous visons un enseignement comportementaliste, tenant compte de la personnalité du cheval mais également de son cavalier de manière à ce que tout le monde se sente à l'aise et que tout se passe au mieux.
                        </p>
                        <p>
                            Vous avez également la possibilité de nous mettre votre cheval au travail ou en sortie (liberté, brouting, pansage tout est possible) et de bénéficier des prestations bien-être à tarif réduit.   
                        </p>
                    </div>

                    <ul className="col-12 li-container">
                        <li>
                            <i class="fa-solid fa-horse"></i>
                            Accès à des chemins de balade et à la rivière de l'écurie.
                        </li>
                        <li>
                            <i class="fa-solid fa-horse"></i>
                            Monitrice diplômée BPJEPS sur place
                        </li>
                    </ul>
                </div>
            </section>

            {/* Pension Temporaire : */}
            <section className="container">
                <h1 className="text-center">pension courte durée</h1>

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
                                <i class="fa-solid fa-horse"></i>
                                Placement "provisoire" : Nous gardons toujours un box et un parc provisoire pour vous permettre de pouvoir séjourner temporairement et profiter des installations ainsi que des prestations sans avoir à vous engager sur une pension longue durée.
                            </li>
                            <li>
                                <i class="fa-solid fa-horse"></i>
                                Le gardiennage de votre cheval est possible si vous devez vous absenter et que vous souhaitez partir serein. Votre cheval bénéficiera de toutes les prestations dont il a besoin pour se sentir chez lui et passer un bon séjour, sans être perturbé par votre absence.
                            </li>
                            <li>
                                <i class="fa-solid fa-horse"></i>
                                L'été nous accueillons avec plaisir les personnes qui souhaitent faire escale chez nous. Des tentes peuvent être installées, juste à côté des chevaux et le club-house est mis à disposition avec lavabo, toilettes, réfrigérateur, micro-onde, machine à café et bouilloire. Lors de votre séjour, vous aurez accès à toutes nos infrastructures et vous pourrez bénéficier des prestations de l'écurie. 
                            </li>
                            <li>
                                <i class="fa-solid fa-horse"></i>
                                Le transport des chevaux ou la location de notre van est possible pour ceux qui ne sont pas équipés pour se déplacer.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default YearPension;