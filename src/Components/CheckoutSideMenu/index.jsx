import { useContext } from "react";
import { ShoppingContext } from "../../Context";
import { OrdenCard } from "../OrderCard";
import './styles.css'

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingContext);

  const handleRemoveProduct = (productId) => {
    context.removeProductFromCart(productId);
  };
  const handleIncreaseQuantity = (productId) => {
    context.increaseProductQuantity(productId);
  };
  const handleDecreaseQuantity = (productId) => {
    context.decreaseProductQuantity(productId);
  };

  return (
    <aside
      className={`${
        context.isCheckoutSideMenuOpen ? "flex" : "hidden"
      } product-detail p-4 flex flex-col fixed right-0 border border-black rounded-lg bg-white z-10`}
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

      <div className="contentOrder" >
        {context.cartProducts.map((product) => (
          <OrdenCard
            key={product.id}
            title={product.title}
            imageUrl={product.image}
            price={product.price}
            quantity={product.quantity}
            onIncrease={() => handleIncreaseQuantity(product.id)}
            onDecrease={() => handleDecreaseQuantity(product.id)}
            onRemove={() => handleRemoveProduct(product.id)}
          />
        ))}
      </div>

      <div className="flex justify-between items-center h-16 text-black box-border px-3">
        <p className="text-2xl font-bold text-red-500">Total</p>
        <p className="text-2xl font-bold text-red-500">$999</p>
      </div>
    </aside>
  );
  
};

export { CheckoutSideMenu };
