export default function Modal({ items, clearCart }) {
  return (
    <div
      className={`
        bg-(--color-white) shadow-2xl px-6 
        z-10 h-60 sm:absolute sm:top-8 sm:right-0 sm:w-70 
        fixed sm:translate-x-0 sm:translate-y-0 
        top-1/2 left-1/2 w-11/12 max-w-sm 
        -translate-x-1/2 -translate-y-1/2 
        rounded-lg
      `}
    >
      <div className="py-4">
        <h6 className="text-[--color-bg-dark] font-semibold">Cart</h6>
      </div>
      <hr />
      {items.length === 0 ? (
        <div className="flex h-[80%] items-center justify-center">
          <p className="text-[--color-text-light]">Your cart is empty.</p>
        </div>
      ) : (
        <div className="gap-4 py-4 h-[60%]">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex text-[--color-text-light] text-sm justify-between items-center mb-12"
            >
              <div className="w-12 h-12">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="flex flex-col gap-0.5 flex-grow px-2">
                <div>{item.name}</div>
                <div className="flex gap-1">
                  <p>${item.price.toFixed(2)}</p>
                  <span>X</span>
                  <p>{item.quantity}</p>
                  <p className="text-[--color-bg-dark] font-medium">
                    ${item.price * item.quantity}
                  </p>
                </div>
              </div>
              <div onClick={clearCart} className="cursor-pointer">
                <img src="/images/icon-delete.svg" alt="Delete" />
              </div>
            </div>
          ))}
          <button
            className="bg-(--color-brand) w-full py-3 rounded-lg text-(--color-bg-dark) font-semibold"
            onClick={clearCart}
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
}
