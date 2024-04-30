import { useParams, Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import { OrdersContext } from "../../store/orders-context";
import { UserContext } from "../../store/user-context";

function OrderDetail() {
    const { orders } = useContext(OrdersContext);
    const { isAdmin } = useContext(UserContext);
    const { id } = useParams();
    const [order, setOrder] = useState({});

    useEffect(() => {
        setOrder(orders.find((order) => +order.id === +id));
    }, [id, orders]);

    return (
        <div className="order-detail">
            <div className="order-detail-header">
                <h1 className="order-detail-header-title">Order Number: <span className="mx-2">{order?.order_number}</span></h1>
                <h2 className="order-detail-header-customer">Customer: <span className="mx-2">{order?.customer_name}</span></h2>
                <h2 className="order-detail-header-date">Order Date: <span className="mx-2">{order?.created_at}</span></h2>
            </div>

            <div className="order-detail-body">
                {/* image thumbnails */}
            </div>

            <div className="order-detail-actions">
                <Link className="btn btn-primary mx-2" to={'/'}>Home</Link>
                {isAdmin && <Link className="btn btn-success mx-2" to={`/admin/orders/${order?.id}/edit`}>Edit Order</Link>}
            </div>
        </div>
    );
}

export default OrderDetail