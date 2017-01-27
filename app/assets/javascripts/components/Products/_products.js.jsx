var Products = React.createClass({
  render() {
    var products = this.props.products.map((product) => { return ( <Product key={product.id} product={product} /> ) });
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
            {products}
          </tbody>
        </table>
      </div>
    )
  }
});
