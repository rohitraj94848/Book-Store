import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ data }) => {
    
    return (
        <>
            <Link to={`/view-book-details/${data._id }`}>
                <div className="bg-zinc-800 p-4 flex flex-col">
                    <div className='bg-zinc-900 flex items-center justify-center'>
                        <img src={data.url} alt="/" className='h-[25vh'/>
                    </div>
                    <h2 className='mt-4 text-xl text-white font-semibold'>{data.title}</h2>
                    <h2 className='mt-4 text-zinc-400 font-semibold'>{data.author}</h2>
                    <h2 className='mt-4 text-zinc-200 font-semibold'>{data.price}</h2>
                </div>
            </Link>
        </>
    ); 
};

export default BookCard;
