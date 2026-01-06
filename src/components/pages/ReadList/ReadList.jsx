import React from 'react';
import Book from '../Book/Book';

const ReadList = ({wishList}) => {
    return (
        <div className='h-[60vh]'>
           <h1 className='text-center m-4 font-bold text-2xl'>The readlist will be visible here after full development.</h1>
            <h1 className='text-center m-4'>Total Completed books in Your List is {wishList.length}</h1>
            {/* {
                wishList.length == 0 ? <h1 className='text-center m-4 h-[40vh]'>Complete some book to see here.</h1> : <div className="m-4 grid grid-cols-1 lg:grid-cols-3 mx-auto gap-4">
                {
                wishList.map(
                    book => <Book key={book.bookId} book={book}></Book>
                )
            }
            </div>
            } */}
        </div>
      
    );
};

export default ReadList;