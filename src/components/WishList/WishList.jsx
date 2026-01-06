import React from 'react';
import Book from '../pages/Book/Book';

const WishList = ({wishList}) => {
    return (
        <div className='font-bold mx-auto'>
            <h1 className='text-center m-4'>Total books in Your wish List is {wishList.length}</h1>
            {
                wishList.length == 0 ? <h1 className='text-center m-4 text-3xl h-[40vh]'>Chose your favorite book to see the wish list.</h1> : <div className="m-4 grid grid-cols-1 lg:grid-cols-3 mx-auto gap-4">
                {
                wishList.map(
                    book => <Book key={book.bookId} book={book}></Book>
                )
            }
            </div>
            }
        </div>
    );
};

export default WishList;