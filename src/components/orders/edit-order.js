import { useParams } from "react-router";
import { useState, useEffect, useContext } from "react";

import { OrdersContext } from "../../store/orders-context";

import OrderForm from "./order-form";

function EditOrder() {
    const { id } = useParams();
    const [order, setOrder] = useState({});
    const { orders } = useContext(OrdersContext);

    useEffect(() => {
        setOrder(orders.find((order) => +order.id === +id));
    }, [id, orders]);

    return (
        <div className="edit-order">
            <h1 className="edit-order-title">Edit Order</h1>

            <OrderForm order={order} />
        </div>
    );
}

export default EditOrder;
