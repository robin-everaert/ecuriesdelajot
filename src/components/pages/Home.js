import React from 'react';
import centre from '../../assets/images/centre-1.png'

const Home = () => {
    return (
<main id="main" className="main main-home">
        
    <div className="container">
        <div className="row">
            <div className="col-12">
                <p className='txt-important fw-bold'>
                    Les Ecuries de L'Ajot vous accueillent dans un cadre unique et authentique en Champagne-Ardenne. Le calme et la nature règnent dans cet ancien corps de ferme, longé par la Saulx etdatant du début du 20ème siècle. 
                </p>
                <p>
                    Nous avons commencé à réaménagé les bâtiments il y a 4 ans et nous les avons transformés en écuries, tout en conservant leur charme d’antan.
                </p>
                <p>
                    Nous vous proposons diverses formes de pensions dans une ambiance agréable, axée sur l’entraide et le respect de chacun. La base de notre travail est avant tout le bien-être des chevaux et nous aspirons à les aider à se sentir bien, en combinant le confort que peut apporter
                    une structure avec la conservation, autant que possible, de leurs habitudes naturelles et instinctives. La décontraction d'une relation saine et de confiance avec l'homme est fondamentale à nos yeux.
                </p>
            </div>
        </div>
    </div>  

    <div className="background-image mt-5"></div>

    <div className="container mt-5">

        <div className="row mt-5">
            <div className="col-12">
                <p>
                    Notre équipe et nos méthodes : diplômée BPJEPS, aromathérapie et masseuse équin, nous encadrerons vos chevaux pendant toute la durée de leur séjour, avec une approche et des méthodes éthologiques pour vous permettre de créer un partenariat et une relation saine avec
                    votre cheval, sans aucune forme de soumission mais avec des bases solides d'éducation, deconnexion et de confiance.
                </p>
                <p>
                   ➡️ L'équitation éthologique est le résultat des études scientifiques menées par les éthologues qui analysent le comportement des chevaux pour mieux les comprendre.
                   🔆 C'est un comportement et une manière de fonctionner que l'on adopte dans toutes situations et dans toutes les disciplines et non dans une discipline dissociée des autres. 🔆
                </p>
            </div>
        </div>

        <div className="row">
            <div className="col-12">
                <h2>Nos infrastructures :</h2>
                <ul>
                    <li>Box de 5*3 avec un paddock individuel de 7*3.</li>
                    <li>Box interieurs de 9*3m30.</li>
                    <li>Carrière en sable de 25*35</li>
                    <li>Manège de 40*20</li>
                    <li>8 hectares de pâtures</li>
                    <li>Douche avec eau chaude</li>
                    <li>Casiers individuels avec anneaux d'attache à côté.</li>
                </ul>
                <p>
                    Nous sommes également équipés d'un club-house et d'une pièce sellerie, si vous souhaitez laisser du matériel supplémentaire qui vous encombre chez vous.
                </p>
            </div>
        </div>
    </div> { /* close container */ }
</main>
    );
};

export default Home;