import { useForm } from "react-hook-form";

function AuthModal({ closeModal }) {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const submitHandler = async (data) => {
        console.log('resetting password');

        closeModal();
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <form className="auth-form" onSubmit={handleSubmit(submitHandler)}>
                    <p className="modal-form-title">Enter email for password reset</p>

                    <div className="form-group mb-4">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="form-control"
                            autoFocus={true}
                            {...register("email", { required: true })}
                        />
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>

                    <button className="btn btn-primary">Reset Password</button>
                </form>

                <button className="btn btn-danger modal-close-btn" onClick={closeModal}>Close</button>
            </div>
        </div>
    );
}

export default AuthModal