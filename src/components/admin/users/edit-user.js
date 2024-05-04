import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router";

import { UsersContext } from "../../../store/users-context";

import UserForm from "./user-form";

function EditUser() {
    const { users } = useContext(UsersContext);
    const { id } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        setUser(users.find((user) => +user.id === +id));
    }, [id, users]);

    return (
        <div className="admin-user">
            <h1 className="admin-user-title">Edit User</h1>

            <UserForm user={user} />
        </div>
    );
}

export default EditUser;