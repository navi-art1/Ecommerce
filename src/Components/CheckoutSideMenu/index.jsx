import { useContext, useEffect } from "react";
import { ShoppingContext } from "../../Context";
import { OrdenCard } from "../OrderCard";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./styles.css";

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingContext);

  const handleRemoveProduct = (productId) => {
    context.removeProductFromCart(productId);
  };

  const handleIncreaseQuantity = (productId) => {
    context.incrementQuantity(productId);
  };

  const handleDecreaseQuantity = (productId) => {
    context.decrementQuantity(productId);
  };

  const handleCheckout = () => {
    const orderToAdd = {
      date: "01.02.23",
      product: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: calculateTotal().toFixed(2),
    };

    context.setOrder([...context.order, orderToAdd]);
    context.setCartProducts([]);
  };

  const calculateTotal = () => {
    return context.cartProducts.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  };

  useEffect(() => {
    if (context.cartProducts.length === 0) {
      context.closeCheckoutSideMenu();
    }
  }, [context.cartProducts]);

  return (
    <aside
      className={`checkout-side-menu ${
        context.isCheckoutSideMenuOpen ? "open" : ""
      } p-4 flex flex-col fixed right-0 border border-black rounded-lg bg-white z-40`}
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

      <TransitionGroup className="contentOrder">
        {context.cartProducts.map((product) => (
          <CSSTransition key={product.id} timeout={500} classNames="fade">
            <OrdenCard
              id={product.id}
              title={product.title}
              imageUrl={product.image}
              price={product.price.toFixed(2)}
              quantity={product.quantity}
              onIncrease={() => handleIncreaseQuantity(product.id)}
              onDecrease={() => handleDecreaseQuantity(product.id)}
              onRemove={() => handleRemoveProduct(product.id)}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>

      <div
        style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "auto" }}
        className="p-2"
      >
        <div className="flex items-center justify-between">
          <p className="text-2xl font-bold text-red-500">Total</p>
          <p className="text-2xl font-bold text-red-500">
            ${calculateTotal().toFixed(2)}
          </p>
        </div>

        <button className="button-checkout" onClick={handleCheckout}>
          Checkout
        </button>
      </div>
    </aside>
  );
};

export { CheckoutSideMenu };
