import careWaiting from "../../assets/images/care/care-waiting.jpg";

const Care = () => {
  return (
    <main id="main" className="main main-care">
        <div className="container">
          <h1 className="text-center mt-5">Soins et accompagnement naturel</h1>
          <h2 className='text-center'>Service disponible en 2026 !</h2>

          <div className="row">
            <div className="col-12 d-flex justify-content-center">
              <img src={ careWaiting } className="img img-fluid mt-3 w-75" alt="Une photo de cheval" />
            </div>
          </div>
        </div>
    </main>
  )
}

export default Care