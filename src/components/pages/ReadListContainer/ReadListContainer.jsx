import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import WishList from "../../WishList/WishList";
import { useLoaderData } from "react-router";
import { getStoredBook } from "../../../utility/addToDB";
import Book from "../Book/Book";
import ReadList from "../ReadList/ReadList";

const ReadListContainer = () => {
  const [wishList, setWishList] = useState([]);
  const [sort, setSort] = useState("");
  const data = useLoaderData();
  // console.log("🚀 ~ ReadList ~ data:", data)

  useEffect(() => {
    const storedBookData = getStoredBook();
    // console.log("🚀 ~ ReadList ~ storedBookData:", storedBookData);

    // const convertedStoredBookData = storedBookData.map(id => parseInt(id))
    // console.log("🚀 ~ ReadList ~ convertedStoredBookData:", convertedStoredBookData)

    const myWishList = data.filter((book) =>
      storedBookData.includes(book.bookId)
    );
    setWishList(myWishList);
  }, []);

  const handleSort = (sortType) => {
    // here a-b represent small to big, for big to small need to use b-a.
    setSort(sortType);
    if (sortType === "Rating") {
      const sortedByRating = [...wishList].sort((a, b) => a.rating - b.rating);
      // console.log("🚀 ~ handleSort ~ sortedByRating:", sortedByRating)
      setWishList(sortedByRating);
    }
    if (sortType === "Number of pages") {
      const sortedByTotalPages = [...wishList].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      // console.log("🚀 ~ handleSort ~ sortedByTotalPages:", sortedByTotalPages)
      setWishList(sortedByTotalPages);
    }
    if (sortType === "Publisher Year") {
      const sortedByTheYearOfPublishing = [...wishList].sort(
        (a, b) => a.yearOfPublishing - b.yearOfPublishing
      );
      // console.log("🚀 ~ handleSort ~ sortedByTheYearOfPublishing:", sortedByTheYearOfPublishing)
      setWishList(sortedByTheYearOfPublishing);
    }
  };

  return (
    <div className="my-4">
      <h1 className="text-center text-3xl font-bold m-4">Read List</h1>
      <div className="text-center">
        <details className="dropdown ">
          <summary className="btn m-1 bg-[#23be0a] text-white">
            {sort ? sort : "Sort by"}
          </summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li className="text-center">
              <a onClick={() => handleSort("Rating")}>Rating</a>
            </li>
            <li>
              <a onClick={() => handleSort("Number of pages")}>
                Number of pages
              </a>
            </li>
            <li>
              <a onClick={() => handleSort("Publisher Year")}>Publisher Year</a>
            </li>
          </ul>
        </details>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <ReadList wishList={wishList} />
        </TabPanel>
        <TabPanel>
          <WishList wishList={wishList} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadListContainer;
