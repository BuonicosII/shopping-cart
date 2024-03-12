import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from "./components/navbar/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";
import Slider from "./components/slider/Slider.jsx";
import Section from "./components/section/Section.jsx";

const Router = () => {
    const router = createBrowserRouter([
      {
        path: "/",
        element: <>
          <NavBar />
          <Slider />
          <Section imageUrl="https://cdn.pixabay.com/photo/2020/07/11/16/16/jeans-5394561_1280.jpg" order="left" heading="Some Heading"/>
          <Section imageUrl="https://cdn.pixabay.com/photo/2020/07/11/16/16/jeans-5394561_1280.jpg" order="right" heading="Some Heading"/>
          <Footer />
          </>,
      },
      {
        path: "router-test",
        element: <><NavBar />Hello Router Test<Footer /></>,
      },
    ]);
  
    return <RouterProvider router={router} />;
  };
  
  export default Router;