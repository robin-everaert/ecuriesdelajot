const BlocImageLeft = ({ title, img, textes }) => {
    return (
      <>
        <div className="col-12 col-md-6">
          <img className="img img-fluid border-radius-right" src={ img } alt={ title } />
        </div>
        <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
          <h1 className="font-title text-center pb-4 pt-md-5">
            { title }
          </h1>
          <div className='p-0 text-center text-md-start txt-container'>
            {
              textes.map((t, i) => (
                <p key={ i }>{ t }</p>
              ))
            }
          </div>
        </div>
      </>
    );
  };
  
  export default BlocImageLeft;