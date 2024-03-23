import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import NavBar from "./components/navbar/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";
import Slider from "./components/slider/Slider.jsx";
import Section from "./components/section/Section.jsx";
import Featured from "./components/featured/Featured.jsx";
import Category from "./components/category/Category.jsx";

import jeans from './assets/fabric.jpg'
import sewing from './assets/sewing.jpg'

const test = await fetch('https://fakestoreapi.com/products')
const sampleProducts = await test.json()
console.log(sampleProducts)

const Router = () => {

    const [cart, setCart ] = useState([]);

    function addToCart(product, quantity) {
      const newArray = cart.map( product => product)

      for (let i = 0; i < quantity; i++) {
        newArray.push(product)
      }

      setCart(newArray)
    }

    const router = createBrowserRouter([
      {
        path: "/",
        element: <>
          <NavBar cart={cart}/>
          <Slider />
          <Section imageUrl={jeans} order="left" heading="Only the best fabrics"/>
          <Section imageUrl={sewing} order="right" heading="Hand sewn in Italy"/>
          <Featured products={sampleProducts} fn={addToCart}/>
          <Footer fn={setCart}/>
          </>,
      },
      {
        path: "/:name",
        element: <><NavBar cart={cart}/><Category products={sampleProducts}/><Footer fn={setCart}/></>,
      },
    ]);
  
    return <RouterProvider router={router} />;
  };
  
  export default Router;