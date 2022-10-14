import { useEffect } from "react";
import { useContext } from "react";
import { ShopContext } from "../../context";
import "./Toast.css";

const Toast = () => {
    const { closeToast: clToast, nameToast } = useContext(ShopContext);

    useEffect(() => {
        const timerId = setTimeout(() => {
            // closeToast();
            clToast();
        }, 3000);
        return () => {
            clearTimeout(timerId);
        };
    }, [nameToast]);
    return (
        <div id="toast-container">
            <div className="toast">{nameToast} added to basket</div>
        </div>
    );
};

export default Toast;
