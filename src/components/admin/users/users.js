import { useContext } from "react";

import { UsersContext } from "../../store/users-context";

function Users() {

    const { users } = useContext(UsersContext);

    return (
        <div className="users">

            <h1 className="users-title">Users</h1>

            <table className="users-table">

                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>

                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Users;