import { createContext, useReducer } from "react";
import { reducer } from "./reducer";
export const ShopContext = createContext();

const initialState = {
    goods: [],
    isLoading: true,
    order: [],
    isShowBasket: false,
    nameToast: "",
};

export const ContextProvider = ({ children }) => {
    const [value, dispatch] = useReducer(reducer, initialState);

    value.closeToast = () => {
        dispatch({ type: "CLOSE_TOAST" });
    };
    value.setGoods = (payload) => {
        dispatch({ type: "SET_GOODS", payload });
    };
    value.addToOrder = (payload) => {
        dispatch({ type: "ADD_TO_ORDER", payload });
    };
    value.handlerShowBasket = () => {
        dispatch({ type: "HANDLER_SHOW_BASKET" });
    };
    value.deleteItemFromOrder = (payload) => {
        dispatch({ type: "DELETE_ITEM_FROM_ORDER", payload });
    };
    value.incrementItemInOrder = (payload) => {
        console.log(payload);
        dispatch({ type: "INCREMENT_ITEM_IN_ORDER", payload });
    };
    value.decrementItemInOrder = (payload) => {
        dispatch({ type: "DECREMENT_ITEM_IN_ORDER", payload });
    };

    return (
        <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
    );
};
