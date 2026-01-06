import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoredDB } from "../../../utility/addToDB";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { ToastContainer, toast } from 'react-toastify';

const MySwal = withReactContent(Swal);

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

  const [addToWishList, setAddToWishList] = useState(false);

  const handleAddToWishList = (newId) => {
    setAddToWishList(true);
    toast(`The ${bookName} is Added to your wishList.`)
    
    // store with id
    // where do we store this? == in a server (for now in a local store)
    // stored as a array or a collection
    // need to check, of the data is already exist, then give a alert.
    // if the data does not exits then push into the collection or Array.

    addToStoredDB(newId);

    // sweetAlert

    // Swal.fire({
    //   title: `Do you want to add ${bookName} your wishList?`,
    //   showDenyButton: true,
    //   showCancelButton: true,
    //   confirmButtonText: "Add",
      // denyButtonText: `Don't add`,
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     Swal.fire("Added!", "", "success");
    //   } 
    //   else if (result.isDenied) {
    //     Swal.fire(`${bookName} is not added.`, "", "info");
    //   }
    // });
  };

  const [markAsRead, setMArkAsRead] = useState(false);
  const handleMarkAsRead = () => {
    setMArkAsRead(true);
    // alert(`Congratulation for Completing the " ${bookName} "`);
    // sweetAlert
    MySwal.fire({
      title: "Congratulation!",
      text: `You Completed the ${bookName} !`,
      icon: "success",
    });
  };

  return (
    <div className="w-3/4 mx-auto p-2 flex gap-4">
      <div className="w-1/2 bg-[#f3f3f3] p-16 rounded-lg">
        <img className="" src={image} alt={bookName} />
      </div>
      <div className="w-1/2 p-4">
        <h1 className="font-bold text-4xl">{bookName}</h1>
        <h3 className="text-xl">By: {author}</h3>
        <div className="divider"></div>
        <h3 className="text-xl">{category}</h3>
        <div className="divider"></div>
        <div className="text-justify">
          <span className="font-semibold text-xl">Review: </span>
          {review}
        </div>
        <div>
          {/* {" "} */}
          <span className="font-semibold text-xl">Tag: </span>
          {tags.map((tag) => (
            <button className="btn m-2 text-green-600 bg-amber-100 rounded-lg">
              #{tag}
            </button>
          ))}
        </div>
        <div className="divider"></div>
        <div className="my-4">
          <div className="flex gap-4">
            <span className="font-semibold flex-1/2">Number of Pages:</span>
            <span className="flex-1/2"> {totalPages}</span>
          </div>
          <div className="flex gap-4">
            <span className="font-semibold flex-1/2">Publisher:</span>
            <span className="flex-1/2"> {publisher}</span>
          </div>
          <div className="flex gap-4">
            <span className="font-semibold flex-1/2">Year of Publishing:</span>
            <span className="flex-1/2"> {yearOfPublishing}</span>
          </div>
          <div className="flex gap-4">
            <span className="font-semibold flex-1/2">Rating:</span>
            <span className="flex-1/2"> {rating}</span>
          </div>
        </div>
        <button
          onClick={() => handleAddToWishList(newId)}
          className="btn btn-outline m-2 "
        >
          {!addToWishList ? "Add to WishList" : "Added"} 
          <ToastContainer />
        </button>
        <button
          onClick={() => handleMarkAsRead()}
          className="btn btn-info m-2 disabled:text-black disabled:cursor-not-allowed disabled:opacity-80"
        >
          {!markAsRead ? "Mark as Read" : "Completed"}
        </button>
      </div>
    </div>
  );
};

export default BookDetails;
