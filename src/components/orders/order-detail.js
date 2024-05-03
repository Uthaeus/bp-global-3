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
                <h2 className="order-detail-header-date">Order Date: <span className="mx-2">{order?.created_at}</span></h2>
            </div>

            <div className="order-detail-body">
                {/* image thumbnails */}
            </div>

            <div className="order-detail-actions">
                {isAdmin ? (
                    <>
                        <Link className="btn btn-primary mx-2" to='/admin/users'>Back</Link>
                        <Link className="btn btn-success mx-2" to={`/admin/orders/${order?.id}/edit`}>Edit Order</Link>
                        <button className="btn btn-danger mx-2">Delete Order</button>
                    </>        
                ) : (
                    <>
                        <Link to='/account' className="btn btn-secondary mx-2">Back</Link>
                        <Link to='/' className="btn btn-primary mx-2">Home</Link>
                    </>
                )}
            </div>
        </div>
    );
}

export default OrderDetail