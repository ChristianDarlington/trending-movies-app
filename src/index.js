import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Weekly from './Weekly'
import Daily from './Daily';
import SearchMovieList from './Search/SearchMovieList'
import './index.css';



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/weekly",
    element: <Weekly />,
  },
  {
    path: "/daily",
    element: <Daily />,
  },
  {
    path: "/search",
    element: <SearchMovieList />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

