import { useContext } from "react";
import { ShoppingContext } from "../../Context";
import './styles.css'
import { OrdenCard } from "../OrderCard";

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingContext);
  console.log("Cart: ", context.cartProducts);

  console.log("Product To show", context.productToShow);

 
  return (
    <aside
      className={`${
        context.isCheckoutSideMenuOpen ? "flex" : "hidden"
      }  product-detail p-4 flex flex-col fixed right-0 border border-black rounded-lg bg-white z-10`}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-black font-bold">My Order</h2>

        <div
          className="w-6 h-6 bg-gray-800 rounded flex justify-center items-center cursor-pointer"
          onClick={() => context.closeCheckoutSideMenu()}
        >
          <i className="fa-solid fa-x"></i>
        </div>
      </div>
      {
        context.cartProducts.map((product)=>(
          <OrdenCard 
            key={product.id}
            title={product.title}
            imageUrl={product.image}
            price = {product.price}
          />
        ))
      }



    </aside>
  );
};

export { CheckoutSideMenu };
