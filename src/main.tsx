import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App.tsx';
import '@styles/index.scss';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Cart from '@pages/Cart';
import Shop from '@pages/Shop';
import Repairs from '@pages/Repairs'
import TrackOrder from '@pages/TrackOrder';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/trackorder",
    element: <TrackOrder />,
  },
  {
    path: "/repairs",
    element: <Repairs />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
