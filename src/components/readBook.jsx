import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../styles/readbook.css'
const ReadBook = () => {
    let params = useParams()
    let [books, setBooks] = useState([])
    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch(`http://localhost:4000/books/${params.id}`)
            let data = await response.json()
            setBooks(data)

        }
        fetchData()
    })

    return (
        <div className="read-book">
            <h1>{books.title}</h1>
            <p>{books.description}</p>
        </div>
    );
}

export default ReadBook;