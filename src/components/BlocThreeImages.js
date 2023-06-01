
const BlocThreeImages = ({ imgLeft, imgCenter, imgRight }) => {
    return (
        <>
            <div className="col-12 col-md-4 mt-3 mt-md-4">
                <img src={ imgLeft } className="img img-fluid border-radius-left" alt="Une photo de l'Ecuries de l'Ajot" />
            </div>
            <div className="d-none d-md-block col-md-4 mt-md-4">
                <img src={ imgCenter } className="img img-fluid" alt="Une photo de l'Ecuries de l'Ajot" />
            </div>
            <div className="d-none d-md-block col-md-4 mt-md-4">
                <img src={ imgRight} className="img img-fluid border-radius-right" alt="Une photo de l'Ecuries de l'Ajot" />
            </div>
        </>
    );
};

export default BlocThreeImages;