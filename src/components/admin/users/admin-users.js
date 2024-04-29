import { useContext } from "react";
import { Link } from "react-router-dom";

import { UsersContext } from "../../../store/users-context";

function AdminUsers() {

    const { users } = useContext(UsersContext);

    return (
        <div className="admin-users">

            <h1 className="admin-users-title">Users</h1>

            <div className="admin-users-table">

                <div className="admin-users-table-header">
                    <p className="admin-users-table-header-item">Name</p>
                    <p className="admin-users-table-header-item">Email</p>
                </div>

                <div className="admin-users-table-body">
                    {users.map((user) => (
                        <Link key={user.id} className="admin-users-table-item" to={`/admin/users/${user.id}`}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AdminUsers;