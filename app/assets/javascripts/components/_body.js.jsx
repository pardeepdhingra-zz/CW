var Body = React.createClass({
  getInitialState() {
    return {
      products: []
    }
  },
  componentDidMount() {
    $.getJSON('/api/v1/products.json', (response) => { this.setState({ products: response }) });
  },
  handleSubmit(product) {
    var newState = this.state.products.concat(product);
    this.setState({ products: newState })
  },
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <NewProduct handleSubmit={this.handleSubmit}/>
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col-sm-12">
            <Products products={this.state.products} />
          </div>
        </div>
      </div>
    )
  }
});
