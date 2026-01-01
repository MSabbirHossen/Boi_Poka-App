import React from 'react';
import bookimg from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className='flex justify-between items-center px-16 py-10 w-full bg-[#f3f3f3] rounded-xl my-3'>
            <div>
                <h1 className='text-5xl font-bold'>Books to freshen up <br />
                    your bookshelf</h1>
                <button className='btn bg-[#23be0a] p-4 rounded-lg text-white my-4'>View The List</button>
            </div>
            <div>
                <img className='w-md rounded-lg' src={bookimg}alt="Book Image" />
            </div>
        </div>
    );
};

export default Banner;