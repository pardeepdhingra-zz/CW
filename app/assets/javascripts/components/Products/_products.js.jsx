var Products = React.createClass({
  getInitialState() {
    return {
      products: []
    }
  },
  componentDidMount() {
    $.getJSON('/api/v1/products.json', (response) => { this.setState({ products: response }) });
  },
  render() {
    var products = this.state.products.map((product) => { return ( <Product key={product.id} product={product} /> ) });
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
