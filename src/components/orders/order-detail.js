import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import { OrdersContext } from "../../store/orders-context";
import { UserContext } from "../../store/user-context";

function OrderDetail() {
    const { orders } = useContext(OrdersContext);
    const { isAdmin } = useContext(UserContext);
    const { id } = useParams();
    const [order, setOrder] = useState({});

    useEffect(() => {
        setOrder(orders.find((order) => order.id === id));
    }, [id, orders]);

    return (
        <div className="order-detail">
            <div className="order-detail-header">
                <h1 className="order-detail-header-title">Order Number: {order?.order_number}</h1>
                <h2 className="order-detail-header-customer">Customer: {order?.customer_name}</h2>
                <h2 className="order-detail-header-date">Order Date: {order?.created_at}</h2>
            </div>

            <div className="order-detail-body">
                {/* image thumbnails */}
            </div>

            <div className="order-detail-actions">
                {isAdmin && <Link className="btn btn-success" to={`/orders/${order?.id}/edit`}>Edit Order</Link>}
            </div>
        </div>
    );
}

export default OrderDetail