import { useRef } from "react";
import '../styles/addbook.css'
import { useNavigate } from "react-router-dom";

const AddBook = () => {
    let navigate = useNavigate()
    let title = useRef(null)
    let author = useRef(null)
    let pages = useRef(null)
    let year = useRef(null)
    let imageLink = useRef(null)

    let submit = (e) => {
        e.preventDefault()
        let data = {
            title: title.current.value,
            author: author.current.value,
            pages: pages.current.value,
            year: year.current.value,
            imageLink: imageLink.current.value,
        }
        fetch('http://localhost:4000/books', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        alert('Book has been successfully added')
        navigate ('/admin/book-list')
        // console.log(data);

    }
    return (
        <div className="adminlogin">
            <form action="" onSubmit={submit}>
                <div className="login-form" >
                    <h1>Add Books</h1>
                    <div className="inpt">
                        <div className="email">
                            <input ref={title} type="text" placeholder="enter title" required />
                        </div>
                        <div className="author">
                            <input ref={author} type="text" placeholder="enter author" required/>
                        </div>
                        <div className="password">
                            <input ref={pages} type="text" placeholder="enter pages" required/>
                        </div>
                        <div className="password">
                            <input ref={year} type="text" placeholder="enter year " required/>
                        </div>
                        <div>
                        <input ref={imageLink} type="text" placeholder="enter url " required/>

                        </div>

                    </div>
                    <div className="button">
                        <button>Add book</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default AddBook;