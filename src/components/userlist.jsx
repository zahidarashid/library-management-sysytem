import { useState } from "react";
import { useEffect } from "react";
import '../styles/userlist.css'
const UserList = () => {
    let [users, setUsers] = useState([])
    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch('http://localhost:4000/users')
            let data = await response.json()
            setUsers(data)

        }
        fetchData()
    }, [users])
    let deleteuser = (id) => {
        fetch(`http://localhost:4000/users/`, { method: 'DELETE' })
        // alert(`${title} deleted successfully`)
    }

    return (
        <div className="user-list">
            {/* <h1>No.of Users: {users.length}</h1> */}
            {users.map((data) => (
                <div className="user-details">
                    <h3>Name: {data.name}</h3>
                    <h4> Email: {data.email}</h4>
                    <h5>Age:{data.age}</h5>
                    <button onClick={() => deleteuser(data.id)}> Delete</button >
                </div>
            ))}
        </div>
    );
}

export default UserList;