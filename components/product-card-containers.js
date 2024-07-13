import PropTypes from 'prop-types';

const ProductCardContainers = ({ product }) => {
  return (
    <div className="product-card-container">
      <img
        className="product-image"
        loading="lazy"
        alt={product.title}
        src={product.imageUrl}
      />
      <div className="product-details">
        <h3 className="product-title">{product.title}</h3>
        <div className="product-price">${product.price}</div>
      </div>
    </div>
  );
};

ProductCardContainers.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired, // Change to PropTypes.number
  }).isRequired,
};

export default ProductCardContainers;
