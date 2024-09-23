import { createContext, useState, useEffect } from "react";

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

  // Products from API
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch products from API
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

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
    setCartProducts(
      (prevProducts) =>
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

  // Search by title
  const [searchByTitle, setSearchByTitle] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter((item) =>
      item.title.toLowerCase().includes(searchByTitle.toLowerCase())
    );
  };

  const [searchByCategory, setSearchByCategory] = useState(null);
  const filteredItemsByCategory = (items, category) => {
    return items?.filter((item) => 
      item.category.toLowerCase().includes(category.toLowerCase())
    );
  }

  const filteredItemsByTitleAndCategory = (items, searchByTitle, searchByCategory) => {
    return items?.filter((item) => 
      (!searchByTitle || item.title.toLowerCase().includes(searchByTitle.toLowerCase())) &&
      (!searchByCategory || item.category.toLowerCase().includes(searchByCategory.toLowerCase()))
    );
  };

  useEffect(() => {
    if (searchByTitle || searchByCategory) {
      setFilteredItems(filteredItemsByTitleAndCategory(items, searchByTitle, searchByCategory));
    } else {
      setFilteredItems(items);
    }
  }, [items, searchByTitle, searchByCategory]);


  useEffect(() => {
    let updatedFilteredItems = items;
  
    if (searchByTitle) {
      updatedFilteredItems = filteredItemsByTitle(updatedFilteredItems, searchByTitle);
    }
    
    if (searchByCategory) {
      updatedFilteredItems = updatedFilteredItems.filter((item) => 
        item.category === searchByCategory
      );
    }
    
    setFilteredItems(updatedFilteredItems);
  }, [items, searchByTitle, searchByCategory]);
  

  console.log('filteredItems: ', filteredItems);

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
        setSearchByTitle,
        items,
        setItems,
        filteredItems,
        setFilteredItems,
        searchByCategory,
        setSearchByCategory,

      }}
    >
      {children}
    </ShoppingContext.Provider>
  );
};
