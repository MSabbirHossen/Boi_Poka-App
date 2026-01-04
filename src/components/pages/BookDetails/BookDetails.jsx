import React from "react";
import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const id = useParams();
  const { bookId } = id;
  const newId = parseInt(bookId);
  // console.log("🚀 ~ BookDetails ~ bookId:", bookId)
  // console.log("🚀 ~ BookDetails ~ bookId:", typeof bookId)

  const data = useLoaderData();
  // console.log("🚀 ~ BookDetails ~ data:", data)
  // console.log("🚀 ~ BookDetails ~ data:", typeof data)

  const singleBook = data.find((book) => book.bookId === newId);
  // console.log("🚀 ~ BookDetails ~ singleBook:", singleBook)

  const {
    author,
    bookName,
    category,
    image,
    publisher,
    rating,
    review,
    tags,
    totalPages,
    yearOfPublishing,
  } = singleBook;

  return (
    <div className="w=2/3 mx-auto p-5">
      <img className="w-48" src={image} alt={bookName} />
      <h1 className="font-bold text-4xl">{bookName}</h1>
      <button className="btn btn-accent m-2">WishList</button>
      <button className="btn btn-info m-2">Read</button>
    </div>
  );
};

export default BookDetails;
