import { useState } from "react";

export default function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Menu icon */}
      <div className="md:hidden" onClick={() => setOpen(true)}>
        <img src="/images/icon-menu.svg" alt="menu" />
      </div>

      {/* Overlay and side menu */}
      {open && (
        <div className="fixed inset-0 z-40">
          {/* Dark overlay */}
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={() => setOpen(false)}
          />

          {/* Side drawer */}
          <div className="absolute top-0 left-0 h-full w-60 bg-white z-50 px-6 pt-6 shadow-lg">
            {/* Close icon */}
            <div className="mb-10" onClick={() => setOpen(false)}>
              <img
                src="/images/icon-close.svg"
                alt="close"
                className="cursor-pointer"
              />
            </div>

            {/* Nav Links */}
            <ul className="flex flex-col text-lg space-y-4 text-[--color-bg-dark] font-bold">
              <li className="cursor-pointer">Collections</li>
              <li className="cursor-pointer">Men</li>
              <li className="cursor-pointer">Women</li>
              <li className="cursor-pointer">About</li>
              <li className="cursor-pointer">Contact</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
