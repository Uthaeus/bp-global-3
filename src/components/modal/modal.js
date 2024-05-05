

function Modal(props) {

    return (
        <div className="modal">
            <div className="modal-content">
                {props.children}
            </div>
        </div>
    );
}