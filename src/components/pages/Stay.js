import BlocImageLeft from "../BlocImageLeft";
import BlocImageRight from "../BlocImageRight";
import { massageContent, hydrotherapieContent, stretchingContent, aromatherapieContent, detenteContent, algoContent } from "../../assets/js/data";

const Stay = () => {
    return (
        <main id="main" className="main main-stay">
            <h1 className='text-center'>Pôle bien-être </h1>
            <div className="container">
                
                <section className="row txt-container mt-5">
                    <div className="col-12 text-center">
                        <p>
                            Nos prestations bien-être sont adaptées et personnalisées pour chaque cheval en fonction de son activité et de son histoire.
                        </p>
                        <p>
                           Relaxation et moments de plaisir, préparation ou récupération à l'effort, rémission ou prévention des blessures.
                        </p>
                        <p className="fst-italic">
                            Tout est mis en place pour que votre cheval ou votre poney puisse se détendre mentalement, physiquement et qu'il puisse passer un moment agréable.
                        </p>                          
                       <p>
                            Pour cela, nous vous proposons plusieurs activités pouvant être effectuer à l'écurie ou directement chez vous à domicile avec notre déplacement :
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

                {/* <section className="row border-radius-container">
                    {
                        detenteContent.map((dc, i) => (
                            <BlocImageLeft key={ i } title={ dc.title } img={ dc.img } textes={ dc.txt } />
                        ))
                    }
                </section> */}

                <section className="row border-radius-container">
                    {
                        algoContent.map((ac, i) => (
                            <BlocImageLeft key={ i } title={ ac.title } img={ ac.img } textes={ ac.txt } />
                        ))
                    }
                </section>
            </div>
        </main>
    );
};

export default Stay;