import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import '../styles/bookList.css'
const BookList = () => {
    let location=useLocation()
    let navigate=useNavigate()
    let [books, setBooks] = useState([])
    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch('http://localhost:4000/books')
            let data = await response.json()
            setBooks(data)

        }
        fetchData()
    }, [books])
    let deleteBook = (id, title) => {
        fetch(`http://localhost:4000/books/${id}`, { method: 'DELETE' })
        alert(`${title} deleted successfully`)
    }
    let readBook=(id)=>{
        if(location.pathname=='/admin/book-list'){
            navigate(`/admin/book-list/${id}`)
        }
        else{
            navigate(`/user/book-list/${id}`)
        }
    }

    return (
        <div className="book-list">
            <h1>No.of Books: {books.length}</h1>
            {books.map((data) => (
                <div className="book-details">
                <Link to={`/admin/book-list/${data.id}`}> <img src={data.imageLink} alt="" /></Link>
                <h3>{data.title}</h3>
                <h5>Author : {data.author}</h5>
                <h5>Pages : {data.pages}</h5>
                <h5>Year : {data.year}</h5>
                <div className="book-details-btn">
                    <button id="lnk" onClick={()=>readBook(data.id)}>Read Book</button>
                   {location.pathname=='/admin/book-list' &&  <button onClick={() => deleteBook(data.id)}> Delete</button >}
                </div>
            </div >
            ))}
        </div>
    );
}

export default BookList;