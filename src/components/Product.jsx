import { useState } from "react";

export default function Copy({ addToCart }) {
  const [count, setCount] = useState(0);
  const decrease = () => {
    setCount((c) => Math.max(c - 1, 0));
  };
  const increase = () => {
    setCount(count + 1);
  };

  const handleAddToCart = () => {
    if (count > 0) {
      const product = {
        id: 1,
        name: "Fall Limited Edition Sneakers",
        price: 125.0,
        image: "/images/image-product-1.jpg",
        quantity: count,
      };
      setCount(0);
      addToCart(product);
    }
  };
  return (
    <>
      <div className="flex flex-col w-full px-4 py-6 sm:py-2 sm:px-0 sm:w-[40%] justify-center ">
        <h3 className="text-[var(--color-text-muted)] text-sm font-semibold tracking-widest mb-1">
          SNEAKER COMPANY
        </h3>
        <h1 className="text-4xl text-[var(--color-bg-dark)] font-bold mb-4">
          Fall Limited Edition <br /> Sneakers
        </h1>
        <p className="text-[var(--color-text-muted)] mb-2">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div className="sm:flex-col flex justify-between items-baseline gap-4 flex-row">
          <div className="flex gap-4 items-baseline mb-1">
            <h4 className="text-[var(--color-bg-dark)] font-semibold text-2xl">
              $125.00
            </h4>
            <div className="bg-[var(--color-bg-dark)] px-3 h-7 flex items-center rounded-lg">
              <p className=" text-[var(--color-white)] text-base font-semibold">
                50%
              </p>
            </div>
          </div>
          <p className="text-[var(--color-text-muted)] text-sm mb-4 line-through">
            $250
          </p>
        </div>
        <div className="flex gap-4 sm:flex-row flex-col">
          <div className="flex sm:w-[40%] w-full justify-around items-center rounded-lg gap-5 bg-[var(--color-bg-light)] py-3">
            <div className="cursor-pointer" onClick={decrease}>
              <img src="/images/icon-minus.svg" alt="" />
            </div>
            <p className="text-[var(--color-bg-dark)] font-semibold">{count}</p>
            <div className="cursor-pointer" onClick={increase}>
              <img src="/images/icon-plus.svg" alt="" />
            </div>
          </div>
          <button
            disabled={count === 0}
            className={`flex gap-1 font-semibold ${
              count === 0
                ? "opacity-50 bg-[var(--color-brand)] cursor-not-allowed"
                : "bg-[var(--color-brand)]"
            }  text-[var(--color-bg-dark)] w-full sm:w-[60%] py-3 items-center justify-center rounded-lg text-sm hover:bg-[hsl(26,100%,75%)] cursor-pointer transition`}
            onClick={handleAddToCart}
          >
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill="hsl(220, 13%, 13%)"
                className="text-xs"
                fillRule="nonzero"
              />
            </svg>{" "}
            Add To Cart
          </button>
        </div>
      </div>
    </>
  );
}
