const BasketItem = ({ name, price, quantity }) => {
    return (
        <li className="collection-item">
            <div>
                {name} x{quantity}={price * quantity}
                <a href="#!" className="secondary-content">
                    <i className="material-icons">send</i>
                </a>
            </div>
        </li>
    );
};
export default BasketItem;
