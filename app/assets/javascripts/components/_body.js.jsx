var Body = React.createClass({
  getInitialState() {
    return {
      products: []
    }
  },
  componentDidMount() {
    $.getJSON('/api/v1/products.json', (response) => { this.setState({ products: response }) });
  },
  render() {
    return (
      <div className="container">
        <Products products={products} />
      </div>
    )
  }
});
