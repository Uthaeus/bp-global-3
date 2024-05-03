import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

import { UserContext } from "../../store/user-context";

function EditAccount() {
    const { user } = useContext(UserContext);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        reset({ name: user?.name, email: user?.email });
        setIsLoading(false);
    }, [user, reset]);

    const submitHandler = async (data) => {

        console.log(data);
    }

    if (isLoading) {
        return (
            <div className="auth">
                <h1>Loading...</h1>
            </div>
        );
    }

    return (
        <div className="auth">
            <h1 className="auth-title">Edit Account</h1>

            <form className="auth-form mb-3" onSubmit={handleSubmit(submitHandler)}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        className="form-control"
                        autoFocus={true}
                        {...register("name")}
                    />
                    {errors.name && <span className="text-danger">This field is required</span>}
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        className="form-control"
                        {...register("email")}
                    />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="password">New Password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Leave blank to keep the same"
                        className="form-control"
                        {...register("password")}
                    />
                </div>

                <div className="form-group mb-4">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        placeholder="Only need to confirm if changing password"
                        className="form-control"
                        {...register("confirmPassword")}
                    />
                </div>

                <button type="submit" className="btn btn-primary">Update</button>
            </form>
        </div>
    );
}

export default EditAccount;