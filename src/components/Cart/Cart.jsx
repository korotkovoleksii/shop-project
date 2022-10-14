import "./Cart.css";
import { useContext } from "react";
import { ShopContext } from "../../context";

const Cart = () => {
    const { order, handlerShowBasket } = useContext(ShopContext);
    return (
        <div
            className="cart light-blue darken-1 white-text"
            onClick={handlerShowBasket}
        >
            <i className="material-icons">shopping_cart</i>
            <span>{order.length}</span>
        </div>
    );
};

export default Cart;
