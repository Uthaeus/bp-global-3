import { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

import { UsersContext } from "../../../store/users-context";

import UserForm from "./user-form";

function EditUser() {
    const { users, deleteUser } = useContext(UsersContext);
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        setUser(users.find((user) => +user.id === +id));
    }, [id, users]);

    const deleteHandler = () => {
        console.log("delete");

        deleteUser(user.id);

        navigate("/admin/users");
    }  

    return (
        <div className="admin-user">
            <h1 className="admin-user-title">Edit User</h1>

            <UserForm user={user} />

            <div className="admin-user-actions mt-5">
                <button className="btn btn-success mx-2" onClick={() => navigate(`/admin/users/${user?.id}`)}>Back</button>
                <button className="btn btn-danger mx-2" onClick={deleteHandler}>Delete</button>
            </div>
        </div>
    );
}

export default EditUser;