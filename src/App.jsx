import { useState } from "react";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";

const productData = {
  id: 1,
  name: "Fall Limited Edition Sneakers",
  price: 125.0,
  image: "/public/images/image-product-1-thumbnail.jpg",
  description: "These kicks are fire!",
};
export default function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      } else {
        return [...prev, { ...product }];
      }
    });
  };
  const deleteCart = () => {
    setCartItems([]);
  };
  return (
    <>
      <div>
        <Navbar items={cartItems} deleteCart={deleteCart} />
        <Wrapper onAddToCart={addToCart} />
      </div>
    </>
  );
}
