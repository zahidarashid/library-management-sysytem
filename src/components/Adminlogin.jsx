import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/adminlogin.css'

const Adminlogin = () => {
    let navigate = useNavigate()
    let email = useRef(null)
    let password = useRef(null)

    let submit = (e) => {
        e.preventDefault()
        if (email.current.value == "admin@gmail.com" && password.current.value == 12345) {
            navigate('/admin')

        } else {
            alert("invalid Credential")

        }
    }
    return (
        <div className="adminlogin">
            <form action="" onSubmit={submit}>
                <div className="login-form" >
                    <h1>Admin Login</h1>
                    <div className="inpt">
                        <div className="email">
                            <input ref={email} type="text" placeholder="enter your email" />
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