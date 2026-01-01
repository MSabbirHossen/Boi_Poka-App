import React, { Suspense } from 'react';
// import React, { Suspense, useEffect, useState } from 'react';
import Book from '../Book/Book';
// import { data } from 'react-router';

const Books = ({data}) => {

    //1. first method for data fetch using (useState And useEffect) { here props drilling is not necessary}
    
    //  const [allBooks, setAllBooks] = useState();

    // useEffect(
    //     () => {
    //         fetch("booksData.json").then(res => res.json()).then(data => {setAllBooks(data)})
            
    //     },[]
    // )


    //2. Second method of data fetch, {prop drilling and suspense component is nasser.}
    
    // const bookPromise = fetch('./booksData.json')
    // .then(res => res.json())


    return (
        <div>
            <h1 className='text-center font-bold text-3xl p-6'>Books</h1>
            <Suspense fallback={<span>Loading...</span>}>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-4'>
                    {
                    data.map(
                        (book) => <Book key={book.bookId} book={book}></Book>
                    )
                }
                </div>
            </Suspense>
        </div>
    );
};

export default Books;