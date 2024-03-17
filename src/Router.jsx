import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from "./components/navbar/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";
import Slider from "./components/slider/Slider.jsx";
import Section from "./components/section/Section.jsx";
import Featured from "./components/featured/Featured.jsx";

import jeans from './assets/fabric.jpg'
import sewing from './assets/sewing.jpg'

const test = await fetch('https://fakestoreapi.com/products')
const sampleProducts = await test.json()
console.log(sampleProducts)

const Router = () => {
    const router = createBrowserRouter([
      {
        path: "/",
        element: <>
          <NavBar />
          <Slider />
          <Section imageUrl={jeans} order="left" heading="Only the best fabrics"/>
          <Section imageUrl={sewing} order="right" heading="Hand sewn in Italy"/>
          <Featured products={sampleProducts}/>
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