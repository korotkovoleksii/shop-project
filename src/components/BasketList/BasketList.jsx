import BasketItem from "../BasketItem/BasketItem";
import "./BasketList.css";

const BasketList = ({
    order = [],
    handlerIsShowBasket = Function.prototype,
    deleteItemFromOrder = Function.prototype,
    incrementItemInOrder = Function.prototype,
    decrementItemInOrder = Function.prototype,
}) => {
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
                        onClick={handlerIsShowBasket}
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
                          deleteItemFromOrder={deleteItemFromOrder}
                          incrementItemInOrder={incrementItemInOrder}
                          decrementItemInOrder={decrementItemInOrder}
                      />
                  ))
                : null}

            <li className="collection-item active">Total: {total}</li>
        </ul>
    );
};
export default BasketList;
