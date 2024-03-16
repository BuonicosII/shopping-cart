import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from "./components/navbar/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";
import Slider from "./components/slider/Slider.jsx";
import Section from "./components/section/Section.jsx";
import Card from "./components/card/Card.jsx";

import jeans from './assets/fabric.jpg'
import sewing from './assets/sewing.jpg'

const test = await fetch('https://fakestoreapi.com/products/1')
const sampleProduct = await test.json()
console.log(sampleProduct)

const Router = () => {
    const router = createBrowserRouter([
      {
        path: "/",
        element: <>
          <NavBar />
          <Slider />
          <Section imageUrl={jeans} order="left" heading="Only the best fabrics"/>
          <Section imageUrl={sewing} order="right" heading="Hand sewn in Italy"/>
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