import { NavLink, Link } from "react-router-dom";

function AdminMenu() {

    return (
        <div className="admin-menu">
            <NavLink to="/admin" className={({ isActive }) => isActive ? "admin-menu-item menu-item-active" : "admin-menu-item"} end>Admin Home</NavLink>
            <NavLink to="/admin/users" className={({ isActive }) => isActive ? "admin-menu-item menu-item-active" : "admin-menu-item"}>All Users</NavLink>
            <NavLink to="/admin/users/new" className={({ isActive }) => isActive ? "admin-menu-item menu-item-active" : "admin-menu-item"}>Create New User</NavLink>
            <NavLink to="/admin/orders/new" className={({ isActive }) => isActive ? "admin-menu-item menu-item-active" : "admin-menu-item"}>Create New Order</NavLink>
            <Link to="/account/edit" className='mt-5'>Edit Account</Link>
        </div>
    );
}

export default AdminMenu;