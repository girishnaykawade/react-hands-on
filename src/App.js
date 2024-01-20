import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./component/About";
import Error from "./component/Error";
import RestaurantMenus from "./component/RestaurantMenus";

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = ()=> (
  <div className="restro-body-container">
    <Header/>
    <Outlet/>
  </div>
);

const routeConf = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout/>,
    children: [
      {
        path: '/',
        element: <Body/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/restaurant/:resId',
        element: <RestaurantMenus/>
      }
    ],
    errorElement: <Error/>
  },
])

root.render(<RouterProvider router={routeConf}/>)