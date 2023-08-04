const BlocImageRight = ({ title, img, textes }) => {
    return (
      <div className="d-flex flex-column-reverse flex-md-row align-items-center">   
        <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
          <h1 className="font-title text-center pb-0 pt-md-5">
            { title }
          </h1>
          <div className='p-0 text-center text-md-start txt-container'>
            {
              textes.map((t, i) => (
                <p key={ i } className="p-0 blocImageRightTxt">{ t }</p>
              ))
            }
          </div>
        </div>
        <div className="col-12 col-md-6">
          <img className="img img-fluid border-radius-left" src={ img } alt={ title } />
        </div>
      </div>
    );
  };
  
  export default BlocImageRight;