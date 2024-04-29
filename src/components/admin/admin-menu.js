import { NavLink } from "react-router-dom";

function AdminMenu() {

    return (
        <div className="admin-menu">
            <NavLink to="/admin" className={({ isActive }) => isActive ? "admin-menu-item menu-item-active" : "admin-menu-item"}>Admin Home</NavLink>
            <NavLink to="/admin/users" className={({ isActive }) => isActive ? "admin-menu-item menu-item-active" : "admin-menu-item"}>All Users</NavLink>
            <NavLink to="/admin/new-user" className={({ isActive }) => isActive ? "admin-menu-item menu-item-active" : "admin-menu-item"}>Create New User</NavLink>
            <NavLink to="/admin/new-order" className={({ isActive }) => isActive ? "admin-menu-item menu-item-active" : "admin-menu-item"}>Create New Order</NavLink>
            <hr />
            <NavLink to="/admin/edit-account" className={({ isActive }) => isActive ? "admin-menu-item menu-item-active" : "admin-menu-item"}>Edit Account</NavLink>
        </div>
    );
}

export default AdminMenu;