import GoodsItem from "../GoodsItem/GoodsItem";
import { useContext } from "react";
import { ShopContext } from "../../context";
import "./GoodsList.css";

const GoodsList = () => {
    const { goods, addToOrder } = useContext(ShopContext);
    return (
        <div className="goods">
            {goods.length
                ? goods.map((item) => (
                      <GoodsItem
                          key={item.mainId}
                          {...item}
                          addToOrder={addToOrder}
                      />
                  ))
                : "Nothing here"}
        </div>
    );
};
export default GoodsList;
