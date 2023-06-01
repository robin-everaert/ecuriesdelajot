import BlocThreeImages from "../BlocThreeImages";

import imgLeft from "../../assets/images/temporaryPension/img-left.JPG";
import imgCenter from "../../assets/images/temporaryPension/img-center.jpg";
import imgRight from "../../assets/images/temporaryPension/img-right.JPG";

const TemporaryPension = () => {
    return (
        <main id="main" className="main main-pension">
            <section className="container">
                <h1 className="text-center">Pension passagère</h1>

                <div className="row mt-3 mt-md-5">
                    <BlocThreeImages imgLeft={ imgLeft } imgCenter={ imgCenter } imgRight={ imgRight } />
                </div>
            </section>

            <section className="container">
                <div className="row txt-container mt-5">
                    <div className="col-12">
                        <p>
                            Nous vous proposons diverses formules de pension passagère, selon ce qui pourrait vous aider dans votre quotidien de propriétaire. 
                        </p>
                    
                        <ul className="li-container">
                            <li>
                                <i class="fa-solid fa-horse"></i>
                                pension débourrage : le débourrage d'un cheval est une étape fondamentale qui doit se réaliser sans stress et dans de bonnes conditions, pour que la suite devienne un plaisir, en toute sécurité. Nous vous proposons de prendre votre cheval en pension pendant 1 mois (ou plus si nécessaire)  pour réaliser le débourrage ou pour vous accompagner pendant cette étape.

                            </li>
                            <li>
                                <i class="fa-solid fa-horse"></i>
                                Pension rééducation : Vous rencontrez des problèmes de compréhension et de communication avec votre cheval ? Il est compliqué en main, n’embarque pas en van, se défend au montoir… certains comportements peuvent devenir contraignants et dangereux au quotidien. Nous vous proposons de vous aider à rétablir la situation.
                            </li>
                            <li>
                                <i class="fa-solid fa-horse"></i>
                                placement "provisoire" : nous gardons toujours un box et un parc provisoire pour vous permettre de pouvoir séjourner temporairement et profiter des installations ainsi que des prestations sans avoir à vous engager sur une pension longue durée.
                            </li>
                            <li>
                                <i class="fa-solid fa-horse"></i>
                                le gardiennage de votre cheval est possible si vous devez vous absenter et que vous souhaitez partir serein. Votre cheval bénéficiera de toutes les prestations dont il a besoin pour se sentir chez lui et passer un bon séjour, sans être perturbé par votre absence.
                            </li>
                            <li>
                                <i class="fa-solid fa-horse"></i>
                                l'été nous accueillons avec plaisir les personnes qui souhaitent faire escale chez nous. Des tentes peuvent être installées, juste à côté des chevaux et le club-house est mis à disposition avec lavabo, toilettes, réfrigérateur, micro-onde, machine à café et bouilloire. Lors de votre séjour, vous aurez accès à toutes nos infrastructures et vous pourrez bénéficier des prestations de l'écurie. 
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

export default TemporaryPension;