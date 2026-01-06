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
  const data = useLoaderData();
  // console.log("🚀 ~ ReadList ~ data:", data)

  useEffect(() => {
        const storedBookData = getStoredBook();
        // console.log("🚀 ~ ReadList ~ storedBookData:", storedBookData);

        // const convertedStoredBookData = storedBookData.map(id => parseInt(id))
        // console.log("🚀 ~ ReadList ~ convertedStoredBookData:", convertedStoredBookData)

        const myWishList = data.filter((book) =>
            storedBookData.includes(book.bookId));
        setWishList(myWishList);
  }, []);

  return (
    <div className="my-4">
      <h1 className="text-center text-3xl font-bold m-4">Read List</h1>
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
