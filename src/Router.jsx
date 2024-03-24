import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import NavBar from "./components/navbar/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";
import Slider from "./components/slider/Slider.jsx";
import Section from "./components/section/Section.jsx";
import Featured from "./components/featured/Featured.jsx";
import Category from "./components/category/Category.jsx";
import Cart from "./components/cart/Cart.jsx";
import jeans from './assets/fabric.jpg'
import sewing from './assets/sewing.jpg'

const test = await fetch('https://fakestoreapi.com/products')
const sampleProducts = await test.json()
console.log(sampleProducts)

const Router = () => {

    const [cart, setCart ] = useState([]);

    function addToCart(product, quantity) {
      const newArray = cart.map( item => item)
      newArray.push({product: product, quantity: quantity})
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
        element: <><NavBar cart={cart}/><Category products={sampleProducts}/><Footer/></>,
      },
      {
        path: "/cart",
        element: <><NavBar cart={cart}/><Cart cart={cart}/></>
      }

    ]);
  
    return <RouterProvider router={router} />;
  };
  
  export default Router;