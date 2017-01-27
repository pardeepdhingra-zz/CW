var Product = React.createClass({
  render() {
    return(
      <tr>
        <td>{this.props.product.id}</td>
        <td>{this.props.product.barcode}</td>
        <td>{this.props.product.name}</td>
        <td>{this.props.product.description}</td>
        <td>{this.props.product.purchase_date}</td>
        <td>{this.props.product.warranty_expire_date}</td>
        <td>{this.props.product.seller_name}</td>
      </tr>
    )
  }
});
