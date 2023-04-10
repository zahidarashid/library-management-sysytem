import { Routes, Route } from "react-router-dom";
import AdminHome from "./adminHome";

import ReadBook from "./readBook";
import UserNavbar from "./usernavbar";
import BookList from "./booklist";
const UserPortal = () => {
    return (
        <div className="userportal">
            <UserNavbar />
            <Routes>
                <Route path="/" element={<AdminHome />} />
                <Route path="/book-list" element={<BookList />} />
                <Route path="/book-list/:id" element={<ReadBook />} />
            </Routes>
        </div>
    );
}
export default UserPortal;