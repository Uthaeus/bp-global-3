import { useParams, useNavigate } from "react-router";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { OrdersContext } from "../../store/orders-context";

import OrderForm from "./order-form";

function EditOrder() {
    const { id } = useParams();
    const [order, setOrder] = useState({});
    const { orders, deleteOrder } = useContext(OrdersContext);
    const navigate = useNavigate();

    useEffect(() => {
        setOrder(orders.find((order) => +order.id === +id));
    }, [id, orders]);

    const deleteHandler = async () => {
        console.log('deleting order:', id);

        try {
            await deleteOrder(id);
        } catch (error) {
            console.log('order delete error:', error);
        } finally {
            navigate('/admin/users');
        }
    }

    return (
        <div className="new-edit-order">
            <h1 className="new-edit-order-title">Edit Order</h1>

            <OrderForm order={order} />

            <div className="new-edit-order-actions">
                <Link className="btn btn-primary mx-2" to='/admin/users'>Back</Link>
                <button className="btn btn-danger mx-2" onClick={deleteHandler}>Delete Order</button>
            </div>
        </div>
    );
}

export default EditOrder;
