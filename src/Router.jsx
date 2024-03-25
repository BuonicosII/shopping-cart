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

      //check if the item is already in the cart
      let itemIndex = newArray.findIndex( element => element.product.id === product.id)

      if (itemIndex !== -1) {
        newArray[itemIndex].quantity = newArray[itemIndex].quantity + quantity
        setCart(newArray)
      } else {
        newArray.push({product: product, quantity: quantity})
        setCart(newArray)
      }
    }

    function removeFromCart(product, quantity) {
      const newArray = cart.map(item => item)

      //check if the item is already in the cart
      let itemIndex = newArray.findIndex( element => element.product.id === product.id)

      if (itemIndex !== -1) {
        newArray[itemIndex].quantity = newArray[itemIndex].quantity - quantity
        if (newArray[itemIndex].quantity <= 0) {
          newArray.splice(newArray[itemIndex], 1)
          setCart(newArray)
        } else {
          setCart(newArray)
        }
      }
    } 

    const router = createBrowserRouter([
      {
        path: "/",
        element: <>
          <NavBar cart={cart}/>
          <Slider />
          <Section imageUrl={jeans} order="left" heading="Only the best fabrics"/>
          <Section imageUrl={sewing} order="right" heading="Hand sewn in Italy"/>
          <Featured products={sampleProducts} callback={addToCart}/>
          <Footer />
          </>,
      },
      {
        path: "/:name",
        element: <><NavBar cart={cart}/><Category products={sampleProducts} callback={addToCart}/><Footer/></>,
      },
      {
        path: "/cart",
        element: <><NavBar cart={cart}/><Cart cart={cart} fns={[addToCart, removeFromCart]}/></>
      }

    ]);
  
    return <RouterProvider router={router} />;
  }
  
  export default Router;