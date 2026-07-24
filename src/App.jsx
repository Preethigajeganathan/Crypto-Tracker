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
        <Layout />
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
    element: <ProtectedLayout />,
    children: [
      {
        path:"/",
        element:<Home/>
      },
      {
        path: "coin/:coinId",
        element: <Coin />,
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