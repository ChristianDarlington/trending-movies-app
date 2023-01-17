import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Weekly from './Weekly'
import Daily from './Daily';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/movielist",
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
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

