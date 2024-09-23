import { createContext, useState } from "react";

export const ShoppingContext = createContext();

export const ShoppingContextProvider = ({ children }) => {
  // Shopping cart count
  const [count, setCount] = useState(0);

  // Product Detail Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  // Checkout Side Menu Open/Close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

  // Show product details
  const [productToShow, setProductToShow] = useState({});

  // Shopping Cart products
  const [cartProducts, setCartProducts] = useState([]);

  // Increment product quantity in cart
  const incrementQuantity = (productId) => {
    setCartProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  // Decrement product quantity in cart
  const decrementQuantity = (productId) => {
    setCartProducts((prevProducts) =>
      prevProducts
        .map((product) =>
          product.id === productId
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
        .filter((product) => product.quantity > 0) // Remove products with quantity 0
    );
  };

  // Remove product from cart
  const removeProductFromCart = (productId) => {
    setCartProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );
  };

  // Orders
  const [order, setOrder] = useState([]);

  const [orderHistory, setOrderHistory] = useState([]); 

  // Gert Products

  const [searchByTitle, setSearchByTitle] = useState(null)
  console.log('text: ', searchByTitle)




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
        removeProductFromCart,
        incrementQuantity,
        decrementQuantity,
        order,
        setOrder,
        orderHistory,
        setOrderHistory,
        searchByTitle,
        setSearchByTitle
      }}
    >
      {children}
    </ShoppingContext.Provider>
  );
};
