import { useContext } from "react";
import { ShoppingContext } from "../Context";

const Card = ({ data }) => {
  const context = useContext(ShoppingContext);

  const shortenTitle = (title, maxLength) => {
    return title.length > maxLength
      ? title.substring(0, maxLength) + "..."
      : title;
  };

  const showProduct = (productDetail) => {
    context.openProductDetail();
    context.setProductToShow(productDetail);
    context.closeCheckoutSideMenu();
  };

  const addProductsToCard = (event , productData) => {
    event.stopPropagation();
    context.setCount(context.count + 1);
    context.setCartProducts([...context.cartProducts, productData]);
    context.openCheckoutSideMenu();
    context.closeProductDetail();


  };

  return (
    <div className="w-60 border-2 border-white/15 flex flex-col items-center p-2 rounded-lg cursor-pointer">
      <figure
        className="w-full aspect-square rounded-lg relative"
        onClick={() => showProduct(data)}
      >
        <div className="flex justify-center items-center h-6 w-6 bg-white/80 rounded-full absolute top-2.5 right-2.5 cursor-pointer">
          <i className="fa-regular fa-heart text-[#f64461]/80 text-base"></i>
        </div>

        <img
          src={data.image}
          alt={data.title}
          className="w-full aspect-square rounded-lg"
        />
      </figure>

      <div className="w-[90%] flex flex-col justify-start mt-2 gap-1">
        <span className="font-bold">{shortenTitle(data.title, 18)}</span>

        <span className="text-xs text-white/80">
          {data.category.charAt(0).toUpperCase() + data.category.slice(1)}
        </span>

        <div className="flex justify-between w-full items-center">
          <span className="text-lg font-bold">${data.price}</span>

          <div
            className="bg-[#f64461] px-3 py-2 rounded gap-2 flex items-center cursor-pointer"
            onClick={(event) => addProductsToCard(event, data)}
          >
            <span className="text-xs">Add to Cart</span>
            <i className="fa-solid fa-cart-shopping text-xs"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Card };
