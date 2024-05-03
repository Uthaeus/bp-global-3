import { createContext, useEffect, useState } from "react";

// import { dummyAdmin } from "./dummy/dummy-users";
import { dummyUser } from "./dummy/dummy-users";

export const UserContext = createContext({
    user: null,
    isAdmin: false,
    setUser: () => {},
    setIsAdmin: () => {},
    logOutUser: () => {}
});

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setUser(dummyUser);
        setIsAdmin(false);
        setIsLoading(false);
    }, []);

    const logOutUser = () => {
        setUser(null);
        setIsAdmin(false);
    }

    const value = {
        user,
        isAdmin,
        logOutUser
    }

    return <UserContext.Provider value={value}>{!isLoading && children}</UserContext.Provider>;
}

export default UserContextProvider;