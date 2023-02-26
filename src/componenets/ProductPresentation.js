import "./ProductPresentation.css";
import iconCart from "../assets/images/icon-cart.svg";

const ProductPresentation = () => {
  return (
    <div className="product-presentation">
      <p className="category">PERFUME</p>
      <h1 className="title">Gabrielle Essence Eau De Parfum</h1>
      <p className="description">
        A floral, solar and voluptous interpretation composed by Olivier Polge,
        Perfumer-Creator for the House of CHANEL.
      </p>
      <div className="price-wrapper">
        <p className="price-discounted">$149.99</p>
        <p className="price-original">$169.99</p>
      </div>
      <div className="add-to-cart-button">
        <img src={iconCart} alt="icon" className="shop-icon" />
        <p className="add-to-cart-text">Add to Cart</p>
      </div>
    </div>
  );
};

export default ProductPresentation;
