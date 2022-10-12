import { useState, useEffect } from "react";
import { API_KEY, API_URL } from "../../config.js";
import Preloader from "../Preloader/Preloader.jsx";
import GoodsList from "../GoodsList/GoodsList.jsx";
import "./Shop.css";

const Shop = () => {
    const [goods, setGoods] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

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
            {isLoading ? <Preloader /> : <GoodsList goods={goods} />}
        </div>
    );
};
export default Shop;
