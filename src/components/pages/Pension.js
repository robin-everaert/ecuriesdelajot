import BlocThreeImages from "../BlocThreeImages";

import imgLeft from "../../assets/images/pension/img-left.jpg";
import imgCenter from "../../assets/images/pension/img-center.jpg";
import imgRight from "../../assets/images/pension/img-right.jpg";
import imgLeftT from "../../assets/images/pension/img-left-t.jpg";
import imgCenterT from "../../assets/images/pension/img-center-t.JPG";
import imgRightT from "../../assets/images/pension/img-right-t.jpg";
import line from "../../assets/images/line-coeur.png"

const Pension = () => {
    return (
        <main id="main" className="main main-pension">
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
                            Chaque cheval est avant tout un compagnon de vie. Nous plaçons son bien-être, son équilibre et son respect au cœur de nos valeurs.
                        </p>
                    </div>

                    <div className="col-12 mt-3">
                        <h3 className="price-table-title text-center pb-0 pt-3">Un cadre de vie pensé pour leur nature</h3>
                        <p>
                            <i className="fw-bold">L’été:{" "}</i> Les chevaux vivent au parc, avec des abris et accès à un étang, profitant d’une vie en extérieur et d’une herbe abondante. Du foin est apporté uniquement si nécessaire, pour garantir leur confort.
                        </p>
                        <p>
                            <i className="fw-bold">L’hiver:{" "}</i> Les chevaux sont installés en grand box ou en box-paddock, avec quatre sorties en liberté par semaine afin de préserver leur équilibre physique et mental. Ils sont alors nourris au filet à foin pour respecter leur rythme naturel d’alimentation.
                        </p>
                    </div>

                    <div className="col-12 mt-1 mt-md-3">
                        <h3 className="price-table-title text-center pb-0 pt-3">Un accompagnement pédagogique</h3>
                        <p>Nous vous accompagnons aussi dans la relation avec votre cheval, grâce à un suivi pédagogique adapté sans pression ni contrainte: <br />l’objectif est de progresser ensemble, dans la compréhension et la confiance.</p>
                    </div>

                    <div className="col-12 mt-1 mt-md-3">
                        <h3 className="price-table-title text-center pb-0 pt-3">Un soutien naturel pour leur santé</h3>
                        <p>
                            Formée en naturopathie équine, je propose un accompagnement complémentaire pour les chevaux qui en ont besoin. Aromathérapie, phytothérapie, gemmothérapie ou encore soins de confort : des solutions douces et naturelles peuvent être intégrées au suivi quotidien, toujours dans le respect de chaque animal.
                        </p>
                    </div>

                    <div className="col-12 mt-1 mt-md-3">
                        <p className="fst-italic text-center secondColor fw-bold">
                            Plusieurs prestations peuvent être ajoutées à la pension : travail adapté, sorties en main, balades, liberté, pansage…
                            Tout est mis en œuvre pour offrir aux chevaux un quotidien serein et épanouissant.
                        </p>
                    </div>

                    <ul className="li-container mt-3">
                        <li>
                            <i className="fa-solid fa-horse"></i>
                            Monitrice diplômée BPJEPS sur place.
                        </li>
                        <li>
                            <i className="fa-solid fa-horse"></i>
                            Prestations de podologie, massage, soins et accompagnement naturel proposées à tarif réduit.
                        </li>
                    </ul>         
                </div>
            </section>
        </main>
    );
};

export default Pension;