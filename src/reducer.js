export function reducer(state, { type, payload }) {
    switch (type) {
        case "SET_GOODS":
            return {
                ...state,
                goods: payload || [],
                isLoading: false,
            };
        case "CLOSE_TOAST":
            return {
                ...state,
                nameToast: "",
            };
        case "ADD_TO_ORDER": {
            console.log(state.order);
            let newOrder = null;
            const itemIndex = state.order.findIndex(
                (item) => item.mainId === payload.mainId
            );
            if (itemIndex < 0) {
                newOrder = [
                    ...state.order,
                    {
                        ...payload,
                        quantity: 1,
                    },
                ];
            } else {
                newOrder = state.order.map((orderItem) => {
                    if (payload.mainId === orderItem.mainId) {
                        return {
                            ...orderItem,
                            quantity: orderItem.quantity + 1,
                        };
                    }
                    return orderItem;
                });
            }
            return {
                ...state,
                order: newOrder,
                nameToast: payload.displayName,
            };
        }
        case "HANDLER_SHOW_BASKET": {
            return { ...state, isShowBasket: !state.isShowBasket };
        }
        case "DELETE_ITEM_FROM_ORDER": {
            const newOrder = state.order.filter(
                (item) => item.mainId !== payload
            );
            return { ...state, order: newOrder };
        }
        case "INCREMENT_ITEM_IN_ORDER": {
            const newOrder = state.order.map((item) => {
                if (item.mainId === payload) {
                    console.log(item.quantity);

                    console.log(item.quantity);
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });
            // console.log(newOrder);

            return { ...state, order: newOrder };
        }
        case "DECREMENT_ITEM_IN_ORDER": {
            const newOrder = state.order.map((item) => {
                if (item.mainId === payload) {
                    return {
                        ...item,
                        quantity: item.quantity > 0 ? item.quantity - 1 : 0,
                    };
                }
                return item;
            });
            return { ...state, order: newOrder };
        }

        default:
            return state;
    }
}
