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
// import Login from "./pages/auth/login";

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

          // {
          //   path: "home",
          //   element:  </>
          // },
        ]
      },
      {
        path: "MarketPlace",
        element: <MarketPlace/>
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
      // {
      //   path: "FoodPack", 
      //   element: <FoodPack/>
     
      // },
      {
        path: "Bourses", 
        element: <Bourses/>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);