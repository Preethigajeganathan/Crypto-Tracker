import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Coin from "./pages/Coin/Coin";
import {createBrowserRouter,RouterProvider, Outlet} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import {SignedIn, SignedOut,  SignIn} from "@clerk/clerk-react";
import Auth from "./pages/Auth/Auth";
import Blog from "./pages/Blog/Blog";
import Features from "./pages/Features/Features";
import Pricing from "./pages/Pricing/Pricing";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer/>
    </>
  );
};

const ProtectedLayout = () => {
  return (
    <>
      <SignedIn>
        <Outlet />
      </SignedIn> 

      <SignedOut>
        <Auth />
      </SignedOut>
    </>
  );
};



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "features",
        element: <Features />,
      },
      {
        path: "pricing",
        element: <Pricing />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        element: <ProtectedLayout />,
        children: [
          {
            path: "coin/:coinId",
            element: <Coin />,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;