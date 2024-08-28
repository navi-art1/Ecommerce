import React, { useState } from "react";

const OrdenCard = (props) => {
  const { title, imageUrl, price } = props;
  const [quantity, setQuantity] = useState(1); // Estado para el contador

  const shortenTitle = (title, maxLength) => {
    return title.length > maxLength
      ? title.substring(0, maxLength) + "..."
      : title;
  };

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="mb-3 flex h-24 rounded-lg bg-gray-100 shadow-md">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20 ml-3">
          <img
            className="w-full h-full rounded-lg"
            src={imageUrl}
            alt={title}
          />
        </figure>
      </div>

      <div className="w-full p-2 flex flex-col justify-center gap-1 text-black">
        <div className="flex justify-between items-center">
          <div className="w-60 h-12">
            <p className="text-mg">{shortenTitle(title, 50)}</p>
          </div>

          <i className="text-gray-600 cursor-pointer fas fa-trash"></i>
        </div>
        <div className="flex justify-between items-center">
          <div className="border-2 border-gray-300 flex flex-row w-18 h-6 items-center justify-center rounded-md">
            <button
              onClick={decrement}
              className="h-full w-6 bg-white flex items-center justify-center rounded-l-md"
            >
              <i className="text-xs fas fa-minus"></i>
            </button>

            <span className="h-full w-6 flex items-center justify-center bg-pink-100">
              {quantity}
            </span>

            <button
              onClick={increment}
              className="h-full w-6 bg-white flex items-center justify-center rounded-r-md"
            >
              <i className="text-xs fas fa-plus"></i>
            </button>
          </div>
          <p className="font-bold text-2xl text-red-400">
            ${price * quantity}
          </p>
        </div>
      </div>
    </div>
  );
};

export { OrdenCard };
