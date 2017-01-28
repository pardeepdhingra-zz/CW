const Product = ({product}) => {
  return(
    <tr>
      <td>{product.id}</td>
      <td>{product.barcode}</td>
      <td>{product.name}</td>
      <td>{product.description}</td>
      <td>{product.purchase_date}</td>
      <td>{product.warranty_expire_date}</td>
      <td>{product.seller_name}</td>
    </tr>
  )
}
