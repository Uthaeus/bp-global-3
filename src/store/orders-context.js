import { useContext, useEffect, useState, createContext } from "react";

import { UserContext } from "./user-context";

import { dummyOrders } from "./dummy/dummy-orders";

export const OrdersContext = createContext({
    orders: [],
    addOrder: () => {},
    deleteOrder: () => {}
});

export default OrdersContextProvider = ({ children }) => {
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const { user, isAdmin } = useContext(UserContext);

    useEffect(() => {
        if (user) {
            if (isAdmin) {
                setOrders(dummyOrders);
            } else {
                setOrders(dummyOrders.filter(order => order.uid === user.id));
            }
        }
        setIsLoading(false);
    }, [ user, isAdmin ]);

    const addOrder = (order) => {
        setOrders([...orders, order]);
    }

    const deleteOrder = (id) => {
        setOrders(orders.filter(order => order.id !== id));
    }

    const value = {
        orders,
        addOrder,
        deleteOrder
    }

    return <OrdersContext.Provider value={value}>{!isLoading && children}</OrdersContext.Provider>;
}