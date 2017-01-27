var Errors = React.createClass({
  render() {
    var errors = Object.keys(this.props.errors).map((field) => { return ( <Error key={field} field={field} error={this.props.errors[field]} /> ) });
    return(
      <ul className="errors">
        {errors}
      </ul>
    )
  }
});
