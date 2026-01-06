import React from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { Link, useLoaderData } from "react-router";

const ReadCard = () => {
  const book = useLoaderData();
  console.log("🚀 ~ Book ~ book :", book);
  const {
    author,
    bookId,
    bookName,
    category,
    image,
    publisher,
    rating,
    tags,
    yearOfPublishing,
  } = book;


  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="card bg-base-100 w-96 shadow-sm border p-6 shadow">
        <figure className="p-4 bg-gray-100 w-2/3 mx-auto p-4 rounded">
          <img className="h-[165px]" src={image} alt={bookName} />
        </figure>
        <div className="card-body">
          <div className="flex justify-between items-center">
            {tags.map((tag) => (
              <button key={tag.index}>{tag}</button>
            ))}
          </div>
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">{yearOfPublishing}</div>
          </h2>
          <h2 className="card-title">By: {author}</h2>
          <p>Publisher: {publisher}</p>
          <div className="border-t border-dashed"></div>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{category}</div>
            <div className="badge badge-outline">
              {rating}
              <FaStarHalfAlt />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ReadCard;
