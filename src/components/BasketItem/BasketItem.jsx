import { useContext } from "react";
import { ShopContext } from "../../context";

const BasketItem = ({ name, id, price, quantity }) => {
    // const { example } = useContext(ShopContext);
    // console.log(example);
    const { deleteItemFromOrder, incrementItemInOrder, decrementItemInOrder } =
        useContext(ShopContext);

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
