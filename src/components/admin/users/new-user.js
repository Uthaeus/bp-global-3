
import UserForm from "./user-form";

function NewUser() {

    return (
        <div className="admin-user">
            <h1 className="admin-user-title">New User</h1>

            <UserForm />
        </div>
    );
}

export default NewUser;