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
            <div className="edit-account">
                <h1>Loading...</h1>
            </div>
        );
    }

    return (
        <div className="edit-account">
            <h1>Edit Account</h1>
        </div>
    );
}

export default EditAccount;