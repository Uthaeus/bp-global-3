import { createContext, useEffect, useState } from "react";

import { dummyAdmin } from "./dummy/dummy-users";

export const UserContext = createContext({
    user: null,
    isAdmin: false,
    setUser: () => {},
    setIsAdmin: () => {},
    logOutUser: () => {}
});

export default UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setUser(dummyAdmin);
        setIsAdmin(true);
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