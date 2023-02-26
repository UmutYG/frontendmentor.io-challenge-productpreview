import ProductImage from "./ProductImage";
import "./Cart.css"
import ProductPresentation from "./ProductPresentation";


const Cart = () => {
  return (
    <div className="cart">
      <ProductImage />
      <ProductPresentation />
    </div>
  );
};

export default Cart;
