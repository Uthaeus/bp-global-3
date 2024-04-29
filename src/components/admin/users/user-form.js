import { useEffect } from "react";
import { useForm } from "react-hook-form";

function UserForm({ user }) {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    useEffect(() => {
        if (user) {
            reset(user);
        }
    });

    const submitHandler = (data) => {
        console.log(data);
    }

    return (
        <form className="user-form" onSubmit={handleSubmit(submitHandler)}>

            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    {...register("name", { required: true })}
                />
                {errors.name && <span className="text-danger">This field is required</span>}
            </div>

            <div className="form-group">
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