import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../components/pages/Root/Root";
import ErrorPage from "../components/pages/ErrorPage/ErrorPage";
import Home from "../components/pages/Home/Home";
import About from "../components/pages/About/About";
import BookDetails from "../components/pages/BookDetails/BookDetails";
import WishList from "../components/WishList/WishList";
import ReadList from "../components/pages/ReadList/ReadList";
import ReadListContainer from "../components/pages/ReadListContainer/ReadListContainer";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: () => fetch("booksData.json"),
        path: "/",
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/readlist",
        loader: () => fetch("booksData.json"),
        Component: ReadListContainer,
      },
      {
        path: "/bookDetails/:bookId",
        loader: () => fetch("booksData.json"),
        Component: BookDetails,
      },
    ],
  },
]);
