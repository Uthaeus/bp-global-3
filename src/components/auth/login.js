import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const submitHandler = async (data) => {

        console.log(data);
    }

    return (
        <div className="login">
            <h1 className="login-title">Login</h1>

            <form className="login-form mb-3" onSubmit={handleSubmit(submitHandler)}>
                <div className="form-group">
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
                </div>

                <button type="submit" className="btn btn-primary">Login</button>
            </form>

            <button className="login-back-btn btn btn-info" onClick={() => navigate("/")}>Home</button>
        </div>
    );
}

export default Login;