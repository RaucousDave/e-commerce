import { useState } from "react";
import Modal from "./Modal";
import Menu from "./Menu";

export default function Navbar({ items, cartCount, deleteCart }) {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen((open) => !open);
  };
  return (
    <div className="md:px-8 px-4 bg-[var(--color-white)]">
      <header className=" flex justify-between items-center py-4">
        <Menu />
        <div className="flex space-x-6 items-center">
          <div>
            <img src="/images/logo.svg" alt="logo" />
          </div>

          <ul className="hidden sm:flex text-sm space-x-4 text-[var(--color-text-muted)]">
            <li id="navlinks">Collections</li>
            <li id="navlinks">Men</li>
            <li id="navlinks">Women</li>
            <li id="navlinks">About</li>
            <li id="navlinks">Contact</li>
          </ul>
        </div>
        <div className="flex justify-between space-x-6 items-center cursor-pointer">
          <div className="relative" onClick={toggle}>
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill="#69707D"
                fillRule="nonzero"
                className="hover:fill-(--color-text-light)  transition "
              />
            </svg>{" "}
            {items.length > 0 && (
              <span className="px-3 py-0.5 rounded-lg absolute text-xs font-semibold -top-5 bg-(--color-brand) text-(--color-bg-dark)">
                {items.length}
              </span>
            )}
            {open && (
              <Modal items={items} count={cartCount} clearCart={deleteCart} />
            )}
          </div>
          <div className="w-12 h-12 border-2 transition border-transparent hover:border-(--color-brand) rounded-full cursor-pointer">
            <img src="/images/image-avatar.png" alt="" />
          </div>
        </div>
      </header>
      <hr className="text-[var(--color-text-light)]" />
    </div>
  );
}
