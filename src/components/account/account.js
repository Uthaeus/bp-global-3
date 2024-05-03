import { useContext } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../../store/user-context";
import { OrdersContext } from "../../store/orders-context";

function Account() {
    const { user } = useContext(UserContext);
    const { orders } = useContext(OrdersContext);

    return (
        <div className="account">
            <div className="account-header">
                <h1 className="account-title">Account for {user?.name}</h1>
                <p className="account-email">{user?.email}</p>
                <Link to='/account/edit' className="account-edit-link">Edit Account</Link>
            </div>

            <div className="account-body">
                <h3 className="account-orders-title">Orders</h3>

                {orders.length === 0 && <p className="account-orders-text">No orders found</p>}

                {orders.length > 0 && (
                    <div className="account-orders">
                        <div className="account-orders-header">
                            <p className="account-orders-header-item">Order Number</p>
                            <p className="account-orders-header-item">Order Date</p>
                        </div>

                        {orders.map((order) => (
                            <Link to={`/orders/${order.id}`} className="account-orders-item" key={order.id}>
                                <p className="account-orders-item-title">{order.order_number}</p>
                                <p className="account-orders-item-title">{order.created_at}</p>
                            </Link>
                        ))}
                    </div>
                )}
            </div>

            <div className="account-actions mt-5">
                <Link className="btn btn-primary mx-2" to={'/account'}>Back</Link>
            </div>
        </div>
    );
}

export default Account;