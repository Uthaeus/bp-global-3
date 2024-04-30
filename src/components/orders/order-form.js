import { useContext, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { UsersContext } from "../../store/users-context";

function OrderForm({ order }) {
    const { users } = useContext(UsersContext);
    const navigate = useNavigate();
    const [userId, setUserId] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    useEffect(() => {
        if (order) {
            reset(order);
        }
    }, [order, reset]);

    const submitHandler = (data) => {

        console.log(data);
    }

    return (
        <form className="order-form" onSubmit={handleSubmit(submitHandler)}>
            <div className="form-group">
                <label htmlFor="customer_name">Customer</label>
                <select id="customer_name" {...register("customer_name", { required: true })}>
                    <option value="">Select Customer</option>
                    {users.map((user) => (
                        <option key={user.id} value={user.name} onChange={() => setUserId(user.id)}>{user.name}</option>
                    ))}
                </select>
                {errors.customer_name && <p className="text-danger">Customer is required</p>}
            </div>

            <div className="form-group">
                <label htmlFor="order_number">Order Number</label>
                <input type='text' id='order_number' {...register("order_number", { required: true })} />
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