var Error = React.createClass({
  render() {
    return(
      <li>
        {humanize(this.props.field)} {this.props.error.join(`, ${humanize(this.props.field)} ` )}
      </li>
    )
  }
});
