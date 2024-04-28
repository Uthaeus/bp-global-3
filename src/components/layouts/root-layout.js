import { Outlet } from "react-router";

import MainNavigation from "../navigation/main-navigation";
import MainFooter from "../footer/main-footer";
import Copyright from "../footer/copyright";

function RootLayout() {
    return (
        <>
            <MainNavigation />
            <Outlet />
            <MainFooter />
            <Copyright />
        </>
    );
}

export default RootLayout;