var NewProduct = React.createClass({
  getInitialState(){
    return {
      errors: {}
    }
  },
  handleClick() {
    var barcode = this.refs.barcode.value;
    var name = this.refs.name.value;
    var description = this.refs.description.value;
    var purchase_date = this.refs.purchase_date.value;
    var warranty_expire_date = this.refs.warranty_expire_date.value;
    var seller_name = this.refs.seller_name.value;
    $.ajax({
      url: '/api/v1/products',
      type: 'POST',
      data: {
        product: {
          barcode: barcode,
          name: name,
          description: description,
          purchase_date: purchase_date,
          warranty_expire_date: warranty_expire_date,
          seller_name: seller_name
        }
      },
      done: (product) => {
        this.props.handleSubmit(product);
      },
      error: (res) => {
        this.setState({
          errors: res.responseJSON.errors
        });
      }
    });
  },
  render() {
    return (
      <div>
        <h3>New Product</h3>
        <form>
          <Errors errors={this.state.errors} />
          <div className="form-group">
            <label htmlFor="barcode">Barcode</label>
            <input type="text" className="form-control" ref='barcode' placeholder='Enter Barcode' required="true" />
          </div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" ref='name' placeholder='Enter the name of the Product' required="true"  />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input type="text" className="form-control" ref='description' placeholder='Enter a description' />
          </div>
          <div className="form-group">
            <label htmlFor="purchase_date">Purchase Date</label>
            <input type="date" className="form-control" ref='purchase_date' placeholder='Enter Date of Purchase' required="true"  />
          </div>
          <div className="form-group">
            <label htmlFor="warranty_expire_date">Warranty Expiration Date</label>
            <input type="date" className="form-control" ref='warranty_expire_date' placeholder='Enter Warranty Expiration Date' required="true"  />
          </div>
          <div className="form-group">
            <label htmlFor="seller_name">Seller Name</label>
            <input type="text" className="form-control" ref='seller_name' placeholder='Enter Seller Name' />
          </div>
          <button className="btn btn-primary" onClick={this.handleClick}>Submit</button>
        </form>
      </div>
    )
  }
});
