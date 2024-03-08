import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from "./components/navbar/Navbar.jsx";

const Router = () => {
    const router = createBrowserRouter([
      {
        path: "/",
        element: <><NavBar></NavBar>Hello World</>,
      },
      {
        path: "router-test",
        element: <><NavBar></NavBar>Hello Router Test</>,
      },
    ]);
  
    return <RouterProvider router={router} />;
  };
  
  export default Router;