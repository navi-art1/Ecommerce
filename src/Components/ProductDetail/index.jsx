import { useContext } from "react";
import { ShoppingContext } from "../../Context";
import { CSSTransition } from "react-transition-group";
import "./styles.css";

const ProductDetail = () => {
  const context = useContext(ShoppingContext);

  return (
    <CSSTransition
      in={context.isProductDetailOpen}
      timeout={300}
      classNames="product-detail"
      unmountOnExit
    >
      <aside
        className="product-detail p-4 flex flex-col fixed right-0 border border-black rounded-lg bg-white z-10"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-black font-bold">Detail</h2>

          <div
            className="w-6 h-6 bg-gray-800 rounded flex justify-center items-center cursor-pointer"
            onClick={() => context.closeProductDetail()}
          >
            <i className="fa-solid fa-x"></i>
          </div>
        </div>
        <figure className="shadow-lg rounded-xl bg-gray-100 flex justify-center items-center overflow-hidden">
          <img
            className="object-contain w-full h-full"
            src={context.productToShow.image}
            alt={context.productToShow.title}
          />
        </figure>

        <div className="mt-4">
          <p className="text-xl font-semibold text-black mb-2">
            ${context.productToShow.price}
          </p>
          <h3 className="text-lg font-bold text-gray-800 mb-2">
            {context.productToShow.title}
          </h3>
          <p className="text-sm text-gray-600">
            {context.productToShow.description}
          </p>
        </div>
      </aside>
    </CSSTransition>
  );
};

export { ProductDetail };
