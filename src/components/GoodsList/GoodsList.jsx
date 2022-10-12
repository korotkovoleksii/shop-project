import GoodsItem from "../GoodsItem/GoodsItem";
import "./GoodsList.css";

const GoodsList = ({ goods = [], addToOrder = Function.prototype }) => {
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
