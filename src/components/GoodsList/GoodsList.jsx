import GoodsItem from "../GoodsItem/GoodsItem";
import "./GoodsList.css";

const GoodsList = ({ goods = [] }) => {
    return (
        <div className="goods">
            {goods.length
                ? goods.map((item) => <GoodsItem key={item.mainId} {...item} />)
                : "Nothing here"}
        </div>
    );
};
export default GoodsList;
