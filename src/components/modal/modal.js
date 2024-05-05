

function Modal({ image, closeModal }) {

    return (
        <div className="modal">
            <div className="modal-content">
                <img src={image} alt="machine" className="modal-image" />

                <button className="btn btn-warning" onClick={closeModal}>Close</button>
            </div>
        </div>
    );
}

export default Modal