import Product from "./Product";
import Images from "./Images";
import Carousel from "./Carousel";

export default function Wrapper({
  cartCount,
  decrease,
  increase,
  onAddToCart,
  product,
  reset,
}) {
  return (
    <div className="md:px-12 sm:px-6 sm:py-8 md:gap-12 sm:gap-6 flex flex-col sm:flex-row justify-center items-center w-full">
      <Images />
      <Carousel />
      <Product
        count={cartCount}
        increase={increase}
        decrease={decrease}
        addToCart={onAddToCart}
        product={product}
        reset={reset}
      />
    </div>
  );
}
