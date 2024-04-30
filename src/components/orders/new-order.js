
import OrderForm from "./order-form";

function NewOrder() {

    return (
        <div className="new-edit-order">
            <h1 className="new-edit-order-title">New Order</h1>

            <OrderForm />
        </div>
    );
}

export default NewOrder;