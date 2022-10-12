import "./GoodItem.css";

const GoodsItem = ({
    // mainId,
    displayName,
    displayDescription,
    price,
    displayAssets,
}) => {
    return (
        <div className="card">
            <div className="card-image">
                <img src={displayAssets[0].background} alt={displayName} />
                <span className="card-title">{displayName}</span>
                <a className="btn-floating halfway-fab waves-effect waves-light light-blue darken-1">
                    <i className="material-icons">add</i>
                </a>
            </div>
            <div className="card-content">
                <p>{displayDescription}</p>
                <span className="right">{price.finalPrice}</span>
            </div>
        </div>
    );
};
export default GoodsItem;
