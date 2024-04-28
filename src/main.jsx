import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import "./index.css";

// *** import components//
import Root from "./routes/root";
// import ErrorPage from "./pages/ErrorePage";
import Home from "./pages/home";
import MarketPlace from "./pages/marketplace";
import Offers from "./pages/Offers";
import AboutUs from "./pages/AboutUs";
import Team from "./pages/team";
// import FoodPack from "./pages/FoodPack";
import Bourses from "./pages/Bourses";
// import Marche from "./pages/marche";
import Login from "./pages/auth/login";
 import CreateAccount from "./pages/CreateAccount";
import ProductDetailPage from "./pages/Productdetailpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/", 
        element: <Home/>,
        children: [

          {
            path: "/login",
            element:  <Login/>
          },
        ]
      },
      {
        path: "MarketPlace",
        element: <MarketPlace/>
      },
      {
        path: "login",
        element:  <Login/>
      },
      {
        path: "Offers", 
        element: <Offers/>
     
      },
      {
        path: "AboutUs", 
        element: <AboutUs/>
     
      },
      {
        path: "Team", 
        element: <Team/>
     
      },
      {
        path: "CreateAccount", 
        element: <CreateAccount/>
     
      },
      {
        path: "Bourses", 
        element: <Bourses/>
      },
      {
        path: "ProductDetailPage", 
        element: <ProductDetailPage/>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);