import { useParams, Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import { OrdersContext } from "../../store/orders-context";
import { UserContext } from "../../store/user-context";

// sample image for testing
import image from '../../assets/images/machine-main.jpeg';

import Modal from "../modal/modal";

function OrderDetail() {
    const { orders, deleteOrder } = useContext(OrdersContext);
    const { isAdmin } = useContext(UserContext);
    const { modalOpen, openModal, closeModal } = useContext(ModalContext);
    const { id } = useParams();
    const [order, setOrder] = useState({});
    const [modalImage, setModalImage] = useState(null);
    const navigate = useNavigate();

    const images = [
        image,
        image,
        image
    ]

    useEffect(() => {
        setOrder(orders.find((order) => +order.id === +id));
    }, [id, orders]);

    const openModalHandler = (image) => {
        setModalImage(image);
        openModal();
    }

    const deleteHandler = async () => {
        try {
            console.log('deleting order:', id);
            deleteOrder(id);
        } catch (error) {
            console.log('order delete error:', error);
        } finally {
            navigate('/admin/users');
        }
    }

    return (
        <div className="order-detail">
            {modalOpen && <Modal image={modalImage} closeModal={closeModal} />}
            <div className="order-detail-header">
                <h1 className="order-detail-header-title">Order Number: <span className="mx-2">{order?.order_number}</span></h1>
                <h2 className="order-detail-header-date">Order Date: <span className="mx-2">{order?.created_at}</span></h2>
            </div>

            <div className="order-detail-body">
                {images.map((image, index) => (
                    <img key={index} src={image} alt="machine" className="order-detail-image" onClick={() => openModalHandler(image)} />
                ))}
            </div>

            <div className="order-detail-actions">
                {isAdmin ? (
                    <>
                        <Link className="btn btn-primary mx-2" to='/admin/users'>Back</Link>
                        <Link className="btn btn-success mx-2" to={`/admin/orders/${order?.id}/edit`}>Edit Order</Link>
                        <button className="btn btn-danger mx-2" onClick={deleteHandler}>Delete Order</button>
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