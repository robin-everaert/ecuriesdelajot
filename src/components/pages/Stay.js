import BlocImageLeft from "../BlocImageLeft";

import massage from "../../assets/images/stay/massage.JPG";
import hydrotherapie from "../../assets/images/stay/hydrotherapie.jpg";
import stretching from "../../assets/images/stay/stretching.JPG";
import aromatherapie from "../../assets/images/stay/aromathérapie.jpg";
import detente from "../../assets/images/stay/moment_a_pied.jpg";
import BlocImageRight from "../BlocImageRight";

const massageContent = [{
    title: "Massage",
    img: massage,
    txt: [
        "Les séances sont assurées par Amélie, diplômée en physiothérapie manuel équin. Le massage libère le corps des tensions musculaires et stimule la circulation sanguine et lymphatique. Il élimine ainsi les toxines, et améliore l’état général du cheval, tant sur le plan physique que sur le plan psychique. Il a également pour fonction la prévention des lésions, en traitant en amont et avant l’apparition des symptômes, l’ensemble du corps du cheval, en lui redonnant sa liberté de mouvement et en supprimant raideurs et contraintes physiques.",
        "La palpation des mains est réalisée de façon subtile, afin de détecter le problème à la base. Il soulage le cheval en cas d’arthrose, car il redonne de la souplesse aux muscles sujets aux spasmes, autour de l’articulation douloureuse. Le cheval récupère également mieux et plus vite des blessures ligamentaires et tendineuses car l’accélération du flux sanguin permet une revascularisation des tissus lésés.",
        "Les huiles essentielles peuvent soutenir et renforcer cette symbiose. Le cheval se libère physiquement et mentalement en retrouvant son équilibre énergétique.",
    ],
}];

const hydrotherapieContent = [{
    title: "Hydrothérapie dans la Saulx",
    img: hydrotherapie,
    txt: [
        "L'accès à la rivière se trouve sur des terrains appartenant à l'écurie, ce qui permet de bénéficier du bien-être de l'hydrothérapie en toute sécurité et dans un cadre 100 % calme et naturel. Cette méthode consiste à faire marcher les chevaux dans l'eau pour les aider dans leur processus de récupération et de renforcement musculaire mais également en soulagement d'éventuelles blessures récentes ou plus anciennes.",
        "Adapté à votre cheval, ça peut être un simple bain de membres ou une balade dans la rivière, avec une profondeur choisie.",
    ],
}];

const stretchingContent = [{
    title: "Stretching",
    img: stretching,
    txt: [
        "Le stretching est l'étirement latéral et longitudinal des muscles. Des étirements lents et progressifs préparent à l’effort et ont également un intérêt thérapeutique :",
        " ils éveillent les neurorécepteurs présents dans les muscles et les articulations du cheval et favorisent ainsi l’équilibre et la souplesse du geste, en limitant les risques dus à l’effort et en luttant contre l’installation de raideurs.",
    ],
}];

const aromatherapieContent = [{
    title: "Séance huile essentielle",
    img: aromatherapie,
    txt: [
        "L’aromathérapie est l'utilisation des composés aromatiques des plantes, dans une optique de prévention et de soulagement de certaines blessures, ainsi que de bien-être et d'apaisement.",
        "Dans la nature lorsqu'un cheval ressent un déséquilibre, il rectifie en allant se servir lui-même en plantes médicinales. Les chevaux n'ayant plus la possibilité de le faire, nous leur proposons ces plantes médicinales sous forme concentrée : l'huile essentielle.",
        "Nous vous proposons une séance de 'consultation' pour pouvoir définir et vous conseiller sur une ou plusieurs huiles essentielles susceptibles d’aider au mieux votre cheval, au quotidien ou pendant sa convalescence.",
    ],
}];

const detenteContent = [{
    title: "Moment détente à pied",
    img: detente,
    txt: [
        "Nous vous proposons une séance avec diverses activités en main, ainsi qu’une partie théorique pour vous aider à mieux comprendre votre cheval et à perfectionner votre relation. Exercices à pied, base et découverte de l’éthologie ou son perfectionnement.",
        "Cette séance sera adaptée à votre niveau et celui de votre cheval.",
    ], 
}];





const Stay = () => {
    return (
        <main id="main" className="main main-stay" >
            <div className="container">
                <section className="row txt-container">
                    <div className="col-12 text-center">
                        <h1>ICI IL FAUDRA UNE PHOTO</h1>
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

                <section className="row txt-container text-center mt-5">
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