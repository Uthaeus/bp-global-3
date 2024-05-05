

function Modal({ image, closeModal }) {

    return (
        <div className="modal">
            <div className="modal-content">
                <img src={image} alt="machine" width='100%' />

                <button className="btn btn-primary" onClick={closeModal}>Close</button>
            </div>
        </div>
    );
}

export default Modal