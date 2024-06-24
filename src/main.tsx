import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App.tsx';
import '@styles/index.scss';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Cart from '@pages/Cart';
import Shop from '@pages/Shop';
import SignIn from '@pages/SignIn';
import SignUp from '@pages/SignUp';
import TrackOrder from '@pages/TrackOrder';
import Checkout from '@pages/Checkout.tsx';
import Admin from '@pages/Admin.tsx';
import ProductPage from '@pages/Product.tsx';
import { API_URL } from '@utils/index.ts';
import Cookies from 'js-cookie';

function createCart() {

  if (!Cookies.get("cart_id")) {

    fetch(`${API_URL}/create_cart`, {
      method: "GET"
    }).then(res => res.json())
      .then(data => Cookies.set("cart_id", data.cart_id))
      .catch(err => console.log(err))
  }
  console.log("Cart already exists!")
}

// createCart()

const router = createBrowserRouter([
  {
    path: "*",
    element: <App />,
  },
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
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
    path: "/track",
    element: <TrackOrder />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/product",
    element: <ProductPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
