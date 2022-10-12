import "./Cart.css";

const Cart = ({ quantity }) => {
    return (
        <div className="cart light-blue darken-1 white-text">
            <i className="material-icons">shopping_cart</i>
            <span>{quantity}</span>
        </div>
    );
};

export default Cart;
