import { useContext } from "react";

import { UserContext } from "../../store/user-context";

function Admin() {
    const { user } = useContext(UserContext);

    return (
        <div className="admin">
            
            <div className="admin-header">
                <h1 className="admin-title">Admin for {user.name}</h1>
            </div>
            
        </div>
    );
}

export default Admin;