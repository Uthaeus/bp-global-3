import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

import { UserContext } from "../../store/user-context";

function EditAccount() {
    const { user, updateUser } = useContext(UserContext);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        reset({ name: user?.name, email: user?.email });
        setIsLoading(false);
    }, [user, reset]);

    const submitHandler = async (data) => {
        try {
            console.log('updating user:', data);

            const updatedUser = {
                id: user?.id,
                name: data.name,
                email: data.email,
                role: user?.role
            }

            if (data.password !== data.confirmPassword) {
                alert("Passwords do not match");
                return;
            } else if (data.password !== "" && data.confirmPassword !== "") {
                // TODO: Update password
                console.log('updating password');
            }

            // TODO: Update user

            updateUser(updatedUser);
        } catch (error) {
            console.log('user update error:', error);
        } finally {
            navigate("/account");
        }
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

                <button type="submit" className="btn btn-primary w-25">Update</button>
                <Link className="btn btn-danger ms-4" to="/account">Cancel</Link>
            </form>

            <div className="auth-actions">
                <Link className="btn btn-secondary" to="/account">Back</Link>
            </div>
        </div>
    );
}

export default EditAccount;