import "./Cart.css";

const Cart = ({ quantity = 0, handlerIsShowBasket = Function.prototype }) => {
    return (
        <div
            className="cart light-blue darken-1 white-text"
            onClick={handlerIsShowBasket}
        >
            <i className="material-icons">shopping_cart</i>
            <span>{quantity}</span>
        </div>
    );
};

export default Cart;
