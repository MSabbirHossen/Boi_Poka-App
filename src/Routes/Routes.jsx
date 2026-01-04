import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../components/pages/Root/Root';
import ErrorPage from '../components/pages/ErrorPage/ErrorPage';
import Home from '../components/pages/Home/Home';
import About from '../components/pages/About/About';
import BookDetails from '../components/pages/BookDetails/BookDetails';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage/>,
    children: [
        {
            index: true,
            loader: ()=>fetch('booksData.json'),
            path: "/",
            Component: Home
        },
        {
            path: "/about",
            Component: About
        },
        {
            path: "/bookDetails/:bookId",
            loader: ()=>fetch('booksData.json'),
            Component: BookDetails
        }
    ]
  },
]);