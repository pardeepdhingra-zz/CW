const Errors = ({errors}) => {
  const displayErrors = Object.keys(errors).map((field) => { return ( <Error key={field} field={field} error={errors[field]} /> ) });
  return <ul className="errors">{displayErrors}</ul>
}
