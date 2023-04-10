import { useRef } from "react";
import '../styles/adduser.css'
import { useNavigate } from "react-router-dom";

const AddUser = () => {
    let navigate = useNavigate()
    let name = useRef(null)
    let email = useRef(null)
    let age = useRef(null)
    let password = useRef(null)
    let confirmPassword = useRef(null)

    let submit = (e) => {
        e.preventDefault()
        let data = {
            name: name.current.value,
            email: email.current.value,
            age: age.current.value,
            password: password.current.value,
            confirmPassword: confirmPassword.current.value,
        }
        fetch('http://localhost:4000/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        alert('user has been successfully added')
        navigate ('/admin/user-list')
        // console.log(data);

    }
    return (
        <div className="add-user">
            <form action="" onSubmit={submit}>
                <div className="login-form" >
                    <h1>Add User</h1>
                    <div className="inpt">
                        <div className="email">
                            <input ref={name} type="text" placeholder="enter your name" required />
                        </div>
                        <div className="author">
                            <input ref={age} type="age" placeholder="enter your age" required />
                        </div>
                        <div className="password">
                            <input ref={email} type="email" placeholder="enter your email" required />
                        </div>
                        <div className="password">
                            <input ref={password} type="password" placeholder="enter your password" required/>
                        </div>
                        <div className="password">
                            <input ref={confirmPassword} type="password" placeholder="enter your password" required/>
                        </div>

                    </div>
                    <div className="button">
                        <button>Add user</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default AddUser;