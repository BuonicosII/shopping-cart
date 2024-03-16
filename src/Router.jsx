import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from "./components/navbar/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";
import Slider from "./components/slider/Slider.jsx";
import Section from "./components/section/Section.jsx";
import Card from "./components/card/Card.jsx";

const test = await fetch('https://fakestoreapi.com/products/1')
const sampleProduct = await test.json()

const Router = () => {
    const router = createBrowserRouter([
      {
        path: "/",
        element: <>
          <NavBar />
          <Slider />
          <Section imageUrl="https://cdn.pixabay.com/photo/2020/07/11/16/16/jeans-5394561_1280.jpg" order="left" heading="Only the best fabrics"/>
          <Section imageUrl="https://cdn.pixabay.com/photo/2017/06/27/17/32/sew-2448191_1280.jpg" order="right" heading="Hand sewn in Italy"/>
          <Card someObj={sampleProduct} />
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