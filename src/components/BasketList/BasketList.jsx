import BasketItem from "../BasketItem/BasketItem";
import { useContext } from "react";
import { ShopContext } from "../../context";
import "./BasketList.css";

const BasketList = ({}) => {
    const {
        order,
        deleteItemFromOrder,
        incrementItemInOrder,
        decrementItemInOrder,
        handlerShowBasket,
    } = useContext(ShopContext);

    const total = order.reduce(
        (sum, el) => sum + el.price.finalPrice * el.quantity,
        0
    );

    return (
        <ul className="collection basket-list">
            <li className="collection-item active">
                <div>
                    Basket{" "}
                    <i
                        className="material-icons right close-icon "
                        onClick={handlerShowBasket}
                    >
                        close
                    </i>
                </div>
            </li>
            {order.length
                ? order.map((item) => (
                      <BasketItem
                          key={item.mainId}
                          id={item.mainId}
                          name={item.displayName}
                          price={item.price.finalPrice}
                          quantity={item.quantity}
                      />
                  ))
                : null}

            <li className="collection-item active">Total: {total}</li>
        </ul>
    );
};
export default BasketList;
