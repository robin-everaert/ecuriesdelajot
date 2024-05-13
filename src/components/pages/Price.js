import PriceTable from "../../common/PriceTable";
import { priceTablesArray } from "../../assets/js/data";


const Price = () => {
      
    return (
        <main id="main" className="main main-price pb-5 mb-5">
            <h1 className='text-center'>Tarifs</h1>

            <div className="price-table-container">
   
                <section className="container price-table-pension-container">
                    <h2 className="text-center pb-0 pt-md-3 mt-md-5">Pensions</h2>
                    <div className="row">
                        {
                            priceTablesArray.slice(0, 2).map((p, i) => (
                                <PriceTable key={ i } title= { p.title } item={ p.item } price={ p.price } img={ p.img }/>
                            ))
                        }       
                    </div>      

                    {/* <h2 className="text-center pb-0 pt-md-3 mt-5">Autres pensions</h2>   
                    <div className="row">
                        {
                            priceTablesArray.slice(2, 4).map((p, i) => (
                                <PriceTable key={ i } title= { p.title } item={ p.item } price={ p.price } img={ p.img }/>
                            ))
                        }       
                    </div>   */}
                    <h2 className="text-center pb-0 pt-md-3 mt-5">Séances bien-être</h2>
                    <div className="row">
                        {
                            priceTablesArray.slice(4, 6).map((p, i) => (
                                <PriceTable key={ i } title= { p.title } item={ p.item } price={ p.price } img={ p.img }/>
                            ))
                        }  
                    </div>
                </section>

            
            </div>
        </main>
    );
};

export default Price;