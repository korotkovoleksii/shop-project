import { useState, useEffect } from "react";
import { API_KEY, API_URL } from "../../config.js";
import Preloader from "../Preloader/Preloader.jsx";
import GoodsList from "../GoodsList/GoodsList.jsx";
import Cart from "../Cart/Cart.jsx";
import "./Shop.css";

const Shop = () => {
    const [goods, setGoods] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [order, setOrder] = useState([]);

    const addToOrder = (item) => {
        const itemIndex = order.findIndex(
            (orderItem) => orderItem.mainId === item.mainId
        );
        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1,
            };
            setOrder([...order, newItem]);
        } else {
            const newOrderList = order.map((orderItem) => {
                if (item.mainId === orderItem.mainId) {
                    return { ...orderItem, quantity: orderItem.quantity + 1 };
                }
                return orderItem;
            });
            setOrder(newOrderList);
        }
    };

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log();
                data.shop && setGoods(data.shop);

                setIsLoading(false);
            });
    }, []);

    return (
        <div className="container content">
            <Cart quantity={order.length} />
            {isLoading ? (
                <Preloader />
            ) : (
                <GoodsList goods={goods} addToOrder={addToOrder} />
            )}
        </div>
    );
};
export default Shop;
