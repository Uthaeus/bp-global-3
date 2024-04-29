import { useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

import { UsersContext } from "../../../store/users-context";

function UserForm({ user }) {
    const { addUser } = useContext(UsersContext);
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    useEffect(() => {
        if (user) {
            reset(user);
        }
    });

    const submitHandler = (data) => {
        console.log(data);

        addUser({
            name: data.name,
            email: data.email,
            id: Math.random().toString(),
            role: "user",
        }).then (() => navigate("/admin/users"))
        .catch((err) => console.error(err));
    }

    return (
        <form className="admin-user-form" onSubmit={handleSubmit(submitHandler)}>

            <div className="form-group mb-3">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    {...register("name", { required: true })}
                />
                {errors.name && <span className="text-danger">This field is required</span>}
            </div>

            <div className="form-group mb-4">
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    className="form-control"
                    id="email"
                    {...register("email", { required: true })}
                />
                {errors.email && <span className="text-danger">This field is required</span>}
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form> 
    );
}

export default UserForm;