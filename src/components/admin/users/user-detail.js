import { useParams, Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import { UsersContext } from "../../../store/users-context";
import { OrdersContext } from "../../../store/orders-context";

function UserDetail() {
    const { users } = useContext(UsersContext);
    const { orders } = useContext(OrdersContext);
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const [userOrders, setUserOrders] = useState([]);

    useEffect(() => {
        setUser(users.find((user) => +user.id === +id));
    }, [id, users]);

    useEffect(() => {
        setUserOrders(orders.filter((order) => +order.uid === +id));
    }, [id, orders]);

    return (
        <div className="admin-user-detail">
            <h1 className="admin-user-detail-title">Customer Name: {user?.name}</h1>
            <h2 className="admin-user-detail-email">Customer Email: {user?.email}</h2>

            <div className="admin-user-detail-orders-body">
                {userOrders.length === 0 && <p className="admin-user-detail-orders-text">No orders found</p>}
                
                {userOrders.length > 0 && (
                    <div className="admin-user-detail-orders">
                        <div className="admin-user-detail-orders-header">
                            <p className="admin-user-detail-orders-header-title">Order Number</p>
                            <p className="admin-user-detail-orders-header-title">Order Date</p>
                        </div>

                        {userOrders.map((order) => (
                            <Link className="admin-user-detail-orders-item" key={order.id}>
                                <p className="admin-user-detail-orders-item-title">{order.order_number}</p>
                                <p className="admin-user-detail-orders-item-title">{order.created_at}</p>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default UserDetail;