import { Link } from "react-router-dom";
import '../styles/landingpage.css'

const Landingpage = () => {
    return (
        <div className="home">
            <div className="landingpage">
                <h1>Library Management System</h1>
                <div className="links">
                    <Link to="/admin-login">Admin Login</Link>
                    <Link to="/user-login">User Login</Link>
                </div>
            </div>
        </div>

    );
}

export default Landingpage;