import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({
    user: null,
    isAdmin: false,
    setUser: () => {},
    setIsAdmin: () => {},
    logOutUser: () => {}
});