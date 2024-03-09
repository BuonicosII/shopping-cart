import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from "./components/navbar/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";

const Router = () => {
    const router = createBrowserRouter([
      {
        path: "/",
        element: <><NavBar /><div style={{height: "100vh"}}></div><Footer /></>,
      },
      {
        path: "router-test",
        element: <><NavBar />Hello Router Test<Footer /></>,
      },
    ]);
  
    return <RouterProvider router={router} />;
  };
  
  export default Router;