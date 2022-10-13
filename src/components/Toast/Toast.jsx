import { useEffect } from "react";
import "./Toast.css";

const Toast = ({ name, closeToast }) => {
    useEffect(() => {
        const timerId = setTimeout(() => {
            closeToast();
        }, 3000);
        return () => {
            clearTimeout(timerId);
        };
    }, [name]);
    return (
        <div id="toast-container">
            <div className="toast">{name} added to basket</div>
        </div>
    );
};
export default Toast;
