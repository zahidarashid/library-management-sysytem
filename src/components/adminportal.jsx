import { Routes, Route } from "react-router-dom";
import AdminHome from "./adminHome";
import BookList from "./booklist";
import AdminNavbar from "./adminNavbar";
import AddBook from "./AddBook";
import AddUser from "./Adduser";
import ReadBook from "./readBook";
import UserList from "./userlist";
const AdminPortal = () => {
    return (
        <div className="adminportal">
            <AdminNavbar />
            <Routes>
                <Route path="/" element={<AdminHome />} />
                <Route path="/book-list" element={<BookList />} />
                <Route path="/add-books" element={<AddBook/>}/>
                <Route path="/add-user" element={<AddUser/>}/>
                <Route path="/book-list/:id" element={<ReadBook/>}/>
                <Route path="/user-list" element={<UserList/>}/>
            </Routes>
        </div>
    );
}

export default AdminPortal;