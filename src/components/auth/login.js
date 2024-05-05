import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useState } from "react";

import AuthModal from "./auth-modal";

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const [modalOpen, setModalOpen] = useState(false);

    const forgotPasswordHandler = () => {
        console.log('forgot password');
        setModalOpen(true);
    }

    const closeModalHandler = () => {
        setModalOpen(false);
    }

    const submitHandler = async (data) => {

        console.log(data);
    }

    return (
        <div className="auth">
            {modalOpen && <AuthModal closeModal={closeModalHandler} />}

            <h1 className="auth-title">Login</h1>

            <form className="auth-form mb-3" onSubmit={handleSubmit(submitHandler)}>

                <div className="form-group mb-3">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        className="form-control"
                        autoFocus={true}
                        {...register("email", { required: true })}
                    />
                    {errors.email && <span className="error">This field is required</span>}
                </div>

                <div className="form-group mb-4">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        className="form-control"
                        {...register("password", { required: true })}
                    />
                    {errors.password && <span className="error">This field is required</span>}

                    <p className="auth-forgot-password" onClick={forgotPasswordHandler}>Forgot Password?</p>
                </div>
                
                <button type="submit" className="btn btn-primary">Login</button>
            </form>

            <div className="auth-actions">
                <button className="auth-back-btn btn btn-info" onClick={() => navigate("/")}>Home</button>
            </div>
        </div>
    );
}

export default Login;