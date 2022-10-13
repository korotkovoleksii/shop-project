const BasketItem = ({
    name,
    id,
    price,
    quantity,
    deleteItemFromOrder = Function.prototype,
    incrementItemInOrder = Function.prototype,
    decrementItemInOrder = Function.prototype,
}) => {
    return (
        <li className="collection-item">
            <div>
                {name} x{" "}
                <button onClick={() => decrementItemInOrder(id)}>-</button>{" "}
                {quantity}{" "}
                <button onClick={() => incrementItemInOrder(id)}>+</button>=
                {price * quantity}
                <a href="#!" className="secondary-content">
                    <i
                        className="material-icons"
                        onClick={() => deleteItemFromOrder(id)}
                    >
                        close
                    </i>
                </a>
            </div>
        </li>
    );
};
export default BasketItem;
