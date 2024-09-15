import { createContext, useState } from "react";

export const ShoppingContext = createContext();

export const ShoppingContextProvider = ({ children }) => {
  // Shopping cart Increment Quantity
  const [count, setCount] = useState(0);
  console.log("Count", count);

  // Prodcut Detail Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  // Chekout Side Menu Open/Close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

  //Product Detail show product
  const [productToShow, setProductToShow] = useState({});

  // Shopping Cart add products to cart
  const [cartProducts, setCartProducts] = useState([]);

  // Función para incrementar la cantidad de un producto en particular
  const incrementQuantity = (productId) => {
    setCartProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const decrementQuantity = (productId) => {
    setCartProducts((prevProducts) =>
      prevProducts
        .map((product) =>
          product.id === productId
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
        .filter((product) => product.quantity > 0) // Filtrar productos con cantidad 0
    );
  };
  
    // Remove product
    const removeProductFromCart = (productId) => {
      setCartProducts(cartProducts.filter((product) => product.id !== productId));
    };

  return (
    <ShoppingContext.Provider
      value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        isCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        setIsCheckoutSideMenuOpen,
        removeProductFromCart,

        incrementQuantity,
        decrementQuantity,

      }}
    >
      {children}
    </ShoppingContext.Provider>
  );
};
