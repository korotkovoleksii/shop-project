import { useState, useEffect } from "react";
import { API_KEY, API_URL } from "../../config.js";
import Preloader from "../Preloader/Preloader.jsx";
import GoodsList from "../GoodsList/GoodsList.jsx";
import Cart from "../Cart/Cart.jsx";
import BasketList from "../BasketList/BasketList.jsx";
import Toast from "../Toast/Toast.jsx";
import "./Shop.css";

const Shop = () => {
    const [goods, setGoods] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isShowBasket, setIsShowBasket] = useState(false);
    const [nameToast, setNameToast] = useState("");

    const handlerIsShowBasket = () => {
        setIsShowBasket(!isShowBasket);
    };
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
        setNameToast(item.displayName);
    };
    const deleteItemFromOrder = (id) => {
        setOrder(
            order.filter((item) => {
                return item.mainId !== id;
            })
        );
    };
    const incrementItemInOrder = (id) => {
        setOrder(
            order.map((item) => {
                if (item.mainId === id) {
                    item.quantity += 1;
                }
                return item;
            })
        );
    };
    const closeToast = () => {
        setNameToast("");
    };
    const decrementItemInOrder = (id) => {
        setOrder(
            order.map((item) => {
                if (item.mainId === id) {
                    item.quantity = item.quantity > 0 ? item.quantity - 1 : 0;
                }
                return item;
            })
        );
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
            <Cart
                quantity={order.length}
                handlerIsShowBasket={handlerIsShowBasket}
            />
            {isLoading ? (
                <Preloader />
            ) : (
                <GoodsList goods={goods} addToOrder={addToOrder} />
            )}
            {isShowBasket && (
                <BasketList
                    order={order}
                    handlerIsShowBasket={handlerIsShowBasket}
                    deleteItemFromOrder={deleteItemFromOrder}
                    incrementItemInOrder={incrementItemInOrder}
                    decrementItemInOrder={decrementItemInOrder}
                />
            )}
            {nameToast && <Toast name={nameToast} closeToast={closeToast} />}
        </div>
    );
};
export default Shop;
