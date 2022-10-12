import BasketItem from "../BasketItem/BasketItem";
import "./BasketList.css";

const BasketList = ({ order = [] }) => {
    return (
        <ul className="collection basket-list">
            <li className="collection-item active">
                <div>Basket</div>
            </li>
            {order.length
                ? order.map((item) => (
                      <BasketItem
                          name={item.displayName}
                          price={item.price.finalPrice}
                          quantity={item.quantity}
                      />
                  ))
                : null}

            <li className="collection-item">
                <div>
                    Alvin
                    <a href="#!" className="secondary-content">
                        <i className="material-icons">send</i>
                    </a>
                </div>
            </li>
            <li className="collection-item">
                <div>
                    Alvin
                    <a href="#!" className="secondary-content">
                        <i className="material-icons">send</i>
                    </a>
                </div>
            </li>
            <li className="collection-item active">Total:</li>
        </ul>
    );
};
export default BasketList;
