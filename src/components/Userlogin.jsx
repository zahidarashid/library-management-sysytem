import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/userlogin.css'
const Adminlogin = () => {
    let navigate = useNavigate()
    let email = useRef(null)
    let password = useRef(null)
    let submit = (e) => {
        e.preventDefault()
        navigate('/user')
    }
    return (
        <div className="userlogin">
            <form action="" onSubmit={submit}>
                <div className="login-form" >
                    <h1>User Login</h1>
                    <div className="inpt">
                        <div className="email">
                            <input ref={email} type="text" placeholder="UserName" />
                        </div>
                        <div className="password">
                            <input ref={password} type="password" placeholder="Password" />
                        </div>
                    </div>
                    <div className="button">
                        <button>Login</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Adminlogin;