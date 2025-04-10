import { useState } from 'react';


export default function Bookshelf() {
    
    const [books, setBooks] = useState([
        {
            title: 'Fourth Wing',
            author: 'Rebecca Yarros'
        },
        {
            title: 'The Lion, the Witch and the Wardrobe',
            author: 'C.S. Lewis'
        },
    ]);
    const [newBook, setNewBook] = useState(
        {
            title: '',
            author: ''
        }
    )

    const handleInputChange = (event) => {
        setNewBook({ ...newBook, [event.target.name]: event.target.value })
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setBooks([...books, newBook])
        setNewBook(
            {
                title: '',
                author: ''
            }
        )
    }

    return (
        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                    <div>
                        <label htmlFor="title">Title:</label>
                        <input
                            id="title"
                            name="title"
                            value={newBook.title}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="author">Author:</label>
                        <input
                            id="author"
                            name="author"
                            value={newBook.author}
                            onChange={handleInputChange}
                        />
                    </div>
                    
                    <button onClick={handleSubmit} type='submit'>Add Book</button>
               
            </div>
            <div className="bookCardsDiv">
                {books.map((newBook) =>
                <div className='bookCard'><span>{newBook.title} </span> By: {newBook.author}</div>
                )}
            </div>
        </div>
    )
}




