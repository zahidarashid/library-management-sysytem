import { Link } from "react-router-dom";
import '../styles/adminNavbar.css'
const AdminNavbar = () => {
    return (
        <div className="admin-navbar">
            <div className="admin-logo">
        <img src="https://thumbs.dreamstime.com/b/lms-letter-initial-logo-design-lms-letter-initial-logo-design-vector-illustration-letter-initial-logo-design-vector-illustration-236632062.jpg" alt="" width={100} height={40} />
            </div>
            <div className="navbar-links">
                <Link to="/admin/"> DashBoard</Link>
                <Link to="/admin/add-books">Add Books</Link>
                <Link to="/admin/add-user">Add User</Link>
                <Link to="/admin/book-list">Book List</Link>
                
                <Link to="/admin/user-list">User List</Link>
            </div>
            <div className="navbar-logout">
            <Link to="">Log Out</Link>
            </div>

        </div>
    );
}

export default AdminNavbar;