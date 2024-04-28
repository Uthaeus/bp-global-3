import { Link } from "react-router-dom";

const Error = () => {

    return (
        <div className="error">
            <h1 className="error-title">Page Not Found</h1>
            <Link to="/" className="error-link">Home</Link>
        </div>
    );
}

export default Error;