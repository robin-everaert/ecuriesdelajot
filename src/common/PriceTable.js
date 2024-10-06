const PriceTable = ({ title, item, price, img }) => {
    return (
        <div className="col-12 col-md-6 mt-4 pt-0">
            <div className="price-table-content">
                <div className="price-table-header text-center">
                <h2 className="mb-0">{title}</h2>
                </div>
                <div className="price-table-body pt-4">         
                    <ul className='w-100 m-0 p-0'>
                    {item.map((itemValue, index) => (
                        <li className='p-2 d-flex flex-column justify-content-space-between align-items-center' key={index}>
                            <h3 className="item fw-bold">{itemValue}</h3>
                            <span className="price">{price[index]}</span>
                            <img src={ img } className="img img-fluid" alt="séparateur" />
                        </li>
                    ))}
                    </ul>
                </div>
            </div>
      </div>
    );
  };
  

export default PriceTable;