import { useContext, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { UsersContext } from "../../store/users-context";
import { OrdersContext } from "../../store/orders-context";

function OrderForm({ order }) {
    const { users } = useContext(UsersContext);
    const navigate = useNavigate();
    const [userId, setUserId] = useState("");
    const { addOrder, updateOrder } = useContext(OrdersContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    useEffect(() => {
        if (order) {
            reset(order);
            setUserId(order.uid);
        }
    }, [order, reset]);

    const userIdChangeHandler = (event) => {
        const newUserId = users.find((user) => user.name === event.target.value);

        setUserId(newUserId.id);
    }

    const submitHandler = (data) => {

        console.log(data);

        let orderId;

        if (order) {
            // TODO: Update order
            orderId = order.id;

            const updatedOrder = {
                id: orderId,
                uid: userId,
                customer_name: data.customer_name,
                order_number: data.order_number,
                created_at: order.created_at,
                updated_at: new Date().toISOString(),
            }
            console.log('updatedOrder', updatedOrder);

            updateOrder(updatedOrder);

        } else {
            // get order id
            orderId = Math.random().toString();

            const NewOrder = {
                id: orderId,
                customer_name: data.customer_name,
                order_number: data.order_number,
                created_at: new Date().toISOString(),
                uid: userId
            }
            console.log('NewOrder', NewOrder);

            addOrder(NewOrder);
        }

        navigate(`/orders/${orderId}`);
    }

    return (
        <form className="order-form" onSubmit={handleSubmit(submitHandler)}>
            <div className="form-group">
                <label htmlFor="customer_name">Customer</label>
                <select id="customer_name" className="form-select" {...register("customer_name", { required: true })} onChange={userIdChangeHandler}>
                    <option value="">Select Customer</option>
                    {users.map((user) => (
                        <option key={user.id} value={user.name}>{user.name}</option>
                    ))}
                </select>
                {errors.customer_name && <p className="text-danger">Customer is required</p>}
            </div>

            <div className="form-group">
                <label htmlFor="order_number">Order Number</label>
                <input type='text' id='order_number' className="form-control" {...register("order_number", { required: true })} />
                {errors.order_number && <p className="text-danger">Order Number is required</p>}
            </div>

            {/* image input */}

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}

export default OrderForm;

// uid 
// customer_name
// order_number
// created_at
// images