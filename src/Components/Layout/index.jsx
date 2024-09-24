import { useLocation } from "react-router-dom";
import { ShoppingContext } from "../../Context";
import { useContext } from "react";
import "./styles.css";

const Layout = ({ children }) => {
  const location = useLocation(); 
  const context = useContext(ShoppingContext);

  // Función para determinar el título en base a la ruta actual
  const getCurrentPageTitle = () => {
    switch (location.pathname) {
      case "/electronics":
        return "Electronics";
      case "/men-clothing":
        return "Men Clothing";
      case "/women-clothing":
        return "Women Clothing";
      case "/jewelry":
        return "Jewelry";
      case "/my-account":
        return "My Account";
      case "/my-order":
        return "My Order";
      case "/":
        return "All Products";
      default:
        return null; // No mostrar título en la página de NotFound
    }
  };

  const pageTitle = getCurrentPageTitle();

  return (
    <div className="marginTop flex flex-col items-center py-5">
      {pageTitle && (
        <div className="page-title flex flex-col items-center text-center py-5 w-[99vw]">
          <h2 className="text-3xl font-bold mb-2">{pageTitle}</h2>
          <div className="underLine border-b-4 border-indigo-500 w-7/12"></div>

          <input
            className="input"
            type="text"
            placeholder="Find me"
            name="search" 
            onChange={
              (event)=>context.setSearchByTitle(event.target.value)

              
            }
          />
        </div>
      )}
      {children}{" "}
      {/* El contenido de cada página se renderiza después del título y el input */}
    </div>
  );
};

export { Layout };
