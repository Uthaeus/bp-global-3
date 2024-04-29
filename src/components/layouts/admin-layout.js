import { Outlet } from "react-router";

import MainNavigation from "../navigation/main-navigation";
import AdminMenu from "../admin/admin-menu";

function AdminLayout() {

    return (
        <>
            <MainNavigation />

            <div className="admin-layout-body">
                <AdminMenu />
                <Outlet />
            </div>
        </>
    );
}

export default AdminLayout;