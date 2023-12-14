import './style.css';

const Product = ({ product }) => (
<div className=''>
  <div key={product.id} className="product">
    <h3>{product.name}</h3>
    <p>{product.description}</p>
    <p>{product.price}</p>
  </div>
</div>
);

export default Product;