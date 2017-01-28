const Products = ({products}) => {
  const displayProducts = products.map((product) => { return ( <Product key={product.id} product={product} /> ) });
  return(
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>BarCode</th>
            <th>Name</th>
            <th>description</th>
            <th>Date of Purchase</th>
            <th>Warranty Expire</th>
            <th>Seller</th>
          </tr>
        </thead>
        <tbody>
          {displayProducts}
        </tbody>
      </table>
    </div>
  )
}
