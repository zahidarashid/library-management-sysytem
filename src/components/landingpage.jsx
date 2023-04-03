import { Link } from "react-router-dom";

const Landingpage = () => {
    return ( 
        <div className="landingpage">
            <h1>Signin As....?</h1>
            <Link to="/admin-login">Admin Login</Link>
            <Link to="/user-login">User Login</Link>
        </div>
     );
}
 
export default Landingpage;