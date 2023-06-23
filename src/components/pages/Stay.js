import BlocImageLeft from "../BlocImageLeft";
import BlocImageRight from "../BlocImageRight";
import { massageContent, hydrotherapieContent, stretchingContent, aromatherapieContent, detenteContent } from "../../assets/js/data";

const Stay = () => {
    return (
        <main id="main" className="main main-stay">
            <h1 className='text-center'>Séjour bien-être</h1>
            <div className="container">
                
                <section className="row txt-container mt-5">
                    <div className="col-12 text-center">
                        <p>
                            Nos journées bien-être sont adaptées et personnalisées pour chaque cheval en fonction de son tempérament et de son histoire. La détente et la relaxation des chevaux est notre priorité.
                        </p>
                        <p>
                            Moments de plaisir, récupérations sportives, rémission ou prévention des blessures : tout est
                            mis en place pour que votre cheval ou votre poney puisse se détendre mentalement,
                            physiquement et que vous puissiez passer des moments agréables avec lui.
                            Pour cela, plusieurs activités vous sont proposées :
                        </p>
                    </div>
                </section>

                <section className="row border-radius-container">
                    { 
                        massageContent.map((mc, i) => (
                            <BlocImageLeft key={ i } title={ mc.title } img={ mc.img } textes={ mc.txt } />
                        ))
                    }
                </section>

                <section className="row border-radius-container">
                    {
                        hydrotherapieContent.map((yc, i) => (
                            <BlocImageRight key={ i } title={ yc.title } img={ yc.img } textes={ yc.txt } />
                        ))
                    }
                </section>

                <section className="row border-radius-container">
                    { 
                        stretchingContent.map((sc, i) => (
                            <BlocImageLeft key={ i } title={ sc.title } img={ sc.img } textes={ sc.txt } />
                        ))
                    }
                </section>

                <section className="row border-radius-container">
                    {
                        aromatherapieContent.map((ac, i) => (
                            <BlocImageRight key={ i } title={ ac.title } img={ ac.img } textes={ ac.txt } />
                        ))
                    }
                </section>

                <section className="row border-radius-container">
                    {
                        detenteContent.map((dc, i) => (
                            <BlocImageLeft key={ i } title={ dc.title } img={ dc.img } textes={ dc.txt } />
                        ))
                    }
                </section>

                <section className="row txt-container text-center mt-0 mt-md-5">
                    <div className="col-12">
                        <h1><span className="d-block d-md-inline">A venir</span> en septembre 2023</h1>
                        <h1 className="mt-2">Algothérapie</h1>
                        <div className="mt-5">
                            <p> L’algothérapie est l'utilisation des vertus des algues marines pour prendre soin des articulations et des muscles du cheval, améliorer sa performance ou pallier d'éventuels soucis de santé.</p>
                            <p>L’apport d’oligo-éléments et de minéraux accumulés dans les complexes d’algues proposés, nourrit les tissus et joue un rôle anti-inflammatoire sur les zones ciblées.</p>
                            <p>Formés et partenaires de la gamme de produit Cavasso, nous utilisons le soin qui correspond aux besoins de votre cheval.</p>
                            <p>L’algothérapie peut également être utilisée en complément de la prestation massage, si vous le souhaitez.</p>
                        </div>
                    </div>
                </section>

            </div>
        </main>
    );
};

export default Stay;